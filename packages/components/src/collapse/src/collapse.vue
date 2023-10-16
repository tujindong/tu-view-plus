<template>
  <div :class="collpaseClasses" role="tablist" aria-multiselectable="true">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { computed, provide, ref, watch } from 'vue';
import { collapseProps, collapseEmits } from './collapse';
import { useNamespace } from '@tu-view-plus/hooks';
import { ensureArray } from '@tu-view-plus/utils';
import { UPDATE_MODEL_EVENT, CHANGE_EVENT } from '@tu-view-plus/constants';
import { collapseContextKey } from './constants';
import '../style/collapse.scss';

import type { CollapseActiveName } from './collapse';

defineOptions({
  name: 'TuCollapse'
});

const props = defineProps(collapseProps);
const emit = defineEmits(collapseEmits);

const nsCollapse = useNamespace('collapse');

const activeNames = ref(ensureArray(props.modelValue));

const collpaseClasses = computed(() => ({
  [nsCollapse.b()]: true,
  [nsCollapse.m(props.type)]: props.type
}));

const setActiveNames = (collapseActiveName: CollapseActiveName[]) => {
  activeNames.value = collapseActiveName;
  const value = props.accordion ? activeNames.value[0] : activeNames.value;
  emit(UPDATE_MODEL_EVENT, value);
  emit(CHANGE_EVENT, value);
};

const handleItemClick = (collapseActiveName: CollapseActiveName) => {
  if (props.accordion) {
    setActiveNames([
      activeNames.value[0] === collapseActiveName ? '' : collapseActiveName
    ]);
  } else {
    const activeNamesValue = [...activeNames.value];
    const index = activeNamesValue.indexOf(collapseActiveName);

    if (index > -1) {
      activeNamesValue.splice(index, 1);
    } else {
      activeNamesValue.push(collapseActiveName);
    }
    setActiveNames(activeNamesValue);
  }
};

watch(
  () => props.modelValue,
  () => (activeNames.value = ensureArray(props.modelValue)),
  { deep: true }
);

provide(collapseContextKey, {
  activeNames,
  size: props.size,
  handleItemClick
});
</script>
