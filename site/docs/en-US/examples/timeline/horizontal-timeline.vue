<template>
  <tu-radio-group
    class="mb-2"
    type="button"
    v-model="mode"
    @change="handleModeChange"
  >
    <tu-radio label="top">上方</tu-radio>
    <tu-radio label="alternate">交替</tu-radio>
    <tu-radio label="bottom">下方</tu-radio>
  </tu-radio-group>

  <tu-timeline direction="horizontal" :mode="mode">
    <tu-timeline-item label="2023-08">
      <div style="margin-bottom: 6px">TuViewPlus</div>
      <div style="font-size: 12px">一款有触觉的 vue3.0 UI组件库</div>
    </tu-timeline-item>
    <tu-timeline-item label="2023-09">
      <div style="margin-bottom: 6px">TuViewPlus</div>
      <div style="font-size: 12px">一款有触觉的 vue3.0 UI组件库</div>
    </tu-timeline-item>
    <tu-timeline-item label="2023-10">
      <div style="margin-bottom: 6px">TuViewPlus</div>
      <div style="font-size: 12px">一款有触觉的 vue3.0 UI组件库</div>
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
