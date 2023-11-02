<template>
  <tu-button @click="open">Custom icon</tu-button>
</template>

<script lang="ts" setup>
import { Search } from '@tu-view-plus/icons-vue';
import { TuMessage } from 'tu-view-plus';

const open = () => {
  TuMessage({
    message: 'This is a message.',
    icon: Search
  });
};
</script>
