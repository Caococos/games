<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: Zhihaot1
 * @Date: 2021-04-29 09:23:29
 * @LastEditors: Zhihaot1
 * @LastEditTime: 2021-05-10 23:04:09
-->
<template>
  <div class="effects">
    <effect-bar />
    <router-view />
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
    this.$router.push({ name: "LinearBall" });
  }
};
</script>

<style scoped>
</style>