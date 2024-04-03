<template>
  <tu-row :gutter="20">
    <tu-col :span="6">
      <tu-card title="Card name" effect="inset">
        <template #extra>
          <tu-icon><Close /></tu-icon>
        </template>
        <div v-for="i in 4" :key="i">
          {{ 'Card content ' + i }}
        </div>
      </tu-card>
    </tu-col>
    <tu-col :span="6">
      <tu-card title="Card name" effect="bordered">
        <template #extra>
          <tu-icon><Close /></tu-icon>
        </template>
        <div v-for="i in 4" :key="i">
          {{ 'Card content ' + i }}
        </div>
      </tu-card>
    </tu-col>
    <tu-col :span="6">
      <tu-card title="Card name" effect="outlined">
        <template #extra>
          <tu-icon><Close /></tu-icon>
        </template>
        <div v-for="i in 4" :key="i">
          {{ 'Card content ' + i }}
        </div>
      </tu-card>
    </tu-col>
    <tu-col :span="6">
      <tu-card title="Card name" effect="flat">
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
