<template>
  <tu-button @click="open">Use HTML</tu-button>
</template>

<script lang="ts" setup>
import { TuNotification } from 'tu-view-plus';

const open = () => {
  TuNotification({
    title: 'Notification title',
    dangerouslyUseHTMLString: true,
    message: '<p style="color: teal">This is a message.</p>'
  });
};
</script>
