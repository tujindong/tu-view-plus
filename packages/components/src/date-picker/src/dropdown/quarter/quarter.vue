<template>
  <div :class="nsPicker.e('dropdown-quarter')">
    <div :class="nsPicker.e('dropdown-quarter-inner')">
      <tu-header
        v-bind="{
          ...headerOperations,
          icons: headerIcons
        }"
        mode="quarter"
        :title="headerTitle"
        :value="headerValue"
        :on-label-click="onHeaderLabelClick"
      />
      <tu-body
        mode="quarter"
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
import { quarterProps, quarterEmits } from './quarter';
import { useNamespace } from '@tu-view-plus/hooks';
import { dayjs, padStart } from '@tu-view-plus/utils';
import TuHeader from '../header.vue';
import TuBody from '../body.vue';

import type { Cell, IsSameTime } from '../../interface';

defineOptions({
  name: 'TuQuarter'
});

const props = defineProps(quarterProps);
const emit = defineEmits(quarterEmits);

const nsPicker = useNamespace('picker');

const { headerValue } = toRefs(props);

const headerTitle = computed(() => headerValue.value.format('YYYY'));

const rows = computed<Cell[][]>(() => {
  const year = headerValue.value.year();
  return [
    [1, 2, 3, 4].map((q) => ({
      label: `Q${q}`,
      value: dayjs(`${year}-${padStart((q - 1) * 3 + 1, 2, '0')}-01`)
    }))
  ];
});

const isSameTime: IsSameTime = (current, target) =>
  current.isSame(target, 'month') ||
  (current.isSame(target, 'year') &&
    Math.floor(current.month() / 3) === Math.floor(target.month() / 3));

const onCellClick = (cellData: Cell) => {
  emit('select', cellData.value);
};

const onCellMouseEnter = (cellData: Cell) => {
  emit('cell-mouse-enter', cellData.value);
};
</script>
