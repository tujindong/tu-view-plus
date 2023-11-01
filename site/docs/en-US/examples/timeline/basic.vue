<template>
  <tu-radio-group
    class="mb-2"
    type="button"
    v-model="isReverse"
    @change="handleReverseChange"
  >
    <tu-radio :label="true">No Reverse</tu-radio>
    <tu-radio :label="false">Reverse</tu-radio>
  </tu-radio-group>

  <tu-timeline :reverse="isReverse">
    <tu-timeline-item label="2023-10-10">Node 1</tu-timeline-item>
    <tu-timeline-item label="2023-10-01">Node 2</tu-timeline-item>
    <tu-timeline-item label="2023-09-30">Node 3</tu-timeline-item>
  </tu-timeline>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const isReverse = ref(true);

const handleReverseChange = (bool: boolean) => {
  isReverse.value = bool;
};
</script>
