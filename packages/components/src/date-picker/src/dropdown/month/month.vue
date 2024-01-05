<template>
  <div :class="nsPicker.e('dropdown-month')">
    <div :class="nsPicker.e('dropdown-month-inner')">
      <tu-header
        v-bind="{
          ...headerOperations,
          icons: headerIcons
        }"
        mode="month"
        :title="headerTitle"
        :value="headerValue"
        :on-label-click="onHeaderLabelClick"
      />
      <tu-body
        mode="month"
        :rows="rows"
        :value="value"
        :range-values="rangeValues"
        :disabled-date="disabledDate"
        :is-same-time="isSameTime"
        :date-render="dateRender"
        @cellClick="onCellClick"
        @cellMouseEnter="onCellMouseEnter"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, toRefs } from 'vue';
import { monthProps, monthEmits } from './month';
import { useNamespace, useLocale } from '@tu-view-plus/hooks';
import { dayjs } from '@tu-view-plus/utils';
import { newArray } from '../../utils';
import TuHeader from '../header.vue';
import TuBody from '../body.vue';

import type { Cell, IsSameTime } from '../../interface';

const CELL_COUNT = 12;
const ROW_COUNT = 4;
const COL_COUNT = 3;

const MONTH_LIST = [
  'jan',
  'feb',
  'mar',
  'apr',
  'may',
  'jun',
  'jul',
  'aug',
  'sep',
  'oct',
  'nov',
  'dec'
];

defineOptions({
  name: 'TuMonth'
});

const props = defineProps(monthProps);
const emit = defineEmits(monthEmits);

const nsPicker = useNamespace('picker');

const { t } = useLocale();

const { headerValue } = toRefs(props);

const headerTitle = computed(() => headerValue.value.format('YYYY'));

const rows = computed(() => {
  const year = headerValue.value.year();
  const flatData = newArray<Cell>(CELL_COUNT).map((_, index) => ({
    label: t(`tu.datepicker.months.${MONTH_LIST[index]}`),
    value: dayjs(`${year}-${index + 1}`, 'YYYY-M')
  }));
  const rows = newArray(ROW_COUNT).map((_, index) =>
    flatData.slice(index * COL_COUNT, (index + 1) * COL_COUNT)
  );

  return rows;
});

const isSameTime: IsSameTime = (current, target) =>
  current.isSame(target, 'month');

const onCellClick = (cellData: Cell) => {
  emit('select', cellData.value);
};

const onCellMouseEnter = (cellData: Cell) => {
  emit('cell-mouse-enter', cellData.value);
};
</script>
