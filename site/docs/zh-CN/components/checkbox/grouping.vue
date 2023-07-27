<template>
  <tu-checkbox-group v-model="checkList">
    <tu-checkbox label="1">选项1</tu-checkbox>
    <tu-checkbox label="2">选项2</tu-checkbox>
    <tu-checkbox label="3">选项3</tu-checkbox>
    <tu-checkbox label="4" disabled>选项4</tu-checkbox>
    <tu-checkbox label="5" disabled>选项5</tu-checkbox>
  </tu-checkbox-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checkList = ref(['1', '5']);
</script>