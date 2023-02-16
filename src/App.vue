<template>
  <MainTab />
  <WatchingYou v-slot="watchingYouProps" :active="true">
    <!-- another options...-->
    <div
      style="color: #fff; pointer-events: none"
      :className="watchingYouProps.className"
      :style="watchingYouProps.style"
    >
      O
    </div>
  </WatchingYou>
  <keep-alive exclude="Home">
    <router-view />
  </keep-alive>
</template>

<script lang="ts" setup>
import MainTab from './components/content/MainTab.vue'
import WatchingYou from 'vue-watching-you'
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
