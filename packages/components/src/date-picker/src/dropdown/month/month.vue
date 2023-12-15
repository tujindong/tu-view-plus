<template>
  <div>
    month
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { monthProps } from './month';

defineOptions({
  name: 'Month'
});

const props = defineProps(monthProps);
</script>
