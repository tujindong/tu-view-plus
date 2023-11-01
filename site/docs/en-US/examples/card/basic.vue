<template>
  <tu-card title="Card name">
    <template #extra>
      <tu-icon><Close /></tu-icon>
    </template>
    <div v-for="i in 4" :key="i">
      {{ 'Card content ' + i }}
    </div>
  </tu-card>
</template>

<script lang="ts" setup>
import { Close } from '@tu-view-plus/icons-vue';
</script>
