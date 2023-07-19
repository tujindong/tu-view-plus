<template>
  <tu-button :plain="true" @click="open">局部调用</tu-button>
  <tu-button :plain="true" @click="openGlobal">全局调用</tu-button>
  <tu-button :plain="true" @click="openVn">VNode</tu-button>
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
