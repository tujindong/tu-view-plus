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
    <br />
    <span
      >I sit at my window this morning where the world like a passer-by stops
      for a moment, nods to me and goes.</span
    >
    <tu-divider :margin="50" />
    <span
      >There little thoughts are the rustle of leaves; they have their whisper
      of joy in my mind.</span
    >
    <br />
    <br />
    <p>
      A design is a plan or specification for the construction of an object.
    </p>
    <tu-divider orientation="left">Text</tu-divider>
    <p>
      A design is a plan or specification for the construction of an object.
    </p>
    <tu-divider orientation="center">Text</tu-divider>
    <p>
      A design is a plan or specification for the construction of an object.
    </p>
    <tu-divider orientation="right">Text</tu-divider>
    <br />
    <br />
    <span>Item 1</span>
    <tu-divider direction="vertical" />
    <span>Item 2</span>
    <tu-divider direction="vertical" />
    <span>Item 3</span>
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

    <tu-progress :percentage="50" />
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
