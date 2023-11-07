<template>
  <tu-button @click="open">Grouping</tu-button>
</template>

<script lang="ts" setup>
import { TuMessage } from 'tu-view-plus';

const open = () => {
  TuMessage({
    grouping: true,
    message: 'This is a message.'
  });
};
</script>
