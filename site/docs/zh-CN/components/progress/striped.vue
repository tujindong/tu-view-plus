<template>
  <tu-progress :percentage="50" :stroke-width="5" striped />
  <tu-progress
    :percentage="30"
    :stroke-width="5"
    status="warning"
    striped
    striped-flow
  />
  <tu-progress
    :percentage="100"
    :stroke-width="10"
    status="success"
    striped
    striped-flow
    :duration="10"
  />
  <tu-progress
    :percentage="percentage"
    :stroke-width="5"
    status="exception"
    striped
    striped-flow
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
