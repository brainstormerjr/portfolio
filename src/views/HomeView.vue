<template>
  <div class="home">
    <h1>
      Harold Kwan
      <h2>The website of the big brain genius</h2>
    </h1>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: { }
}
</script>

<style lang="scss">

@import '../main.scss';

.home h1{
  background: $acc-color;
  color: $white;
  margin-top: 4.5vw;
  padding: .5em;
}

h1 h2 {
  font-size: 0.25em;
}

</style>
