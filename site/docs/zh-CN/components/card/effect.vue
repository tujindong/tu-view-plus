<template>
  <tu-row :gutter="20">
    <tu-col :span="8">
      <tu-card title="卡片标题">
        <template #extra>
          <tu-icon><Close /></tu-icon>
        </template>
        <div v-for="i in 4" :key="i">
          {{ '列表内容 ' + i }}
        </div>
      </tu-card>
    </tu-col>
    <tu-col :span="8">
      <tu-card title="卡片标题" effect="inside">
        <template #extra>
          <tu-icon><Close /></tu-icon>
        </template>
        <div v-for="i in 4" :key="i">
          {{ '列表内容 ' + i }}
        </div>
      </tu-card>
    </tu-col>
    <tu-col :span="8">
      <tu-card title="卡片标题" effect="outside">
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
