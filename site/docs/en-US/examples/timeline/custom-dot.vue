<template>
  <tu-timeline>
    <tu-timeline-item label="2023-09-30" dot-type="hollow" dot-color="#5e7ce0">
      Node 1
    </tu-timeline-item>
    <tu-timeline-item label="2023-10-01" dot-type="solid" dot-color="#5e7ce0">
      Node 2
    </tu-timeline-item>
    <tu-timeline-item label="2023-10-02">
      <template #dot>
        <tu-icon color="#5e7ce0">
          <WarningFilled />
        </tu-icon>
      </template>
      Node 3
    </tu-timeline-item>
  </tu-timeline>
</template>

<script lang="ts" setup>
import { WarningFilled } from '@tu-view-plus/icons-vue';
</script>
