<template>
  <li ref="liRef" :class="liClasses" @click="handleClick">
    <span v-if="$slots.icon" :class="nsDropdownItem.e('icon')">
      <slot name="icon" />
    </span>

    <span :class="nsDropdownItem.e('content')">
      <slot />
    </span>

    <span v-if="$slots.suffix" :class="nsDropdownItem.e('suffix')">
      <slot name="suffix" />
    </span>
  </li>
</template>

<script lang="ts" setup>
import { computed, inject, ref, useSlots } from 'vue';
import { dropdownItemProps, dropdownItemEmits } from './dropdown-item';
import { useNamespace } from '@tu-view-plus/hooks';
import { dropdownInjectionKey } from './constants';

defineOptions({
  name: 'TuDropdownItem'
});

const props = defineProps(dropdownItemProps);
const emit = defineEmits(dropdownItemEmits);

const liRef = ref<HTMLElement>();

const slots = useSlots();

const nsDropdownItem = useNamespace('dropdown-item');

const liClasses = computed(() => ({
  [nsDropdownItem.b()]: true,
  [nsDropdownItem.m('suffix')]: slots.suffix,
  [nsDropdownItem.is('disabled')]: props.disabled,
  [nsDropdownItem.is('active')]: props.active
}));

const dropdownContext = !props.uninjectContext
  ? inject(dropdownInjectionKey, undefined)
  : undefined;

const computedValue = computed(
  () => props.value ?? liRef.value?.textContent ?? undefined
);

const handleClick = (evt: MouseEvent) => {
  if (!props.disabled) {
    emit('click', evt);
    dropdownContext?.onOptionClick(computedValue.value, evt);
  }
};
</script>