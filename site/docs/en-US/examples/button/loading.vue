<template>
  <tu-button loading>Loading</tu-button>
  <tu-button loading :loading-icon="Tools"> Loading </tu-button>
  <tu-button type="primary" loading>Loading</tu-button>
</template>

<script lang="ts" setup>
import { Tools } from '@tu-view-plus/icons-vue';
</script>
