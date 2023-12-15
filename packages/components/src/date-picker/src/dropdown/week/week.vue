<template>
  <div>
    week
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { weekProps } from './week';

defineOptions({
  name: 'Week'
});

const props = defineProps(weekProps);
</script>
