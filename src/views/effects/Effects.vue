<template>
  <div class="effects">
    <effect-bar/>
    <router-view/>
  </div>
</template>

<script>
import EffectBar from "@/views/effects/childCpms/EffectBar";
export default {
  name: "Effects",
  components: {
    EffectBar
  },
  activated() {
    this.$router.push({name: 'LinearBall'})
  }
}
</script>

<style scoped>

</style>