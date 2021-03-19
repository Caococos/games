<template>
  <div id="home">
    <ul>
      <li v-for="(item, index) in games.length" @click="enterGame(index)">Games{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      games: [1, 2, 3, 4]
    }
  },
  methods: {
    enterGame(index) {
      switch (index) {
        case 0:
          this.$router.push('/game1')
          break
        case 1:
          this.$router.push('/game2')
          break
        case 2:
          this.$router.push('/game3')
          break
        case 3:
          this.$router.push('/game4')
          break
      }
    }
  }
}
</script>

<style scoped>
  #home {
    width: 350px;
    height: 350px;
    background-color: green;
    margin: 200px auto;
  }

  ul {
    position: relative;
    width: 350px;
    height: 350px;
    list-style: none;
  }

  li {
    position: absolute;
    width: 100px;
    height: 100px;
    background-color: pink;
    text-align: center;
    line-height: 100px;
  }

  li:nth-child(1) {
    top: 0;
    left: 125px;
  }

  li:nth-child(2) {
    right: 0;
    top: 125px;
  }

  li:nth-child(3) {
    bottom: 0;
    left: 125px;
  }

  li:nth-child(4) {
    top: 125px;
    left: 0;
  }

</style>