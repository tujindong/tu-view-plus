<template>
  <tu-dropdown-button>
    Send
    <template #content>
      <tu-dropdown-item>Save now</tu-dropdown-item>
      <tu-dropdown-item>Save & refresh</tu-dropdown-item>
    </template>
  </tu-dropdown-button>

  <tu-dropdown-button>
    Send
    <template #icon>
      <tu-icon>
        <MoreFilled />
      </tu-icon>
    </template>
    <template #content>
      <tu-dropdown-item>Save now</tu-dropdown-item>
      <tu-dropdown-item>Save & refresh</tu-dropdown-item>
    </template>
  </tu-dropdown-button>

  <tu-dropdown-button disabled>
    Send
    <template #content>
      <tu-dropdown-item>Save now</tu-dropdown-item>
      <tu-dropdown-item>Save & refresh</tu-dropdown-item>
    </template>
  </tu-dropdown-button>
</template>

<script lang="ts" setup>
import { MoreFilled } from '@tu-view-plus/icons-vue';
</script>
