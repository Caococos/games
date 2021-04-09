<template>
  <div class="btn-container">
    <img class="svg" src="~@/assets/img/shideright39.svg" alt="">
    <button>{{message}}</button>
  </div>
</template>

<script>
export default {
  name: "RadiusClick",
  props: {
    message: {
      type: String,
      default: 'Hover me'
    }
  }
}
</script>

<style scoped>
.btn-container {
  position: relative;
}

button {
  border: 0;
  border-radius: 50px;
  color: white;
  background: #5f55af;
  padding: 15px 20px 15px 60px;
  /*text-transform: uppercase;*/
  background: linear-gradient(to right, #f72585 50%, #5f55af 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition:all 2s ease;
}

.svg {
  background: #f72585;
  padding: 16px;
  border-radius: 50%;
  position: absolute;
  left: 0;
  top: 0%;
}

button:hover {
  background-position: left bottom;
}
</style>