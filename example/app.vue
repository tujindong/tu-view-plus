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
    <tu-configProvider :locale="en">
      <tu-button>provider按钮</tu-button>
    </tu-configProvider>

    <tu-button @click="openIcon">打开图标</tu-button>

    <tu-button type="primary">打开图标</tu-button>

    <br />
    <br />

    <tu-row class="mb-2">
      <tu-tag round>默认</tu-tag>
      <tu-tag hit round color="#50d4ab">绿色</tu-tag>
      <tu-tag round color="#5e7ce0">蓝色</tu-tag>
      <tu-tag round color="#f66f6a">红色</tu-tag>
      <tu-tag round color="#fa9841">橙色</tu-tag>
    </tu-row>

    <tu-row class="mb-2">
      <tu-tag round effect="light">默认</tu-tag>
      <tu-tag round effect="light" color="#50d4ab">绿色</tu-tag>
      <tu-tag round effect="light" color="#5e7ce0">蓝色</tu-tag>
      <tu-tag round effect="light" color="#f66f6a">红色</tu-tag>
      <tu-tag round effect="light" color="#fa9841">橙色</tu-tag>
    </tu-row>

    <tu-row class="mb-2">
      <tu-tag hit round effect="dark">默认</tu-tag>
      <tu-tag round effect="dark" color="#50d4ab">绿色</tu-tag>
      <tu-tag round effect="dark" color="#5e7ce0">蓝色</tu-tag>
      <tu-tag round effect="dark" color="#f66f6a">红色</tu-tag>
      <tu-tag round effect="dark" color="#fa9841">橙色</tu-tag>
    </tu-row>

    <tu-row class="mb-2">
      <tu-tag round effect="plain">默认</tu-tag>
      <tu-tag round effect="plain" color="#50d4ab">绿色</tu-tag>
      <tu-tag round effect="plain" color="#5e7ce0">蓝色</tu-tag>
      <tu-tag round effect="plain" color="#f66f6a">红色</tu-tag>
      <tu-tag round effect="plain" color="#fa9841">橙色</tu-tag>
    </tu-row>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useToggle } from '@vueuse/core';
import { TuMessage } from '@tu-view-plus/components';
import zhCn from 'tu-view-plus/locale/lang/zh-cn.mjs';
import en from 'tu-view-plus/locale/lang/en.mjs';
import { Search, Close, Tools } from '@tu-view-plus/icons-vue';

const [visible, toggleVisible] = useToggle();

const value1 = ref(40);

const tags = ref([
  { name: 'Tag 1', type: '' },
  { name: 'Tag 2', type: 'success' },
  { name: 'Tag 3', type: 'info' },
  { name: 'Tag 4', type: 'warning' },
  { name: 'Tag 5', type: 'danger' }
]);

const openIcon = () => {
  TuMessage.success({
    message: '并不了解问题',
    icon: Search
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
