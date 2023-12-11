<template>
  <tu-select placeholder="Please select" v-model="value" loading>
    <tu-select-option>Option 1</tu-select-option>
    <tu-select-option>Option 2</tu-select-option>
    <tu-select-option>Option 3</tu-select-option>
  </tu-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value = ref('');
</script>
