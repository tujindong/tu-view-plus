<template>
  <li
    v-show="visible"
    :class="liClasses"
    @mouseenter="hoverItem"
    @click.stop="selectOptionClick"
  >
    <slot>
      <span>{{ currentLabel }}</span>
    </slot>
  </li>
</template>

<script lang="ts" setup>
// @ts-nocheck
import {
  computed,
  reactive,
  toRefs,
  onBeforeUnmount,
  getCurrentInstance,
  nextTick
} from 'vue';
import { selectOptionProps } from './select-option';
import { useNamespace } from '@tu-view-plus/hooks';
import { useOption } from './use-option';

import type { SelectOptionProxy } from './constants';

defineOptions({
  name: 'TuSelectOption'
});

const props = defineProps(selectOptionProps);

const nsSelect = useNamespace('select');

const states = reactive({
  index: -1,
  groupDisabled: false,
  visible: true,
  hitState: false,
  hover: false
});

const { visible, hover } = toRefs(states);

const { currentLabel, itemSelected, isDisabled, select, hoverItem } = useOption(
  props,
  states
);

const vm = getCurrentInstance()?.proxy;

select.onOptionCreate(vm as unknown as SelectOptionProxy);

const liClasses = computed(() => ({
  [nsSelect.e('dropdown-item')]: true,
  [nsSelect.is('disabled')]: isDisabled.value,
  [nsSelect.is('selected')]: itemSelected.value,
  [nsSelect.is('hover')]: hover.value
}));

const selectOptionClick = () => {
  if (props.disabled !== true && states.groupDisabled !== true) {
    select.handleOptionSelect(vm);
  }
};

onBeforeUnmount(() => {
  const key = (vm as unknown as SelectOptionProxy).value;
  const { selected } = select;
  const selectedOptions = select.props.multiple ? selected : [selected];
  const doesSelected = selectedOptions.some((item) => {
    return item.value === (vm as unknown as SelectOptionProxy).value;
  });
  nextTick(() => {
    if (select.cachedOptions.get(key) === vm && !doesSelected) {
      select.cachedOptions.delete(key);
    }
  });
  select.onOptionDestroy(key, vm);
});
</script>
