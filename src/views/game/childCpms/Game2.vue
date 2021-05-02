<template>
  <div class="game2">
    <div class="start">
      <h3 class="score">Score: {{score}}</h3>
      <neon-button @click.native="whiteInit" :message="message"/>
    </div>
    <h2>别踩白板</h2>
    <div class="gameOver" v-show="isShow">你完了！</div>
    <div class="whiteGame">
      <div class="main" ref="main" :style="{top: top + 'px'}"></div>
    </div>
  </div>
</template>

<script>
import NeonButton from "@/components/common/NeonButton";
export default {
  name: "App",
  components: {
    NeonButton
  },
  data() {
    return {
      top: 0,
      speed: 150,  //方块移动速度
      score: 0,  //记录分数
      interval: null,  //保存移动的定时器
      message: '开始游戏',
      isShow: false,  //游戏结束时展示
    }
  },
  methods: {
    whiteInit() {
      if (!this.interval) {
        this.isShow = false
        this.speed = 150
        this.score = 0
        this.$refs.main.top = 0
        this.clearMain()
        for (let i = 0; i < 5; i++) {
          this.addRow()
        }
        this.interval = window.setInterval(this.move, this.speed)
      } else {
        this.$toast.show('游戏已经开始了，请勿重复点击')
      }
    },
    gameOver() {
      this.isShow = true
      this.$toast.show(`游戏结束，你的得分:${this.score}`)
      setTimeout(() => {}, 1000)
      clearInterval(this.interval)
      this.interval = null
      this.top = 0
      this.clearMain()
    },
    clearMain() {
      const length = this.$refs.main.children.length
      for (let i=0; i<length; i++) {
        this.$refs.main.removeChild(this.$refs.main.children[0])
      }
    },
    addRow() {
      let div = document.createElement("div");
      let number = Math.floor(Math.random() * 4);
      if (number === 4) {
        number = 3;
      }
      div.style.display = 'flex'
      div.style.width = 'auto'
      div.style.height = '100px'
      for (let j = 0; j < 4; j++) {
        let span = document.createElement("span");
        span.className = 'checkeredWhiteBlock'
        if (number === j) {
          span.style.background = "black";
          span.onclick = this.black;
          div.number = number;
        }
        else {
          span.style.background = "white";
          span.onclick = this.white;
        }
        div.appendChild(span);
      }
      this.$refs.main.appendChild(div);
    },
    move() {
      this.top -= 10
      if (this.top === -100) {
        if (this.$refs.main.children[0].number !== -1) {
          this.gameOver()
        } else {
          this.addRow()
          this.$refs.main.removeChild(this.$refs.main.children[0])
          this.top = 0
        }
      }
    },
    white() {
      this.gameOver()
    },
    black(event) {
      event.target.style.background = "white";
      event.target.onclick = null;
      event.target.parentElement.number = -1;
      this.score += 10;
      if (this.speed > 30 && this.score % 20 === 0) {
        this.speed -= 10;    //加快速度
        window.clearInterval(this.interval);
        this.move();
        this.interval = window.setInterval(this.move, this.speed);
      }
    }

  }
};
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
}

</style>