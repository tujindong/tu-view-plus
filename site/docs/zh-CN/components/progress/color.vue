<template>
  <tu-progress :percentage="percentage" :color="customColor" />
  <tu-progress :percentage="percentage" :color="customColorMethod" />
  <tu-progress :percentage="percentage" :color="customColors" />
  <tu-progress :percentage="percentage" :color="customColors" />
  <div>
    <tu-button-group>
      <tu-button :icon="Minus" @click="handleDecrease" />
      <tu-button :icon="Plus" @click="handleIncrease" />
    </tu-button-group>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { Minus, Plus } from '@tu-view-plus/icons-vue';

const percentage = ref(20);
const customColor = ref('#409eff');

const customColors = [
  { color: '#f56c6c', percentage: 20 },
  { color: '#e6a23c', percentage: 40 },
  { color: '#5cb87a', percentage: 60 },
  { color: '#1989fa', percentage: 80 },
  { color: '#6f7ad3', percentage: 100 }
];

const customColorMethod = (percentage: number) => {
  if (percentage < 30) {
    return '#909399';
  }
  if (percentage < 70) {
    return '#e6a23c';
  }
  return '#67c23a';
};

const handleIncrease = () => {
  percentage.value += 10;
  if (percentage.value > 100) {
    percentage.value = 100;
  }
};

const handleDecrease = () => {
  percentage.value -= 10;
  if (percentage.value < 0) {
    percentage.value = 0;
  }
};
</script>
<style scoped>
.tu-progress--line {
  margin-bottom: 15px;
}
</style>
