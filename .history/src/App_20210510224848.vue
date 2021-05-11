<template>
  <div id="app">
    <main-tab />
    <keep-alive exclude="home">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import MainTab from "@/components/content/MainTab";
export default {
  name: "App",
  components: {
    MainTab
  }
};
</script>

<style>
@import "~@/assets/css/base.css";
body {
  background: #0b2845;
  background-size: cover;
  overflow: hidden;
}
</style>
