<template>
   <tu-card title="卡片标题">
      <template #extra>
        <tu-icon><Close /></tu-icon>
      </template>
      <div v-for="i in 4" :key="i">
        {{ '列表内容 ' + i }}
      </div>
    </tu-card>
</template>

<script lang="ts" setup>
import { Close } from '@tu-view-plus/icons-vue';
</script>
