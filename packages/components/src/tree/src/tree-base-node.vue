<template>
  <div :class="classes" :data-level="level" :data-key="key">
    <span :class="nsTree.e('indent')">
      <span
        v-for="i in level"
        :key="i"
        :class="[
          nsTree.e('indent-block'),
          nsTree.is('lineless', lineless[i - 1])
        ]"
      />
    </span>

    <!-- switcher -->
    <span :class="[nsTree.e('switcher'), nsTree.is('expanded', expanded)]">
      <tu-tree-node-switcher
        :loading="loading"
        :show-line="showLine"
        :tree-node-data="treeNodeData"
        :icons="{
          switcherIcon,
          loadingIcon
        }"
        :node-status="nodeStatus"
        @click="onSwitcherClick"
      >
        <template v-if="$slots['switcher-icon']" #switcher-icon>
          <TuIcon>
            <slot name="switcher-icon" />
          </TuIcon>
        </template>
        <template v-if="$slots['loading-icon']" #loading-icon>
          <TuIcon>
            <slot name="loading-icon" />
          </TuIcon>
        </template>
      </tu-tree-node-switcher>
    </span>

    <tu-checkbox
      v-if="checkable"
      :size="size"
      :disabled="disableCheckbox || disabled"
      :model-value="checked"
      :indeterminate="indeterminate"
      @change="onCheckboxChange"
    />

    <!-- 内容 -->
    <span
      ref="refTitle"
      :class="titleClasses"
      :draggable="draggable"
      @dragstart="onDragStart"
      @dragend="onDragEnd"
      @dragover="onDragOver"
      @dragleave="onDragLeave"
      @drop="onDrop"
      @click="onTitleClick"
    >
      <span
        v-if="$slots.icon || icon || treeNodeIcon"
        :class="nsTree.e('custom-icon')"
      >
        <!-- 节点图标 -->
        <TuIcon v-if="$slots.icon">
          <slot name="icon" v-bind="nodeStatus" />
        </TuIcon>

        <TuIcon v-else-if="icon">
          <RenderFunction v-bind="nodeStatus" :render-func="icon" />
        </TuIcon>

        <TuIcon v-else-if="treeNodeIcon">
          <RenderFunction
            v-bind="nodeStatus"
            :render-func="treeNodeIcon"
            :node="treeNodeData"
          />
        </TuIcon>
      </span>
      <span :class="nsTree.e('title-text')">
        <RenderFunction v-if="treeTitle" :render-func="treeTitle" />
        <slot v-else name="title">{{ title }}</slot>

        <span v-if="draggable" :class="nsTree.e('drag-icon')">
          <!-- 拖拽图标 -->
          <slot
            v-if="$slots['drag-icon']"
            name="drag-icon"
            v-bind="nodeStatus"
          />
          <RenderFunction
            v-else-if="dragIcon"
            :render-func="dragIcon"
            v-bind="nodeStatus"
          />
          <RenderFunction
            v-else-if="treeDragIcon"
            :render-func="treeDragIcon"
            :node="treeNodeData"
            v-bind="nodeStatus"
          />
          <TuIcon v-else>
            <Rank />
          </TuIcon>
        </span>
      </span>
    </span>
    <!-- 额外 -->
    <RenderFunction v-if="extra" :render-func="extra" />
  </div>
</template>

<script lang="ts" setup>
import { computed, toRefs, reactive, ref } from 'vue';
import { treeBaseNodeProps } from './tree-base-node';
import TuTreeNodeSwitcher from './tree-node-switcher.vue';
import { TuCheckbox } from '../../checkbox';
import { TuIcon } from '../../icon';
import { Node } from './interface';
import { useDraggable, useNodeKey, useTreeContext } from './hooks';
import { useNamespace } from '@tu-view-plus/hooks';
import { RenderFunction } from '@tu-view-plus/constants';
import { Rank } from '@tu-view-plus/icons-vue';
import { toArray, isFunction } from '@tu-view-plus/utils';

const props = defineProps(treeBaseNodeProps);

const nsTree = useNamespace('tree');

const key = useNodeKey();

const treeContext = useTreeContext();

const node = computed(() => treeContext.key2TreeNode?.get(key.value) as Node);

const treeNodeData = computed(() => node.value.treeNodeData);

const children = computed(() => node.value.children);

const size = computed(() => treeContext?.treeProps?.size);

const actionOnNodeClick = computed(() => {
  const action = treeContext.treeProps?.actionOnNodeClick;
  return action ? toArray(action) : [];
});

const { isLeaf, isTail, selectable, disabled, disableCheckbox, draggable } =
  toRefs(props);

const classes = computed(() => ({
  [nsTree.e('node')]: true,
  [nsTree.is('selected')]: selected.value,
  [nsTree.is('leaf')]: isLeaf.value,
  [nsTree.is('tail')]: isTail.value,
  [nsTree.is('expanded')]: expanded.value,
  [nsTree.is('disabled-selectable')]:
    !selectable.value && !treeContext.treeProps?.disableSelectActionOnly,
  [nsTree.is('disabled')]: disabled.value
}));

const refTitle = ref<HTMLElement>();

const { isDragOver, isDragging, isAllowDrop, dropPosition, setDragStatus } =
  useDraggable(
    reactive({
      key,
      refTitle
    })
  );

const titleClasses = computed(() => ({
  [nsTree.e('title')]: true,
  [nsTree.em('title', 'draggable')]: draggable.value,
  [nsTree.em('title', 'gap-top')]:
    isDragOver.value && isAllowDrop.value && dropPosition.value < 0,
  [nsTree.em('title', 'gap-bottom')]:
    isDragOver.value && isAllowDrop.value && dropPosition.value > 0,
  [nsTree.em('title', 'high-light')]:
    !isDragging.value &&
    isDragOver.value &&
    isAllowDrop.value &&
    dropPosition.value === 0,
  [nsTree.is('dragging')]: isDragging.value,
  [nsTree.is('block')]: node.value.blockNode
}));

const checked = computed(() => treeContext.checkedKeys?.includes?.(key.value));

const indeterminate = computed(() =>
  treeContext.indeterminateKeys?.includes?.(key.value)
);

const selected = computed(() =>
  treeContext.selectedKeys?.includes?.(key.value)
);

const expanded = computed(() =>
  treeContext.expandedKeys?.includes?.(key.value)
);

const loading = computed(() => treeContext.loadingKeys?.includes?.(key.value));

const treeDragIcon = computed(() => treeContext.dragIcon);

const treeNodeIcon = computed(() => treeContext.nodeIcon);

const nodeStatus = reactive({
  loading,
  checked,
  selected,
  indeterminate,
  expanded,
  isLeaf
});

const treeTitle = computed(() =>
  treeContext.nodeTitle
    ? () => treeContext.nodeTitle?.(treeNodeData.value, nodeStatus)
    : undefined
);

const extra = computed(() =>
  treeContext.nodeExtra
    ? () => treeContext.nodeExtra?.(treeNodeData.value, nodeStatus)
    : undefined
);

function onSwitcherClick(e: Event) {
  if (isLeaf.value) return;
  if (!children.value?.length && isFunction(treeContext.onLoadMore)) {
    treeContext.onLoadMore(key.value);
  } else {
    treeContext?.onExpand?.(!expanded.value, key.value, e);
  }
}

function onCheckboxChange(checked: boolean, e: Event) {
  if (disableCheckbox.value || disabled.value) {
    return;
  }
  treeContext.onCheck?.(checked, key.value, e);
}

function onTitleClick(e: Event) {
  if (actionOnNodeClick.value.includes('expand')) {
    onSwitcherClick(e);
  }
  if (!selectable.value || disabled.value) return;
  treeContext.onSelect?.(key.value, e);
}

function onDragStart(e: DragEvent) {
  if (!draggable.value) return;
  e.stopPropagation();
  setDragStatus('dragStart', e);
  try {
    e.dataTransfer?.setData('text/plain', '');
  } catch (error) {
    // empty
  }
}

function onDragEnd(e: DragEvent) {
  if (!draggable.value) return;
  e.stopPropagation();
  setDragStatus('dragEnd', e);
}

function onDragOver(e: DragEvent) {
  if (!draggable) return;
  e.stopPropagation();
  e.preventDefault();
  setDragStatus('dragOver', e);
}

function onDragLeave(e: DragEvent) {
  if (!draggable.value) return;
  e.stopPropagation();
  setDragStatus('dragLeave', e);
}

function onDrop(e: DragEvent) {
  if (!draggable.value || !isAllowDrop.value) return;
  e.stopPropagation();
  e.preventDefault();
  setDragStatus('drop', e);
}
</script>
