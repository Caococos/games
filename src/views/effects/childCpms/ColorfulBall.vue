<template><canvas ref="canvas">如果浏览器兼容此标签置换元素内的内容会被替换掉，否则会被替换(在js中)</canvas></template>

<script lang="ts" setup>
import { ref, computed, onMounted, nextTick } from 'vue'
import { ColorfulBall } from '@/common/utils'

const canvasWidth = ref(0)
const canvasHeight = ref(0)
const ballArr = ref<ColorfulBall[]>([])
const timer = ref<number | null>(null)
const canvas = ref<HTMLCanvasElement>()

onMounted(() => {
  nextTick(() => {
    const cas = (canvas.value as HTMLCanvasElement).getContext('2d') as CanvasRenderingContext2D
    window.addEventListener('resize', () => {
      canvasWidth.value = document.documentElement.clientWidth - 6
      canvasHeight.value = document.documentElement.clientHeight - 6
      ;(canvas.value as HTMLCanvasElement).width = canvasWidth.value
      ;(canvas.value as HTMLCanvasElement).height = canvasHeight.value
    })
    canvasWidth.value = document.documentElement.clientWidth - 6
    canvasHeight.value = document.documentElement.clientHeight - 6
    // 更新canvas标签的宽高
    ;(canvas.value as HTMLCanvasElement).width = canvasWidth.value
    ;(canvas.value as HTMLCanvasElement).height = canvasHeight.value
    //绑定鼠标位置
    window.document.onmousemove = (e) => {
      // console.log(e.x, e.y);
      const ball = new ColorfulBall(e.x, e.y, canvasWidth.value, canvasHeight.value, cas)
      ballArr.value.push(ball)
    }
    timer.value = window.setInterval(() => {
      cas.clearRect(0, 0, canvasWidth.value, canvasHeight.value)
      const length = ballArr.value.length
      for (let i = 0; i < length; i++) {
        // 更新小球坐标，显示 当前小球
        const ball = ballArr.value[i]
        if (ball.r > 0) {
          if (ball.r < 0) {
            ballArr.value.splice(i, 1)
          } else {
            ball.show()
          }
        }
      }
    }, 20)
  })
})
</script>

<style scoped>
canvas {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>
