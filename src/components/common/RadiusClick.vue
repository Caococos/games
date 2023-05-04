<template>
  <div class="btn-container">
    <img class="svg" src="~@/assets/img/shideright39.svg" alt="" />
    <button>{{ props.message }}</button>
  </div>
</template>

<script lang="ts" setup>
const props = withDefaults(defineProps<{ message: string }>(), { message: 'Hover me' })
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
  transition: all 2s ease;
  cursor: pointer;
}

.svg {
  background: #f72585;
  padding: 16px;
  border-radius: 50%;
  position: absolute;
}
.svg:hover + button {
  background-position: left bottom;
}
button:hover {
  background-position: left bottom;
}
</style>
