<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: Zhihaot1
 * @Date: 2021-04-29 09:22:15
 * @LastEditors: Zhihaot1
 * @LastEditTime: 2021-05-10 23:05:10
-->
<template>
  <div class="game">
    <game-bar />
    <router-view />
  </div>
</template>

<script>
import GameBar from "@/views/game/childCpms/GameBar";
export default {
  name: "Game",
  components: {
    GameBar
  }
  // activated() {
  //   this.$router.push({name: 'Game1'})
  // }
};
</script>

<style scoped>
</style>