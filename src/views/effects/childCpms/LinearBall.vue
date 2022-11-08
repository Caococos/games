<template>
  <canvas ref="canvas">如果浏览器兼容此标签置换元素内的内容会被替换掉，否则会被替换(在js中)</canvas>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, reactive, nextTick } from 'vue'
import { LinearBall } from '@/common/utils'

const canvas = ref<HTMLCanvasElement>()
const width = ref(0)
const height = ref(0)
const titleArr = reactive([
  'JavaScript',
  'HTML5',
  'JAVA',
  'PHP',
  'Vue.js',
  'Canvas',
  'CSS3',
  'Webpack',
  'Bootstrap',
  'Github',
  'Git',
  'Element-UI',
  'E-chart'
])
const cas = ref<CanvasRenderingContext2D>()
const ballArr = ref<LinearBall[]>([])
const timer = ref<number | null>(null)

onMounted(() => {
  nextTick(() => {
    cas.value = (canvas.value as HTMLCanvasElement).getContext('2d') as CanvasRenderingContext2D
    window.addEventListener('resize', () => {
      width.value = document.documentElement.clientWidth - 6
      height.value = document.documentElement.clientHeight - 6
      ;(canvas.value as HTMLCanvasElement).width = width.value
      ;(canvas.value as HTMLCanvasElement).height = height.value
    })
    width.value = document.documentElement.clientWidth - 6
    height.value = document.documentElement.clientHeight - 6
    // 更新canvas标签的宽高
    ;(canvas.value as HTMLCanvasElement).width = width.value
    ;(canvas.value as HTMLCanvasElement).height = height.value
    for (let i = 0; i < 13; i++) {
      const ball = new LinearBall(titleArr[i], width.value, height.value, cas.value)
      ballArr.value.push(ball)
    }
    timer.value = window.setInterval(() => {
      ;(cas.value as CanvasRenderingContext2D).clearRect(0, 0, width.value, height.value)
      for (let i = 0, length = ballArr.value.length; i < length; i++) {
        // 更新小球坐标，显示 当前小球
        const ball = ballArr.value[i]
        ball.show()

        for (let j = 0; j < i; j++) {
          // 取出当前小球前面的小球
          const prevBall = ballArr.value[j]
          drawLine(ball.x, ball.y, prevBall.x, prevBall.y, ball.color)
        }
      }
    }, 30)
  })
})

const drawLine = (x1: number, y1: number, x2: number, y2: number, color = '#000', width = 2) => {
  if (cas.value) {
    cas.value.beginPath()
    cas.value.moveTo(x1, y1)
    cas.value.lineTo(x2, y2)
    cas.value.strokeStyle = color
    cas.value.lineWidth = width
    cas.value.stroke()
    cas.value.closePath()
  }
}
</script>

<style scoped>
canvas {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>
