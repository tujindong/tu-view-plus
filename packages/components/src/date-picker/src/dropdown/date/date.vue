<template>
  <div>
    date
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { dateProps } from './date';

defineOptions({
  name: 'Date'
});

const props = defineProps(dateProps);
</script>
