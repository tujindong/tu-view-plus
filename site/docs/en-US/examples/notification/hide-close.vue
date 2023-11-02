<template>
  <tu-button @click="open">Hide close button</tu-button>
</template>

<script lang="ts" setup>
import { TuNotification } from 'tu-view-plus';

const open = () => {
  TuNotification({
    title: 'Notification title',
    message: 'This is a message.',
    showClose: false
  });
};
</script>
