<template>
  <tu-select placeholder="请选择" v-model="value" loading>
    <tu-select-option>选项 1</tu-select-option>
    <tu-select-option>选项 2</tu-select-option>
    <tu-select-option>选项 3</tu-select-option>
  </tu-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value = ref('');
</script>
