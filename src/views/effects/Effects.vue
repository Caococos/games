<template>
  <div class="effects">
    <EffectBar />
    <router-view />
  </div>
</template>

<script lang="ts" setup>
import EffectBar from '@/views/effects/childCpms/EffectBar.vue'
</script>
