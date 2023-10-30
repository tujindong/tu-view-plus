<template>
  <tu-button @click="open">文字居中</tu-button>
</template>

<script lang="ts" setup>
import { TuMessage } from 'tu-view-plus';

const open = () => {
  TuMessage({
    center: true,
    message: '文字居中。'
  });
};
</script>