import { buildProps, isDayjs } from '@tu-view-plus/utils';
import { Dayjs } from 'dayjs';

import type { ExtractPropTypes, PropType } from 'vue';
import type TimePickerDropdown from './time-picker-dropdown.vue';
import type { PanelProps } from './interface';

export const timePickerDropdownProps = buildProps({
  value: {
    type: Object as PropType<PanelProps['value']>
  },

  visible: {
    type: Boolean,
    default: false
  },

  format: {
    type: String,
    default: 'HH:mm:ss'
  },

  use12Hours: {
    type: Boolean
  },

  step: {
    type: Object as PropType<PanelProps['step']>
  },

  disabledHours: {
    type: Function as unknown as PropType<PanelProps['disabledHours']>
  },

  disabledMinutes: {
    type: Function as unknown as PropType<PanelProps['disabledMinutes']>
  },

  disabledSeconds: {
    type: Function as unknown as PropType<PanelProps['disabledSeconds']>
  },

  hideDisabledOptions: {
    type: Boolean,
    default: false
  },

  hideFooter: {
    type: Boolean,
    default: false
  },

  isRange: {
    type: Boolean,
    default: false
  },

  disabled: {
    type: Boolean,
    default: false
  }
} as const);

export const timePickerDropdownEmits = {
  select: (value: Dayjs) => isDayjs(value),
  confirm: (value: Dayjs) => isDayjs(value)
};

export type TimePickerDropdownProps = ExtractPropTypes<
  typeof timePickerDropdownProps
>;
export type TimePickerDropdownInstance = InstanceType<
  typeof TimePickerDropdown
>;
export type TimePickerDropdownEmits = typeof timePickerDropdownEmits;
