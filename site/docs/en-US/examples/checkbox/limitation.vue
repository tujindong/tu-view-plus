<template>
  <p>最少选择1个，最多选择3个</p>
  <tu-checkbox-group v-model="checkedList" :min="1" :max="3">
    <tu-checkbox v-for="option in options" :key="option" :label="option">
      {{ option }}
    </tu-checkbox>
  </tu-checkbox-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const options = ['选项1', '选项2', '选项3', '选项4'];
const checkedList = ref([] as string[]);
</script>