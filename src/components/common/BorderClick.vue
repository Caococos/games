<template>
    <div id="draw-border">
      <button>{{this.message}}</button>
    </div>
</template>

<script>
export default {
  name: "BorderClick",
  props: {
    message: {
      type: String,
      default: 'Hover me'
    }
  }
}
</script>

<style scoped>
/*#draw-border {*/
/*  display: flex;*/
/*  align-items: center;*/     /* 在页面中央显示 */
/*  justify-content: center;*/
/*}*/

button {
  border: 0;
  background: none;
  text-transform: uppercase;
  color: #4361ee;
  font-weight: bold;
  position: relative;
  outline: none;
  padding: 10px 20px;
  box-sizing: border-box;
}

button::before, button::after {
  box-sizing: inherit;
  position: absolute;
  content: '';
  border: 2px solid transparent;
  width: 0;
  height: 0;
}

button::after {
  bottom: 0;
  right: 0;
}

button::before {
  top: 0;
  left: 0;
}

button:hover::before, button:hover::after {
  width: 100%;
  height: 100%;
}

button:hover::before {
  border-top-color: #4361ee;
  border-right-color: #4361ee;
  transition: width 0.3s ease-out, height 0.3s ease-out 0.3s;
}

button:hover::after {
  border-bottom-color: #4361ee;
  border-left-color: #4361ee;
  transition: border-color 0s ease-out 0.6s, width 0.3s ease-out 0.6s, height 0.3s ease-out 1s;
}

</style>