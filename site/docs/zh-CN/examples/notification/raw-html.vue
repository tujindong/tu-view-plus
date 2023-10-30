<template>
  <tu-button @click="open">使用HTML</tu-button>
</template>

<script lang="ts" setup>
import { TuNotification } from 'tu-view-plus';

const open = () => {
  TuNotification({
    title: '送元二使安西',
    dangerouslyUseHTMLString: true,
    message: '<p style="color: teal">渭城朝雨浥轻尘，客舍青青柳色新。</p>'
  });
};
</script>