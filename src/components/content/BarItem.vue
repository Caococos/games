<template>
  <div class="bar-item">{{ props.message }}</div>
</template>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    message: string
  }>(),
  { message: '未定义' }
)
</script>

<style scoped lang="scss">
.bar-item {
  margin-bottom: 5px;
  width: 80px;
  height: 80px;
  line-height: 80px;
  text-align: center;
  border-radius: 50%;
  font-size: 12px;
  background-color: rgba(0, 0, 0, 0.2);
}

.bar-item:hover {
  background-color: #86bdae;
  -webkit-box-shadow: 10px 10px 99px 6px rgb(134, 189, 174);
  -moz-box-shadow: 10px 10px 99px 6px rgb(134, 189, 174);
  box-shadow: 10px 10px 99px 6px rgb(134, 189, 174);
  border-color: #86bdae;
}
</style>
