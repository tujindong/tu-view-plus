<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { treeBaseNodeProps } from './tree-base-node';

defineOptions({
  name: 'TuTreeBaseNode'
});

const props = defineProps(treeBaseNodeProps);
</script>
