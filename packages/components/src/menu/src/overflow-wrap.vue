<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { overflowWrapProps } from './overflow-wrap';
import '../style/menu.scss';

defineOptions({
  name: 'TuOverflowWrap'
});

const props = defineProps(overflowWrapProps);
</script>
