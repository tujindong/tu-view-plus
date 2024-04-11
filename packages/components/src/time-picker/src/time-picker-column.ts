import { buildProps } from '@tu-view-plus/utils';
import { TimeList } from './interface';

import type { ExtractPropTypes, PropType } from 'vue';

export const timePickerColumnProps = buildProps({
  list: {
    type: Array as PropType<TimeList>,
    required: true
  },

  value: {
    type: [Number, String]
  },

  visible: {
    type: Boolean
  }
} as const);

export const timePickerColumnEmits = ['select'];

export type TimePickerColumnProps = ExtractPropTypes<
  typeof timePickerColumnProps
>;
