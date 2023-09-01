<template>
  <tu-button type="success" @click="openSuccess">成功消息</tu-button>
  <tu-button type="danger" @click="openError">错误消息</tu-button>
  <tu-button type="warning" @click="openWarning">警告消息</tu-button>
  <tu-button type="info" @click="openInfo">信息消息</tu-button>
</template>

<script lang="ts" setup>
import { TuModalBox } from 'tu-view-plus';

const openError = () => {
  TuModalBox.info({
    title: '送元二使安西',
    content: '渭城朝雨浥轻尘，客舍青青柳色新。'
  });
};

const openWarning = () => {
  TuModalBox.warning({
    title: '送元二使安西',
    content: '渭城朝雨浥轻尘，客舍青青柳色新。'
  });
};

const openSuccess = () => {
  TuModalBox.success({
    title: '送元二使安西',
    content: '渭城朝雨浥轻尘，客舍青青柳色新。'
  });
};

const openInfo = () => {
  TuModalBox.info({
    title: '送元二使安西',
    content: '渭城朝雨浥轻尘，客舍青青柳色新。'
  });
};
</script>
