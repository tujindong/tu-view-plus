<template>
  <tu-radio-group class="mb-2" v-model="effect" type="button">
    <tu-radio label="default">default</tu-radio>
    <tu-radio label="flat">flat</tu-radio>
    <tu-radio label="outset">outset</tu-radio>
    <tu-radio label="inset">inset</tu-radio>
    <tu-radio label="bordered">bordered</tu-radio>
    <tu-radio label="outlined">outlined</tu-radio>
  </tu-radio-group>

  <tu-menu
    class="mb-2"
    style="width: 200px; border-radius: 4px"
    :effect="effect"
    :default-selected-keys="['1']"
  >
    <tu-menu-item key="1">Navigation 1</tu-menu-item>
    <tu-menu-item key="2">Navigation 2</tu-menu-item>
    <tu-sub-menu key="3" title="Navigation 3">
      <tu-menu-item key="3-1">Menu 1</tu-menu-item>
      <tu-menu-item key="3-2">Menu 2</tu-menu-item>
    </tu-sub-menu>
    <tu-menu-item key="4">Navigation 4</tu-menu-item>
  </tu-menu>

  <tu-menu mode="horizontal" :effect="effect" :default-selected-keys="['1']">
    <tu-menu-item key="1">Navigation 1</tu-menu-item>
    <tu-menu-item key="2">Navigation 2</tu-menu-item>
    <tu-sub-menu key="3" title="Navigation 3">
      <tu-menu-item key="3-1">Menu 1</tu-menu-item>
      <tu-menu-item key="3-2">Menu 2</tu-menu-item>
    </tu-sub-menu>
    <tu-menu-item key="4">Navigation 4</tu-menu-item>
  </tu-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const effect = ref('outset');
</script>
