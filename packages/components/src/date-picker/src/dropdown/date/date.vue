<template>
  <div :class="classes">
    <div v-if="showDateView" :class="nsPicker.e(`${prefixCls}-inner`)">
      <tu-header
        v-bind="{
          ...headerOperations,
          icons: headerIcons
        }"
        :title="headerTitle"
        :mode="mode"
        :value="headerValue"
        :on-label-click="onHeaderLabelClick"
      >
      </tu-header>
      <tu-week-list :week-list="weekList" />
      <tu-body
        :mode="mode"
        :rows="rows"
        :value="isRange ? undefined : value"
        :range-values="rangeValues"
        :disabled-date="disabledDate"
        :is-same-time="mergedIsSameTime"
        :date-render="dateRender"
        @cellClick="onCellClick"
        @cellMouseEnter="onCellMouseEnter"
      />
    </div>
    <div v-if="showTimeView" :class="nsPicker.e(`${prefixCls}-timepicker`)">
      <header :class="nsPicker.e(`${prefixCls}-timepicker-title`)">
        {{ t('tu.datepicker.selectTime') }}
      </header>
      <tu-time-picker-dropdown
        v-bind="{
          ...timePickerProps,
          ...disabledTimeProps
        }"
        hide-footer
        :value="value || isRange ? timePickerValue : undefined"
        :disabled="disabled"
        @select="onTimePanelSelect"
      />
    </div>

    <div v-if="showViewTabs" :class="nsPicker.e(`${prefixCls}-footer`)">
      <div :class="nsPicker.e(`${prefixCls}-view-tabs`)">
        <div
          :class="[
            nsPicker.e(`${prefixCls}-view-tab-pane`),
            { [nsPicker.is('active')]: showDateView }
          ]"
          @click="changeViewTo('date')"
        >
          <tu-icon>
            <Calendar />
          </tu-icon>
          <span :class="`${prefixCls}-view-tab-pane-text`">
            {{ footerValue && footerValue.format('YYYY-MM-DD') }}
          </span>
        </div>
        <div
          :class="[
            `${prefixCls}-view-tab-pane`,
            { [`${prefixCls}-view-tab-pane-active`]: showTimeView }
          ]"
          @click="() => changeViewTo('time')"
        >
          <tu-icon>
            <Clock />
          </tu-icon>
          <span :class="`${prefixCls}-view-tab-pane-text`">
            {{ timePickerValue && timePickerValue.format('HH:mm:ss') }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { toRefs, computed, reactive } from 'vue';
import { Dayjs } from 'dayjs';
import { dateProps, dateEmits } from './date';
import { useNamespace, useLocale } from '@tu-view-plus/hooks';
import { methods, getDateValue, getNow } from '@tu-view-plus/utils';
import { Clock, Calendar } from '@tu-view-plus/icons-vue';
import { useMergeState } from '../../hooks';
import { newArray } from '../../utils';
import TuHeader from '../header.vue';
import TuWeekList from '../week-list.vue';
import TuBody from '../body.vue';
import TuTimePickerDropdown from '../../../../time-picker/src/time-picker-dropdown.vue';
import TuIcon from '../../../../icon';

import type { Cell } from '../../interface';

defineOptions({
  name: 'TuDate'
});

const ROW_COUNT = 6;
const COL_COUNT = 7;
const CELL_COUNT = ROW_COUNT * COL_COUNT;

const props = defineProps(dateProps);
const emit = defineEmits(dateEmits);

const nsPicker = useNamespace('picker');

const { t } = useLocale();

const {
  isRange,
  headerValue,
  footerValue,
  dayStartOfWeek,
  isSameTime,
  mode,
  showTime,
  currentView,
  disabledTime
} = toRefs(props);

const [localCurrentView, setLocalCurrentView] = useMergeState(
  'date',
  reactive({ value: currentView })
);

const isWeek = computed(() => mode?.value === 'week');

const prefixCls = computed(() =>
  isWeek.value ? 'dropdown-week' : 'dropdown-date'
);

const showViewTabs = computed(() => showTime.value && isRange.value);

const showDateView = computed(
  () =>
    !showTime.value || !showViewTabs.value || localCurrentView.value === 'date'
);

const headerTitle = computed(() => headerValue.value.format('YYYY-MM'));

const weekList = computed(() => {
  const list = [0, 1, 2, 3, 4, 5, 6];
  const index = Math.max(dayStartOfWeek.value % 7, 0);
  return [...list.slice(index), ...list.slice(0, index)];
});

const rows = computed(() => {
  const startDate = methods.startOf(headerValue.value, 'month');
  const startDay = startDate.day();
  const days = startDate.daysInMonth();
  const startIndex = weekList.value.indexOf(startDay);
  const flatData = newArray<Cell>(CELL_COUNT);

  for (let i = 0; i < flatData.length; i++) {
    flatData[i] = {
      ...getCellData(methods.add(startDate, i - startIndex, 'day')),
      isPrev: i < startIndex,
      isNext: i > startIndex + days - 1
    };
  }

  const rows = newArray(ROW_COUNT).map((_, index) => {
    const row = flatData.slice(index * COL_COUNT, (index + 1) * COL_COUNT);
    if (isWeek.value) {
      const valueOfWeek = row[0].value;
      row.unshift({
        label: valueOfWeek.week(),
        value: valueOfWeek
      });
    }
    return row;
  });

  return rows;
});

const mergedIsSameTime = computed(
  () =>
    isSameTime?.value ||
    ((current: Dayjs, target: Dayjs) => {
      return current.isSame(target, 'day');
    })
);

const showTimeView = computed(
  () =>
    showTime.value && (!showViewTabs.value || localCurrentView.value === 'time')
);

const disabledTimeProps = computed(
  () =>
    (showTime.value &&
      disabledTime?.value?.(getDateValue(footerValue?.value || getNow()))) ||
    {}
);

const classes = computed(() => ({
  [nsPicker.e(prefixCls.value)]: true,
  [nsPicker.em(prefixCls.value, 'with-view-tabs')]: showViewTabs.value
}));

const getCellData = (time: Dayjs) => {
  return {
    label: time.date(),
    value: time
  };
};

const onCellClick = (cellData: Cell) => {
  emit('select', cellData.value);
};

const onCellMouseEnter = (cellData: Cell) => {
  emit('cell-mouse-enter', cellData.value);
};

const onTimePanelSelect = (time: Dayjs) => {
  emit('time-picker-select', time);
};

const changeViewTo = (newView: 'date' | 'time') => {
  emit('current-view-change', newView);
  emit('update:currentView', newView);
  setLocalCurrentView(newView);
};
</script>
