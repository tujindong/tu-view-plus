<template>
  <tu-button @click="add">添加选项</tu-button>
  <tu-button @click="remove">减少选项</tu-button>
  <tu-scrollbar max-height="260px">
    <div v-for="item in count" :key="item" class="demo-scrollbar-item">
      {{ item }}
    </div>
  </tu-scrollbar>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const count = ref(3);
const add = () => {
  count.value++;
};
const remove = () => {
  if (count.value > 0) count.value--;
};
</script>

<style scoped>
.demo-scrollbar-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  margin: 10px;
  text-align: center;
  border-radius: 2px;
  font-size: 14px;
  background: #7693f5;
  color: #465eb8;
}
</style>
