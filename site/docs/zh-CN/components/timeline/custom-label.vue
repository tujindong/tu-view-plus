<template>
  <tu-timeline>
    <tu-timeline-item>
      饮料
      <template #label>
        <tu-icon>
          <CoffeeCup />
          <template #suffix>
            <span>一杯咖啡</span>
          </template>
        </tu-icon>
      </template>
    </tu-timeline-item>
    <tu-timeline-item>
      水果
      <template #label>
        <tu-icon>
          <Grape />
          <template #suffix>
            <span>一颗葡萄</span>
          </template>
        </tu-icon>
      </template>
    </tu-timeline-item>
  </tu-timeline>
</template>

<script lang="ts" setup>
import { CoffeeCup, Grape } from '@tu-view-plus/icons-vue';
</script>
