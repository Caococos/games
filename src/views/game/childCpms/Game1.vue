<template>
  <div class="game">
    <h2 class="name">打地鼠</h2>
    <div class="wrapper" ref="wrapper">
      <!--      <img src="~@/assets/img/dog.png" alt="" @click="clickItem" :style="{'left': random.x + 'px', 'top': random.y + 'px'}">-->
    </div>
    <div class="scoped">
      <div class="set">
        <h2 class="name">设置参数</h2>
        <div class="parameter">
          <p>速度： <input type="number" v-model="setSpeed" /></p>
          <p>总数： <input type="number" v-model="TOTAL" /></p>
        </div>
        <div class="btn">
          <RadiusClick class="radius-click" @click.native="playGame" :message="message"></RadiusClick>
          <RadiusClick class="radius-click" @click.native="endGame" message="结束游戏"></RadiusClick>
        </div>
      </div>
      <div class="count">
        <h3>统计分数面板</h3>
        <h3>总数： {{ TOTAL }}</h3>
        <h3>击中： {{ clickNum }}</h3>
        <h3>击中率： {{ level }}%</h3>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue'
import RadiusClick from '@/components/common/RadiusClick.vue'

const message = ref('开始游戏')
const mice = ref([]) //地鼠数组
const setSpeed = ref(1000) //绑定设置地鼠出现速度
const random = ref({}) //随机出现的地鼠位置
const TOTAL = 10 //地鼠总数
const count = ref(0) //统计总共出现了多少次地鼠同时对其判断不能大于总数
const clickNum = ref(0) //点击地鼠次数统计
const timerId = ref<number | null>(null)
</script>
