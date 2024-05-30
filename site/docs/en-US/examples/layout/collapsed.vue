<template>
  <tu-layout class="layout-demo">
    <tu-layout-sider
      hide-trigger
      collapsible
      breakpoint="xl"
      :width="160"
      :collapsed="collapsed"
    >
      <tu-menu
        style="width: 160px"
        effect="default"
        :default-selected-keys="['1']"
      >
        <tu-menu-item key="1">
          <template #icon>
            <tu-icon>
              <Menu />
            </tu-icon>
          </template>
          Navigation 1
        </tu-menu-item>
        <tu-menu-item key="2">
          <template #icon>
            <tu-icon>
              <Tools />
            </tu-icon>
          </template>
          Navigation 2
        </tu-menu-item>
        <tu-sub-menu key="3" title="Navigation 3">
          <template #icon>
            <tu-icon>
              <UploadFilled />
            </tu-icon>
          </template>
          <tu-menu-item key="3-1">Menu 1</tu-menu-item>
          <tu-menu-item key="3-2">Menu 2</tu-menu-item>
        </tu-sub-menu>
        <tu-menu-item key="4">
          <template #icon>
            <tu-icon>
              <Promotion />
            </tu-icon>
          </template>
          Navigation 4
        </tu-menu-item>
      </tu-menu>
    </tu-layout-sider>
    <tu-layout>
      <tu-layout-header style="padding-left: 20px">
        <tu-button size="small" @click="collapsed = !collapsed">
          <tu-icon v-if="collapsed"><CaretRight /></tu-icon>
          <tu-icon v-else><CaretLeft /></tu-icon>
        </tu-button>
      </tu-layout-header>
      <tu-layout style="padding: 0 12px">
        <tu-breadcrumb :style="{ margin: '16px 0' }">
          <tu-breadcrumb-item>Home</tu-breadcrumb-item>
          <tu-breadcrumb-item>Channel</tu-breadcrumb-item>
          <tu-breadcrumb-item>News</tu-breadcrumb-item>
        </tu-breadcrumb>
        <tu-layout-content></tu-layout-content>
      </tu-layout>
    </tu-layout>
  </tu-layout>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import {
  CaretLeft,
  CaretRight,
  Menu,
  Tools,
  UploadFilled,
  Promotion
} from '@tu-view-plus/icons-vue';

const collapsed = ref(false);
</script>

<style scoped lang="scss">
.layout-demo {
  height: 400px;
  color: #71757f;
  font-size: 14px;
  box-shadow: 3px 3px 6px var(--tu-color-shadow-dark, #babbc0),
    -2px -2px 5px var(--tu-color-shadow-light, #ffffff);
}
.layout-demo :deep(.tu-layout__footer),
.layout-demo :deep(.tu-layout__content) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-stretch: condensed;
  text-align: center;
  font-size: 14px;
  color: #71757f;
}
.layout-demo :deep(.tu-layout__sider) {
  border-right: 1px solid rgba(128, 128, 128, 0.18);
}
.layout-demo :deep(.tu-layout__header) {
  height: 54px;
  line-height: 54px;
  border-bottom: 1px solid rgba(128, 128, 128, 0.18);
}
</style>
