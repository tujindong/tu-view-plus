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
    <tu-button size="mini">超小按钮</tu-button>
    <tu-button size="small">小型按钮</tu-button>
    <tu-button>默认按钮</tu-button>
    <tu-button size="large">大型按钮</tu-button>
  </tu-row>

  <tu-row class="demo-button-row mb-2">
    <tu-button size="mini" round>超小按钮</tu-button>
    <tu-button size="small" round>小型按钮</tu-button>
    <tu-button round>默认按钮</tu-button>
    <tu-button size="large" round>大型按钮</tu-button>
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