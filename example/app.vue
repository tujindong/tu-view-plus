<template>
  <div style="width: 100%">
    <br />
    <br />
    <tu-configProvider>
      <tu-button>provider按钮</tu-button>
    </tu-configProvider>
    <br />
    <br />
    <br />
    <br />
    <tu-space :size="32">
      <tu-color-picker defaultValue="#49629A" hideTrigger showPreset />
      <tu-color-picker defaultValue="#49629A" hideTrigger showPreset disabled />
    </tu-space>
    <br />
    <br />
    <br />
    <br />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value = ref('#165DFF');

setTimeout(() => {
  value.value = '#ffff00';
}, 2000);
</script>
<style lang="scss"></style>
