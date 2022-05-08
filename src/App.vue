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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 0px;
  height: 4.5vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--highlight-color);
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  border-bottom: 0.4vw solid var(--accent-color);
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
  border-radius: 0.3vw;
  float: left;
  display: block;
  transition-duration: 0.3s;
  min-width: 8vw;
}

nav a:hover {
  background: hsl(263, 80%, 90%);
}

nav a.router-link-exact-active {
  background: var(--accent-color);
  color: var(--background-color);
}

footer {
  background: var(--highlight-color);
  padding: 5vw;
  color: var(--background-color);
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
