<template>
  <tu-button @click="openDefault">默认消息</tu-button>
  <tu-button type="success" @click="openSuccess">成功消息</tu-button>
  <tu-button type="danger" @click="openError">错误消息</tu-button>
  <tu-button type="warning" @click="openWarning">警告消息</tu-button>
  <tu-button type="info" @click="openInfo">信息消息</tu-button>
</template>

<script lang="ts" setup>
import { TuNotification } from 'tu-view-plus';

const openDefault = () => {
  TuNotification({
    title: '送元二使安西',
    message: '渭城朝雨浥轻尘，客舍青青柳色新。'
  });
};

const openSuccess = () => {
  TuNotification({
    title: '送元二使安西',
    message: '渭城朝雨浥轻尘，客舍青青柳色新。',
    type: 'success'
  });
};

const openError = () => {
  TuNotification({
    title: '送元二使安西',
    message: '渭城朝雨浥轻尘，客舍青青柳色新。',
    type: 'error'
  });
};

const openWarning = () => {
  TuNotification({
    title: '送元二使安西',
    message: '渭城朝雨浥轻尘，客舍青青柳色新。',
    type: 'warning'
  });
};

const openInfo = () => {
  TuNotification({
    title: '送元二使安西',
    message: '渭城朝雨浥轻尘，客舍青青柳色新。',
    type: 'info'
  });
};
</script>