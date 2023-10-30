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
  TuMessage('这是一条默认类型消息。');
};

const openSuccess = () => {
  TuMessage.success('这是一条成功类型消息。');
};

const openError = () => {
  TuMessage.error('这是一条错误类型消息。');
};

const openWarning = () => {
  TuMessage.warning('这是一条警告类型消息。');
};

const openInfo = () => {
  TuMessage.info('这是一条信息类型消息。');
};
</script>