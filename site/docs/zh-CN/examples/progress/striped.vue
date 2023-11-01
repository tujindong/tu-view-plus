<template>
  <tu-progress striped :percentage="50" />
  <tu-progress status="warning" striped striped-flow :percentage="30" />
  <tu-progress
    status="success"
    striped
    striped-flow
    :percentage="100"
    :duration="10"
  />
  <tu-progress
    status="exception"
    striped
    striped-flow
    :percentage="percentage"
    :duration="duration"
  />
  <tu-button-group>
    <tu-button :icon="Minus" @click="handleDecrease" />
    <tu-button :icon="Plus" @click="handleIncrease" />
  </tu-button-group>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { Minus, Plus } from '@tu-view-plus/icons-vue';

const percentage = ref<number>(70);
const duration = computed(() => Math.floor(percentage.value / 10));

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
