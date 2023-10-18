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
    <br />
    <tu-radio-group
      v-model="collapseSize"
      type="button"
      style="margin-bottom: 20px"
    >
      <tu-radio label="mini">迷你</tu-radio>
      <tu-radio label="small">较小</tu-radio>
      <tu-radio label="medium">中等</tu-radio>
      <tu-radio label="large">较大</tu-radio>
    </tu-radio-group>

    <tu-collapse :size="collapseSize">
      <tu-collapse-item title="送元二使安西" name="1">
        <template #extra>
          <tu-button :size="collapseSize" @click.stop="handleClick">
            wowww
          </tu-button>
        </template>
        <p style="line-height: 1">渭城朝雨浥轻尘，客舍青青柳色新。</p>
        <p style="line-height: 1">劝君更尽一杯酒，西出阳关无故人。</p>
      </tu-collapse-item>
      <tu-collapse-item title="送元二使安西" name="2">
        <p style="line-height: 1">渭城朝雨浥轻尘，客舍青青柳色新。</p>
        <p style="line-height: 1">劝君更尽一杯酒，西出阳关无故人。</p>
      </tu-collapse-item>
      <tu-collapse-item title="送元二使安西" name="3">
        <p style="line-height: 1">渭城朝雨浥轻尘，客舍青青柳色新。</p>
        <p style="line-height: 1">劝君更尽一杯酒，西出阳关无故人。</p>
      </tu-collapse-item>
    </tu-collapse>
    <br />
    <br />
    <tu-checkbox-group :size="collapseSize">
      <tu-checkbox :label="1">选项1</tu-checkbox>
      <tu-checkbox :label="2">选项2</tu-checkbox>
    </tu-checkbox-group>
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

const activeNames = ref(['1']);

const collapseSize = ref('mini');

const handleClick = () => {
  console.log('wowowo');
};

onMounted(() => {});
</script>
<style lang="scss"></style>
