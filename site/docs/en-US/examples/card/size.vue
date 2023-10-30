<template>
  <tu-row :gutter="20">
    <tu-col :span="6">
      <tu-card title="超小卡片" size="mini">
        <template #extra>
          <tu-icon><Close /></tu-icon>
        </template>
        <div v-for="i in 4" :key="i">
          {{ '列表内容 ' + i }}
        </div>
      </tu-card>
    </tu-col>
    <tu-col :span="6">
      <tu-card title="小型卡片" size="small">
        <template #extra>
          <tu-icon><Close /></tu-icon>
        </template>
        <div v-for="i in 4" :key="i">
          {{ '列表内容 ' + i }}
        </div>
      </tu-card>
    </tu-col>
    <tu-col :span="6">
      <tu-card title="默认卡片">
        <template #extra>
          <tu-icon><Close /></tu-icon>
        </template>
        <div v-for="i in 4" :key="i">
          {{ '列表内容 ' + i }}
        </div>
      </tu-card>
    </tu-col>
    <tu-col :span="6">
      <tu-card title="大型卡片" size="large">
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
