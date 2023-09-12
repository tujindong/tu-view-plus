<template>
  <div style="width: 100%">
    <br />
    <br />
    <tu-configProvider :locale="en">
      <tu-button>provider按钮</tu-button>
    </tu-configProvider>

    <br />
    <br />
    <tu-button @click="visible = true">message</tu-button>
    <br />
    <br />

    <tu-popover title="Title">
      <tu-button style="margin-left: 200px">Hover</tu-button>
      <template #content>
        <p>Here is the text content</p>
        <p>Here is the text content</p>
      </template>
    </tu-popover>

    <br />
    <br />
    <tu-popconfirm
      type="info"
      content="Are you sure you want to delete?Are you sure you want to delete?Are you sure you want to delete?Are you sure you want to delete?Are you sure you want to delete?Are you sure you want to delete?Are you sure you want to delete?Are you sure you want to delete?"
    >
      <tu-button style="margin-left: 200px">Click</tu-button>
    </tu-popconfirm>

    <br />
    <br />

    <br />
    <br />
    <tu-dropdown @select="handleSelect">
      <tu-button>Click Me</tu-button>
      <template #content>
        <tu-dropdown-item>Option 1</tu-dropdown-item>
        <tu-dropdown-item disabled>Option 2</tu-dropdown-item>
        <tu-dropdown-item :value="{ value: 'Option3' }"
          >Option 3</tu-dropdown-item
        >
      </template>
    </tu-dropdown>
    <br />
    <br />
    <br />
    <br />
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

const visible = ref(false);

console.log('vm.appContext.config', vm.appContext.config);

const handleSelect = (v) => {
  console.log(v);
};

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
