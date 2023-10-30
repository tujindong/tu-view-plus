<template>
  <div>
    <p>按钮样式</p>
    <tu-radio-group v-model="radio1" type="button">
      <tu-radio :label="1">选项1</tu-radio>
      <tu-radio :label="2">选项2</tu-radio>
      <tu-radio :label="3">选项3</tu-radio>
    </tu-radio-group>
  </div>
  <div>
    <p>边框样式</p>
    <tu-radio-group v-model="radio2" type="border">
      <tu-radio :label="1">选项1</tu-radio>
      <tu-radio :label="2">选项2</tu-radio>
      <tu-radio :label="3">选项3</tu-radio>
    </tu-radio-group>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const radio1 = ref(1);
const radio2 = ref(1);
</script>