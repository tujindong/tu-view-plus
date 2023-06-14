
<template>
  <tu-radio v-model="radio" label="1">备选项1</tu-radio>
  <tu-radio v-model="radio" label="2">备选项2</tu-radio>

  <tu-transition name="fade-in-linear">
    <div v-show="sourceVisible">
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
    </div>
  </tu-transition>
  <tu-button @click="toggleSourceVisible()">123</tu-button>
</template>
  
<script lang="ts" setup>
import { ref } from 'vue';
import { useToggle } from '@vueuse/core';

const radio = ref('1');

const [sourceVisible, toggleSourceVisible] = useToggle();
</script>
<style lang="scss">
</style>
  