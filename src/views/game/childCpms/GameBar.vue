<template>
  <div class="bar" ref="bar">
    <bar-item message="打地鼠" @click.native="toGame1"/>
    <bar-item message="踩白块" @click.native="toGame2"/>
    <bar-item message="贪吃蛇" @click.native="toGame3"/>
    <bar-item message="坦克大战" @click.native="toGame1"/>
    <bar-item message="猫和老鼠" @click.native="toGame1"/>
    <bar-item message="小猪佩奇" @click.native="toGame1"/>
    <bar-item message="糖果人" @click.native="toGame1"/>
  </div>
</template>

<script>
import BarItem from "@/components/content/tabBar/BarItem";
export default {
  name: "TabBar",
  components: {
    BarItem
  },
  methods: {
    toGame1() {
      this.$router.push({name: 'Game1'})
    },
    toGame2() {
      this.$router.push({name: 'Game2'})
    },
    toGame3() {
      this.$router.push({name: 'Game3'})
    },

  //  重置scale的函数
    resetScale() {
      this.$refs.bar.childNodes.forEach(li => {
        li.style.setProperty('--scale', 1)
      })
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.bar.childNodes.forEach(li => {
        li.addEventListener('mousemove', e => {
          let item = e.target
          let itemRect = item.getBoundingClientRect()
          let offset = Math.abs(e.clientY - itemRect.top) / itemRect.height

          //获取前后两个元素
          let prev = item.previousElementSibling || null
          let next = item.nextElementSibling || null

          //重置scale
          this.resetScale()

          let scale = 0.3     //图标放到最大1.6倍
          if(prev) {
            prev.style.setProperty('--scale', 1 + scale * Math.abs(offset - 1))
          }
          item.style.setProperty('--scale', 1 + scale)
          if(next) {
            next.style.setProperty('--scale', 1 + scale * offset)
          }
        })

      //  离开父盒子
        this.$refs.bar.addEventListener('mouseleave', e => {
          this.resetScale()
        })
      })
    })
  }
}
</script>

<style scoped lang="scss">
.bar {
  position: absolute;
  top: 38px;
  left: 0;
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