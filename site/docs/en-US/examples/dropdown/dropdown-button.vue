<template>
  <tu-dropdown-button>
    发布
    <template #content>
      <tu-dropdown-item>保存</tu-dropdown-item>
      <tu-dropdown-item>保存并刷新</tu-dropdown-item>
    </template>
  </tu-dropdown-button>

  <tu-dropdown-button>
    发布
    <template #icon>
      <tu-icon>
        <MoreFilled />
      </tu-icon>
    </template>
    <template #content>
      <tu-dropdown-item>保存</tu-dropdown-item>
      <tu-dropdown-item>保存并刷新</tu-dropdown-item>
    </template>
  </tu-dropdown-button>

  <tu-dropdown-button disabled>
    发布
    <template #content>
      <tu-dropdown-item>保存</tu-dropdown-item>
      <tu-dropdown-item>保存并刷新</tu-dropdown-item>
    </template>
  </tu-dropdown-button>
</template>

<script lang="ts" setup>
import { MoreFilled } from '@tu-view-plus/icons-vue';
</script>