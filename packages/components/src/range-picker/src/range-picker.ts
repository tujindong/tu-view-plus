import { buildProps } from '@tu-view-plus/utils';
import { useSizeProp } from '@tu-view-plus/hooks';
import { Dayjs } from 'dayjs';

import type { ExtractPropTypes, PropType } from 'vue';
import type RangePicker from './range-picker.vue';

export const rangePickerProps = buildProps({
  size: useSizeProp,

  focused: {
    type: Boolean
  },

  focusedIndex: {
    type: Number
  },

  disabled: {
    type: [Boolean, Array] as PropType<boolean | boolean[]>,
    default: false
  },

  readonly: {
    type: Boolean
  },

  allowClear: {
    type: Boolean
  },

  placeholder: {
    type: Array as PropType<string[]>,
    default: () => []
  },

  inputValue: {
    type: Array as PropType<string | Array<string | undefined> | undefined>
  },

  value: {
    type: Array as PropType<(Dayjs | undefined)[]>,
    default: () => []
  },

  format: {
    type: [String, Function] as PropType<string | ((value: Dayjs) => string)>,
    required: true
  }
} as const);

export const rangePickerEmits = [
  'focused-index-change',
  'update:focusedIndex',
  'change',
  'clear',
  'press-enter'
];

export type RangePickerProps = ExtractPropTypes<typeof rangePickerProps>;
export type RangePickerInstance = InstanceType<typeof RangePicker>;
