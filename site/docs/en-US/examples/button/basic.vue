<template>
  <tu-row class="mb-2">
    <tu-button>Default</tu-button>
    <tu-button type="primary">Primary</tu-button>
    <tu-button type="success">Success</tu-button>
    <tu-button type="info">Information</tu-button>
    <tu-button type="warning">Warning</tu-button>
    <tu-button type="danger">Danger</tu-button>
  </tu-row>

  <tu-row class="mb-2">
    <tu-button round>Default</tu-button>
    <tu-button type="primary" round>Primary</tu-button>
    <tu-button type="success" round>Success</tu-button>
    <tu-button type="info" round>Information</tu-button>
    <tu-button type="warning" round>Warning</tu-button>
    <tu-button type="danger" round>Danger</tu-button>
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
