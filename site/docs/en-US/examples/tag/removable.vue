<template>
  <tu-tag closable>Tag</tu-tag>
  <tu-tag closable>
    <template #icon><Search /></template>
    Tag
  </tu-tag>
</template>

<script lang="ts" setup>
import { Search } from '@tu-view-plus/icons-vue';
</script>
