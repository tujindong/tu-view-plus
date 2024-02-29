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
    :popup-visible="panelVisible || "
    :popup-container="popupContainer"
    :click-to-close="!allowSearch"
    @popupVisibleChange="onVisibleChange"
  >
  </tu-trigger>
</template>

<script lang="ts" setup>
import { ref, computed, toRefs, reactive } from 'vue';
import { treeSelectProps, treeSelectEmits } from './tree-select';
import { useNamespace, useMergeState } from '@tu-view-plus/hooks';
import { useFormSize, useFormDisabled } from '../../form';
import { TuTrigger } from '../../trigger';
import '../style/tree-select.scss';

defineOptions({
  name: 'TuTreeSelect'
});

const props = defineProps(treeSelectProps);
const emit = defineEmits(treeSelectEmits);

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

const nsTreeSelect = useNamespace('tree-select');

const treeSelectSize = useFormSize();
const treeSelectDisabled = useFormDisabled();

const [panelVisible, setLocalPanelVisible] = useMergeState(
  defaultPopupVisible.value,
  reactive({
    value: popupVisible
  })
);

const onVisibleChange = () => {};
</script>
