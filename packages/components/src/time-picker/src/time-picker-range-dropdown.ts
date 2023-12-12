import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';
import type TimePickerRangeDropdown from './time-picker-range-dropdown.vue';

export const timePickerRangeDropdownProps = buildProps({} as const);

export type TimePickerRangeDropdownProps = ExtractPropTypes<
  typeof timePickerRangeDropdownProps
>;
export type TimePickerRangeDropdownInstance = InstanceType<
  typeof TimePickerRangeDropdown
>;
