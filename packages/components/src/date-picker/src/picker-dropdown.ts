import { buildProps } from '@tu-view-plus/utils';
import { Dayjs } from 'dayjs';
import {
  ShortcutType,
  WeekStart,
  DisabledDate,
  DisabledTime,
  HeaderIcons,
  HeaderOperations
} from './interface';
import { TimePickerProps } from '../../time-picker/src/interface';
import { RenderFunc } from '@tu-view-plus/constants';

import type { ExtractPropTypes, PropType } from 'vue';
import type PickerDropdown from './picker-dropdown.vue';

export const pickerDropdownProps = buildProps({
  mode: {
    type: String
  },
  headerMode: {
    type: String as PropType<'year' | 'month'>
  },
  value: {
    type: Object as PropType<Dayjs>
  },
  headerValue: {
    type: Object as PropType<Dayjs>,
    required: true
  },
  timePickerValue: {
    type: Object as PropType<Dayjs>
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
    type: String as PropType<'left' | 'bottom' | 'right'>,
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
    type: Function as PropType<DisabledDate>
  },
  disabledTime: {
    type: Function as PropType<DisabledTime>
  },
  timePickerProps: {
    type: Object as PropType<Partial<TimePickerProps>>
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
  confirmBtnDisabled: {
    type: Boolean
  },
  showNowBtn: {
    type: Boolean
  },
  headerIcons: {
    type: Object as PropType<HeaderIcons>,
    default: () => ({})
  },
  headerOperations: {
    type: Object as PropType<HeaderOperations>
  },
  abbreviation: {
    type: Boolean
  }
} as const);

export const pickerDropdownEmits = [
  'cell-click',
  'time-picker-select',
  'shortcut-click',
  'shortcut-mouse-enter',
  'shortcut-mouse-leave',
  'confirm',
  'today-btn-click',
  'header-label-click',
  'header-select',
  'month-header-click'
];

export type PickerDropdownProps = ExtractPropTypes<typeof pickerDropdownProps>;
export type PickerDropdownInstance = InstanceType<typeof PickerDropdown>;
export type PickerDropdownEmits = typeof pickerDropdownEmits;
