<template>
  <tu-select placeholder="Please select" v-model="value">
    <template #label="{ data }">
      <span> %{{ data?.label }}</span>
    </template>
    <tu-select-option>Option1</tu-select-option>
    <tu-select-option>Option2</tu-select-option>
    <tu-select-option>Option3</tu-select-option>
    <tu-select-option>Option4</tu-select-option>
    <tu-select-option>Option5</tu-select-option>
    <tu-select-option>Option6</tu-select-option>
  </tu-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value = ref('');
</script>
