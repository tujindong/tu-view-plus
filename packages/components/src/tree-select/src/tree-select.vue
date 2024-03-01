<template>
  <tu-trigger
    v-bind="triggerProps"
    auto-fit-transform-origin
    auto-fit-popup-min-width
    trigger="click"
    position="bl"
    animation-name="slide-dynamic-origin"
    :class="nsTreeSelect.b()"
    :popup-offset="10"
    :prevent-focus="true"
    :disabled="treeSelectDisabled"
    :popup-visible="panelVisible"
    :popup-container="popupContainer"
    :click-to-close="!allowSearch"
    @popupVisibleChange="setPanelVisible"
  >
    <slot name="trigger">
      <tu-select-view
        ref="refSelectView"
        :model-value="selectViewValue"
        :input-value="searchValue"
        :allow-search="Boolean(allowSearch)"
        :allow-clear="allowClear"
        :loading="loading"
        :size="treeSelectSize"
        :max-tag-count="maxTagCount"
        :disabled="treeSelectDisabled"
        :opened="panelVisible"
        :error="error"
        :bordered="border"
        :placeholder="placeholder"
        :multiple="isMultiple"
        v-bind="$attrs"
        @inputValueChange="onSearchValueChange"
        @clear.stop="onInnerClear"
        @remove="onItemRemove"
        @blur="onBlur"
      >
        <template v-if="$slots.prefix" #prefix>
          <slot name="prefix" />
        </template>
        <template v-if="$slots.label" #label="selectedData">
          <slot name="label" v-bind="selectedData" />
        </template>
      </tu-select-view>
    </slot>
    <template #content>
      <div :class="dropdownClasses" :style="dropdownStyles">
        <div
          v-if="$slots.header && (!isEmpty || showHeaderOnEmpty)"
          :class="nsTreeSelect.em('dropdown', 'header')"
        >
          <slot name="header" />
        </div>
        <slot v-if="loading" name="loader">
          <tu-spin dot />
        </slot>
        <slot v-else-if="isEmpty" name="empty">
          <tu-empty />
        </slot>
        <tu-tree-select-dropdown
          v-else
          :selected-keys="selectedKeys"
          :show-checkable="treeCheckable"
          :scrollbar="scrollbar"
          :tree-props="{
            actionOnNodeClick: selectable === 'leaf' ? 'expand' : undefined,
            blockNode: true,
            ...treeProps,
            data,
            checkStrictly: treeCheckStrictly,
            checkedStrategy: treeCheckedStrategy,
            fieldNames,
            multiple,
            loadMore,
            filterTreeNode: computedFilterTreeNode,
            size,
            checkable: isCheckable,
            selectable: isSelectable,
            searchValue: searchValue
          }"
          :tree-slots="pickSubCompSlots($slots, 'tree')"
          @change="onSelectChange"
        />
        <div
          v-if="$slots.footer && (!isEmpty || showFooterOnEmpty)"
          :class="nsTreeSelect.em('dropdown', 'footer')"
        >
          <slot name="footer" />
        </div>
      </div>
    </template>
  </tu-trigger>
</template>

<script lang="ts" setup>
import {
  ref,
  computed,
  toRefs,
  reactive,
  StyleValue,
  useSlots,
  nextTick
} from 'vue';
import { treeSelectProps, treeSelectEmits } from './tree-select';
import { useNamespace, useMergeState } from '@tu-view-plus/hooks';
import {
  isUndefined,
  isFunction,
  isObject,
  pickSubCompSlots
} from '@tu-view-plus/utils';
import { useFormSize, useFormDisabled } from '../../form';
import { useSelectedState, useFilterTreeNode } from './hooks';
import { useTreeData } from '../../tree/src/hooks';
import {
  getCheckedStateByCheck,
  isNodeCheckable
} from '../../tree/src/utils/check-utils';
import { isNodeSelectable } from '../../tree/src/utils';
import { TuTrigger } from '../../trigger';
import { TuSpin } from '../../spin';
import { TuEmpty } from '../../empty';
import { TuSelectView } from '../../select-view';
import TuTreeSelectDropdown from './tree-select-dropdown.vue';
import '../style/tree-select.scss';

import type { TreeNodeData, TreeNodeKey, Node } from '../../tree/src/interface';
import { SelectViewValue } from '../../select-view/src/interface';

defineOptions({
  name: 'TuTreeSelect',
  inheritAttrs: false
});

const props = defineProps(treeSelectProps);
const emit = defineEmits(treeSelectEmits);

const slot = useSlots();

const {
  defaultValue,
  modelValue,
  multiple,
  popupVisible,
  defaultPopupVisible,
  treeCheckable,
  treeCheckStrictly,
  data,
  fieldNames,
  disabled,
  labelInValue,
  filterTreeNode,
  disableFilter,
  dropdownStyle,
  treeProps,
  fallbackOption,
  selectable,
  dropdownClassName
} = toRefs(props);

const refSelectView = ref();
const searchValue = ref('');

const nsTreeSelect = useNamespace('tree-select');

const treeSelectSize = useFormSize();
const treeSelectDisabled = useFormDisabled();

const [panelVisible, setLocalPanelVisible] = useMergeState(
  defaultPopupVisible.value,
  reactive({
    value: popupVisible
  })
);

const isSelectable = (
  node: TreeNodeData,
  info: { level: number; isLeaf: boolean }
) => {
  if (selectable.value === 'leaf') return info.isLeaf;
  if (isFunction(selectable.value)) return selectable.value(node, info);
  return selectable.value ?? false;
};

const isCheckable = computed(() =>
  treeCheckable.value ? isSelectable : false
);

const { flattenTreeData, key2TreeNode } = useTreeData(
  reactive({
    treeData: data,
    fieldNames,
    selectable: isSelectable,
    checkable: isCheckable
  })
);

const { isEmptyFilterResult, filterTreeNode: computedFilterTreeNode } =
  useFilterTreeNode(
    reactive({
      searchValue,
      flattenTreeData,
      filterMethod: filterTreeNode,
      disableFilter,
      fieldNames
    })
  );

const {
  selectedKeys,
  selectedValue,
  setLocalSelectedKeys,
  localSelectedKeys,
  localSelectedValue
} = useSelectedState(
  reactive({
    defaultValue,
    modelValue,
    key2TreeNode,
    multiple,
    treeCheckable,
    treeCheckStrictly,
    fallbackOption,
    fieldNames
  })
);

const isMultiple = computed(() => multiple.value || treeCheckable.value);

const selectViewValue = computed(() => {
  if (isUndefined(selectedValue.value)) {
    return [];
  }
  if (isMultiple.value && !treeSelectDisabled.value) {
    return selectedValue.value.map((i) => {
      const node = key2TreeNode.value.get(i.value);
      return {
        ...i,
        closable: !node || isNodeClosable(node)
      };
    }) as SelectViewValue[];
  }
  return selectedValue.value as SelectViewValue[];
});

const dropdownClasses = computed(() => [
  nsTreeSelect.e('dropdown'),
  {
    [nsTreeSelect.em('dropdown', 'has-header')]: Boolean(slot.header),
    [nsTreeSelect.em('dropdown', 'has-footer')]: Boolean(slot.footer)
  },
  dropdownClassName?.value
]);

const dropdownStyles = computed<StyleValue[]>(() => [
  dropdownStyle?.value || {},
  treeProps?.value?.virtualListProps ? { 'max-height': 'unset' } : {}
]);

const isEmpty = computed(
  () => !flattenTreeData.value.length || isEmptyFilterResult.value
);

const retainInputValue = computed(
  () =>
    isObject(props.allowSearch) && Boolean(props.allowSearch.retainInputValue)
);

const isNodeClosable = (node: Node) => {
  return treeCheckable.value ? isNodeCheckable(node) : isNodeSelectable(node);
};

const setPanelVisible = (visible: boolean) => {
  if (visible !== panelVisible.value) {
    setLocalPanelVisible(visible);
    emit('popup-visible-change', visible);
    emit('update:popupVisible', visible);
  }

  if (!visible) {
    refSelectView.value &&
      refSelectView.value.blur &&
      refSelectView.value.blur();
  }
};

const setSelectedKeys = (newVal: TreeNodeKey[]) => {
  setLocalSelectedKeys(newVal);

  nextTick(() => {
    const forEmitValue =
      (labelInValue.value
        ? localSelectedValue.value
        : localSelectedKeys.value) || [];

    const emitValue = isMultiple.value ? forEmitValue : forEmitValue[0];

    emit('update:modelValue', emitValue);
    emit('change', emitValue);
  });
};

const onSearchValueChange = (newVal: string) => {
  if (newVal !== searchValue.value) {
    setPanelVisible(true);
    searchValue.value = newVal;
    emit('search', newVal);
  }
};

const onInnerClear = () => {
  setSelectedKeys([]);
  emit('clear');
};

const onItemRemove = (id: string) => {
  if (treeSelectDisabled.value) return;
  const node = key2TreeNode.value.get(id);
  if (treeCheckable.value && node) {
    if (isNodeClosable(node)) {
      const [newVal] = getCheckedStateByCheck({
        node,
        checked: false,
        checkedKeys: selectedKeys.value,
        indeterminateKeys: [],
        checkStrictly: treeCheckStrictly.value
      });
      setSelectedKeys(newVal);
    }
  } else {
    const newVal = selectedKeys.value.filter((i) => i !== id);
    setSelectedKeys(newVal);
  }
};

const onBlur = () => {
  if (!retainInputValue.value && searchValue.value) {
    searchValue.value = '';
  }
};

const onSelectChange = (newVal: string[]) => {
  setSelectedKeys(newVal);
  searchValue.value = '';

  if (!isMultiple.value) {
    setPanelVisible(false);
  }
};
</script>
