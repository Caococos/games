<template>
  <div id="home">
    <div>
      <ul>
        <li v-for="(item, index) in games" :class="{'active': index === currentIndex}" :key="index">{{item}}</li>
      </ul>
    </div>
    <border-click class="borderClick" :message="message" @click.native="move" :style="{pointerEvents: isClick}" />
  </div>
</template>

<script>
import BorderClick from "@/components/common/BorderClick";
export default {
  name: "Home",
  components: {
    BorderClick
  },
  data() {
    return {
      message: "Game Start",
      games: ["打地鼠", "踩白块", "贪吃蛇", "未知"],
      isClick: "auto", //pointerEvents 让元素产生海市蜃楼，幽灵躯体般的效果

      //转动需要的变量
      number: 0, //随机产生的数字
      currentIndex: -1, //当前转到哪个位置
      cycle: 20, // 转动基本次数：即至少需要转动多少次再进入抽奖环节
      speed: 40, //初始转动速度
      times: 0, //转动跑格子次数
      timer: 0 //转动定时器
    };
  },
  methods: {
    //开始转动
    move() {
      if (this.message === "Game Start") {
        //这里点击一次之后会调用多次,故用if条件限制，防止用户多次点击
        this.isClick = "none";
        this.times += 1; //转动次数
        this.oneRoll(); //转动过程调用的每一次转动方法
        this.useNumber();
      } else {
        //转完之后再次点击可以进入详细游戏界面
        switch (this.currentIndex) {
          case 0:
            this.$router.push("/game");
            break;
          case 1:
            this.$router.push("/game/game2");
            break;
          case 2:
            this.$router.push("/game/game3");
            break;
          case 3:
            this.$router.push("/game/game4");
            break;
        }
      }
    },

    //每一次转动
    oneRoll() {
      this.number = Math.ceil(Math.random() * 4); //获取随机数
      let index = this.currentIndex; //当前转到哪个位置
      const count = this.games.length; //总共有多少个游戏
      index += 1;
      if (index > count - 1) {
        index = 0;
      }
      this.currentIndex = index;
    },

    useNumber() {
      //如果当前转动次数达到要求 && 目前转到的位置是目标位置
      if (this.times > this.cycle + 10 && this.number === this.currentIndex) {
        clearTimeout(this.timer); //清除转动定时器
        this.times = 0; //转动跑格子次数初始化为0，可以进行下一次抽奖

        this.message = "Go!!!";
        this.isClick = "auto"; //让盒子能够点击
      } else {
        if (this.times < this.cycle - 20) {
          this.speed -= 4; //加快转动速度
        } else {
          this.speed += 10; //转动即将结束，放慢转动速度
        }
        this.timer = setTimeout(this.move, this.speed); //开始转动
      }
    }
  }
};
</script>

<style scoped>
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
}

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