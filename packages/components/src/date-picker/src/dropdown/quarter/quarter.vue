<template>
  <div>
    quarter
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { quarterProps } from './quarter';

defineOptions({
  name: 'Quarter'
});

const props = defineProps(quarterProps);
</script>
