<template>
  <tu-button @click="open">添加图标</tu-button>
</template>

<script lang="ts" setup>
import { Search } from '@tu-view-plus/icons-vue';
import { TuMessage } from 'tu-view-plus';

const open = () => {
  TuMessage({
    message: '头部添加自定义图标',
    icon: Search
  });
};
</script>