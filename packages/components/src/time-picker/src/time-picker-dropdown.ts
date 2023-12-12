import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';
import type TimePickerDropdown from './time-picker-dropdown.vue';

export const timePickerDropdownProps = buildProps({} as const);

export type TimePickerDropdownProps = ExtractPropTypes<
  typeof timePickerDropdownProps
>;
export type TimePickerDropdownInstance = InstanceType<
  typeof TimePickerDropdown
>;
