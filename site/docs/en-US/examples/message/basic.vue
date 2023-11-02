<template>
  <tu-button @click="open">Local import</tu-button>
  <tu-button @click="openGlobal">Global method</tu-button>
  <tu-button @click="openVn">VNode</tu-button>
</template>

<script lang="ts" setup>
import { h, getCurrentInstance } from 'vue';
import { TuMessage } from 'tu-view-plus';

const vm = getCurrentInstance()!;
const { $message } = vm.appContext.config.globalProperties;

const open = () => {
  TuMessage('This is a message.');
};

const openGlobal = () => {
  $message('This is a message.');
};

const openVn = () => {
  TuMessage({
    message: h('p', null, [
      h('span', null, 'Message can be '),
      h('i', { style: 'color: teal' }, ' VNode')
    ])
  });
};
</script>
