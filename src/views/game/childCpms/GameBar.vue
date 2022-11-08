<template>
  <div class="bar" ref="bar">
    <BarItem message="打地鼠" @click.native="toGame1" />
    <BarItem message="踩白块" @click.native="toGame2" />
    <BarItem message="贪吃蛇" @click.native="toGame3" />
    <BarItem message="坦克大战" @click.native="toGame1" />
    <BarItem message="猫和老鼠" @click.native="toGame1" />
    <BarItem message="小猪佩奇" @click.native="toGame1" />
    <BarItem message="糖果人" @click.native="toGame1" />
  </div>
</template>

<script lang="ts" setup>
import BarItem from '@/components/content/BarItem.vue'
import { ref, computed, onMounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const bar = ref<HTMLElement>()

const toGame1 = () => router.push({ name: 'Game1' })
const toGame2 = () => router.push({ name: 'Game2' })
const toGame3 = () => router.push({ name: 'Game3' })
const resetScale = () => {
  if (bar.value) {
    bar.value.childNodes.forEach((li) => {
      ;(li as HTMLElement).style.setProperty('--scale', '1')
    })
  }
}

onMounted(() => {
  nextTick(() => {
    if (bar.value) {
      bar.value.childNodes.forEach((li) => {
        li.addEventListener('mousemove', (e) => {
          let item = e.target as HTMLElement
          let itemRect = item.getBoundingClientRect()
          //@ts-ignore
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
        ;(bar.value as HTMLElement).addEventListener('mouseleave', (e) => {
          resetScale()
        })
      })
    }
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
