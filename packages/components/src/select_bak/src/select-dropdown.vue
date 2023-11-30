<template>
  <div
    :class="dropdownClasses"
    :style="{ [isFitInputWidth ? 'width' : 'minWidth']: minWidth }"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { computed, inject, ref, onMounted } from 'vue';
import { useResizeObserver } from '@vueuse/core';
import { useNamespace } from '@tu-view-plus/hooks';
import { selectKey } from './constants';

defineOptions({
  name: 'TuSelectDropDown'
});

const nsSelect = useNamespace('select');

const select = inject(selectKey)!;

const minWidth = ref('');

const isMultiple = computed(() => select.props.multiple);
const isFitInputWidth = computed(() => select.props.fitInputWidth);

const dropdownClasses = computed(() => ({
  [nsSelect.e('dropdown')]: true,
  [nsSelect.is('multiple')]: isMultiple.value,
  ...[select.props.popperClass]
}));

const updateMinWidth = () => {
  minWidth.value = `${select.selectWrapper?.offsetWidth}px`;
};

onMounted(() => {
  updateMinWidth();
  useResizeObserver(select.selectWrapper, updateMinWidth);
});
</script>
