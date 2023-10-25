<template>
  <tu-radio-group
    v-model="isReverse"
    style="margin-bottom: 10px"
    @change="handleReverseChange"
  >
    <tu-radio :label="true">倒序</tu-radio>
    <tu-radio :label="false">正序</tu-radio>
  </tu-radio-group>

  <tu-timeline :reverse="isReverse">
    <tu-timeline-item label="2023-10-10">节点1</tu-timeline-item>
    <tu-timeline-item label="2023-10-01">节点2</tu-timeline-item>
    <tu-timeline-item label="2023-09-30">节点3</tu-timeline-item>
  </tu-timeline>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const isReverse = ref(true);

const handleReverseChange = (bool: boolean) => {
  isReverse.value = bool;
};
</script>
