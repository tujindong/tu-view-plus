<template>
  <div>
    <tu-radio-group
      class="mb-2"
      type="button"
      v-model="position"
      @change="handleLabelPositionChange"
    >
      <tu-radio label="same">同侧</tu-radio>
      <tu-radio label="relative">交替</tu-radio>
    </tu-radio-group>

    <tu-timeline mode="left" :labelPosition="position">
      <tu-timeline-item label="2023-09-30"> 节点1 </tu-timeline-item>
      <tu-timeline-item label="2023-10-01"> 节点2 </tu-timeline-item>
      <tu-timeline-item label="2023-10-02"> 节点3 </tu-timeline-item>
    </tu-timeline>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const position = ref('same');

const handleLabelPositionChange = (_position: string) => {
  position.value = _position;
};
</script>
