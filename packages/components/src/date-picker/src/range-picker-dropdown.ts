import { buildProps } from '@tu-view-plus/utils';
import { Dayjs } from 'dayjs';

import type { ExtractPropTypes, PropType } from 'vue';
import type RangePickerDropdown from './range-picker-dropdown.vue';
import type {
  ShortcutType,
  RangePickerProps,
  Mode,
  RangeDisabledTime,
  RangeDisabledDate,
  WeekStart,
  StartHeaderProps
} from './interface';
import type { RenderFunc } from '@tu-view-plus/constants';

export const rangePickerDropdownProps = buildProps({
  mode: {
    type: String as PropType<Mode>,
    default: 'date'
  },
  value: {
    type: Array as PropType<Array<Dayjs | undefined> | undefined>,
    default: () => []
  },
  // footerValue: {
  //   type: Array as PropType<Array<Dayjs | undefined>>
  // },
  timePickerValue: {
    type: Array as PropType<Dayjs[]>
  },
  showTime: {
    type: Boolean
  },
  showConfirmBtn: {
    type: Boolean
  },
  shortcuts: {
    type: Array as PropType<ShortcutType[]>,
    default: () => []
  },
  shortcutsPosition: {
    type: String as PropType<RangePickerProps['shortcutsPosition']>,
    default: 'bottom'
  },
  format: {
    type: String,
    required: true
  },
  dayStartOfWeek: {
    type: Number as PropType<WeekStart>,
    default: 0
  },
  disabledDate: {
    type: Function as PropType<RangeDisabledDate>
  },
  disabledTime: {
    type: Function as PropType<RangeDisabledTime>
  },
  timePickerProps: {
    type: Object as PropType<RangePickerProps['timePickerProps']>
  },
  extra: {
    type: Function as PropType<RenderFunc>
  },
  dateRender: {
    type: Function as PropType<RenderFunc>
  },
  hideTrigger: {
    type: Boolean
  },
  startHeaderProps: {
    type: Object as PropType<StartHeaderProps>,
    default: () => ({})
  },
  endHeaderProps: {
    type: Object as PropType<Record<string, any>>,
    default: () => ({})
  },
  confirmBtnDisabled: {
    type: Boolean
  },
  disabled: {
    type: Array as PropType<boolean[]>,
    default: () => [false, false]
  },
  visible: {
    type: Boolean
  },
  startHeaderMode: {
    type: String as PropType<'year' | 'month'>
  },
  endHeaderMode: {
    type: String as PropType<'year' | 'month'>
  },
  abbreviation: {
    type: Boolean
  }
} as const);

export const rangePickerDropdownEmits = [
  'cell-click',
  'cell-mouse-enter',
  'time-picker-select',
  'shortcut-click',
  'shortcut-mouse-enter',
  'shortcut-mouse-leave',
  'confirm',
  'start-header-label-click',
  'end-header-label-click',
  'start-header-select',
  'end-header-select'
];

export type RangePickerDropdownProps = ExtractPropTypes<
  typeof rangePickerDropdownProps
>;
export type RangePickerDropdownInstance = InstanceType<
  typeof RangePickerDropdown
>;
