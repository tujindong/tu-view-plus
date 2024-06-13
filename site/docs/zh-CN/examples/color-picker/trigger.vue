<template>
  <tu-space>
    <tu-switch v-model="triggerProps.popupVisible"> </tu-switch>
    <tu-color-picker defaultValue="#49629A" :trigger-props="triggerProps" />
  </tu-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const triggerProps = ref({
  popupVisible: false,
  unmountOnClose: true
});
</script>
