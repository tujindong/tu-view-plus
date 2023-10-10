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
      <tu-empty description="description" />
      <br />
      <br />
    </div>

    <br />
    <br />
    <tu-radio-group v-model="radio" type="button">
      <tu-radio :label="1">选项1</tu-radio>
      <tu-radio :label="2">选项2</tu-radio>
      <tu-radio :label="3">选项3</tu-radio>
    </tu-radio-group>
    <br />
    <br />
    <tu-radio-group v-model="radio" type="border">
      <tu-radio :label="1">选项1</tu-radio>
      <tu-radio :label="2">选项2</tu-radio>
      <tu-radio :label="3">选项3</tu-radio>
    </tu-radio-group>
    <br />
    <br />
    <tu-checkbox-group v-model="checked" type="button">
      <tu-checkbox :label="1">选项1</tu-checkbox>
      <tu-checkbox :label="2">选项2</tu-checkbox>
      <tu-checkbox :label="3">选项3</tu-checkbox>
    </tu-checkbox-group>
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

const radio = ref('');
const checked = ref([]);

const tabType = ref('line');
const tabData = ref([{ key: 1 }, { key: 2 }, { key: 3 }, { key: 4 }]);
const tabValue = ref('1');

const handleAdd = () => {
  const count = tabData.value.length + 1;
  tabData.value = [...tabData.value, { key: count }];
};

const handleDelete = (key) => {
  if (key === tabValue.value) tabValue.value--;
  tabData.value = tabData.value.filter((i) => i.key !== key);
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
