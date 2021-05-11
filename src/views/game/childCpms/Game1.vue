<template>
  <div class="game">
    <h2 class="name">打地鼠</h2>
    <div class="wrapper" ref="wrapper">
      <!--      <img src="~@/assets/img/dog.png" alt="" @click="clickItem" :style="{'left': random.x + 'px', 'top': random.y + 'px'}">-->
    </div>
    <div class="scoped">
      <div class="set">
        <h2 class="name">设置参数</h2>
        <div class="parameter">
          <p>速度： <input type="number" v-model="setSpeed" /></p>
          <p>总数： <input type="number" v-model="TOTAL" /></p>
        </div>
        <div class="btn">
          <radius-click
            class="radius-click"
            @click.native="playGame"
            :message="message"
          ></radius-click>
          <radius-click
            class="radius-click"
            @click.native="endGame"
            message="结束游戏"
          ></radius-click>
        </div>
      </div>
      <div class="count">
        <h3>统计分数面板</h3>
        <h3>总数： {{ TOTAL }}</h3>
        <h3>击中： {{ clickNum }}</h3>
        <h3>击中率： {{ level }}%</h3>
      </div>
    </div>
  </div>
</template>

<script>
import RadiusClick from "@/components/common/RadiusClick";
export default {
  name: "Game1",
  components: {
    RadiusClick,
  },
  data() {
    return {
      message: "开始游戏",
      mice: [], //地鼠数组
      setSpeed: 1000, // 绑定设置地鼠出现速度
      random: {}, // 随机出现的地鼠位置
      TOTAL: 10, // 地鼠总数
      count: 0, // 统计总共出现了多少次地鼠同于判断不能大于总数
      clickNum: 0, // 点中地鼠统计
      timerId: null, //定时器
    };
  },
  computed: {
    // 统计打中的地鼠数量
    level() {
      return ((this.clickNum / this.TOTAL) * 100).toFixed(2) || 0;
    },
  },
  created() {},
  mounted() {},
  methods: {
    // 开始游戏
    playGame() {
      this.$toast.show("游戏已开始");
      console.log(!this.timerId);
      if (!this.timerId) {
        //当定时器为null，开始游戏
        this.timerId = setInterval(() => {
          if (this.count < this.TOTAL) {
            //当地鼠出现的次数小于总数时，开始游戏
            this.count++;
            this.speed = parseInt(this.setSpeed);
            let img = document.createElement("img");
            this.random.x = Math.floor(Math.random() * 824);
            this.random.y = Math.floor(Math.random() * 464);
            img.style.position = "absolute";
            img.style.left = this.random.x + "px";
            img.style.top = this.random.y + "px";
            img.src = "static/img/dog.png";
            img.i = this.mice.length;
            img.timeout = window.setTimeout(this.sleepMouse, 1000, img);
            img.onclick = this.clickItem;
            this.$refs.wrapper.appendChild(img);
            this.mice.push(img);
          } else {
            //地鼠出现次数超过总数结束游戏
            this.$toast.show("游戏已结束");
            this.message = "重新开始";
            // 结束游戏的四行代码
            clearInterval(this.timerId);
            this.timerId = null;
            this.count = 0;
            this.clickNum = 0;
          }
        }, this.setSpeed);
      } else {
        this.$toast.show("游戏已经开始了！！！");
      }
    },
    // 点击地鼠
    clickItem(event) {
      let img = event.target;
      clearTimeout(img.timeout);
      this.mice.splice(this.mice[img.i], 1);
      this.$refs.wrapper.removeChild(img);
      this.clickNum++;
    },
    sleepMouse(img) {
      this.mice.splice(this.mice[img.i], 1);
      this.$refs.wrapper.removeChild(img);
    },
    endGame() {
      console.log(this.timerId);
      if (this.timerId === null) {
        this.$toast.show("游戏已结束");
      } else {
        this.$toast.show("游戏结束");
        clearInterval(this.timerId);
        this.timerId = null;
        this.clickNum = 0;
        this.count = 0;
      }
    },
  },
};
</script>

<style scoped>
.game {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 10px;
  border: 1px solid #ccc;
  width: 1200px;
  padding: 10px;
  user-select: none;
}
.game::after {
  content: "";
  display: block;
  clear: both;
}
.name {
  font-weight: normal;
  font-size: 16px;
  color: #eee;
  padding: 10px 0;
  text-align: center;
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
}
.wrapper {
  position: relative;
  width: 900px;
  height: 540px;
  float: left;
}
.scoped {
  width: 260px;
  height: 540px;
  float: left;
  padding-left: 15px;
  border-left: 1px solid #ccc;
}
.set {
  height: 270px;
  width: 100%;
  border: 1px solid #ccc;
}
.set p {
  padding: 10px;
  color: #fff;
  font-size: 16px;
}

.btn {
  margin-top: 10px;
}

.radius-click {
  margin: 10px 0 10px 55px;
}

.count {
  margin-top: 5px;
  padding: 10px;
  border: 1px solid #ccc;
}

.count h3 {
  font-weight: normal;
  font-size: 16px;
  color: #eee;
  padding: 10px 0;
  text-align: center;
  margin-bottom: 20px;
}
</style>