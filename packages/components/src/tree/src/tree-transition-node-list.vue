<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { treeTransitionNodeListProps } from './tree-transition-node-list';

defineOptions({
  name: 'TuTreeTransitionNodeList'
});

const props = defineProps(treeTransitionNodeListProps);
</script>
