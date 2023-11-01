<template>
  <tu-radio-group v-model="radio" @change="handleChange">
    <tu-radio :label="1">Option 1</tu-radio>
    <tu-radio :label="2">Option 2</tu-radio>
    <tu-radio :label="3">Option 3</tu-radio>
  </tu-radio-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const radio = ref(1);

function handleChange(value: number) {
  console.log(value);
}
</script>
