<template>
  <div id="home">
    <div>
      <ul>
        <li v-for="(item, index) in games" :class="{ active: index === currentIndex }" :key="index">{{ item }}</li>
      </ul>
    </div>
    <BorderClick class="borderClick" :message="message" @click.native="move" :style="{ pointerEvents: isClick }" />
  </div>
</template>

<script lang="ts" setup>
import BorderClick from '@/components/common/BorderClick.vue'
import { ref, computed, onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const message = ref('Game Start')
const games = reactive(['打地鼠', '踩白块', '贪吃蛇', '奔跑吧陈签'])
const isClick = ref('auto')
const number = ref(0)
const currentIndex = ref(-1)
const cycle = ref(20)
const speed = ref(40)
const times = ref(0)
const timer = ref(0)

const move = () => {
  if (message.value === 'Game Start') {
    //这里点击一次之后会调用多次,故用if条件限制，防止用户多次点击
    isClick.value = 'none'
    times.value += 1 //转动次数
    oneRoll() //转动过程调用的每一次转动方法
    useNumber()
  } else {
    //转完之后再次点击可以进入详细游戏界面
    switch (currentIndex.value) {
      case 0:
        router.push('/game')
        break
      case 1:
        router.push('/game/game2')
        break
      case 2:
        router.push('/game/game3')
        break
      case 3:
        router.push('/game/game4')
        break
    }
  }
}
const oneRoll = () => {
  number.value = Math.ceil(Math.random() * 4) //获取随机数
  let index = currentIndex.value //当前转到哪个位置
  const count = games.length //总共有多少个游戏
  index += 1
  if (index > count - 1) {
    index = 0
  }
  currentIndex.value = index
}
const useNumber = () => {
  //如果当前转动次数达到要求 && 目前转到的位置是目标位置
  if (times.value > cycle.value + 10 && number.value === currentIndex.value) {
    clearTimeout(timer.value) //清除转动定时器
    times.value = 0 //转动跑格子次数初始化为0，可以进行下一次抽奖

    message.value = 'Go!!!'
    isClick.value = 'auto' //让盒子能够点击
  } else {
    if (times.value < cycle.value - 20) {
      speed.value -= 4 //加快转动速度
    } else {
      speed.value += 10 //转动即将结束，放慢转动速度
    }
    timer.value = setTimeout(move, speed.value) //开始转动
  }
}
interface dataProps {}
const props = defineProps({})
const emit = defineEmits(['change', 'delete'])
const count = ref(0)
</script>

<style lang="scss" scoped>
#home {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 500px;
  background: rgba(7, 17, 27, 0.2);
}

ul {
  position: relative;
  width: 500px;
  height: 500px;
  list-style: none;
  li {
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 5px;
    background-color: #000;
    color: #7f3030;
    text-align: center;
    line-height: 100px;
  }
}

li:nth-child(1) {
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}

li:nth-child(2) {
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

li:nth-child(3) {
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}

li:nth-child(4) {
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}

.borderClick {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.active {
  background-color: #4361ee;
}
</style>
