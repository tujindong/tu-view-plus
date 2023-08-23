<template>
  <div :class="dropdownClass">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { computed, useSlots } from 'vue';
import { selectProps } from './select';
import { useNamespace } from '@tu-view-plus/hooks';

defineOptions({
  name: 'TuSelectDropDown'
});

const props = defineProps(selectProps);

const slots = useSlots();

const nsSelectDropdown = useNamespace('select-dropdown');

const dropdownClass = computed(() => ({
  [nsSelectDropdown.b()]: true,
  [nsSelectDropdown.e('header')]: Boolean(slots.header),
  [nsSelectDropdown.e('footer')]: Boolean(slots.footer)
}));
</script>