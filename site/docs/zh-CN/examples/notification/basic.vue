<template>
  <tu-button @click="open">单独调用</tu-button>
  <tu-button @click="openGlobal">全局调用</tu-button>
</template>

<script lang="ts" setup>
import { getCurrentInstance } from 'vue';
import { TuNotification } from 'tu-view-plus';

const vm = getCurrentInstance()!;
const { $notification } = vm.appContext.config.globalProperties;

const open = () => {
  TuNotification({
    title: '送元二使安西',
    message: '渭城朝雨浥轻尘，客舍青青柳色新。'
  });
};

const openGlobal = () => {
  $notification({
    title: '送元二使安西',
    message: '渭城朝雨浥轻尘，客舍青青柳色新。'
  });
};
</script>
