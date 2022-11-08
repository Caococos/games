<template>
  <div class="bar" ref="bar">
    <BarItem message="LinearBall" @click.native="toLinearBall" />
    <BarItem message="ColorfulBall" @click.native="toColorfulBall" />
    <BarItem message="Clock" @click.native="toColorfulBall" />
    <BarItem message="CSS3" @click.native="toColorfulBall" />
    <BarItem message="WEBPACK" @click.native="toColorfulBall" />
    <BarItem message="Canvas" @click.native="toColorfulBall" />
    <BarItem message="Vue.js" @click.native="toColorfulBall" />
  </div>
</template>

<script lang="ts" setup>
import BarItem from '@/components/content/BarItem.vue'
import { ref, computed, onMounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const bar = ref()

const toLinearBall = () => router.push({ name: 'LinearBall' })
const toColorfulBall = () => router.push({ name: 'ColorfulBall' })
const resetScale = () => {
  bar.value.childNodes.forEach((li: HTMLElement) => {
    li.style.setProperty('--scale', '1')
  })
}

onMounted(() => {
  nextTick(() => {
    bar.value.childNodes.forEach((li: HTMLElement) => {
      li.addEventListener('mousemove', (e) => {
        let item = e.target as HTMLElement
        let itemRect = item.getBoundingClientRect()
        let offset = Math.abs(e.clientY - itemRect.top) / itemRect.height

        //获取前后两个元素
        let prev = (item.previousElementSibling as HTMLElement) || null
        let next = (item.nextElementSibling as HTMLElement) || null

        //重置scale
        resetScale()

        let scale = 0.3 //图标放到最大1.6倍
        if (prev) {
          prev.style.setProperty('--scale', String(1 + scale * Math.abs(offset - 1)))
        }
        item.style.setProperty('--scale', String(1 + scale))
        if (next) {
          next.style.setProperty('--scale', String(1 + scale * offset))
        }
      })

      //  离开父盒子
      bar.value.addEventListener('mouseleave', () => {
        resetScale()
      })
    })
  })
})
</script>
<style scoped lang="scss">
.bar {
  position: absolute;
  top: 38px;
  left: 0;
  z-index: 10;
  margin-left: 10px;
  --scale: 1;
  width: 80px;
  .bar-item {
    position: relative;
    //left: calc((80px * var(--scale) - 80px) / 2);
    width: calc(80px * var(--scale));
    height: calc(80px * var(--scale));
    line-height: calc(80px * var(--scale));
    font-size: calc(12px * var(--scale));
    //transition: all 15ms ease-out;
  }
}
</style>
