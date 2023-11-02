<template>
  <tu-button @click="open">Manual close</tu-button>
</template>

<script lang="ts" setup>
import { TuNotification } from 'tu-view-plus';

const open = () => {
  TuNotification({
    title: 'Notification title',
    message: 'This is a message.',
    duration: 0
  });
};
</script>
