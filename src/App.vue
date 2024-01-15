<template>
  <nav>
    <router-link :to="{ name: 'home' }">Home</router-link>
    <router-link :to="{ name: 'about' }">About</router-link>
    <router-link :to="{ name: 'projects' }">Projects</router-link>
    <router-link :to="{ name: 'blogs' }">Blogs</router-link>
  </nav>

  <router-view v-slot="{ Component }">
    <transition name="route" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>

  <footer>
    <!-- <p>Harold Kwan® 2022© All rights reserved.</p> -->
  </footer>

</template>

<script>

export default {
  setup() {
  },
}

</script>

<style lang="scss">

@import './main.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $text-color;
}

nav {
  padding: 0px;
  height: 4.5vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: $hl-color;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  border-bottom: 0.4vw solid $acc-color;
  z-index: 10;
}

nav a {
  font-size: 1.2vw;
  font-weight: bold;
  text-decoration: none;
  color: hsl(210, 29%, 24%);
  padding: 0.8vw 3.5vw;
  background: hsl(0, 2%, 91%);
  border: none;
  margin: 0vw 0.5vw;
  height: 1.4vw;
  line-height: 1.4vw;
  border-radius: 1vw;
  float: left;
  display: block;
  transition-duration: 0.3s;
  min-width: 8vw;

  &:hover {
    background: hsl(263, 80%, 90%);
    border-radius: 0.3vw;
  }

  &.router-link-exact-active {
    background: $acc-color;
    color: $white;
  }
}

footer {
  background: $hl-color;
  padding: 5vw;
  color: $bg-color;
  min-height: 10vw;
}

@media (orientation: portrait) {
  nav {
    height: 15vw;
    border-bottom-width: 1vw;
  }

  nav a {
    height: 8vw;
    width: 15vw;
    line-height: 8vw;
    font-size: 4vw;
    border-radius: 1vw;
  }
}

.route-enter-from {
  opacity: 0;
  transform: translateY(10vw);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-to {
  opacity: 0;
}

.route-leave-active {
  transition: all 0.15s ease-out;
}

</style>
