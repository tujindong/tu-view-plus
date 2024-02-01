<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { treeNodeSwitcherProps } from './tree-node-switcher';

defineOptions({
  name: 'TuTreeNodeSwitcher'
});

const props = defineProps(treeNodeSwitcherProps);
</script>
