<template>
  <tu-button @click="visible = true">组件调用</tu-button>

  <tu-button @click="openFunc">单独调用</tu-button>

  <tu-button @click="openGlobal">全局调用</tu-button>

  <tu-drawer
    v-model:visible="visible"
    @ok="visible = false"
    @cancel="visible = false"
  >
    <template #title> 送元二使安西 </template>
    <p style="line-height: 2">渭城朝雨浥轻尘，客舍青青柳色新。</p>
    <p style="line-height: 2">劝君更尽一杯酒，西出阳关无故人。</p>
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
    title: '送元二使安西',
    content: () => [
      h('p', { style: 'line-height: 2' }, '渭城朝雨浥轻尘，客舍青青柳色新。'),
      h('p', { style: 'line-height: 2' }, '劝君更尽一杯酒，西出阳关无故人。')
    ]
  });
};

const openGlobal = () => {
  $drawer.open({
    title: '送元二使安西',
    content: () => [
      h('p', { style: 'line-height: 2' }, '渭城朝雨浥轻尘，客舍青青柳色新。'),
      h('p', { style: 'line-height: 2' }, '劝君更尽一杯酒，西出阳关无故人。')
    ]
  });
};
</script>
