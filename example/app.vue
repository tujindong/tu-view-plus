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

    <tu-row>
      <tu-tag>默认</tu-tag>
      <tu-tag color="#67c23a">绿色</tu-tag>
      <tu-tag color="#409eff">蓝色</tu-tag>
      <tu-tag color="#f56c6c">红色</tu-tag>
      <tu-tag color="#e6a23c">橙色</tu-tag>
    </tu-row>

    <br />
    dark
    <br />
    <tu-row>
      <tu-tag effect="dark">默认</tu-tag>
      <tu-tag effect="dark" color="#67c23a">绿色</tu-tag>
      <tu-tag effect="dark" color="#409eff">蓝色</tu-tag>
      <tu-tag effect="dark" color="#f56c6c">红色</tu-tag>
      <tu-tag effect="dark" color="#e6a23c">橙色</tu-tag>
    </tu-row>

    <br />
    light
    <br />
    <tu-row>
      <tu-tag effect="light">默认</tu-tag>
      <tu-tag effect="light" color="#67c23a">绿色</tu-tag>
      <tu-tag effect="light" color="#409eff">蓝色</tu-tag>
      <tu-tag effect="light" color="#f56c6c">红色</tu-tag>
      <tu-tag effect="light" color="#e6a23c">橙色</tu-tag>
    </tu-row>

    <br />
    plain
    <br />
    <tu-row>
      <tu-tag effect="plain">默认</tu-tag>
      <tu-tag effect="plain" color="#67c23a">绿色</tu-tag>
      <tu-tag effect="plain" color="#409eff">蓝色</tu-tag>
      <tu-tag effect="plain" color="#f56c6c">红色</tu-tag>
      <tu-tag effect="plain" color="#e6a23c">橙色</tu-tag>
    </tu-row>

    <br />
    neumorphic
    <br />
    <tu-row>
      <tu-tag effect="neumorphic">默认</tu-tag>
      <tu-tag effect="neumorphic" color="#67c23a">绿色</tu-tag>
      <tu-tag effect="neumorphic" color="#409eff">蓝色</tu-tag>
      <tu-tag effect="neumorphic" color="#f56c6c">红色</tu-tag>
      <tu-tag effect="neumorphic" color="#e6a23c">橙色</tu-tag>
    </tu-row>

    <br />
    <br />
    <tu-tag class="mx-1" size="large" closable>Large</tu-tag>
    <tu-tag class="mx-1" closable>Default</tu-tag>
    <tu-tag class="mx-1" size="small" closable>Small</tu-tag>
    <tu-tag class="mx-1" size="mini" closable>Mini</tu-tag>

    <br />
    <br />

    <tu-tag
      v-for="tag in tags"
      :key="tag.name"
      class="mx-1"
      closable
      :type="tag.type"
    >
      {{ tag.name }}
    </tu-tag>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useToggle } from '@vueuse/core';
import { TuMessage } from '@tu-view-plus/components';
import zhCn from 'tu-view-plus/locale/lang/zh-cn.mjs';
import en from 'tu-view-plus/locale/lang/en.mjs';
import { Search } from '@tu-view-plus/icons-vue';

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
