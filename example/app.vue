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
    <br />
    <br />
    <br />
    <br />
    <br />
    <tu-space>
      <tu-button type="primary">Item1</tu-button>
      <tu-button type="primary">Item2</tu-button>
      <tu-switch />
    </tu-space>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />

    <tu-radio-group v-model="tabType" type="button" style="margin-bottom: 20px">
      <tu-radio label="line">线型</tu-radio>
      <tu-radio label="card-up">上方卡片</tu-radio>
      <tu-radio label="card-down">下方卡片</tu-radio>
      <tu-radio label="slider-up">滑动</tu-radio>
      <tu-radio label="slider-down">滑动</tu-radio>
      <tu-radio label="text">文字</tu-radio>
      <tu-radio label="button">按钮</tu-radio>
      <tu-radio label="button-round">圆形按钮</tu-radio>
    </tu-radio-group>

    <tu-tabs :default-active-key="1" :type="tabType" style="height: 130px">
      <tu-tab-pane :key="1" title="标签1"> 标签页内容 1 </tu-tab-pane>
      <tu-tab-pane :key="2" title="标签2"> 标签页内容 2 </tu-tab-pane>
      <tu-tab-pane :key="3" title="标签3"> 标签页内容 3 </tu-tab-pane>
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
    <br />
    <tu-pagination layout="prev, pager, next" :total="1000" />
    <br />
    <div style="height: 800px"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, getCurrentInstance, h } from 'vue';
import { useToggle } from '@vueuse/core';
import { CircleClose, SuccessFilled, Star } from '@tu-view-plus/icons-vue';

const visible = ref(false);
const tabType = ref('line');
</script>
<style lang="scss"></style>
