<template>
  <tu-button @click="open">合并消息</tu-button>
</template>

<script lang="ts" setup>
import { TuMessage } from 'tu-view-plus';

const open = () => {
  TuMessage({
    grouping: true,
    message: '这是一条消息。'
  });
};
</script>