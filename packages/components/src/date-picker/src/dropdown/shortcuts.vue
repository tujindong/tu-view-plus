<template>
  <div>
    shortcuts
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { shortcutsProps } from './shortcuts';

defineOptions({
  name: 'Shortcuts'
});

const props = defineProps(shortcutsProps);
</script>
