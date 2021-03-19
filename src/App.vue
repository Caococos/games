<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',

}
</script>

<style>
  @import "~@/assets/css/base.css";
  body {
    background: url("~@/assets/img/bg.jpg");
    background-size: cover;
    overflow: hidden;
  }
</style>
