<template>
  <div :class="nsPicker.e('dropdown-year')">
    <div :class="nsPicker.e('dropdown-year-inner')">
      <tu-header
        v-bind="{
          ...headerOperations,
          icons: headerIcons
        }"
        :title="headerTitle"
      />
      <tu-body
        mode="year"
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
import { yearProps, yearEmits } from './year';
import { useNamespace } from '@tu-view-plus/hooks';
import { dayjs } from '@tu-view-plus/utils';
import { newArray } from '../../utils';
import TuHeader from '../header.vue';
import TuBody from '../body.vue';

import type { Cell, IsSameTime } from '../../interface';

defineOptions({
  name: 'TuYear'
});

const ROW_COUNT = 4;
const COL_COUNT = 3;
const CELL_COUNT = ROW_COUNT * COL_COUNT;
const SPAN = 10;

const props = defineProps(yearProps);
const emit = defineEmits(yearEmits);

const nsPicker = useNamespace('picker');

const { headerValue } = toRefs(props);

const rows = computed(() => {
  const startYear = Math.floor(headerValue.value.year() / SPAN) * SPAN - 1;

  const flatData = newArray<Cell>(CELL_COUNT).map((_, index) => ({
    label: startYear + index,
    value: dayjs(`${startYear + index}`, 'YYYY'),
    isPrev: index < 1,
    isNext: index > SPAN
  }));

  const rows = newArray(ROW_COUNT).map((_, index) =>
    flatData.slice(index * COL_COUNT, (index + 1) * COL_COUNT)
  );

  return rows;
});

const headerTitle = computed(
  () =>
    `${rows.value[0][1].label}-${
      rows.value[ROW_COUNT - 1][COL_COUNT - 1].label
    }`
);

const isSameTime: IsSameTime = (current, target) =>
  current.isSame(target, 'year');

const onCellClick = (cellData: Cell) => {
  emit('select', cellData.value);
};

const onCellMouseEnter = (cellData: Cell) => {
  emit('cell-mouse-enter', cellData.value);
};
</script>
