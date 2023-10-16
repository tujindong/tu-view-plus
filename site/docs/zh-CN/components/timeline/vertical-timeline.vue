<template>
  <tu-row :style="{ marginBottom: '24px' }">
    <tu-radio-group @change="handleModeChange" v-model="mode">
      <tu-radio label="left">左侧</tu-radio>
      <tu-radio label="right">右侧</tu-radio>
      <tu-radio label="alternate">交替</tu-radio>
    </tu-radio-group>
  </tu-row>
  <tu-timeline :mode="mode" labelPosition="relative">
    <tu-timeline-item label="2023-08">
      <tu-row :style="{ display: 'inline-flex', alignItems: 'center' }">
        <img
          width="30"
          :style="{ marginRight: '16px', marginBottom: '12px' }"
          src="https://github.com/tujindong/tu-view-plus/raw/main/site/docs/assets/logo.svg"
        />
        <div :style="{ marginBottom: '12px' }">
          TuViewPlus-1.0
          <div :style="{ fontSize: '12px', color: '#4E5969' }">
            一款有触觉的 vue3.0 UI组件库
          </div>
        </div>
      </tu-row>
    </tu-timeline-item>
    <tu-timeline-item label="2023-09">
      <tu-row :style="{ display: 'inline-flex', alignItems: 'center' }">
        <img
          width="30"
          :style="{ marginRight: '16px', marginBottom: '12px' }"
          src="https://github.com/tujindong/tu-view-plus/raw/main/site/docs/assets/logo.svg"
        />
        <div :style="{ marginBottom: '12px' }">
          TuViewPlus-2.0
          <div :style="{ fontSize: '12px', color: '#4E5969' }">
            一款有触觉的 vue3.0 UI组件库
          </div>
        </div>
      </tu-row>
    </tu-timeline-item>
    <tu-timeline-item label="2023-10">
      <tu-row :style="{ display: 'inline-flex', alignItems: 'center' }">
        <img
          width="30"
          :style="{ marginRight: '16px', marginBottom: '12px' }"
          src="https://github.com/tujindong/tu-view-plus/raw/main/site/docs/assets/logo.svg"
        />
        <div :style="{ marginBottom: '12px' }">
          TuViewPlus-3.0
          <div :style="{ fontSize: '12px', color: '#4E5969' }">
            一款有触觉的 vue3.0 UI组件库
          </div>
        </div>
      </tu-row>
    </tu-timeline-item>
  </tu-timeline>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const mode = ref('left');

const handleModeChange = (_mode: string) => {
  mode.value = _mode;
};
</script>

<style lang="scss" scoped>
</style>
