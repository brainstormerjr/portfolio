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
      "Python",
      "Vue",
      "Javascript",
      "Processing",
      "Unity",
    ]

    const filter = ref({
      P5: true,
      Python: true, 
      Vue: true,
      Javascript: true,
      Processing: true,
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


<style>

.filter-buttons-container {
  position: sticky;
  top: 4.85vw;
  background: #eee;
  padding: 1vw 0vw;
  border-bottom: 0.4vw solid var(--accent-color);
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
  border-color: #eee;
}

.filter-button:hover {
  cursor: pointer;
  border-color: var(--accent-color);
}

.filter-button.filter-active {
  color: var(--background-color);
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