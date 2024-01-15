<template>
  <div :class="`project-item ${color}`">
    <div class="image-container">
      <!-- <img src="../assets/projectImage.png"> -->
      <slot name="img" />
    </div>
    <div>{{ title }}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    color: String,
  },
  setup(props) {

    return { }
  },
}
</script>

<style lang="scss">

@import '../main.scss';

.project-item {
  width: 30vw;
  height: 17vw;
  padding: 1.5vw;
  border-radius: 2vw;
  margin: 1vw;
  flex-basis: 25vw;
  transition-duration: 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  /* border: 0.5vw solid; */
  background: $alt-color;
}

.project-item:hover {
  cursor: pointer;
  color: var(--background-color);
}

.project-item div {
  font-size: 1.75vw;
  font-weight: bold;
  margin: 0.5vw;
  height: 5vw;
  display: flex;
  align-items: center;
  justify-content: center;
}

.project-item .image-container {
  width: 80%;
  height: auto;
}

.image-container img {
  margin: 0px auto;
  width: 100%;
  height: auto;
  object-fit: scale-down;
  border-radius: 3vw;
  border-width: 0.5vw;
  border-style: solid;
}

@media (orientation: portrait) {
  .project-item {
    flex-basis: 80vw;
    height: 65vw;
    border-radius: 3vw;
  }

  .image-container img {
    border-width: 1.5vw !important;
  }

  .project-item div {
    margin-top: 5vw;
    font-size: 6vw;
  }
}

.purple img{
    border-color: var(--purple);
}

.project-item.purple:hover , .purple.filter-active {
  background: var(--purple);
}

.green img{
  border-color: var(--green);
}

.project-item.green:hover , .green.filter-active {
  background: var(--green);
}

.blue img{
  border-color: var(--blue);
}

.project-item.blue:hover , .blue.filter-active {
  background: var(--blue);
}

.pink img{
  border-color: var(--pink);
}

.project-item.pink:hover , .pink.filter-active {
  background: var(--pink);
}

.orange img{
  border-color: var(--orange);
}

.project-item.orange:hover , .orange.filter-active {
  background: var(--orange);
}
.grey img{
  border-color: var(--grey);
}

.project-item.grey:hover , .grey.filter-active {
  background: var(--grey);
}

</style>