<template>
  <tu-space class="mb-2">
    <template #divider>
      <tu-divider direction="vertical" />
    </template>
    <tu-button>Button 1</tu-button>
    <tu-button>Button 2</tu-button>
    <tu-button>Button 3</tu-button>
  </tu-space>

  <br />

  <tu-space class="mb-2">
    <template #divider>
      <tu-icon style="margin: 0 6px"><Pouring /></tu-icon>
    </template>
    <tu-button>Button 1</tu-button>
    <tu-button>Button 2</tu-button>
    <tu-button>Button 3</tu-button>
  </tu-space>
</template>

<script lang="ts" setup>
import { Pouring } from '@tu-view-plus/icons-vue';
</script>
