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
    <tu-radio-group v-model="tabSize">
      <tu-radio label="mini">mini</tu-radio>
      <tu-radio label="small">small</tu-radio>
      <tu-radio label="medium">medium</tu-radio>
      <tu-radio label="large">large</tu-radio>
    </tu-radio-group>
    <br />
    <br />
    <tu-radio-group v-model="tabType">
      <tu-radio label="line">line</tu-radio>
      <tu-radio label="card">card</tu-radio>
      <tu-radio label="slider">slider</tu-radio>
      <tu-radio label="text">text</tu-radio>
      <tu-radio label="button">button</tu-radio>
      <tu-radio label="button-round">button-round</tu-radio>
    </tu-radio-group>
    <br />
    <br />
    <div style="margin-left: 200px">
      <tu-tabs
        default-active-key="1"
        :editable="true"
        :type="tabType"
        :size="tabSize"
      >
        <template #extra>
          <tu-button>操作</tu-button>
        </template>
        <tu-tab-pane key="1" title="标签1"> 标签面板 1 </tu-tab-pane>
        <tu-tab-pane key="2" title="标签2"> 标签面板 2 </tu-tab-pane>
        <tu-tab-pane key="3" title="标签3"> 标签面板 3 </tu-tab-pane>
        <tu-tab-pane key="4" title="标签4"> 标签面板 4 </tu-tab-pane>
        <tu-tab-pane key="5" title="标签5"> 标签面板 5 </tu-tab-pane>
        <tu-tab-pane key="6" title="标签6"> 标签面板 6 </tu-tab-pane>
      </tu-tabs>
      <br />
      <br />
      <div>------------------------------</div>
      <br />
      <br />
      <tu-tabs
        default-active-key="1"
        position="left"
        :editable="true"
        :type="tabType"
        :size="tabSize"
      >
        <tu-tab-pane key="1" title="标签1">
          标签面板 1标签面板 1标签面板 1标签面板 1标签面板
        </tu-tab-pane>
        <tu-tab-pane key="2" title="标签2"> 标签面板 2 </tu-tab-pane>
        <tu-tab-pane key="3" title="标签3"> 标签面板 3 </tu-tab-pane>
        <tu-tab-pane key="4" title="标签4"> 标签面板 4 </tu-tab-pane>
        <tu-tab-pane key="5" title="标签5"> 标签面板 5 </tu-tab-pane>
        <tu-tab-pane key="6" title="标签6"> 标签面板 6 </tu-tab-pane>
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

const tabType = ref();
const tabSize = ref('medium');

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
