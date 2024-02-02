<template>
  <div :class="classes">
    <tu-virtual-list
      v-if="virtualListProps"
      ref="virtualListRef"
      v-bind="virtualListProps"
      :data="visibleTreeNodeList"
    >
      <template #item="{ item: node }">
        <tu-tree-node
          v-bind="node.treeNodeProps"
          :key="`${searchValue}-${node.key}`"
        />
      </template>
    </tu-virtual-list>
    <template v-else>
      <tu-tree-node
        v-for="node in visibleTreeNodeList"
        v-bind="node.treeNodeProps"
        :key="node.key"
      />
    </template>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, toRefs, useSlots, reactive, provide } from 'vue';
import { treeProps, treeEmits } from './tree';
import { useNamespace, usePickSlots, useMergeState } from '@tu-view-plus/hooks';
import { isUndefined, isFunction, isArray } from '@tu-view-plus/utils';
import { useFormDisabled, useFormSize } from '../../form';
import {
  TreeNodeKey,
  TreeNodeData,
  DropPosition,
  CheckedStrategy
} from './interface';
import { useTreeData, useCheckedState } from './hooks';
import { TreeInjectionKey } from './context';
import { getCheckedStateByCheck, isNodeCheckable } from './utils/check-utils';
import { isLeafNode, isNodeExpandable, isNodeSelectable } from './utils';
import TuVirtualList from '../../virtual-list';
import TuTreeNode from './tree-node.vue';
import '../style/tree.scss';

defineOptions({
  name: 'TuTree'
});

const props = defineProps(treeProps);
const emit = defineEmits(treeEmits);

const slots = useSlots();

const {
  data: propTreeData,
  showLine,
  multiple,
  loadMore,
  checkStrictly,
  checkedKeys: propCheckedKeys,
  defaultCheckedKeys,
  selectedKeys: propSelectedKeys,
  defaultSelectedKeys,
  expandedKeys: propExpandedKeys,
  defaultExpandedKeys,
  checkedStrategy,
  selectable,
  checkable,
  blockNode,
  fieldNames,
  size,
  defaultExpandAll,
  filterTreeNode,
  draggable,
  allowDrop,
  defaultExpandSelected,
  defaultExpandChecked,
  autoExpandParent,
  halfCheckedKeys,
  onlyCheckLeaf,
  animation
} = toRefs(props);

const nsTree = useNamespace('tree');

const treeSize = useFormSize();

const classes = computed(() => ({
  [nsTree.b()]: true,
  [nsTree.m(treeSize.value)]: true,
  [nsTree.is('checkable')]: checkable.value,
  [nsTree.is('show-line')]: showLine.value
}));

const switcherIcon = usePickSlots(slots, 'switcher-icon');
const loadingIcon = usePickSlots(slots, 'loading-icon');
const dragIcon = usePickSlots(slots, 'drag-icon');
const nodeIcon = usePickSlots(slots, 'icon');
const nodeTitle = usePickSlots(slots, 'title');
const nodeExtra = usePickSlots(slots, 'extra');

const { treeData, flattenTreeData, key2TreeNode } = useTreeData(
  reactive({
    treeData: propTreeData,
    selectable,
    showLine,
    blockNode,
    checkable,
    fieldNames,
    loadMore,
    draggable
  })
);

const { checkedKeys, indeterminateKeys, setCheckedState } = useCheckedState(
  reactive({
    defaultCheckedKeys,
    checkedKeys: propCheckedKeys,
    checkStrictly,
    key2TreeNode,
    halfCheckedKeys,
    onlyCheckLeaf
  })
);

const [selectedKeys, setSelectedState] = useMergeState<TreeNodeKey[]>(
  defaultSelectedKeys?.value || [],
  reactive({
    value: propSelectedKeys
  })
);
const loadingKeys = ref<TreeNodeKey[]>([]);

const dragNode = ref<Node>();

const virtualListRef = ref();

function getDefaultExpandedKeys() {
  if (defaultExpandedKeys?.value) {
    const expandedKeysSet = new Set<TreeNodeKey>([]);
    defaultExpandedKeys.value.forEach((_key) => {
      if (expandedKeysSet.has(_key)) return;

      const node = key2TreeNode.value.get(_key);
      if (!node) return;

      [...(autoExpandParent.value ? node.pathParentKeys : []), _key].forEach(
        (_key) => expandedKeysSet.add(_key)
      );
    });
    return [...expandedKeysSet];
  }
  if (defaultExpandAll.value) {
    return flattenTreeData.value
      .filter((node) => node.children && node.children.length)
      .map((node) => node.key);
  }
  if (defaultExpandSelected.value || defaultExpandChecked.value) {
    const expandedKeysSet = new Set<TreeNodeKey>([]);
    const addToExpandKeysSet = (keys: TreeNodeKey[]) => {
      keys.forEach((key) => {
        const node = key2TreeNode.value.get(key);
        if (!node) return;

        (node.pathParentKeys || []).forEach((k) => expandedKeysSet.add(k));
      });
    };
    if (defaultExpandSelected.value) {
      addToExpandKeysSet(selectedKeys.value);
    }
    if (defaultExpandChecked.value) {
      addToExpandKeysSet(checkedKeys.value);
    }
    return [...expandedKeysSet];
  }
  return [];
}

const [expandedKeys, setExpandState] = useMergeState<TreeNodeKey[]>(
  getDefaultExpandedKeys(),
  reactive({
    value: propExpandedKeys
  })
);

const currentExpandKeys = ref<TreeNodeKey[]>([]);

const visibleTreeNodeList = computed(() => {
  const expandedKeysSet = new Set(expandedKeys.value);
  const currentExpandKeysSet = new Set(currentExpandKeys.value);

  return flattenTreeData.value.filter((node) => {
    const passFilter =
      !filterTreeNode ||
      !filterTreeNode.value ||
      filterTreeNode?.value(node.treeNodeData);

    if (!passFilter) return false;

    const isRoot = isUndefined(node.parentKey);

    const isVisibleNode = node.pathParentKeys?.every(
      (_key) => expandedKeysSet.has(_key) && !currentExpandKeysSet.has(_key)
    );

    return isRoot || isVisibleNode;
  });
});

function getPublicCheckedKeys(
  rawCheckedKeys: TreeNodeKey[],
  rawCheckedStrategy = checkedStrategy.value
) {
  let publicCheckedKeys = [...rawCheckedKeys];
  if (rawCheckedStrategy === 'parent') {
    publicCheckedKeys = rawCheckedKeys.filter((_key) => {
      const item = key2TreeNode.value.get(_key);
      return (
        item &&
        !(
          !isUndefined(item.parentKey) &&
          rawCheckedKeys.includes(item.parentKey)
        )
      );
    });
  } else if (rawCheckedStrategy === 'child') {
    publicCheckedKeys = rawCheckedKeys.filter((_key) => {
      return !key2TreeNode.value.get(_key)?.children?.length;
    });
  }
  return publicCheckedKeys;
}

function getNodes(keys: TreeNodeKey[]) {
  return keys
    .map((key) => key2TreeNode.value.get(key)?.treeNodeData || undefined)
    .filter(Boolean);
}

function emitCheckEvent(options: {
  targetKey?: TreeNodeKey;
  targetChecked?: boolean;
  newCheckedKeys: TreeNodeKey[];
  newIndeterminateKeys: TreeNodeKey[];
  event?: Event;
}) {
  const {
    targetKey,
    targetChecked,
    newCheckedKeys,
    newIndeterminateKeys,
    event
  } = options;
  const targetNode = targetKey ? key2TreeNode.value.get(targetKey) : undefined;
  const publicCheckedKeys = getPublicCheckedKeys(newCheckedKeys);
  emit('update:checkedKeys', publicCheckedKeys);
  emit('update:halfCheckedKeys', newIndeterminateKeys);
  emit('check', publicCheckedKeys, {
    checked: targetChecked,
    node: targetNode?.treeNodeData,
    checkedNodes: getNodes(publicCheckedKeys) as TreeNodeData[],
    halfCheckedKeys: newIndeterminateKeys,
    halfCheckedNodes: getNodes(newIndeterminateKeys) as TreeNodeData[],
    e: event
  });
}

function emitSelectEvent(options: {
  targetKey?: TreeNodeKey;
  targetSelected?: boolean;
  newSelectedKeys: TreeNodeKey[];
  event?: Event;
}) {
  const { targetKey, targetSelected, newSelectedKeys, event } = options;
  const targetNode = targetKey ? key2TreeNode.value.get(targetKey) : undefined;
  emit('update:selectedKeys', newSelectedKeys);
  emit('select', newSelectedKeys, {
    selected: targetSelected,
    node: targetNode?.treeNodeData,
    selectedNodes: getNodes(newSelectedKeys) as TreeNodeData[],
    e: event
  });
}

function emitExpandEvent(options: {
  targetKey?: TreeNodeKey;
  targetExpanded?: boolean;
  newExpandedKeys: TreeNodeKey[];
  event?: Event;
}) {
  const { targetKey, targetExpanded, newExpandedKeys, event } = options;
  const targetNode = targetKey ? key2TreeNode.value.get(targetKey) : undefined;
  emit('expand', newExpandedKeys, {
    expanded: targetExpanded,
    node: targetNode?.treeNodeData,
    expandedNodes: getNodes(newExpandedKeys) as TreeNodeData[],
    e: event
  });
  emit('update:expandedKeys', newExpandedKeys);
}

function setCheckedKeys(keys: TreeNodeKey[]) {
  const [newCheckedKeys, newIndeterminateKeys] = setCheckedState(
    keys,
    [],
    true
  );
  emitCheckEvent({ newCheckedKeys, newIndeterminateKeys });
}

function setSelectedKeys(keys: TreeNodeKey[]) {
  let newSelectedKeys = keys;
  if (!multiple.value && keys.length > 1) {
    newSelectedKeys = [keys[0]];
  }
  setSelectedState(newSelectedKeys);
  emitSelectEvent({
    newSelectedKeys
  });
}

function setExpandedKeys(keys: TreeNodeKey[]) {
  currentExpandKeys.value = [];
  setExpandState(keys);
  emitExpandEvent({ newExpandedKeys: keys });
}

function checkNodes(
  keys: TreeNodeKey[],
  checked: boolean,
  targetKey?: TreeNodeKey
) {
  if (!keys.length) return;
  let newCheckedKeys = [...checkedKeys.value];
  let newIndeterminateKeys = [...indeterminateKeys.value];
  keys.forEach((key) => {
    const node = key2TreeNode.value.get(key);
    if (node) {
      [newCheckedKeys, newIndeterminateKeys] = getCheckedStateByCheck({
        node,
        checked,
        checkedKeys: [...newCheckedKeys],
        indeterminateKeys: [...newIndeterminateKeys],
        checkStrictly: checkStrictly.value
      });
    }
  });
  setCheckedState(newCheckedKeys, newIndeterminateKeys);
  emitCheckEvent({
    targetKey,
    targetChecked: isUndefined(targetKey) ? undefined : checked,
    newCheckedKeys,
    newIndeterminateKeys
  });
}

function selectNodes(
  keys: TreeNodeKey[],
  selected: boolean,
  targetKey?: TreeNodeKey
) {
  if (!keys.length) return;

  let newSelectedKeys: TreeNodeKey[];

  if (multiple.value) {
    const selectedKeysSet = new Set(selectedKeys.value);
    keys.forEach((key) => {
      selected ? selectedKeysSet.add(key) : selectedKeysSet.delete(key);
    });
    newSelectedKeys = [...selectedKeysSet];
  } else {
    newSelectedKeys = selected ? [keys[0]] : [];
  }

  setSelectedState(newSelectedKeys);
  emitSelectEvent({
    targetKey,
    targetSelected: isUndefined(targetKey) ? undefined : selected,
    newSelectedKeys
  });
}

function expandNodes(
  keys: TreeNodeKey[],
  expanded: boolean,
  targetKey?: TreeNodeKey
) {
  const expandedKeysSet = new Set(expandedKeys.value);

  keys.forEach((key) => {
    expanded ? expandedKeysSet.add(key) : expandedKeysSet.delete(key);
    onExpandEnd(key);
  });
  const newExpandedKeys = [...expandedKeysSet];

  setExpandState(newExpandedKeys);
  emitExpandEvent({
    targetKey,
    targetExpanded: isUndefined(targetKey) ? undefined : expanded,
    newExpandedKeys
  });
}

function onCheck(checked: boolean, key: TreeNodeKey, e?: Event) {
  const node = key2TreeNode.value.get(key);
  if (!node) return;

  const [newCheckedKeys, newIndeterminateKeys] = getCheckedStateByCheck({
    node,
    checked,
    checkedKeys: checkedKeys.value,
    indeterminateKeys: indeterminateKeys.value,
    checkStrictly: checkStrictly.value
  });

  setCheckedState(newCheckedKeys, newIndeterminateKeys);
  emitCheckEvent({
    targetKey: key,
    targetChecked: checked,
    newCheckedKeys,
    newIndeterminateKeys,
    event: e
  });
}

function onSelect(key: TreeNodeKey, e: Event) {
  const node = key2TreeNode.value.get(key);
  if (!node) return;

  let newSelectedKeys: TreeNodeKey[];
  let selected: boolean;

  if (multiple.value) {
    const selectedKeysSet = new Set(selectedKeys.value);
    selected = !selectedKeysSet.has(key);

    selected ? selectedKeysSet.add(key) : selectedKeysSet.delete(key);
    newSelectedKeys = [...selectedKeysSet];
  } else {
    selected = true;
    newSelectedKeys = [key];
  }

  setSelectedState(newSelectedKeys);
  emitSelectEvent({
    targetKey: key,
    targetSelected: selected,
    newSelectedKeys,
    event: e
  });
}

function onExpand(expanded: boolean, key: TreeNodeKey, e?: Event) {
  // 如果当前 key 节点正在展开/收起，不执行操作。
  if (currentExpandKeys.value.includes(key)) return;

  const node = key2TreeNode.value.get(key);
  if (!node) return;

  const expandedKeysSet = new Set(expandedKeys.value);

  expanded ? expandedKeysSet.add(key) : expandedKeysSet.delete(key);
  const newExpandedKeys = [...expandedKeysSet];

  setExpandState(newExpandedKeys);
  if (animation.value) {
    currentExpandKeys.value.push(key);
  }

  emitExpandEvent({
    targetKey: key,
    targetExpanded: expanded,
    newExpandedKeys,
    event: e
  });
}

function onExpandEnd(key: TreeNodeKey) {
  const index = currentExpandKeys.value.indexOf(key);
  currentExpandKeys.value.splice(index, 1);
}

const onLoadMore = computed(() =>
  loadMore?.value
    ? async (key: TreeNodeKey) => {
        if (!isFunction(loadMore.value)) return;

        const node = key2TreeNode.value.get(key);
        if (!node) return;

        const { treeNodeData } = node;

        loadingKeys.value = [...new Set([...loadingKeys.value, key])];

        try {
          await loadMore.value(treeNodeData);
          loadingKeys.value = loadingKeys.value.filter((v) => v !== key);
          onExpand(true, key);
          if (checkedKeys.value.includes(key)) {
            onCheck(true, key);
          }
        } catch (err) {
          loadingKeys.value = loadingKeys.value.filter((v) => v !== key);
          // eslint-disable-next-line no-console
          console.error('[tree]load data error: ', err);
        }
      }
    : undefined
);

const treeContext = reactive({
  treeProps: props,
  size: treeSize,
  switcherIcon,
  loadingIcon,
  dragIcon,
  nodeIcon,
  nodeTitle,
  nodeExtra,
  treeData,
  flattenTreeData,
  key2TreeNode,
  checkedKeys,
  indeterminateKeys,
  selectedKeys,
  expandedKeys,
  loadingKeys,
  currentExpandKeys,
  onLoadMore,
  filterTreeNode,
  onCheck,
  onSelect,
  onExpand,
  onExpandEnd,
  allowDrop(key: TreeNodeKey, dropPosition: DropPosition) {
    const node = key2TreeNode.value.get(key);
    if (node && isFunction(allowDrop?.value)) {
      return !!allowDrop.value({
        dropNode: node.treeNodeData,
        dropPosition
      });
    }
    return true;
  },
  onDragStart(key: TreeNodeKey, e: DragEvent) {
    const node = key2TreeNode.value.get(key);
    dragNode.value = node;
    if (node) {
      emit('dragStart', e, node.treeNodeData);
    }
  },
  onDragEnd(key: TreeNodeKey, e: DragEvent) {
    const node = key2TreeNode.value.get(key);
    dragNode.value = undefined;
    if (node) {
      emit('dragEnd', e, node.treeNodeData);
    }
  },
  onDragOver(key: TreeNodeKey, e: DragEvent) {
    const node = key2TreeNode.value.get(key);
    if (node) {
      emit('dragOver', e, node.treeNodeData);
    }
  },
  onDragLeave(key: TreeNodeKey, e: DragEvent) {
    const node = key2TreeNode.value.get(key);
    if (node) {
      emit('dragLeave', e, node.treeNodeData);
    }
  },
  onDrop(key: TreeNodeKey, dropPosition: number, e: DragEvent) {
    const node = key2TreeNode.value.get(key);
    if (
      dragNode.value &&
      node &&
      !(
        node.key === dragNode.value.key ||
        node.pathParentKeys.includes(dragNode.value.key || '')
      )
    ) {
      emit('drop', {
        e,
        dragNode: dragNode.value.treeNodeData,
        dropNode: node.treeNodeData,
        dropPosition
      });
    }
  }
});

provide(TreeInjectionKey, treeContext);

// function toggleCheck(key: TreeNodeKey, e: Event) {
//   const { key2TreeNode, onCheck, checkedKeys } = treeContext;
//   const checked = !checkedKeys.includes(key);
//   const node = key2TreeNode.get(key);
//   if (node && isNodeCheckable(node)) {
//     onCheck(checked, key, e);
//   }
// }
// /**
//  * @zh 虚拟列表滚动某个元素
//  * @en Virtual list scroll to an element
//  * @param {{ index?: number; key?: number | string; align: 'auto' | 'top' | 'bottom'}} options
//  * @public
//  */
// function scrollIntoView(options: ScrollIntoViewOptions) {
//   virtualListRef.value && virtualListRef.value.scrollTo(options);
// }
// /**
//  * @zh 获取选中的节点
//  * @en Get selected nodes
//  * @returns {TreeNodeData[]}
//  * @public
//  */
// function getSelectedNodes() {
//   return getNodes(selectedKeys.value);
// }
// /**
//  * @zh 获取选中复选框的节点。支持传入 `checkedStrategy`，没有传则取组件的配置。
//  * @en Get checked nodes. Supports passing in `checkedStrategy`, if not passed, the configuration of the component is taken.
//  * @param { checkedStrategy?: 'all' | 'parent' | 'child'; includeHalfChecked?: boolean; } options
//  * @returns {TreeNodeData[]}
//  * @public
//  */
// function getCheckedNodes(
//   options: {
//     checkedStrategy?: CheckedStrategy;
//     includeHalfChecked?: boolean;
//   } = {}
// ) {
//   const { checkedStrategy, includeHalfChecked } = options;
//   const _checkedKeys = getPublicCheckedKeys(checkedKeys.value, checkedStrategy);
//   const checkedNodes = getNodes(_checkedKeys);
//   return [
//     ...checkedNodes,
//     ...(includeHalfChecked ? getHalfCheckedNodes() : [])
//   ];
// }
// /**
//  * @zh 获取复选框半选的节点
//  * @en Get half checked nodes
//  * @returns {TreeNodeData[]}
//  * @public
//  */
// function getHalfCheckedNodes() {
//   return getNodes(indeterminateKeys.value);
// }
// /**
//  * @zh 获取展开的节点
//  * @en Get expanded nodes
//  * @returns {TreeNodeData[]}
//  * @public
//  */
// function getExpandedNodes() {
//   return getNodes(expandedKeys.value);
// }
// /**
//  * @zh 设置全部节点的复选框状态
//  * @en Set the checkbox state of all nodes
//  * @param { boolean } checked
//  * @public
//  */
// function checkAll(checked = true) {
//   const { key2TreeNode } = treeContext;
//   const newKeys = checked
//     ? [...key2TreeNode.keys()].filter((key) => {
//         const node = key2TreeNode.get(key);
//         return node && isNodeCheckable(node);
//       })
//     : [];
//   setCheckedKeys(newKeys);
// }
// /**
//  * @zh 设置指定节点的复选框状态
//  * @en Sets the checkbox state of the specified node
//  * @param { TreeNodeKey | TreeNodeKey[] } key
//  * @param { boolean } checked
//  * @param { boolean } onlyCheckLeaf
//  * @public
//  */
// function checkNode(
//   key: TreeNodeKey | TreeNodeKey[],
//   checked = true,
//   onlyCheckLeaf = false
// ) {
//   const { key2TreeNode } = treeContext;
//   const isBatch = isArray(key);
//   const keys = (isBatch ? key : [key]).filter((key) => {
//     const node = key2TreeNode.get(key);
//     return (
//       node &&
//       isNodeCheckable(node) &&
//       (checkStrictly.value || !onlyCheckLeaf || isLeafNode(node)) // onlyCheckLeaf 仅在 checkStrictly 为 false 的时候有效
//     );
//   });
//   checkNodes(keys, checked, isBatch ? undefined : key);
// }
// /**
//  * @zh 设置全部节点的选中状态
//  * @en Set the selected state of all nodes
//  * @param { boolean } selected
//  * @public
//  */
// function selectAll(selected = true) {
//   const { key2TreeNode } = treeContext;
//   const newKeys = selected
//     ? [...key2TreeNode.keys()].filter((key) => {
//         const node = key2TreeNode.get(key);
//         return node && isNodeSelectable(node);
//       })
//     : [];
//   setSelectedKeys(newKeys);
// }
// /**
//  * @zh 设置指定节点的选中状态
//  * @en Sets the selected state of the specified node
//  * @param { TreeNodeKey | TreeNodeKey[] } key
//  * @param { boolean } selected
//  * @public
//  */
// function selectNode(key: TreeNodeKey | TreeNodeKey[], selected = true) {
//   const { key2TreeNode } = treeContext;
//   const isBatch = isArray(key);
//   const keys = (isBatch ? key : [key]).filter((key) => {
//     const node = key2TreeNode.get(key);
//     return node && isNodeSelectable(node);
//   });
//   selectNodes(keys, selected, isBatch ? undefined : key);
// }
// /**
//  * @zh 设置全部节点的展开状态
//  * @en Set the expanded state of all nodes
//  * @param { boolean } expanded
//  * @public
//  */
// function expandAll(expanded = true) {
//   const { key2TreeNode } = treeContext;
//   const newKeys = expanded
//     ? [...key2TreeNode.keys()].filter((key) => {
//         const node = key2TreeNode.get(key);
//         return node && isNodeExpandable(node);
//       })
//     : [];
//   setExpandedKeys(newKeys);
// }
// /**
//  * @zh 设置指定节点的展开状态
//  * @en Sets the expanded state of the specified node
//  * @param { TreeNodeKey | TreeNodeKey[] } key
//  * @param { boolean } expanded
//  * @public
//  * @version 2.20.0
//  */
// function expandNode(key: TreeNodeKey | TreeNodeKey[], expanded = true) {
//   const { key2TreeNode } = treeContext;
//   const isBatch = isArray(key);
//   const keys = (isBatch ? key : [key]).filter((key) => {
//     const node = key2TreeNode.get(key);
//     return node && isNodeExpandable(node);
//   });
//   expandNodes(keys, expanded, isBatch ? undefined : key);
// }
</script>
