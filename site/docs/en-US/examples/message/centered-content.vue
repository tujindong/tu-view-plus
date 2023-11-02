<template>
  <tu-button @click="open">Centered text</tu-button>
</template>

<script lang="ts" setup>
import { TuMessage } from 'tu-view-plus';

const open = () => {
  TuMessage({
    center: true,
    message: 'This is a message.'
  });
};
</script>
