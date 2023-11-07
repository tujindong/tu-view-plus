<template>
  <tu-configProvider :locale="en">
    <tu-popconfirm content="Are you sure to delete this?" type="success">
      <tu-button type="success">success</tu-button>
    </tu-popconfirm>
    <tu-popconfirm content="Are you sure to delete this?" type="error">
      <tu-button type="danger">error</tu-button>
    </tu-popconfirm>
    <tu-popconfirm content="Are you sure to delete this?" type="warning">
      <tu-button type="warning">warning</tu-button>
    </tu-popconfirm>
    <tu-popconfirm content="Are you sure to delete this?" type="info">
      <tu-button type="info">info</tu-button>
    </tu-popconfirm>
  </tu-configProvider>
</template>

<script lang="ts" setup>
import { en } from 'tu-view-plus/locale/index.mjs';
</script>
