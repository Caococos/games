<template>
  <canvas ref="canvas">如果浏览器兼容此标签置换元素内的内容会被替换掉，否则会被替换(在js中)</canvas>
</template>

<script>
import {LinearBall} from "@/common/utils";
export default {
  name: "LinearBall",
  data() {
    return {
      cas: null,
      w: 0,
      h: 0,
      titleArr: ['JavaScript', 'HTML5', 'JAVA', 'PHP', 'Vue.js', 'Canvas', 'CSS3', 'Webpack', 'Bootstrap', 'Github', 'Git', 'Element-UI', 'E-chart'],
      ballArr: [],
      timer: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.cas = this.$refs.canvas.getContext('2d')
      this.w = document.documentElement.clientWidth-6
      this.h = document.documentElement.clientHeight-6
      // 更新canvas标签的宽高
      this.$refs.canvas.width = this.w
      this.$refs.canvas.height = this.h
      for (let i=0; i<13; i++) {
        const ball = new LinearBall(this.titleArr[i], this.w, this.h, this.cas)
        this.ballArr.push(ball)
      }
      this.timer = window.setInterval(() => {
        this.cas.clearRect(0, 0, this.w, this.h)
        for(let i=0, length = this.ballArr.length; i<length; i++) {
          // 更新小球坐标，显示 当前小球
          const ball = this.ballArr[i]
          ball.show()

          for(let j=0; j<i; j++) {
            // 取出当前小球前面的小球
            const prevBall = this.ballArr[j]
            this.drawLine(ball.x, ball.y, prevBall.x, prevBall.y, ball.color)
          }
        }
      }, 30)
    })
  },
  methods: {
    drawLine(x1, y1, x2, y2, color = '#000', width = 2) {
      this.cas.beginPath()
      this.cas.moveTo(x1, y1)
      this.cas.lineTo(x2, y2)
      this.cas.strokeStyle = color
      this.cas.lineWidth = width
      this.cas.stroke()
      this.cas.closePath()
    }
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