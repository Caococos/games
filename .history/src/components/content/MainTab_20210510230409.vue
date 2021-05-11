<template>
  <div class="main-tab">
    <button
      class="btn one"
      @click="goToHome"
    >Home</button>
    <button
      class="btn two"
      @click="goToGame"
    >Game</button>
    <button
      class="btn three"
      @click="goToEffects"
    >Effects</button>
    <!--    <button  class="btn four" @click="goToG3">贪吃蛇</button>-->
  </div>
</template>

<script>
export default {
  name: "MainTab",
  methods: {
    goToHome() {
      this.$router.push("/");
    },
    goToGame() {
      this.$router.push("/game/game1");
    },
    goToEffects() {
      this.$router.push("/effects/");
    }
    // goToG3() {
    //   this.$router.push('/game3')
    // }
  }
};
</script>

<style scoped>
.main-tab {
  display: flex;
  justify-content: space-around;
  position: relative;
  width: 500px;
  left: 50%;
  transform: translateX(-50%);
}

.btn {
  padding: 10px 20px;
  border: 1px solid;
  background-color: transparent;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 300;
  outline: 0; /* 消除点击button之后的白边 */
}

.one {
  color: #ec4e35;
}

.two {
  color: #f038ff;
}

.three {
  color: #b9e769;
}

.four {
  color: #4cc9f0;
}

.btn:hover {
  color: white;
  /*border: 0;*/
}

.one:hover {
  background-color: #ec4e35;
  -webkit-box-shadow: 10px 10px 99px 6px rgb(236, 78, 53);
  -moz-box-shadow: 10px 10px 99px 6px rgb(236, 78, 53);
  box-shadow: 10px 10px 99px 6px rgb(236, 78, 53);
  border-color: #ec4e35;
}

.two:hover {
  background-color: #f038ff;
  -webkit-box-shadow: 10px 10px 99px 6px rgba(240, 56, 255, 1);
  -moz-box-shadow: 10px 10px 99px 6px rgba(240, 56, 255, 1);
  box-shadow: 10px 10px 99px 6px rgba(240, 56, 255, 1);
  border-color: #f038ff;
}

.three:hover {
  background-color: #b9e769;
  -webkit-box-shadow: 10px 10px 99px 6px rgba(185, 231, 105, 1);
  -moz-box-shadow: 10px 10px 99px 6px rgba(185, 231, 105, 1);
  box-shadow: 10px 10px 99px 6px rgba(185, 231, 105, 1);
  border-color: #b9e769;
}

.four:hover {
  background-color: #4cc9f0;
  -webkit-box-shadow: 10px 10px 99px 6px rgb(76, 201, 240);
  -moz-box-shadow: 10px 10px 99px 6px rgba(76, 201, 240, 1);
  box-shadow: 10px 10px 99px 6px rgba(76, 201, 240, 1);
  border-color: #4cc9f0;
}
</style>