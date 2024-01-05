<template>
  <tu-link :icon="Edit">编辑</tu-link>

  <tu-link>
    加载中<tu-icon><Loading /></tu-icon>
  </tu-link>
</template>

<script lang="ts" setup>
import { Edit, Loading } from '@tu-view-plus/icons-vue';
</script>

<style scoped>
.tu-link {
  margin-right: 8px;
}
</style>
