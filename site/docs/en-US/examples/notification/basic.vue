<template>
  <tu-button @click="open">Local import</tu-button>
  <tu-button @click="openGlobal">Global method</tu-button>
</template>

<script lang="ts" setup>
import { getCurrentInstance } from 'vue';
import { TuNotification } from 'tu-view-plus';

const vm = getCurrentInstance()!;
const { $notification } = vm.appContext.config.globalProperties;

const open = () => {
  TuNotification({
    title: 'Notification title',
    message: 'This is a message.'
  });
};

const openGlobal = () => {
  $notification({
    title: 'Notification title',
    message: 'This is a message.'
  });
};
</script>
