<template>
  <tu-link :icon="Edit">Edit</tu-link>

  <tu-link>
    Loading<tu-icon><Loading /></tu-icon>
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
