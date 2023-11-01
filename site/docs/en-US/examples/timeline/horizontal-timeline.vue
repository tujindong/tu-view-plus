<template>
  <tu-radio-group
    class="mb-2"
    type="button"
    v-model="mode"
    @change="handleModeChange"
  >
    <tu-radio label="top">top</tu-radio>
    <tu-radio label="alternate">alternate</tu-radio>
    <tu-radio label="bottom">bottom</tu-radio>
  </tu-radio-group>

  <tu-timeline direction="horizontal" :mode="mode">
    <tu-timeline-item label="2023-08">
      <div style="margin-bottom: 6px">Tu View Plus</div>
      <div style="font-size: 12px">A vue 3.x Neumorphism UI design for web</div>
    </tu-timeline-item>
    <tu-timeline-item label="2023-09">
      <div style="margin-bottom: 6px">Tu View Plus</div>
      <div style="font-size: 12px">A vue 3.x Neumorphism UI design for web</div>
    </tu-timeline-item>
    <tu-timeline-item label="2023-10">
      <div style="margin-bottom: 6px">Tu View Plus</div>
      <div style="font-size: 12px">A vue 3.x Neumorphism UI design for web</div>
    </tu-timeline-item>
  </tu-timeline>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const mode = ref('top');

const handleModeChange = (_mode: string) => {
  mode.value = _mode;
};
</script>
