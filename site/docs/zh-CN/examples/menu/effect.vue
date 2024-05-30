<template>
  <tu-radio-group class="mb-2" v-model="effect" type="button">
    <tu-radio label="default">默认</tu-radio>
    <tu-radio label="flat">扁平</tu-radio>
    <tu-radio label="outset">上方阴影</tu-radio>
    <tu-radio label="inset">下方阴影</tu-radio>
    <tu-radio label="bordered">边框</tu-radio>
    <tu-radio label="outlined">外轮廓</tu-radio>
  </tu-radio-group>

  <tu-menu
    class="mb-2"
    style="width: 200px; border-radius: 4px"
    :effect="effect"
    :default-selected-keys="['1']"
  >
    <tu-menu-item key="1">导航一</tu-menu-item>
    <tu-menu-item key="2">导航二</tu-menu-item>
    <tu-sub-menu key="3" title="导航三">
      <tu-menu-item key="3-1">选项一</tu-menu-item>
      <tu-menu-item key="3-2">选项二</tu-menu-item>
    </tu-sub-menu>
    <tu-menu-item key="4">导航四</tu-menu-item>
  </tu-menu>

  <tu-menu mode="horizontal" :effect="effect" :default-selected-keys="['1']">
    <tu-menu-item key="1">导航一</tu-menu-item>
    <tu-menu-item key="2">导航二</tu-menu-item>
    <tu-sub-menu key="3" title="导航三">
      <tu-menu-item key="3-1">选项一</tu-menu-item>
      <tu-menu-item key="3-2">选项二</tu-menu-item>
    </tu-sub-menu>
    <tu-menu-item key="4">导航四</tu-menu-item>
  </tu-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const effect = ref('outset');
</script>
