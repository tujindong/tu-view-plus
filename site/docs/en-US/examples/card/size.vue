<template>
  <tu-row :gutter="20">
    <tu-col :span="6">
      <tu-card title="Mini card" size="mini">
        <template #extra>
          <tu-icon><Close /></tu-icon>
        </template>
        <div v-for="i in 4" :key="i">
          {{ 'Card content ' + i }}
        </div>
      </tu-card>
    </tu-col>
    <tu-col :span="6">
      <tu-card title="Small card" size="small">
        <template #extra>
          <tu-icon><Close /></tu-icon>
        </template>
        <div v-for="i in 4" :key="i">
          {{ 'Card content ' + i }}
        </div>
      </tu-card>
    </tu-col>
    <tu-col :span="6">
      <tu-card title="Medium Card">
        <template #extra>
          <tu-icon><Close /></tu-icon>
        </template>
        <div v-for="i in 4" :key="i">
          {{ 'Card content ' + i }}
        </div>
      </tu-card>
    </tu-col>
    <tu-col :span="6">
      <tu-card title="Large Card" size="large">
        <template #extra>
          <tu-icon><Close /></tu-icon>
        </template>
        <div v-for="i in 4" :key="i">
          {{ 'Card content ' + i }}
        </div>
      </tu-card>
    </tu-col>
  </tu-row>
</template>

<script lang="ts" setup>
import { Close } from '@tu-view-plus/icons-vue';
</script>
