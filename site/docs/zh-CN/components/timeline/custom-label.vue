<template>
  <tu-timeline>
    <tu-timeline-item>
      咖啡
      <template #label>
        <tu-tag>
          <template #icon>
            <tu-icon><Coffee /></tu-icon>
          </template>
          咖啡
        </tu-tag>
      </template>
    </tu-timeline-item>
  </tu-timeline>
</template>

<script lang="ts" setup>
import { Coffee } from '@tu-view-plus/icons-vue';
</script>
