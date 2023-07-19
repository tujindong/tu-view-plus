<template>
  <div style="padding-bottom: 500px">
    <br />
    <br />
    <br />
    <br />
    <br />
    <tu-button :plain="true" @click="open">显示消息</tu-button>
    <tu-button :plain="true" @click="openClose">显示关闭</tu-button>

    <tu-button :plain="true" @click="open1">message</tu-button>
    <tu-button :plain="true" @click="open2">success</tu-button>
    <tu-button :plain="true" @click="open3">warning</tu-button>
    <tu-button :plain="true" @click="open4">error</tu-button>
    <tu-button :plain="true" @click="open5">info</tu-button>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useToggle } from '@vueuse/core';
import { TuMessage } from '@tu-view-plus/components';
import zhCn from 'tu-view-plus/locale/lang/zh-cn.mjs';
import en from 'tu-view-plus/locale/lang/en.mjs';
import {
  Search,
  ArrowLeft,
  ArrowRight,
  Check,
  Close
} from '@tu-view-plus/icons-vue';
import type { CSSProperties } from 'vue';

const [visible, toggleVisible] = useToggle();

const value = ref('100');
const value1 = ref('0');
const value2 = ref(false);

const open = () => {
  // TuMessage('this is a message.');
  TuMessage({
    message: 'Centered text',
    customClass: 'testCls'
  });
};

const openClose = () => {
  TuMessage({
    showClose: true,
    message:
      '这是内容，这是内容，这是内容，这是内容，这是内容，这是内容，这是内容，这是内容，这是内容，这是内容，这是内容，'
  });
};

const open1 = () => {
  TuMessage({
    showClose: true,
    message: 'This is a message.'
  });
};
const open2 = () => {
  TuMessage({
    showClose: true,
    message: 'Congrats, this is a success message.',
    type: 'success'
  });
};
const open3 = () => {
  TuMessage({
    showClose: true,
    message: 'Warning, this is a warning message.',
    type: 'warning'
  });
};
const open4 = () => {
  TuMessage({
    showClose: true,
    message: 'Oops, this is a error message.',
    type: 'error'
  });
};
const open5 = () => {
  TuMessage({
    grouping: true,
    showClose: true,
    message: 'Oops, this is a error message.',
    type: 'info'
  });
};

onMounted(() => {});
</script>
<style lang="scss"></style>
