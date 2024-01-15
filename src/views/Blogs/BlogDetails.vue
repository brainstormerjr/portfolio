<template>
<div>
  <div class="image-container">
    <img :src="require(`../../assets/blogImages/${blog.img}`)"
    :class="color">
  </div>
  <h1>{{ blog.title }}</h1>
  <h3>{{ blog.snippet }}</h3>
  <h4>{{ blog.date }}</h4>
  <h5 :class="color">{{ blog.type }}</h5>
  <div class="blog-content">
    <!-- <p>
      <span v-for="(paragraph, index) in blog.content.paragraphs" :key="index">
        {{ paragraph.text }}
        <div class="image-container inline" v-if="paragraph.img">
          <img :src="require(`../../assets/blogImages/${paragraph.img}`)">
        </div>
        <span v-else>
          <br>
          <br>
        </span>
      </span>
      <br>
      <br>
      <div v-if="blog.content.links" class="links">
        Links mentioned in this blog:
        <ul>
          <li v-for="link in blog.content.links" :key="link.name">
            <a :href="link.link" target="_blank">{{ link.name }}</a>
          </li>
        </ul>
      </div>
    </p> -->
    <p v-html="content" />
  </div>
</div>
</template>

<script>
import { useRoute } from 'vue-router'
import blogData from '@/assets/blogs.json'
import text from 'raw-loader!@/assets/blogs.txt'

export default {
  setup() {
    const route = useRoute()

    let blog = blogData.blogs[0]
    for (let b of blogData.blogs) {
      if (b.id == route.params.id) {
        blog = b
        break
      }
    }

    const color = blogData.colorMap[blog.type]

    const splitText = text.split('\n')

    let currentText = ""

    let content = ''
    let links = []

    let startingIndex = splitText.indexOf(`#BLOGSTART ${blog.id}`) + 1

    for (let i = startingIndex; i < splitText.length; i++) {
      if (splitText[i] === '#BLOGEND') break
      if (splitText[i] == '') continue
      if (splitText[i][0] === '#') {
        currentText = splitText[i].slice(1)
        if (currentText === 'LINEBREAK') {
          content += '<br>'
        }
        continue
      }
      if (currentText === 'PARAGRAPH') {
        content += splitText[i]
        continue
      }
      if (currentText === 'IMAGE') {
        // let img = require(`../../src/assets/blogImages/${splitText[i]}`)
        content += `
          <div class="image-container inline">
            <img src='blogImages/${splitText[i]}'>
          </div>
        `
        continue
      }
      if (currentText === 'LINK') {
        let name = splitText[i]
        let link = splitText[i + 1]
        i++
        links.push({ name, link })
        continue
      }
    }

    if (links.length > 0) {
      content += `<div v-if="blog.content.links" class="links">
        Links relevant to this blog:
        <ul>
      `
      for (let i = 0; i < links.length; i++) {
        content += 
        `
        <li>
        <a href="${links[i].link}" target="_blank">${links[i].name}</a>
        </li>
        `
      }

      content += `
        </ul>
      </div>
      `
    }

    const openInNewTab = (url) => {
      window.open(url, '_blank')
    }

    return { blog, color, openInNewTab, content }
  }
}
</script>

<style scoped lang="scss">

@import '../../main.scss';

h1 {
  margin: 0vw;
}

h3 {
  font-size: 2vw;
}

h4, h5 {
  font-weight: normal;
  font-size: 1.5vw;
}

h5 {
  font-weight: normal;
  font-size: 1.5vw;
  border-radius: 3vw;
  border-width: 0.5vw;
  border-style: solid;
  margin-right: 40vw;
  margin-left: 40vw;
  padding-left:2vw;
  padding-right:2vw;
  padding-top: 1vw;
  padding-bottom: 1vw;
}

.image-container, .blog-content :deep() .image-container {
  width: 100%;
  display: flex;
  height: auto;
  justify-self: center;
  margin-top: 6vw;
}

.image-container.inline, .blog-content :deep() .image-container.inline {
  width: 100%;
  margin: 3vw 0vw;
  justify-content: center;
}

.image-container img, .blog-content :deep() .image-container img {
  margin: 0px auto;
  width: 65%;
  height: auto;
  object-fit: scale-down;
  border-radius: 3vw;
  border-width: 1vw;
  border-style: solid;
}

.image-container.inline img, .blog-content :deep() .image-container.inline img {
  border: none;
  border-radius: 1vw;
  width: 90%;
}

.blog-content {
  display: flex;
  flex-direction: column;
  margin: 3vw auto;
  width: 80%;
  background: $alt-color;
  padding: 5vw 0vw;
  border-radius: 5vw;
}

p, .blog-content :deep() p {
  margin: 3vw auto;
  text-align: left;
  width: 70%;
  text-align: justify;
  line-height: 3vw;
  font-weight: normal;
}

.links, .blog-content :deep() .links {
  padding: 4vw;
  background: $bg-color;
  border-radius: 4vw;
}

a, .blog-content :deep() a {
  text-decoration-thickness: 0.15vw;
  color: inherit;
  font-size: 1.5vw;
}

@media (orientation: portrait) {

  .image-container, .blog-content :deep() .image-container {
    margin-top: 20vw;
  }

  .image-container img, .blog-content :deep() .image-container img {
    width: 90%;
  }

  h1, .blog-content :deep() h1 {
    font-size: 15vw;
  }

  h3, .blog-content :deep() h3 {
    font-size: 5vw;
  }

  h4, .blog-content :deep() h4, h5,  .blog-content :deep() h5{
    font-size: 4vw;
  }

  .blog-content, .blog-content :deep() .blog-content {
    width: 90%;
  }

  p , a,
  .blog-content :deep() p,
  .blog-content :deep() a {
    font-size: 4vw;
    width: 85%;
    line-height: 8vw;
    font-weight: normal;
  }

  .image-container.inline,
  .blog-content :deep() .image-container.inline {
    margin: 10vw 0vw;
  }

  .image-container.inline img,
  .blog-content :deep() .image-container.inline img {
    width: 100%
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