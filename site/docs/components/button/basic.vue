<template>
  <tu-row class="mb-4">
    <tu-button>Default</tu-button>
    <tu-button type="primary">Primary</tu-button>
    <tu-button type="success">Success</tu-button>
    <tu-button type="info">Info</tu-button>
    <tu-button type="warning">Warning</tu-button>
    <tu-button type="danger">Danger</tu-button>
  </tu-row>

  <tu-row class="mb-4">
    <tu-button plain>Plain</tu-button>
    <tu-button type="primary" plain>Primary</tu-button>
    <tu-button type="success" plain>Success</tu-button>
    <tu-button type="info" plain>Info</tu-button>
    <tu-button type="warning" plain>Warning</tu-button>
    <tu-button type="danger" plain>Danger</tu-button>
  </tu-row>

  <tu-row class="mb-4">
    <tu-button round>Round</tu-button>
    <tu-button type="primary" round>Primary</tu-button>
    <tu-button type="success" round>Success</tu-button>
    <tu-button type="info" round>Info</tu-button>
    <tu-button type="warning" round>Warning</tu-button>
    <tu-button type="danger" round>Danger</tu-button>
  </tu-row>

  <tu-row>
    <tu-button :icon="Search" circle />
    <tu-button type="primary" :icon="Edit" circle />
    <tu-button type="success" :icon="Check" circle />
    <tu-button type="info" :icon="Message" circle />
    <tu-button type="warning" :icon="Star" circle />
    <tu-button type="danger" :icon="Delete" circle />
  </tu-row>
</template>

<script lang="ts" setup>
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star
} from '@tu-view-plus/icons-vue';
</script>
