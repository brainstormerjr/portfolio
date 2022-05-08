<template>
  <div :class="`blog-item ${color}`">
    <div class="image-container">
      <!-- <img src="../assets/projectImage.png"> -->
      <slot name="img" />
    </div>
    <div class="text-container">
      <div class="blog-title">{{ title }}</div>
      <div class="blog-description">{{ description }}</div>
      <div class="blog-description">{{ date }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    date: String,
    color: String,
  },
  setup(props) {

    return { }
  },
}
</script>

<style>

.blog-item {
  height: 25vw;
  padding: 1.5vw;
  padding-bottom: 0.5vw;
  border-radius: 1vw;
  margin: 1vw;
  flex-basis: 25vw;
  transition-duration: 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  /* border: 0.5vw solid; */
  background: #eee;
}

.blog-item:hover {
  cursor: pointer;
  color: var(--background-color);
}

.blog-item .blog-title {
  font-size: 1.75vw;
  font-weight: bold;
  margin: 0.5vw;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.blog-item .image-container {
  width: 80%;
  height: auto;
}

.image-container img {
  margin: 0px auto;
  width: 100%;
  height: auto;
  object-fit: scale-down;
  border-radius: 1vw;
  border-width: 0.5vw;
  border-style: solid;
}

.blog-item .text-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 12vw;
}

.blog-item .blog-description {
  font-weight: normal;
  font-size: 1vw;
  margin: 0.5vw;
}

@media (orientation: portrait) {
  .blog-item {
    flex-basis: 80vw;
    height: 80vw;
  }

  .image-container img {
    border-width: 1.5vw !important;
  }

  .blog-item .text-container {
    height: 38vw;
  }

  .blog-item .blog-title {
    font-size: 6vw;
  }

  .blog-item .blog-description {
    font-size: 4vw;
  }
}

.purple img{
    border-color: var(--purple);
}

.blog-item.purple:hover , .purple.filter-active {
  background: var(--purple);
}

.green img{
  border-color: var(--green);
}

.blog-item.green:hover , .green.filter-active {
  background: var(--green);
}

.blue img{
  border-color: var(--blue);
}

.blog-item.blue:hover , .blue.filter-active {
  background: var(--blue);
}

.pink img{
  border-color: var(--pink);
}

.blog-item.pink:hover , .pink.filter-active {
  background: var(--pink);
}

.orange img{
  border-color: var(--orange);
}

.blog-item.orange:hover , .orange.filter-active {
  background: var(--orange);
}
.grey img{
  border-color: var(--grey);
}

.blog-item.grey:hover , .grey.filter-active {
  background: var(--grey);
}

</style>