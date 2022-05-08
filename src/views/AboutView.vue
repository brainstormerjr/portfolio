<template>
  <div class="about">
    <h2>About Me</h2>
    <ImageTextFlex :flipped="false">
      <template v-slot:img>
        <img src="../assets/thisGuy.png">
      </template>
      <p>Who am I? Oh where to begin. I am a:</p>
      <ul>
        <li>Programmer</li>
        <li>Designer</li>
        <li>Artist</li>
        <li>Innovator</li>
        <li>Entrepeneur</li>
        <li>Philosopher</li>
        <li>Free thinker</li>
        <li>Child prodigy</li>
        <li>Big brain genius</li>
        <li>Horny teenager</li>
      </ul>
      <p>
        I am a human male. I enjoy human things such as processing glucose and
        consuming large amounts of water.
        <br>
        <br>
        I do lots of stuff. I make stuff, and make more stuff, and then
        I make stuff about the stuff I made. When I run out of stuff to
        make, I just make more stuff. And then keep making stuff. Forever.
      </p>
    </ImageTextFlex>
    <ImageTextFlex :flipped="true">
      <template v-slot:img>
        <img src="../assets/tools.png">
      </template>
      <p>Here are all the things I can do:</p>
      <ul>
        <li>Use the following tools to a reasonable proficiency:</li>
        <ul>
          <li>Unity / C#</li>
          <li>JavaScript</li>
          <li>Processing (Vanilla, P5 and Vue)</li>
          <li>Python</li>
        </ul>
        <li>Play around with these:</li>
        <ul>
          <li>Firebase</li>
          <li>Tensorflow</li>
          <li>Blender</li>
          <li>Procreate</li>
          <li>Final Cut Pro X</li>
        </ul>
      </ul>
      <p>And I am still learning more!</p>
    </ImageTextFlex>
  </div>
</template>

<script>
import ImageTextFlex from '@/components/ImageTextFlex.vue'

export default({
  components: { ImageTextFlex },
  setup() {
    
  },
})
</script>


<style>

</style>
