<template>
  <tu-button plain @click="openTr"> 上右 </tu-button>
  <tu-button plain @click="openBr"> 下右 </tu-button>
  <tu-button plain @click="openTl"> 上左 </tu-button>
  <tu-button plain @click="openBl"> 下左 </tu-button>
</template>

<script lang="ts" setup>
import { TuNotification } from 'tu-view-plus';

const openTr = () => {
  TuNotification({
    title: '送元二使安西',
    message: '渭城朝雨浥轻尘，客舍青青柳色新。',
    position: 'tr'
  });
};

const openBr = () => {
  TuNotification({
    title: '送元二使安西',
    message: '渭城朝雨浥轻尘，客舍青青柳色新。',
    position: 'br'
  });
};

const openTl = () => {
  TuNotification({
    title: '送元二使安西',
    message: '渭城朝雨浥轻尘，客舍青青柳色新。',
    position: 'tl'
  });
};

const openBl = () => {
  TuNotification({
    title: '送元二使安西',
    message: '渭城朝雨浥轻尘，客舍青青柳色新。',
    position: 'bl'
  });
};
</script>
