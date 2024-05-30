<template>
  <tu-breadcrumb class="mb-2">
    <template #separator>
      <tu-icon><ArrowRight /></tu-icon>
    </template>
    <tu-breadcrumb-item>Home</tu-breadcrumb-item>
    <tu-breadcrumb-item>Channel</tu-breadcrumb-item>
    <tu-breadcrumb-item>News</tu-breadcrumb-item>
  </tu-breadcrumb>

  <br />

  <tu-breadcrumb separator="~">
    <tu-breadcrumb-item>Home</tu-breadcrumb-item>
    <tu-breadcrumb-item>Channel</tu-breadcrumb-item>
    <tu-breadcrumb-item>News</tu-breadcrumb-item>
  </tu-breadcrumb>
</template>

<script lang="ts" setup>
import { ArrowRight } from '@tu-view-plus/icons-vue';
</script>
