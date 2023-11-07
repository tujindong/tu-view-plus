<template>
  <tu-button @click="open">Offset 100</tu-button>
</template>

<script lang="ts" setup>
import { TuNotification } from 'tu-view-plus';

const open = () => {
  TuNotification({
    title: 'Notification title',
    message: 'This is a message.',
    offset: 100
  });
};
</script>
