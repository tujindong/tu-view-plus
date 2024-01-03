<template>
  <div :class="nsPicker.e('week-list')">
    <div
      v-for="key in weekList"
      :key="key"
      :class="nsPicker.e('week-list-item')"
    >
      {{ labelList[key] || '' }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { weekListProps } from './week-list';
import { useNamespace } from '@tu-view-plus/hooks';
import { useDatePickerTransform } from '../hooks';

defineOptions({
  name: 'TuWeekList'
});

const props = defineProps(weekListProps);

const nsPicker = useNamespace('picker');

const datePickerTransform = useDatePickerTransform();

const labelList = computed<string[]>(() => {
  return [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday'
  ].map((i) => datePickerTransform(`tu.datepicker.week.short.${i}`));
});
</script>
