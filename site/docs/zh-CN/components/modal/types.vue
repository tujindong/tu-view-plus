<template>
  <tu-button type="success" @click="openSuccess">成功消息</tu-button>
  <tu-button type="danger" @click="openError">错误消息</tu-button>
  <tu-button type="warning" @click="openWarning">警告消息</tu-button>
  <tu-button type="info" @click="openInfo">信息消息</tu-button>
</template>

<script lang="ts" setup>
import { TuModal } from 'tu-view-plus';

const openError = () => {
  TuModal.info({
    title: '送元二使安西',
    content: '渭城朝雨浥轻尘，客舍青青柳色新。'
  });
};

const openWarning = () => {
  TuModal.warning({
    title: '送元二使安西',
    content: '渭城朝雨浥轻尘，客舍青青柳色新。'
  });
};

const openSuccess = () => {
  TuModal.success({
    title: '送元二使安西',
    content: '渭城朝雨浥轻尘，客舍青青柳色新。'
  });
};

const openInfo = () => {
  TuModal.info({
    title: '送元二使安西',
    content: '渭城朝雨浥轻尘，客舍青青柳色新。'
  });
};
</script>
