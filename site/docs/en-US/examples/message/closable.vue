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
  TuMessage({
    showClose: true,
    duration: 0,
    message:
      'This is a default message that will not automatically close, needs to be manually closed.'
  });
};

const openSuccess = () => {
  TuMessage({
    showClose: true,
    message: 'This is a success message.',
    type: 'success'
  });
};

const openError = () => {
  TuMessage({
    showClose: true,
    message: 'This is a error message.',
    type: 'error'
  });
};

const openWarning = () => {
  TuMessage({
    showClose: true,
    message: 'This is a warning message.',
    type: 'warning'
  });
};

const openInfo = () => {
  TuMessage({
    showClose: true,
    message: 'This is a info message.',
    type: 'info'
  });
};
</script>
