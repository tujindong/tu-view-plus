<template>
  <tu-row class="demo-button-row mb-2">
    <tu-button size="mini" circle>
      <template #icon><Search /></template>
    </tu-button>
    <tu-button size="small" circle>
      <template #icon><Search /></template>
    </tu-button>
    <tu-button circle>
      <template #icon><Search /></template>
    </tu-button>
    <tu-button size="large" circle>
      <template #icon><Search /></template>
    </tu-button>
  </tu-row>

  <tu-row class="demo-button-row mb-2">
    <tu-button size="mini">Mini</tu-button>
    <tu-button size="small">Small</tu-button>
    <tu-button>Medium</tu-button>
    <tu-button size="large">Large</tu-button>
  </tu-row>

  <tu-row class="demo-button-row mb-2">
    <tu-button size="mini" round>Mini</tu-button>
    <tu-button size="small" round>Small</tu-button>
    <tu-button round>Medium</tu-button>
    <tu-button size="large" round>Large</tu-button>
  </tu-row>

  <tu-row class="demo-button-row">
    <tu-button-group size="mini">
      <tu-button>
        <template #icon><ArrowLeft /></template>
      </tu-button>
      <tu-button>
        <template #icon><ArrowRight /></template>
      </tu-button>
    </tu-button-group>
    <tu-button-group size="small">
      <tu-button>
        <template #icon><ArrowLeft /></template>
      </tu-button>
      <tu-button>
        <template #icon><ArrowRight /></template>
      </tu-button>
    </tu-button-group>
    <tu-button-group>
      <tu-button>
        <template #icon><ArrowLeft /></template>
      </tu-button>
      <tu-button>
        <template #icon><ArrowRight /></template>
      </tu-button>
    </tu-button-group>
    <tu-button-group size="large">
      <tu-button>
        <template #icon><ArrowLeft /></template>
      </tu-button>
      <tu-button>
        <template #icon><ArrowRight /></template>
      </tu-button>
    </tu-button-group>
  </tu-row>
</template>

<script lang="ts" setup>
import { Search, ArrowLeft, ArrowRight } from '@tu-view-plus/icons-vue';
</script>

<style>
.demo-button-row {
  align-items: baseline;
}
</style>
