<template>
  <tu-button type="success" @click="openSuccess">success</tu-button>
  <tu-button type="danger" @click="openError">error</tu-button>
  <tu-button type="warning" @click="openWarning">warning</tu-button>
  <tu-button type="info" @click="openInfo">info</tu-button>
</template>

<script lang="ts" setup>
import { TuModalBox } from 'tu-view-plus';

const openError = () => {
  TuModalBox.error({
    title: 'Modal title',
    content: 'This is modal content.'
  });
};

const openWarning = () => {
  TuModalBox.warning({
    title: 'Modal title',
    content: 'This is modal content.'
  });
};

const openSuccess = () => {
  TuModalBox.success({
    title: 'Modal title',
    content: 'This is modal content.'
  });
};

const openInfo = () => {
  TuModalBox.info({
    title: 'Modal title',
    content: 'This is modal content.'
  });
};
</script>
