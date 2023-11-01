<template>
  <tu-icon size="14">
    <template #prefix>
      <span>Setting</span>
    </template>
    <Tools />
  </tu-icon>
  <br />
  <tu-icon size="14">
    <template #suffix>
      <span>Search</span>
    </template>
    <Search />
  </tu-icon>
</template>

<script lang="ts" setup>
import { Search, Tools } from '@tu-view-plus/icons-vue';
</script>
