import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes, PropType } from 'vue';
import type TimePickerRangeDropdown from './time-picker-range-dropdown.vue';
import type { RangePanelProps } from './interface';

export const timePickerRangeDropdownProps = buildProps({
  value: {
    type: Array as PropType<RangePanelProps['value']>
  },

  displayIndex: {
    type: Number,
    default: 0
  }
} as const);

export const timePickerRangeDropdownEmits = [
  'select',
  'confirm',
  'update:displayIndex',
  'display-index-change'
];

export type TimePickerRangeDropdownProps = ExtractPropTypes<
  typeof timePickerRangeDropdownProps
>;
export type TimePickerRangeDropdownInstance = InstanceType<
  typeof TimePickerRangeDropdown
>;
