<template>
  <div :class="classes">
    <tu-shortcuts
      v-if="showShortcuts && shortcutsPosition === 'left'"
      v-bind="shortcutsProps"
    />
    <div :class="nsPicker.e('range-dropdown-content')">
      <!-- dropdown -->
      <div :class="nsPicker.e('range')">
        <template v-if="startHeaderMode || endHeaderMode">
          <tu-year v-if="startHeaderMode === 'year'" v-bind="startPanelProps" />
          <tu-year v-if="endHeaderMode === 'year'" v-bind="endPanelProps" />

          <tu-month
            v-else-if="startHeaderMode === 'month'"
            v-bind="startPanelProps"
            :abbreviation="abbreviation"
          />
          <tu-month
            v-else-if="endHeaderMode === 'month'"
            v-bind="endPanelProps"
            :abbreviation="abbreviation"
          />
        </template>
        <template v-else>
          <template v-if="mode === 'week'">
            <tu-week
              v-bind="startPanelProps"
              :day-start-of-week="dayStartOfWeek"
            />
            <tu-week
              v-bind="endPanelProps"
              :day-start-of-week="dayStartOfWeek"
            />
          </template>

          <template v-else-if="mode === 'month'">
            <tu-month v-bind="startPanelProps" :abbreviation="abbreviation" />
            <tu-month v-bind="endPanelProps" :abbreviation="abbreviation" />
          </template>

          <template v-else-if="mode === 'year'">
            <tu-year v-bind="startPanelProps" />
            <tu-year v-bind="endPanelProps" />
          </template>

          <template v-else-if="mode === 'quarter'">
            <tu-quarter v-bind="startPanelProps" />
            <tu-quarter v-bind="endPanelProps" />
          </template>

          <template v-else>
            <tu-date
              v-model:currentView="currentDateView"
              v-bind="startPanelProps"
              is-range
              :value="value && value[0]"
              :footer-value="footerValue && footerValue[0]"
              :time-picker-value="timePickerValue && timePickerValue[0]"
              :day-start-of-week="dayStartOfWeek"
              :show-time="showTime"
              :time-picker-props="timePickerProps"
              :disabled-time="getDisabledTimeFunc(0)"
              :disabled="disabled[0]"
              @timePickerSelect="onStartTimePickerSelect"
            />
            <tu-date
              v-model:currentView="currentDateView"
              v-bind="endPanelProps"
              is-range
              :value="value && value[1]"
              :footer-value="footerValue && footerValue[1]"
              :time-picker-value="timePickerValue && timePickerValue[1]"
              :day-start-of-week="dayStartOfWeek"
              :show-time="showTime"
              :time-picker-props="timePickerProps"
              :disabled-time="getDisabledTimeFunc(1)"
              :disabled="disabled[1]"
              @timePickerSelect="onEndTimePickerSelect"
            />
          </template>
        </template>
      </div>
      <!-- footer -->
      <tu-footer
        :show-today-btn="false"
        :show-confirm-btn="showConfirmBtn"
        :confirm-btn-disabled="confirmBtnDisabled"
        @confirmBtnClick="onConfirmBtnClick"
      >
        <template v-if="extra || $slots.extra" #extra>
          <slot v-if="$slots.extra" name="extra" />
          <RenderFunction v-else :render-func="extra" />
        </template>
        <template
          v-if="showShortcuts && shortcutsPosition === 'bottom'"
          #button
        >
          <tu-shortcuts v-bind="shortcutsProps" />
        </template>
      </tu-footer>
    </div>
    <tu-shortcuts
      v-if="showShortcuts && shortcutsPosition === 'right'"
      v-bind="shortcutsProps"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed, toRefs, reactive, watch, ref } from 'vue';
import { Dayjs } from 'dayjs';
import { useNamespace } from '@tu-view-plus/hooks';
import { isArray, getDayjsValue, isFunction } from '@tu-view-plus/utils';
import { RenderFunction } from '@tu-view-plus/constants';
import {
  rangePickerDropdownProps,
  rangePickerDropdownEmits
} from './range-picker-dropdown';
import { normalizeRangeValue } from './utils';
import TuYear from './dropdown/year/year.vue';
import TuQuarter from './dropdown/quarter/quarter.vue';
import TuMonth from './dropdown/month/month.vue';
import TuWeek from './dropdown/week/week.vue';
import TuDate from './dropdown/date/date.vue';
import TuShortcuts from './dropdown/shortcuts.vue';
import TuFooter from './dropdown/footer.vue';

import type { ShortcutType, CalendarValue, CurrentViewType } from './interface';

defineOptions({
  name: 'TuRangePickerDropdown'
});

const props = defineProps(rangePickerDropdownProps);
const emit = defineEmits(rangePickerDropdownEmits);

const nsPicker = useNamespace('picker');

const {
  shortcuts,
  shortcutsPosition,
  format,
  hideTrigger,
  value,
  disabledDate,
  disabledTime,
  startHeaderProps,
  endHeaderProps,
  dateRender,
  visible,
  startHeaderMode,
  endHeaderMode
} = toRefs(props);

const showShortcuts = computed(
  () => isArray(shortcuts.value) && shortcuts.value.length
);

const currentDateView = ref<CurrentViewType>('date');

const classes = computed(() => ({
  [nsPicker.e('range-dropdown')]: true,
  [nsPicker.em('range-dropdown', 'dropdown-only')]: hideTrigger?.value,
  [nsPicker.em('range-dropdown', 'shortcuts-placement-left')]:
    showShortcuts.value && shortcutsPosition.value === 'left',
  [nsPicker.em('range-dropdown', 'shortcuts-placement-right')]:
    showShortcuts.value && shortcutsPosition.value === 'right'
}));

const getShortcutValue = (shortcut: ShortcutType) => {
  return getDayjsValue(
    normalizeRangeValue(
      isFunction(shortcut.value) ? shortcut.value() : shortcut.value
    ) as CalendarValue[],
    shortcut.format || format.value
  );
};

const onShortcutClick = (shortcut: ShortcutType) => {
  emit('shortcut-click', getShortcutValue(shortcut), shortcut);
};
const onShortcutMouseEnter = (shortcut: ShortcutType) => {
  emit('shortcut-mouse-enter', getShortcutValue(shortcut));
};
const onShortcutMouseLeave = (shortcut: ShortcutType) => {
  emit('shortcut-mouse-leave', getShortcutValue(shortcut));
};

const onPanelCellClick = (date: Dayjs) => {
  emit('cell-click', date);
};

const onPanelCellMouseEnter = (date: Dayjs) => {
  emit('cell-mouse-enter', date);
};

const onConfirmBtnClick = () => {
  emit('confirm');
};

const onStartTimePickerSelect = (time: Dayjs) => {
  emit('time-picker-select', time, 'start');
};

const onEndTimePickerSelect = (time: Dayjs) => {
  emit('time-picker-select', time, 'end');
};

const onStartPanelHeaderLabelClick = (type: 'year' | 'month') => {
  emit('start-header-label-click', type);
};

const onEndPanelHeaderLabelClick = (type: 'year' | 'month') => {
  emit('end-header-label-click', type);
};

const onStartHeaderPanelSelect = (date: Dayjs) => {
  emit('start-header-select', date);
};

const onEndHeaderPanelSelect = (date: Dayjs) => {
  emit('end-header-select', date);
};

const getDisabledDateFunc = (index: 0 | 1) => {
  return isFunction(disabledDate?.value)
    ? (current: Date) =>
        disabledDate?.value?.(current, index === 0 ? 'start' : 'end') || false
    : undefined;
};

const getDisabledTimeFunc = (index: 0 | 1) => {
  return isFunction(disabledTime?.value)
    ? (current: Date) =>
        disabledTime?.value?.(current, index === 0 ? 'start' : 'end') || false
    : undefined;
};

const getDateRenderFunc = (index: 0 | 1) => {
  return isFunction(dateRender?.value)
    ? (props: any) => {
        const mergeProps = {
          ...props,
          type: index === 0 ? 'start' : 'end'
        };
        return dateRender?.value?.(mergeProps);
      }
    : undefined;
};

watch(visible, (newVal, oldVal) => {
  if (newVal && !oldVal) {
    currentDateView.value = 'date';
  }
});

const shortcutsProps = reactive({
  shortcuts,
  onItemClick: onShortcutClick,
  onItemMouseEnter: onShortcutMouseEnter,
  onItemMouseLeave: onShortcutMouseLeave
});

const startPanelProps = computed(() => ({
  ...startHeaderProps.value,
  rangeValues: value.value,
  disabledDate: getDisabledDateFunc(0),
  dateRender: getDateRenderFunc(0),
  onSelect: startHeaderMode?.value
    ? onStartHeaderPanelSelect
    : onPanelCellClick,
  onCellMouseEnter: onPanelCellMouseEnter,
  onHeaderLabelClick: onStartPanelHeaderLabelClick
}));

const endPanelProps = computed(() => ({
  ...endHeaderProps.value,
  rangeValues: value.value,
  disabledDate: getDisabledDateFunc(1),
  dateRender: getDateRenderFunc(1),
  onSelect: endHeaderMode?.value ? onEndHeaderPanelSelect : onPanelCellClick,
  onCellMouseEnter: onPanelCellMouseEnter,
  onHeaderLabelClick: onEndPanelHeaderLabelClick
}));
</script>
