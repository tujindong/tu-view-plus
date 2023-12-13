<template>
  <tu-time-picker-dropdown
    v-bind="$attrs"
    :is-range="true"
    :value="displayValue"
    @select="onSelect"
    @confirm="onConfirm"
  >
    <slot />
  </tu-time-picker-dropdown>
</template>

<script lang="ts" setup>
import { ref, computed, toRefs, watch } from 'vue';
import { Dayjs } from 'dayjs';
import {
  timePickerRangeDropdownProps,
  timePickerRangeDropdownEmits
} from './time-picker-range-dropdown';
import TuTimePickerDropdown from './time-picker-dropdown.vue';
import { isUndefined } from '@tu-view-plus/utils';
import { isValidRangeValue } from './utils';
import '../style/time-picker.scss';

defineOptions({
  name: 'TuTimePickerRangeDropdown'
});

const props = defineProps(timePickerRangeDropdownProps);
const emit = defineEmits(timePickerRangeDropdownEmits);

const { value, displayIndex } = toRefs(props);

const localDisplayIndex = ref<number>(displayIndex.value);

const displayValue = computed(() =>
  value?.value ? value.value[localDisplayIndex.value] : undefined
);

const onSelect = (selectedValue: Dayjs) => {
  const newValue =
    isUndefined(value) || isUndefined(value?.value) ? [] : [...value.value];
  newValue[localDisplayIndex.value] = selectedValue;
  emit('select', newValue);
};

const onConfirm = () => {
  if (!isValidRangeValue(value?.value)) {
    const newIndex = (localDisplayIndex.value + 1) % 2;
    localDisplayIndex.value = newIndex;
    emit('display-index-change', newIndex);
    emit('update:displayIndex', newIndex);
  } else {
    emit('confirm', value?.value);
  }
};

watch(displayIndex, () => {
  localDisplayIndex.value = displayIndex.value;
});
</script>
