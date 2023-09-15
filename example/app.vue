<template>
  <div style="width: 100%">
    <br />
    <br />
    <tu-configProvider :locale="en">
      <tu-button>provider按钮</tu-button>
    </tu-configProvider>
    <br />
    <br />
    <tu-select placeholder="请输入">
      <tu-option>北京</tu-option>
      <tu-option>上海</tu-option>
      <tu-option>广州</tu-option>
      <tu-option disabled>禁用</tu-option>
    </tu-select>
    <br />
    <br />
    <br />
    <tu-pagination layout="prev, pager, next" :total="50" />
    <br />
    <br />
    <tu-pagination layout="prev, pager, next" :total="1000" />
    <br />
    <br />
    <tu-alert title="success alert" />
    <br />
    <br />
    <tu-alert title="success alert" type="success" />
    <br />
    <br />
    <tu-alert title="info alert" type="info" />
    <br />
    <br />
    <tu-alert title="warning alert" type="warning" />
    <br />
    <br />
    <tu-alert title="error alert" type="error" />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <div style="height: 800px"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, getCurrentInstance, h } from 'vue';
import { useToggle } from '@vueuse/core';
import {
  TuMessage,
  TuModalBox,
  TuNotification
} from '@tu-view-plus/components';
import zhCn from 'tu-view-plus/locale/lang/zh-cn.mjs';
import en from 'tu-view-plus/locale/lang/en.mjs';
import { Search, Close, Tools } from '@tu-view-plus/icons-vue';

const vm = getCurrentInstance()!;

const { $message, $modal } = vm.appContext.config.globalProperties;

onMounted(() => {});
</script>
<style lang="scss">
.demo-trigger-basic {
  display: flex;
  height: 80px;
  width: 180px;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0 2px 6px 0 #cccccc;
  font-size: 14px;
}
.demo-button-row {
  align-items: baseline;
}
.demo-input-row {
  align-items: baseline;
}
</style>
