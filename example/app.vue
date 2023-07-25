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
    <tu-configProvider :namespace="namespace" :locale="en">
      <tu-button>按钮</tu-button>
    </tu-configProvider>

    <tu-button @click="handleNamespaceChange">更换namespace</tu-button>

    <tu-button @click="openIcon">打开图标</tu-button>

    <br />
    <br />
    <br />
    <br />
    <div>checked1: {{ checked1 }}</div>
    <tu-checkbox v-model="checked1" label="Option 1" />
    <div>checked2: {{ checked2 }}</div>
    <tu-checkbox v-model="checked2" label="Option 2" />

    <br />
    <br />
    <div>checkList: {{ checkList }}</div>
    <tu-checkbox-group v-model="checkList">
      <tu-checkbox label="a" />
      <tu-checkbox label="b" />
      <tu-checkbox label="c" />
      <tu-checkbox label="d" />
      <tu-checkbox label="e" disabled />
    </tu-checkbox-group>
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
const checked1 = ref(true);
const checked2 = ref(false);
const checkList = ref(['a', 'b']);

const handleNamespaceChange = () => {
  namespace.value = 'nb';
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
</style>
