<template>
  <tu-date
    v-bind="$attrs"
    mode="week"
    is-week
    :day-start-of-week="dayStartOfWeek"
    :is-same-time="isSameTime"
    @select="onSelect"
    @cellMouseEnter="onCellMouseEnter"
  />
</template>

<script lang="ts" setup>
import { Dayjs } from 'dayjs';
import { useLocale } from '@tu-view-plus/hooks';
import { methods } from '@tu-view-plus/utils';
import { weekProps, weekEmits } from './week';
import TuDate from '../date/date.vue';

import type { IsSameTime } from '../../interface';

defineOptions({
  name: 'TuWeek'
});

const props = defineProps(weekProps);
const emit = defineEmits(weekEmits);

const { lang } = useLocale();

const isSameTime: IsSameTime = (current, target) => {
  return methods.isSameWeek(current, target, props.dayStartOfWeek, lang.value);
};

const onSelect = (value: Dayjs) => {
  const startDateOfWeek = methods.startOf(value, 'week');
  emit('select', startDateOfWeek);
};

const onCellMouseEnter = (value: Dayjs) => {
  const startDateOfWeek = methods.startOf(value, 'week');
  emit('cell-mouse-enter', startDateOfWeek);
};
</script>
