import { buildProps } from '@tu-view-plus/utils';
import { useSizeProp } from '@tu-view-plus/hooks';
import { Dayjs } from 'dayjs';

import type { ExtractPropTypes, PropType } from 'vue';

export const pickerProps = buildProps({
  size: useSizeProp,

  focused: {
    type: Boolean,
    default: false
  },

  disabled: {
    type: Boolean,
    default: false
  },

  readonly: {
    type: Boolean,
    default: false
  },

  error: {
    type: Boolean,
    default: false
  },

  allowClear: {
    type: Boolean,
    default: false
  },

  placeholder: {
    type: String
  },

  inputValue: {
    type: String
  },

  value: {
    type: Object as PropType<Dayjs>
  },

  format: {
    type: [String, Function] as PropType<string | ((value: Dayjs) => string)>,
    required: true
  }
} as const);

export const pickerEmits = ['clear', 'press-enter', 'change', 'blur'];

export type PickerProps = ExtractPropTypes<typeof pickerProps>;
