<template>
  <tu-button @click="openDefault">default</tu-button>
  <tu-button type="success" @click="openSuccess">success</tu-button>
  <tu-button type="danger" @click="openError">error</tu-button>
  <tu-button type="warning" @click="openWarning">warning</tu-button>
  <tu-button type="info" @click="openInfo">info</tu-button>
</template>

<script lang="ts" setup>
import { TuMessage } from 'tu-view-plus';

const openDefault = () => {
  TuMessage('This is a default message.');
};

const openSuccess = () => {
  TuMessage.success('This is a success message.');
};

const openError = () => {
  TuMessage.error('This is a error message.');
};

const openWarning = () => {
  TuMessage.warning('This is a warning message.');
};

const openInfo = () => {
  TuMessage.info('This is a info message.');
};
</script>
