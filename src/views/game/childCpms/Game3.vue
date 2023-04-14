<template>
  <div class="game3">
    <div class="title">
      <h1>贪吃蛇</h1>
      <h2>得分:{{ score }}</h2>
    </div>
    <div class="hello">
      <div class="table" @keyup:click.ctrl="keyEvent" :style="{ width: 15 * size + 'px' }">
        <div
          v-for="(item, index) in coordinate"
          :key="index"
          class="em"
          :style="{ float: item.y / size !== 1 ? '' : '' }"
          :item="item.x + '-' + item.y"
        >
          <div
            :class="{
              food: item.type == 'food',
              'snake-header': item.type == 'snakeHeader',
              'snake-body': item.type == 'snakeBody'
            }"
          ></div>
        </div>
      </div>
    </div>
    <div class="note">游戏说明：空格键space 暂停游戏,方向键开始游戏</div>
    <div class="tips">{{ msg }}</div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

interface ITFFood {
  x: number
  y: number
}
interface ITFSnake {
  x: number
  y: number
  type?: string
}

const score = ref(0)
const size = ref(20)
const coordinate = ref([])
const food = ref()
const snake = ref<[ITFSnake] | undefined>()
const direction = ref('down')
const moveTimer = ref<number>()
const msg = ref('操控方向键开始游戏') //tips
const speed = ref(200) //速度ms
const gameover = ref(true)

//创建表格坐标
const createXy = (size: number) => {
  for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= size; j++) {
      let xy = {
        x: i,
        y: j,
        type: ''
      }
      coordinate.value.push(xy as never)
    }
  }
}

// 随机生成食物
const randomFood = () => {
  food.value = {
    x: random(1, size.value),
    y: random(1, size.value),
    type: 'food'
  }
}

// 初始化snake的位置
const initSnakeXy = () => {
  snake.value = [
    { x: 3, y: 3 },
    { x: 3, y: 4 },
    { x: 3, y: 5 }
  ]
}

// snake身体的移动
const snakeMove = () => {
  clearInterval(moveTimer.value)
  moveTimer.value = setInterval(() => {
    const head = snake.value[0]
    if (direction.value === 'down') {
      updateSnake.value({ x: head.x + 1, y: head.y }) //将蛇头前面一个格子的x,y传递到updateSnake中
    }
    if (direction.value === 'right') {
      updateSnake.value({ x: head.x, y: head.y + 1 })
    }
    if (direction.value === 'up') {
      updateSnake.value({ x: head.x - 1, y: head.y })
    }
    if (direction.value === 'left') {
      updateSnake.value({ x: head.x, y: head.y - 1 })
    }
  }, this.speed)
}

// 更新snake的变化
const updateSnake = (head: ITFFood) => {
  const isEatBody = snake.value.find((item: ITFFood) => head.x === item.x && head.y === item.y) //判断蛇头是否吃到身体)
  if (
    //当蛇头的位置在圈外就结束游戏
    head.x < 1 ||
    head.x > size.value ||
    head.y < 1 ||
    head.y > size.value ||
    isEatBody
  ) {
    //游戏结束
    clearInterval(moveTimer.value)
    console.log(`游戏结束，你的得分为${score.value}`)
    msg.value = 'GameOver！'
    gameover.value = true
    return
  }
  if (head.x === food.value.x && head.y === food.value.y) {
    //吃到食物的情况
    snake.value.unshift(head as never) //增加长度
    randomFood() //再随机生成一个食物
    score.value++ //分数+1
  } else {
    //没有吃到食物的情况
    snake.value.unshift(head as never)
    snake.value.pop()
  }
}

// 控制游戏运行方向
const changeDirection = (e: KeyboardEvent) => {
  switch (e && e.keyCode) {
    case 37:
      console.info('37=左键')
      if (direction.value !== 'right') {
        direction.value = 'left'
        snakeMove()
      }
      break
    case 38:
      console.info('38=上键')
      if (direction.value !== 'down') {
        direction.value = 'up'
        snakeMove()
      }
      break
    case 39:
      console.info('39=右键')
      if (direction.value !== 'left') {
        direction.value = 'right'
        snakeMove()
      }
      break
    case 40:
      console.info('40下键')
      if (direction.value !== 'up') {
        direction.value = 'down'
        snakeMove()
      }
      break
    case 32:
      console.info('32空格')
      clearInterval(moveTimer.value)
      msg.value = '游戏已暂停'
      break
    default:
      break
  }
}

// 键盘事件
const keyEvent = () => {
  document.onkeyup = function (event) {
    if (gameover.value) {
      let beforeFood = document.querySelector('.food')
      if (beforeFood) {
        document.querySelector('.food')!.classList.remove('food')
      }
      //清空上一局食物
      food.value = {}
      gameover.value = false
      initSnakeXy()
      randomFood() //每局游戏开始新生成一个食物
      direction.value = ''
      score.value = 0
    }
    var e = event || window.event || arguments.callee.caller.arguments[0]
    changeDirection(e)
  }
}

/**
 * 产生随机整数，包含下限值，但不包括上限值
 * @param {Number} lower 下限
 * @param {Number} upper 上限
 * @return {Number} 返回在下限到上限之间的一个随机整数
 */
const random = (lower: number, upper: number) => {
  return Math.floor(Math.random() * (upper - lower)) + lower
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  display: flex;
  align-items: center;
  justify-content: center;
}
.title {
  text-align: center;
  margin: 15px;
}
.table {
  display: flex;
  flex-wrap: wrap;
}
.em {
  border: 1px solid;
  width: 15px;
  height: 15px;
  background-color: #fff;
}
.food {
  background-color: red;
  height: 100%;
  width: 100%;
}
.snake-header {
  background-color: #2a4e8a;
  height: 100%;
  width: 100%;
}
.snake-body {
  background-color: #267888;
  height: 100%;
  width: 100%;
}
.note {
  margin: 40px;
  font-size: 12px;
  text-align: center;
}
.tips {
  font-size: 20px;
  text-align: center;
}
</style>
