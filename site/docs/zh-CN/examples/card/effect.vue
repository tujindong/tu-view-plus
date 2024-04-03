<template>
  <tu-row :gutter="20">
    <tu-col :span="6">
      <tu-card title="卡片标题" effect="inset">
        <template #extra>
          <tu-icon><Close /></tu-icon>
        </template>
        <div v-for="i in 4" :key="i">
          {{ '列表内容 ' + i }}
        </div>
      </tu-card>
    </tu-col>
    <tu-col :span="6">
      <tu-card title="卡片标题" effect="bordered">
        <template #extra>
          <tu-icon><Close /></tu-icon>
        </template>
        <div v-for="i in 4" :key="i">
          {{ '列表内容 ' + i }}
        </div>
      </tu-card>
    </tu-col>
    <tu-col :span="6">
      <tu-card title="卡片标题" effect="outlined">
        <template #extra>
          <tu-icon><Close /></tu-icon>
        </template>
        <div v-for="i in 4" :key="i">
          {{ '列表内容 ' + i }}
        </div>
      </tu-card>
    </tu-col>
    <tu-col :span="6">
      <tu-card title="卡片标题" effect="flat">
        <template #extra>
          <tu-icon><Close /></tu-icon>
        </template>
        <div v-for="i in 4" :key="i">
          {{ '列表内容 ' + i }}
        </div>
      </tu-card>
    </tu-col>
  </tu-row>
</template>

<script lang="ts" setup>
import { Close } from '@tu-view-plus/icons-vue';
</script>
