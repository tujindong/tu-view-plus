<template>
  <tu-row class="mb-2">
    <tu-button>默认按钮</tu-button>
    <tu-button type="primary">主要按钮</tu-button>
    <tu-button type="success">成功按钮</tu-button>
    <tu-button type="info">信息按钮</tu-button>
    <tu-button type="warning">警告按钮</tu-button>
    <tu-button type="danger">危险按钮</tu-button>
  </tu-row>

  <tu-row class="mb-2">
    <tu-button round>默认按钮</tu-button>
    <tu-button type="primary" round>主要按钮</tu-button>
    <tu-button type="success" round>成功按钮</tu-button>
    <tu-button type="info" round>信息按钮</tu-button>
    <tu-button type="warning" round>警告按钮</tu-button>
    <tu-button type="danger" round>危险按钮</tu-button>
  </tu-row>

  <tu-row>
    <tu-button circle>
      <template #icon><Search /></template>
    </tu-button>
    <tu-button type="success" circle>
      <template #icon><Search /></template>
    </tu-button>
    <tu-button type="primary" circle>
      <template #icon><Search /></template>
    </tu-button>
    <tu-button type="info" circle>
      <template #icon><Search /></template>
    </tu-button>
    <tu-button type="warning" circle>
      <template #icon><Search /></template>
    </tu-button>
    <tu-button type="danger" circle>
      <template #icon><Search /></template>
    </tu-button>
  </tu-row>
</template>

<script lang="ts" setup>
import { Search } from '@tu-view-plus/icons-vue';
</script>
