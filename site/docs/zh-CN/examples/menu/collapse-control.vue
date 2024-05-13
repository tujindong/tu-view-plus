<template>
  <tu-button class="mb-2" @click="collapsed = !collapsed">
    <template #icon>
      <Fold v-if="collapsed" />
      <Expand v-else />
    </template>
  </tu-button>

  <tu-menu
    style="width: 200px; border-radius: 4px"
    :default-selected-keys="['1']"
    :collapsed="collapsed"
  >
    <tu-menu-item key="1">
      <template #icon>
        <tu-icon> <Menu /> </tu-icon>
      </template>
      导航一
    </tu-menu-item>
    <tu-menu-item key="2">
      <template #icon>
        <tu-icon> <Tools /> </tu-icon>
      </template>
      导航二
    </tu-menu-item>
    <tu-sub-menu key="3" title="导航三">
      <template #icon>
        <tu-icon> <UploadFilled /> </tu-icon>
      </template>
      <tu-menu-item key="3-1">选项一</tu-menu-item>
      <tu-menu-item key="3-2">选项二</tu-menu-item>
    </tu-sub-menu>
    <tu-menu-item key="4">
      <template #icon>
        <tu-icon> <Promotion /> </tu-icon>
      </template>
      导航四
    </tu-menu-item>
  </tu-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import {
  Fold,
  Expand,
  Menu,
  Tools,
  UploadFilled,
  Promotion
} from '@tu-view-plus/icons-vue';

const collapsed = ref(false);
</script>
