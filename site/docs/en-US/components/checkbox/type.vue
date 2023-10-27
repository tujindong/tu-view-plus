<template>
  <div>
    <p>按钮样式</p>
    <tu-checkbox-group v-model="checked1" type="button">
      <tu-checkbox :label="1">选项1</tu-checkbox>
      <tu-checkbox :label="2">选项2</tu-checkbox>
      <tu-checkbox :label="3">选项3</tu-checkbox>
    </tu-checkbox-group>
  </div>
  <div>
    <p>边框样式</p>
    <tu-checkbox-group v-model="checked2" type="border">
      <tu-checkbox :label="1">选项1</tu-checkbox>
      <tu-checkbox :label="2">选项2</tu-checkbox>
      <tu-checkbox :label="3">选项3</tu-checkbox>
    </tu-checkbox-group>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checked1 = ref([]);
const checked2 = ref([]);
</script>