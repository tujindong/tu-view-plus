<template>
  <tu-spin :loading="true" :size="20">
    <template #icon>
      <Loading />
    </template>
  </tu-spin>
</template>

<script lang="ts" setup>
import { Loading } from '@tu-view-plus/icons-vue';
</script>