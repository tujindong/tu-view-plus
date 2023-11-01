<template>
  <tu-row :gutter="20">
    <tu-col :span="8">
      <tu-card title="Card name">
        <template #extra>
          <tu-icon><Close /></tu-icon>
        </template>
        <div v-for="i in 4" :key="i">
          {{ 'Card content ' + i }}
        </div>
      </tu-card>
    </tu-col>
    <tu-col :span="8">
      <tu-card title="Card name" effect="down">
        <template #extra>
          <tu-icon><Close /></tu-icon>
        </template>
        <div v-for="i in 4" :key="i">
          {{ 'Card content ' + i }}
        </div>
      </tu-card>
    </tu-col>
    <tu-col :span="8">
      <tu-card title="Card name" effect="up">
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
