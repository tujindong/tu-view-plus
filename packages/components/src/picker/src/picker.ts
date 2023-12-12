import { buildProps } from '@tu-view-plus/utils';
import { useSizeProp } from '@tu-view-plus/hooks';
import { Dayjs } from 'dayjs';

import type { ExtractPropTypes, PropType } from 'vue';
import type Picker from './picker.vue';

export const pickerProps = buildProps({
  size: useSizeProp,

  focused: {
    type: Boolean
  },

  disabled: {
    type: Boolean
  },

  readonly: {
    type: Boolean
  },

  error: {
    type: Boolean
  },

  allowClear: {
    type: Boolean
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
export type PickerInstance = InstanceType<typeof Picker>;
