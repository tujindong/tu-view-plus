<template>
  <tu-button @click="open">隐藏关闭按钮</tu-button>
</template>

<script lang="ts" setup>
import { TuNotification } from 'tu-view-plus';

const open = () => {
  TuNotification({
    title: '送元二使安西',
    message: '渭城朝雨浥轻尘，客舍青青柳色新。',
    showClose: false
  });
};
</script>