<template>
  <tu-button plain @click="openTr"> Top right </tu-button>
  <tu-button plain @click="openBr"> Bottom right </tu-button>
  <tu-button plain @click="openTl"> Top left </tu-button>
  <tu-button plain @click="openBl"> Bottom left </tu-button>
</template>

<script lang="ts" setup>
import { TuNotification } from 'tu-view-plus';

const openTr = () => {
  TuNotification({
    title: 'Notification title',
    message: 'This is a message.',
    position: 'tr'
  });
};

const openBr = () => {
  TuNotification({
    title: 'Notification title',
    message: 'This is a message.',
    position: 'br'
  });
};

const openTl = () => {
  TuNotification({
    title: 'Notification title',
    message: 'This is a message.',
    position: 'tl'
  });
};

const openBl = () => {
  TuNotification({
    title: 'Notification title',
    message: 'This is a message.',
    position: 'bl'
  });
};
</script>
