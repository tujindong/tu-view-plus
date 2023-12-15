<template>
  <div>
    week-list
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { weekListProps } from './week-list';

defineOptions({
  name: 'WeekList'
});

const props = defineProps(weekListProps);
</script>
