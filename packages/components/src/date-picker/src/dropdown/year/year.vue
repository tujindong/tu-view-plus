<template>
  <div>
    year
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { yearProps } from './year';

defineOptions({
  name: 'Year'
});

const props = defineProps(yearProps);
</script>
