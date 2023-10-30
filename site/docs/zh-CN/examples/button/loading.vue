<template>
  <tu-button loading>加载中</tu-button>
  <tu-button loading :loading-icon="Tools"> 加载中 </tu-button>
  <tu-button type="primary" loading>加载中</tu-button>
</template>

<script lang="ts" setup>
import { Tools } from '@tu-view-plus/icons-vue';
</script>
