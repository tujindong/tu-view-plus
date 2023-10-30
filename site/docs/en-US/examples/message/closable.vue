<template>
  <tu-button @click="openDefault">默认消息</tu-button>
  <tu-button type="success" @click="openSuccess">成功消息</tu-button>
  <tu-button type="danger" @click="openError">错误消息</tu-button>
  <tu-button type="warning" @click="openWarning">警告消息</tu-button>
  <tu-button type="info" @click="openInfo">信息消息</tu-button>
</template>

<script lang="ts" setup>
import { TuMessage } from 'tu-view-plus';

const openDefault = () => {
  TuMessage({
    showClose: true,
    duration: 0,
    message: '这是一条不会自动关闭默认类型消息，需要手动关闭。'
  });
};

const openSuccess = () => {
  TuMessage({
    showClose: true,
    message: '这是一条成功类型消息。',
    type: 'success'
  });
};

const openError = () => {
  TuMessage({
    showClose: true,
    message: '这是一条错误类型消息。',
    type: 'error'
  });
};

const openWarning = () => {
  TuMessage({
    showClose: true,
    message: '这是一条警告类型消息。',
    type: 'warning'
  });
};

const openInfo = () => {
  TuMessage({
    showClose: true,
    message: '这是一条信息类型消息。',
    type: 'info'
  });
};
</script>