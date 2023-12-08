<template>
  <tu-select placeholder="请选择" v-model="value">
    <template #label="{ data }">
      <span> %{{ data?.label }}</span>
    </template>
    <tu-select-option>选项1</tu-select-option>
    <tu-select-option>选项2</tu-select-option>
    <tu-select-option>选项3</tu-select-option>
    <tu-select-option>选项4</tu-select-option>
    <tu-select-option>选项5</tu-select-option>
    <tu-select-option>选项6</tu-select-option>
  </tu-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value = ref('');
</script>
