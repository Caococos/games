<template>
  <div class="game">
    <game-bar/>
    <router-view/>
  </div>
</template>

<script>
import GameBar from "@/views/game/childCpms/GameBar";
export default {
  name: "Game",
  components: {
    GameBar
  },
  activated() {
    this.$router.push({name: 'Game1'})
  }
}
</script>

<style scoped>

</style>