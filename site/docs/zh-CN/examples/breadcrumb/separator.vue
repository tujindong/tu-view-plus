<template>
  <tu-breadcrumb class="mb-2">
    <template #separator>
      <tu-icon><ArrowRight /></tu-icon>
    </template>
    <tu-breadcrumb-item>主页</tu-breadcrumb-item>
    <tu-breadcrumb-item>频道</tu-breadcrumb-item>
    <tu-breadcrumb-item>新闻</tu-breadcrumb-item>
  </tu-breadcrumb>

  <br />

  <tu-breadcrumb separator="~">
    <tu-breadcrumb-item>主页</tu-breadcrumb-item>
    <tu-breadcrumb-item>频道</tu-breadcrumb-item>
    <tu-breadcrumb-item>新闻</tu-breadcrumb-item>
  </tu-breadcrumb>
</template>

<script lang="ts" setup>
import { ArrowRight } from '@tu-view-plus/icons-vue';
</script>
