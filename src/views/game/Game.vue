<template>
  <div class="game">
    <GameBar />
    <router-view />
  </div>
</template>

<script lang="ts" setup>
import GameBar from './childCpms/GameBar.vue'
</script>
