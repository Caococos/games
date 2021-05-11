<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: Zhihaot1
 * @Date: 2021-03-19 15:51:50
 * @LastEditors: Zhihaot1
 * @LastEditTime: 2021-05-10 22:48:48
-->
<template>
  <div id="app">
    <main-tab />
    <keep-alive exclude="/home">
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
