<template>
  <div>
  
  <h2>Projects</h2>

  <div class="filter-buttons-container">
    
    <button v-for="type in types" :key="type"
    @click="filter[type] = !filter[type]"
    :class="filter[type] ? 
    `filter-button ${colorMap[type]} filter-active` : 
    `filter-button ${colorMap[type]}`">
    {{ type }}</button>
  </div>

  <transition-group tag="div" name="projects" appear class="projects-container">
    <ProjectItem 
    v-for="project in filteredProjects" :key="project.name" 
    :title="project.name" :color="colorMap[project.type]"
    @click="loadProject(project.id)">
      <template v-slot:img>
        <img :src="require(`../../assets/projectImages/${project.img}`)">
      </template>
    </ProjectItem>
    <p v-if="filteredProjects.length == 0">
      There are no projects ¯\_(ツ)_/¯
      <br>
      Check the project filters!
    </p>
  </transition-group>

  </div>
</template>

<script>
import projectData from '@/assets/projects.json'
import ProjectItem from '@/components/ProjectItem.vue'
import { useRouter } from 'vue-router'
import { ref, computed } from 'vue'

export default {
  components: { ProjectItem },
  setup() {

    const router = useRouter()

    const types = [
      "P5",
      "Flutter",
      "Node",
      "Javascript",
      "Python",
      "Unity",
    ]

    const filter = ref({
      P5: true,
      Python: true, 
      Node: true,
      Javascript: true,
      Flutter: true,
      Unity: true,
    })

    const filteredProjects = computed(() => {
      let p = projectData.projects
      p = p.filter(item => {
        return filter.value[item.type]
      })
      return p
    })

    const colorMap = projectData.colorMap;

    const loadProject = (id) => {
      router.push({ name: "projectDetails", params: { id }})
    }

    return { types, filter, filteredProjects, colorMap, loadProject }
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

.projects-container {

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

.projects-enter-from {
  opacity: 0;
  transform: scale(0.4);
}

.projects-enter-active {
  transition: all 0.3s ease;
}

.projects-leave-to {
  opacity: 0;
  transform: scale(0.4);
}

.projects-leave-active {
  transition: all 0.3s ease;
  position: absolute;
}

.projects-move-active {
  transition: all 0.3s ease;
}

</style>