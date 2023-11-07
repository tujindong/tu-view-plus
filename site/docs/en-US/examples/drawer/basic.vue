<template>
  <tu-button @click="visible = true">Use component</tu-button>

  <tu-button @click="openFunc">Local import</tu-button>

  <tu-button @click="openGlobal">Global method</tu-button>

  <tu-drawer
    v-model:visible="visible"
    @ok="visible = false"
    @cancel="visible = false"
  >
    <template #title> Drawer title </template>
    <p style="line-height: 2">This is drawer content.</p>
    <p style="line-height: 2">This is drawer content.</p>
  </tu-drawer>
</template>

<script lang="ts" setup>
import { ref, getCurrentInstance, h } from 'vue';
import { TuDrawerBox } from 'tu-view-plus';

const vm = getCurrentInstance()!;

const { $drawer } = vm.appContext.config.globalProperties;

const visible = ref(false);

const openFunc = () => {
  TuDrawerBox.open({
    title: 'Drawer title',
    content: () => [
      h('p', { style: 'line-height: 2' }, 'This is drawer content.'),
      h('p', { style: 'line-height: 2' }, 'This is drawer content.')
    ]
  });
};

const openGlobal = () => {
  $drawer.open({
    title: 'Drawer title',
    content: () => [
      h('p', { style: 'line-height: 2' }, 'This is drawer content.'),
      h('p', { style: 'line-height: 2' }, 'This is drawer content.')
    ]
  });
};
</script>
