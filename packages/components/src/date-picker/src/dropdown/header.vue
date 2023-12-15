<template>
  <div>
    header
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { headerProps } from './header';

defineOptions({
  name: 'Header'
});

const props = defineProps(headerProps);
</script>
