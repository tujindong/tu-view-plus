<template>
  <span class="api-typing">
    <code class="api-typing__type">{{ type }}</code>
    <tu-tooltip size="small" v-if="details">
      <tu-icon class="api-typing__icon"><Warning /></tu-icon>
      <template #content>
        <code>{{ details }}</code>
      </template>
    </tu-tooltip>
  </span>
</template>

<script lang="ts" setup>
import { Warning } from '@tu-view-plus/icons-vue';

defineProps({
  type: String,
  details: String
});
</script>

<style lang="scss" scoped>
.api-typing {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  &__type {
    margin-right: 6px;
    padding: 0 6px;
    border-radius: 2px;
    line-height: 1.25;
    margin: 0 2px;
  }
  &__icon {
    cursor: pointer;
    transition: color 0.2s;
    margin-top: -1px;

    &:hover {
      color: var(--vp-c-text-1);
    }
  }
}
</style>