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
    <tu-radio-group v-model="tabSize" type="button" style="margin-bottom: 20px">
      <tu-radio label="mini">小型</tu-radio>
      <tu-radio label="small">较小</tu-radio>
      <tu-radio label="medium">中等</tu-radio>
      <tu-radio label="large">较大</tu-radio>
    </tu-radio-group>
    <br />
    <br />
    <tu-radio-group v-model="tabType" type="button" style="margin-bottom: 20px">
      <tu-radio label="line">线型</tu-radio>
      <tu-radio label="card-up">上方卡片</tu-radio>
      <tu-radio label="card-down">下方卡片</tu-radio>
      <tu-radio label="slider">滑动</tu-radio>
      <tu-radio label="text">文字</tu-radio>
      <tu-radio label="button">按钮</tu-radio>
      <tu-radio label="button-round">圆形按钮</tu-radio>
    </tu-radio-group>

    <tu-tabs
      v-model="tabValue"
      :type="tabType"
      :size="tabSize"
      editable
      show-add-button
      auto-switch
      @add="handleAdd"
      @delete="handleDelete"
    >
      <tu-tab-pane
        v-for="(item, index) in tabData"
        :key="item.key"
        :title="`标签${item.key}`"
        :closable="index !== 0"
      >
        {{ `标签页内容 ${item.key}` }}
      </tu-tab-pane>
    </tu-tabs>
    <br />
    <br />
    <tu-tabs
      v-model="tabValue"
      :type="tabType"
      :size="tabSize"
      position="left"
      editable
      show-add-button
      auto-switch
      @add="handleAdd"
      @delete="handleDelete"
      style="height: 180px"
    >
      <tu-tab-pane
        v-for="(item, index) in tabData"
        :key="item.key"
        :title="`标签${item.key}`"
        :closable="index !== 0"
      >
        {{ `标签页内容 ${item.key}` }}
      </tu-tab-pane>
    </tu-tabs>
    <br />
    <br />
    <tu-tabs
      v-model="tabValue"
      :type="tabType"
      :size="tabSize"
      position="right"
      editable
      show-add-button
      auto-switch
      @add="handleAdd"
      @delete="handleDelete"
      style="height: 180px"
    >
      <tu-tab-pane
        v-for="(item, index) in tabData"
        :key="item.key"
        :title="`标签${item.key}`"
        :closable="index !== 0"
      >
        {{ `标签页内容 ${item.key}` }}
      </tu-tab-pane>
    </tu-tabs>
    <br />
    <br />
    <tu-tabs
      v-model="tabValue"
      :type="tabType"
      :size="tabSize"
      position="bottom"
      editable
      show-add-button
      auto-switch
      @add="handleAdd"
      @delete="handleDelete"
      style="height: 180px"
    >
      <tu-tab-pane
        v-for="(item, index) in tabData"
        :key="item.key"
        :title="`标签${item.key}`"
        :closable="index !== 0"
      >
        {{ `标签页内容 ${item.key}` }}
      </tu-tab-pane>
    </tu-tabs>
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

const tabType = ref('line');
const tabSize = ref('medium');
const tabData = ref([{ key: 1 }, { key: 2 }, { key: 3 }, { key: 4 }]);
const tabValue = ref(1);

const handleAdd = () => {
  const count = tabData.value.length + 1;
  tabData.value = [...tabData.value, { key: count }];
};

const handleDelete = (key: number) => {
  if (key === tabValue.value) {
    const targetIndex = tabData.value.findIndex((i) => i.key === key);
    tabValue.value = tabData.value[targetIndex - 1].key;
  }
  tabData.value = tabData.value.filter((i) => i.key !== key);
};
</script>
<style lang="scss"></style>
