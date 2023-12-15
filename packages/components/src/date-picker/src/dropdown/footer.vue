<template>
  <div>
    footer
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { footerProps } from './footer';

defineOptions({
  name: 'Footer'
});

const props = defineProps(footerProps);
</script>
