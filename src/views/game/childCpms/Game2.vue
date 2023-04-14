<template>
  <div class="game2">
    <div class="start">
      <h3 class="score">Score: {{ score }}</h3>
      <NeonButton @click.native="whiteInit" :message="message" />
    </div>
    <h2>别踩白板</h2>
    <div class="gameOver" v-show="isShow">你完了！</div>
    <div class="whiteGame">
      <div class="main" ref="main" :style="{ transform: 'translateY(' + y + 'px)' }"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import NeonButton from '@/components/common/NeonButton.vue'

interface myDiv extends HTMLDivElement {
  number: number
}
interface mySpan extends HTMLSpanElement {}

const main = ref()
const y = ref(0) //main移动量
const speed = ref(150) //方块移动速度
const score = ref(0) //记录分数
const interval = ref<number | undefined>(undefined) //保存移动的定时器
const message = ref('开始游戏')
const isShow = ref(false) //游戏结束时展示

const whiteInit = () => {
  if (!interval.value) {
    isShow.value = false
    speed.value = 150
    score.value = 0
    main.value.y = 0
    clearMain()
    for (let i = 0; i < 5; i++) {
      addRow()
    }
    interval.value = window.setInterval(move, speed.value)
  } else {
    console.log('游戏已经开始了，请勿重复点击')
  }
}
const gameOver = () => {
  isShow.value = true
  console.log(`游戏结束，你的得分:${score.value}`)
  setTimeout(() => {}, 1000)
  clearInterval(interval.value)
  interval.value = undefined
  y.value = 0
  clearMain()
}
const clearMain = () => {
  const length = main.value.children.length
  for (let i = 0; i < length; i++) {
    main.value.removeChild(main.value.children[0])
  }
}
const addRow = () => {
  let div = document.createElement('div') as myDiv
  let number = Math.floor(Math.random() * 4)
  if (number === 4) {
    number = 3
  }
  div.style.display = 'flex'
  div.style.width = 'auto'
  div.style.height = '100px'
  for (let j = 0; j < 4; j++) {
    let span = document.createElement('span')
    span.className = 'checkeredWhiteBlock'
    if (number === j) {
      span.style.background = 'black'
      span.onclick = black
      div.number = number
    } else {
      span.style.background = 'white'
      span.onclick = white
    }
    div.appendChild(span)
  }
  main.value.appendChild(div)
}
const move = () => {
  y.value -= 10
  if (y.value === -100) {
    if (main.value.children[0].number !== -1) {
      gameOver()
    } else {
      addRow()
      main.value.removeChild(main.value.children[0])
      y.value = 0
    }
  }
}
const white = () => {
  gameOver()
}
const black = (event: Event) => {
  const target = event.target as HTMLElement
  const parent = target.parentElement as myDiv
  target.style.background = 'white'
  target.onclick = null
  parent.number = -1
  score.value += 10
  if (speed.value > 30 && score.value % 20 === 0) {
    speed.value -= 10 //加快速度
    window.clearInterval(interval.value)
    move()
    interval.value = window.setInterval(move, speed.value)
  }
}
</script>

<style scoped>
/* 每个盒子的高度 */
.game2 {
  position: relative;
  width: 400px;
  top: 70px;
  left: 50%;
  transform: translateX(-50%);
}

.score {
  margin-bottom: 20px;
  line-height: 12px;
}
h2 {
  text-align: center;
}

.start {
  position: absolute;
  top: 60px;
  right: -120px;
}

.gameOver {
  color: black;
  position: absolute;
  z-index: 10;
  font-size: 30px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.whiteGame {
  position: relative;
  width: 400px;
  height: 400px;
  overflow: hidden;
  border: black 1px solid;
  background: white;
}
.main {
  position: absolute;
  width: 100%;
  height: auto;
  transition: transform 0.015 linear;
}
</style>
