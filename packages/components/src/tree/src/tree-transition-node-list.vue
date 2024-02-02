<template>
  <tu-tree-expand-transition :expanded="expanded" @end="onTransitionEnd">
    <div v-if="show" :class="nsTree.e('node-list')">
      <tu-tree-base-tree-node
        v-for="node in visibleNodeList"
        :key="node.key"
        v-bind="node.treeNodeProps"
      />
    </div>
  </tu-tree-expand-transition>
</template>

<script lang="ts" setup>
import { computed, toRefs } from 'vue';
import { treeTransitionNodeListProps } from './tree-transition-node-list';
import { useNamespace } from '@tu-view-plus/hooks';
import { useTreeContext } from './hooks';
import TuTreeExpandTransition from './tree-expand-transition.vue';
import TuTreeBaseTreeNode from './tree-base-node.vue';

defineOptions({
  name: 'TuTreeTransitionNodeList'
});

const props = defineProps(treeTransitionNodeListProps);

const nsTree = useNamespace('tree');

const treeContext = useTreeContext();

const { nodeKey } = toRefs(props);

const expanded = computed(() =>
  treeContext.expandedKeys?.includes?.(nodeKey.value)
);

const visibleNodeList = computed(() => {
  const expandedKeysSet = new Set(treeContext.expandedKeys || []);
  const childNodeList = treeContext.flattenTreeData?.filter((node) => {
    if (node.pathParentKeys?.includes(nodeKey.value)) {
      return (
        !treeContext.filterTreeNode ||
        treeContext.filterTreeNode?.(node.treeNodeData)
      );
    }
    return false;
  });

  return childNodeList?.filter((node) => {
    if (expanded.value) {
      return node.pathParentKeys?.every((_key) => expandedKeysSet.has(_key));
    }
    const index = node.pathParentKeys.indexOf(nodeKey.value);
    return node.pathParentKeys
      .slice(index + 1)
      .every((_key) => expandedKeysSet.has(_key));
  });
});

const show = computed(
  () =>
    treeContext.currentExpandKeys?.includes(nodeKey.value) &&
    visibleNodeList.value?.length
);

function onTransitionEnd() {
  treeContext.onExpandEnd?.(nodeKey.value);
}
</script>
