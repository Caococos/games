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
interface dogImg extends HTMLImageElement {
  i: number
  timeout: number
}

const message = ref('开始游戏')
const mice = ref<[]>([]) //地鼠数组
const setSpeed = ref(1000) //绑定设置地鼠出现速度
const random = ref({ x: 0, y: 0 }) //随机出现的地鼠位置
const TOTAL = 10 //地鼠总数
const count = ref(0) //统计总共出现了多少次地鼠同时对其判断不能大于总数
const clickNum = ref<number>(0) //点击地鼠次数统计
const timerId = ref<number | undefined>(undefined)
const wrapper = ref()

const level = computed(() => ((clickNum.value / TOTAL) * 100).toFixed(2) || 0)
const playGame = () => {
  console.log('游戏已开始')
  console.log(!timerId.value)
  if (!timerId.value) {
    //当定时器为null，开始游戏
    timerId.value = setInterval(() => {
      if (count.value < TOTAL) {
        //当地鼠出现的次数小于总数时，开始游戏
        count.value++
        setSpeed.value = Number(setSpeed.value.toFixed())
        let img = document.createElement('img') as dogImg
        random.value.x = Math.floor(Math.random() * 824)
        random.value.y = Math.floor(Math.random() * 464)
        img.style.position = 'absolute'
        img.style.left = random.value.x + 'px'
        img.style.top = random.value.y + 'px'
        img.src = require('@/assets/img/dog.png')
        img.i = mice.value.length
        img.timeout = window.setTimeout(sleepMouse, 1000, img)
        img.onclick = clickItem
        wrapper.value.appendChild(img)
        // @ts-ignore
        mice.value.push(img)
      } else {
        //地鼠出现次数超过总数结束游戏
        console.log('游戏已结束')
        message.value = '重新开始'
        // 结束游戏的四行代码
        clearInterval(timerId.value)
        timerId.value = undefined
        count.value = 0
        clickNum.value = 0
      }
    }, setSpeed.value)
  } else {
    console.log('游戏已经开始了！！！')
  }
}
const clickItem = (event: Event) => {
  let img = event.target as dogImg
  clearTimeout(img.timeout)
  console.log(mice.value.splice(mice.value[img.i], 1))
  wrapper.value.removeChild(img)
  clickNum.value++
}
const sleepMouse = (img: dogImg) => {
  mice.value.splice(mice.value[img.i], 1)
  wrapper.value.removeChild(img)
}
const endGame = () => {
  console.log(timerId.value)
  if (timerId.value === null) {
    console.log('游戏已经结束')
  } else {
    console.log('游戏结束')
    clearInterval(timerId.value)
    timerId.value = undefined
    clickNum.value = 0
    count.value = 0
  }
}
</script>

<style scoped lang="scss">
.game {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 10px;
  border: 1px solid #ccc;
  width: 1200px;
  padding: 10px;
  user-select: none;
}
.game::after {
  content: '';
  display: block;
  clear: both;
}
.name {
  font-weight: normal;
  font-size: 16px;
  color: #eee;
  padding: 10px 0;
  text-align: center;
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
}
.wrapper {
  position: relative;
  width: 900px;
  height: 540px;
  float: left;
}
.scoped {
  width: 260px;
  height: 540px;
  float: left;
  padding-left: 15px;
  border-left: 1px solid #ccc;
}
.set {
  height: 270px;
  width: 100%;
  border: 1px solid #ccc;
}
.set p {
  padding: 10px;
  color: #fff;
  font-size: 16px;
}

.btn {
  margin-top: 10px;
}

.radius-click {
  margin: 10px auto 0;
}

.count {
  margin-top: 5px;
  padding: 10px;
  border: 1px solid #ccc;
}

.count h3 {
  font-weight: normal;
  font-size: 16px;
  color: #eee;
  padding: 10px 0;
  text-align: center;
  margin-bottom: 20px;
}
</style>
