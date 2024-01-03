<template>
  <div>
    quarter
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { quarterProps } from './quarter';

defineOptions({
  name: 'TuQuarter'
});

const props = defineProps(quarterProps);
</script>
