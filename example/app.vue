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
    <br />

    <br />
    <br />
    <div style="margin-left: 200px">
      <tu-radio-group
        v-model="tabType"
        type="button"
        style="margin-bottom: 20px"
      >
        <tu-radio label="line">line</tu-radio>
        <tu-radio label="card">card</tu-radio>
        <tu-radio label="slider">slider</tu-radio>
        <tu-radio label="text">text</tu-radio>
        <tu-radio label="button">button</tu-radio>
        <tu-radio label="button-round">button-round</tu-radio>
      </tu-radio-group>

      <tu-tabs
        default-active-key="1"
        :type="tabType"
        editable
        show-add-button
        auto-switch
        @add="handleAdd"
        @delete="handleDelete"
      >
        <tu-tab-pane
          v-for="(item, index) in tabData"
          :key="item.key"
          :title="`标签${index + 1}`"
          :closable="index !== 0"
        >
          {{ `标签页内容 ${index + 1}` }}
        </tu-tab-pane>
      </tu-tabs>
      <br />
      <br />
    </div>

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

const activeName = ref('first');

const tabSize = ref('medium');

const tabType = ref('line');
const tabData = ref([{ key: 1 }, { key: 2 }, { key: 3 }, { key: 4 }]);

const handleAdd = () => {
  const count = tabData.value.length + 1;
  tabData.value = [...tabData.value, { key: count }];
};

const handleDelete = () => {
  console.log('delete');
};

onMounted(() => {});
</script>
<style lang="scss">
.demo-tabs > .tu-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
