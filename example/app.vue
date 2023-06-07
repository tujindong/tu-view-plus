
<template>
  <tu-button size="large">大型按钮</tu-button>
  <tu-button>默认按钮</tu-button>
  <tu-button size="small">小型按钮</tu-button>
  <tu-button size="mini">超小按钮</tu-button>

  <tu-row style="margin-top: 20px">
    <tu-button size="large">大型按钮</tu-button>
    <tu-button>默认按钮</tu-button>
    <tu-button size="small">小型按钮</tu-button>
    <tu-button size="mini">超小按钮</tu-button>
  </tu-row>

  <br />
  <br />

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
import { useToggle } from '@vueuse/core';
const [sourceVisible, toggleSourceVisible] = useToggle();
</script>
<style lang="scss">
</style>
  