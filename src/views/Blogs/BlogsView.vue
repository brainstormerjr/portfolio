<template>
  <div>
  
  <h2>Blogs</h2>

  <div class="filter-buttons-container">
    
    <button v-for="type in types" :key="type"
    @click="filter[type] = !filter[type]"
    :class="filter[type] ? 
    `filter-button ${colorMap[type]} filter-active` : 
    `filter-button ${colorMap[type]}`">
    {{ type }}</button>
  </div>

  <transition-group tag="div" name="blogs" appear class="blogs-container">
    <BlogItem 
    v-for="blog in filteredBlogs" :key="blog.title" 
    :title="blog.title" :description="blog.snippet" :date="blog.date"
    :color="colorMap[blog.type]"
    @click="loadBlog(blog.id)">
      <template v-slot:img>
        <img :src="require(`../../assets/blogImages/${blog.img}`)">
      </template>
    </BlogItem>
    <p v-if="filteredBlogs.length == 0">
      There are no blogs ¯\_(ツ)_/¯
      <br>
      Check the blog filters!
    </p>
  </transition-group>

  </div>
</template>

<script>
import projectData from '@/assets/blogs.json'
import BlogItem from '@/components/BlogItem.vue'
import { useRouter } from 'vue-router'
import { ref, computed } from 'vue'

export default {
  components: { BlogItem },
  setup() {

    const router = useRouter()

    const types = [
      "Lifestyle",
      "Technology",
      "Science",
      "Business"
    ]

    const filter = ref({
      Lifestyle: true,
      Technology: true,
      Science: true,
      Business: true
    })

    const filteredBlogs = computed(() => {
      let p = projectData.blogs
      p = p.filter(item => {
        return filter.value[item.type]
      })
      return p
    })

    const colorMap = projectData.colorMap;

    const loadBlog = (id) => {
      router.push({ name: "blogDetails", params: { id }})
    }

    return { types, filter, filteredBlogs, colorMap, loadBlog }
  }
}

</script>


<style scoped lang="scss">

@import '../../main.scss';

.filter-buttons-container {
  position: sticky;
  top: 4.85vw;
  background: $alt-color;
  padding: 1vw 0vw;
  border-bottom: 0.4vw solid $acc-color;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.filter-button {
  width: 12vw;
  height: 3vw;
  font-size: 1.25vw;
  font-weight: bold;
  border-width: 0.3vw;
  border-style: solid;
  border-radius: 10vw;
  transition-duration: 0.3s;
  margin: 0vw 0.75vw;
  border-color: $alt-color;

  &:hover {
    cursor: pointer;
    border-color: $text-color;
  }

  &.filter-active {
    color: $white;
  }

  color: $text-color;
}

.blogs-container {

  display: flex;
  margin: 1vw 0.5vw;
  margin-bottom: 5vw;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  position: relative;

}

@media (orientation: portrait) {
  .filter-buttons-container {
    top: 15.8vw;
    border-bottom-width: 1vw;
  }

  .filter-button {
    width: 30vw;
    height: 10vw;
    font-size: 3.5vw;
    margin-top: 1vw;
    margin-bottom: 1vw;
  }

  .filter-button:hover {
    border-width: 1vw;
  }
}

.blogs-enter-from {
  opacity: 0;
  transform: scale(0.4);
}

.blogs-enter-active {
  transition: all 0.3s ease;
}

.blogs-leave-to {
  opacity: 0;
  transform: scale(0.4);
}

.blogs-leave-active {
  transition: all 0.3s ease;
  position: absolute;
}

.blogs-move-active {
  transition: all 0.3s ease;
}

</style>