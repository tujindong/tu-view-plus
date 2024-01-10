<template>
  <tu-result
    status="custom"
    title="This is title content"
    subtitle="This is subtitle content"
  >
    <template #icon>
      <Bell />
    </template>
    <template #extra>
      <tu-button>Cancel</tu-button>
      <tu-button type="primary">Ok</tu-button>
    </template>
  </tu-result>
</template>

<script lang="ts" setup>
import { Bell } from '@tu-view-plus/icons-vue';
</script>
