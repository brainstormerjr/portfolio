<template>

<div :class="flipped ? 'content flipped' : 'content'">

  <div class="image-container">
    <slot name="img" />
  </div>

  <div class="text-container">
    <slot />
  </div>

</div>
  
</template>

<script>
export default {
  props: {
    flipped: Boolean,
    img: String,
  },
  setup(props) {
    return { props }
  },
}
</script>

<style lang="scss">

@import '../main.scss';

.content {
  padding: 2em 0.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 0.5vw dashed $hl-color;
}

.content.flipped {
  flex-direction: row-reverse;
}

.about .content .image-container {
  flex-basis: 45%;
}

.about .content .text-container {
  flex-basis: 45%;
}

.about .content img {
  margin: 0px auto;
  width: 100%;
  height: auto;
  object-fit: scale-down;
  border-radius: 3vw;
  border: 0.5vw solid $hl-color;
}

p {
  font-weight: bold;
}

p, ul {
  font-size: 1.5vw;
  margin: 0;
}

ul ul {
  margin-left: 5%;
}

.about .content p, ul {
  padding: 0.5em 0.5em;
  margin: 0px auto;
  text-align: left;
  width: 80%;
}

ul {
  margin-left: 15%;
}

@media (orientation: portrait) {
  .content, .content.flipped {
    flex-direction: column;
  }

  .about .content img {
    width: 90%;
  }

  p, ul {
    font-size: 5vw;
  }
}

</style>