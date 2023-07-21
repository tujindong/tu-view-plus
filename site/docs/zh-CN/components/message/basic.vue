<template>
  <tu-button @click="open">单独引入</tu-button>
  <tu-button @click="openGlobal">全局引入</tu-button>
  <tu-button @click="openVn">VNode</tu-button>
</template>

<script lang="ts" setup>
import { h, getCurrentInstance } from 'vue';
import { TuMessage } from 'tu-view-plus';

const vm = getCurrentInstance()!;
const { $message } = vm.appContext.config.globalProperties;

const open = () => {
  TuMessage('这是一条消息。');
};

const openGlobal = () => {
  $message('这是一条消息。');
};

const openVn = () => {
  TuMessage({
    message: h('p', null, [
      h('span', null, '消息提示也可以是 '),
      h('i', { style: 'color: teal' }, 'VNode')
    ])
  });
};
</script>
