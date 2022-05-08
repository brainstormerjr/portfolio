<template>
<div>
  <div class="image-container">
    <img :src="require(`../../assets/projectImages/${project.img}`)"
    :class="color">
  </div>
  <h1>{{ project.name }}</h1>
  <div class="project-content">
    <p>
      Technologies used:
      <ul>
        <li v-for="t in project.info.technologies" :key="t">{{ t }}</li>
      </ul>
      <br>
      {{ project.info.description }}
    </p>

    <div class="project-box">

      <div class="project-buttons">
        <div class="button" v-if="project.info.video"
        @click="openInNewTab(project.info.video)">
          Project video
        </div>

        <div class="button" v-if="project.info.website"
        @click="openInNewTab(project.info.website)">
          Project website
        </div>

        <div class="button" v-if="project.info.onlineEditor"
        @click="openInNewTab(project.info.onlineEditor)">
          Online editor
        </div>

        <div class="button" v-if="project.info.github"
        @click="openInNewTab(project.info.github)">
          Github repository
        </div>

        <div class="button" v-if="project.info.browser"
        @click="openInNewTab(project.info.browser)">
          Play in browser
        </div>

        <div class="button" v-if="project.info.downloadProduct"
        @click="openInNewTab(project.info.downloadProduct)">
          Download product
        </div>
      </div>

      <p v-if="project.info.resources">
          Resources:
          <br>
          <ul>
            <li v-for="resource in project.info.resources" :key="resource.name">
              <a :href="resource.link" target="_blank">{{ resource.name }}</a>
            </li>
          </ul>
        </p>
    </div>
  </div>
</div>
</template>

<script>
import { useRoute } from 'vue-router'
import projectData from '@/assets/projects.json'

export default {
  setup() {
    const route = useRoute()

    let project = projectData.projects[0]
    for (let p of projectData.projects) {
      if (p.id == route.params.id) {
        project = p
        break
      }
    }

    const color = projectData.colorMap[project.type]

    const openInNewTab = (url) => {
      window.open(url, '_blank')
    }

    return { project, color, openInNewTab }
  }
}
</script>

<style scoped>

h1 {
  margin: 0vw;
}

.image-container {
  width: 100%;
  height: auto;
  justify-self: center;
  margin-top: 6vw;
}

.image-container img {
  margin: 0px auto;
  width: 65%;
  height: auto;
  object-fit: scale-down;
  border-radius: 3vw;
  border-width: 1vw;
  border-style: solid;
}

.project-content {
  display: flex;
  margin-top: 3vw;
  background: #eee;
  padding: 5vw 0vw;
}

p {
  margin-left: 10vw;
  margin-right:5vw;
  text-align: left;
  flex-basis: 50vw;
  line-height: 3vw;
}

.project-box p {
  text-align: center;
  margin: 2vw 0vw;
  font-size: 2vw;
  flex-basis: 0vw;
}

.project-box p ul {
  text-align: center;
  list-style-type: none;
}

a {
  text-decoration-thickness: 0.15vw;
  color: inherit;
  font-size: 1.5vw;
}

p ul {
  font-weight: normal;
  margin-left: 3vw;
  line-height: 2.5vw;
}

.project-box {
  background: #fff;
  flex-basis: 45vw;
  height: auto;
  margin: auto 2vw;
  border-radius: 3vw;
  padding: 1vw;
  font-size: 1.5vw;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* max-height: 10vw; */
}

.project-box .button {
  width: 17vw;
  height: 4vw;
  margin: 0.5vw auto;
  border-radius: 3vw;
  border: 0.4vw solid var(--highlight-color);
  color: var(--highlight-color);
  transition-duration: 0.3s;
  font-size: 1.5vw;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--background-color);
}

.project-box .button:hover {
  background: var(--highlight-color);
  color: var(--background-color);
  cursor: pointer;
}

.project-buttons {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 2vw 0vw;
  height: auto;
}

@media (orientation: portrait) {

  .image-container {
    margin-top: 20vw;
  }

  .image-container img {
    width: 90%;
  }

  .project-content {
    flex-direction: column;
    width: 100% !important;
  }

  h1 {
    margin-top: 3vw !important;
    font-size: 15vw;
  }

  .project-content {
    width: 90%;
  }

  p , a, li, .project-box p {
    font-size: 4vw;
    width: 85%;
    line-height: 8vw;
    font-weight: normal;
  }

  .project-box p, .project-box li {
    margin-left: auto;
    margin-right: auto;
    padding: 1vw 1vw;
  }

  .project-box {
    margin-top: 10vw;
    width: 80%;
    flex-basis: initial;
    align-self: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .project-buttons {
    height: auto;
    padding-top: 4vw;
    padding-bottom: 4vw;
  }

  .project-box .button {
    width: 90%;
    height: 10vw;
    font-size: 4vw;
    border-width: 1vw;
    border-radius: 10vw;
  }
}

.purple {
  border-color: var(--purple);
}
.green {
  border-color: var(--green);
}
.blue {
  border-color: var(--blue);
}
.pink {
  border-color: var(--pink);
}
.orange {
  border-color: var(--orange);
}
.grey {
  border-color: var(--grey);
}

</style>