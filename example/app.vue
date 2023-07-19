<template>
  <div style="padding-bottom: 500px">
    <tu-config-provider :locale="en">
      <tu-button :plain="true" @click="open">显示消息</tu-button>
    </tu-config-provider>
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

const open = () => {
  // TuMessage('this is a message.');
};

onMounted(() => {});
</script>
<style lang="scss"></style>
