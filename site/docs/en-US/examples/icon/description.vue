<template>
  <tu-icon size="14">
    <template #prefix>
      <span>设置</span>
    </template>
    <Tools />
  </tu-icon>
  <br />
  <tu-icon size="14">
    <template #suffix>
      <span>搜索</span>
    </template>
    <Search />
  </tu-icon>
</template>

<script lang="ts" setup>
import { Search, Tools } from '@tu-view-plus/icons-vue';
</script>