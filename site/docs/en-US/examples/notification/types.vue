<template>
  <tu-button @click="openDefault">default</tu-button>
  <tu-button type="success" @click="openSuccess">success</tu-button>
  <tu-button type="danger" @click="openError">error</tu-button>
  <tu-button type="warning" @click="openWarning">warning</tu-button>
  <tu-button type="info" @click="openInfo">info</tu-button>
</template>

<script lang="ts" setup>
import { TuNotification } from 'tu-view-plus';

const openDefault = () => {
  TuNotification({
    title: 'Notification title',
    message: 'This is a message.'
  });
};

const openSuccess = () => {
  TuNotification({
    title: 'Notification title',
    message: 'This is a message.',
    type: 'success'
  });
};

const openError = () => {
  TuNotification({
    title: 'Notification title',
    message: 'This is a message.',
    type: 'error'
  });
};

const openWarning = () => {
  TuNotification({
    title: 'Notification title',
    message: 'This is a message.',
    type: 'warning'
  });
};

const openInfo = () => {
  TuNotification({
    title: 'Notification title',
    message: 'This is a message.',
    type: 'info'
  });
};
</script>
