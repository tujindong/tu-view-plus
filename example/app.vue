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
    <tu-checkbox v-model="checked" label="a" />
    <br />
    <br />
    <div>{{ checked }}</div>
    <tu-checkbox
      true-label="a"
      :false-label="3"
      v-model="checked"
      @change="handleChange"
    />
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
const radio = ref('');
const radio2 = ref('');
const checked = ref('a');
const checked2 = ref(false);
const checkList = ref(['a', 'b']);

const handleNamespaceChange = () => {
  namespace.value = 'nb';
};

const handleChange = (val, evt) => {
  // console.log({ val, evt });
};

const openIcon = () => {
  TuMessage.success({
    message: '并不了解问题',
    icon: Search,
    duration: 0
  });
};

const checkAll = ref(false);
const isIndeterminate = ref(true);
const checkedCities = ref(['Shanghai', 'Beijing']);
const cities = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];

const handleCheckAllChange = (val: boolean) => {
  checkedCities.value = val ? cities : [];
  isIndeterminate.value = false;
};
const handleCheckedCitiesChange = (value: string[]) => {
  const checkedCount = value.length;
  checkAll.value = checkedCount === cities.length;
  isIndeterminate.value = checkedCount > 0 && checkedCount < cities.length;
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
