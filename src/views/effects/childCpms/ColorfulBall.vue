<!--
 * @Descripttion: 
 * @version: 
 * @Author: Zhihaot1
 * @Date: 2021-04-29 09:55:59
 * @LastEditors: 
 * @LastEditTime: 2021-05-02 20:54:45
-->
<template>
  <canvas ref="canvas"
    >如果浏览器兼容此标签置换元素内的内容会被替换掉，否则会被替换(在js中)</canvas
  >
</template>

<script>
import { ColorfulBall } from "@/common/utils";

export default {
  name: "ColorfulBall",
  data() {
    return {
      cas: null,
      w: 0,
      h: 0,
      ballArr: [],
      timer: null,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.cas = this.$refs.canvas.getContext("2d");
      this.w = document.documentElement.clientWidth - 6;
      this.h = document.documentElement.clientHeight - 6;
      // 更新canvas标签的宽高
      this.$refs.canvas.width = this.w;
      this.$refs.canvas.height = this.h;
      //绑定鼠标位置
      window.document.onmousemove = (e) => {
        // console.log(e.x, e.y);
        const ball = new ColorfulBall(e.x, e.y, this.w, this.h, this.cas);
        this.ballArr.push(ball);
      };
      this.timer = window.setInterval(() => {
        this.cas.clearRect(0, 0, this.w, this.h);
        const length = this.ballArr.length;
        for (let i = 0; i < length; i++) {
          // 更新小球坐标，显示 当前小球
          const ball = this.ballArr[i];
          if (ball.r > 0) {
            if (ball.r < 0) {
              this.ballArr.splice(i, 1);
            } else {
              ball.show();
            }
          }
        }
      }, 20);
    });
  },
  destroyed() {
    clearInterval(this.timer);
  },
};
</script>

<style scoped>
canvas {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>