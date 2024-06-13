<template>
  <tu-color-picker v-model="value">
    <tu-tag effect="dark" :color="value">
      <template #icon><BrushFilled /></template>
      {{ value }}
    </tu-tag>
  </tu-color-picker>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { BrushFilled } from '@tu-view-plus/icons-vue';

const value = ref('#49629A');
</script>
