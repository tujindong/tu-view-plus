<template>
  <div style="padding-bottom: 500px">
    <tu-trigger trigger="click" :unmount-on-close="false">
      <tu-button>点击</tu-button>
      <template #content>
        <div class="demo-trigger-basic">这是内容</div>
      </template>
    </tu-trigger>

    <br />
    <br />
    <tu-configProvider :namespace="'nb'" :locale="en">
      <tu-button>provider按钮</tu-button>
    </tu-configProvider>

    <tu-button @click="openIcon">打开图标</tu-button>

    <tu-button type="primary">打开图标</tu-button>

    <br />
    <br />
    <tu-radio v-model="radio" :label="1">选项1</tu-radio>
    <tu-radio v-model="radio" :label="2">选项2</tu-radio>
    <br />
    <br />
    <tu-input-number
      v-model="num"
      :min="1"
      :max="20"
      :step="2"
      :precision="2"
      clearable
      controls-position="right"
      @change="handleChange"
    />
    <br />
    <br />
    <tu-input-number placeholder="请输入" v-model="num" disabled />
    <br />
    <br />
    <tu-input-number placeholder="请输入" v-model="num" />
    <br />
    <br />
    <tu-row :gutter="20" class="demo-input-row">
      <tu-col :span="6">
        <tu-input-number
          v-model="inputNumberValue1"
          size="mini"
          placeholder="请输入"
          controls-position="right"
        />
      </tu-col>

      <tu-col :span="6">
        <tu-input-number
          v-model="inputNumberValue2"
          size="small"
          placeholder="请输入"
          controls-position="right"
        />
      </tu-col>

      <tu-col :span="6">
        <tu-input-number
          v-model="inputNumberValue3"
          placeholder="请输入"
          controls-position="right"
        />
      </tu-col>

      <tu-col :span="6">
        <tu-input-number
          v-model="inputNumberValue4"
          size="large"
          placeholder="请输入"
          controls-position="right"
        />
      </tu-col>
    </tu-row>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useToggle } from '@vueuse/core';
import { TuMessage } from '@tu-view-plus/components';
import zhCn from 'tu-view-plus/locale/lang/zh-cn.mjs';
import en from 'tu-view-plus/locale/lang/en.mjs';
import {
  Search,
  ArrowLeft,
  ArrowRight,
  Check,
  Close
} from '@tu-view-plus/icons-vue';
import type { CSSProperties } from 'vue';

const [visible, toggleVisible] = useToggle();

const value = ref('100');
const value1 = ref('0');
const value2 = ref(false);
const namespace = ref();
const radio = ref(1);

const num = ref(1);

const inputNumberValue1 = ref('');
const inputNumberValue2 = ref('');
const inputNumberValue3 = ref('');
const inputNumberValue4 = ref('');

const handleChange = (value: number) => {
  console.log(value);
};

const openIcon = () => {
  TuMessage.success({
    message: '并不了解问题',
    icon: Search,
    duration: 0
  });
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
