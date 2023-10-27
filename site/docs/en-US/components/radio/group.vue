<template>
  <tu-radio-group v-model="radio" @change="handleChange">
    <tu-radio :label="1">选项1</tu-radio>
    <tu-radio :label="2">选项2</tu-radio>
    <tu-radio :label="3">选项3</tu-radio>
  </tu-radio-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const radio = ref(1);

function handleChange(value: number) {
  console.log(value);
}
</script>