<template>
  <tu-space :size="32">
    <tu-color-picker v-model="value" disabled />
    <tu-color-picker defaultValue="#49629A" showText disabled />
  </tu-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref('#49629A');
</script>
