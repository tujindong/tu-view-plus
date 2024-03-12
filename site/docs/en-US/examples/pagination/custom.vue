<template>
  <tu-pagination :total="200">
    <template #page-item="{ page }">
      <span class="page-item">{{ page }}</span>
    </template>
    <template #page-item-step="{ type }">
      <tu-icon
        :style="type === 'previous' ? { transform: 'rotate(180deg)' } : ''"
      >
        <CaretRight />
      </tu-icon>
      <icon-send />
    </template>
    <template #page-item-ellipsis> ~ </template>
  </tu-pagination>
</template>

<script lang="ts" setup>
import { CaretRight } from '@tu-view-plus/icons-vue';
</script>

<style lang="scss" scoped>
.page-item {
  font-style: italic;
  color: teal;
}
</style>
