
<template>
  <tu-button type="primary">1233</tu-button>

  <br />
  <br />

  <TuCollapseTransition>
    <div v-show="sourceVisible">
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
    </div>
  </TuCollapseTransition>
  <tu-button @click="toggleSourceVisible()">123</tu-button>
</template>
  
<script lang="ts" setup>
import { useToggle } from '@vueuse/core';
const [sourceVisible, toggleSourceVisible] = useToggle();
</script>
<style lang="scss">
</style>
  