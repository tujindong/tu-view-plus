import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';
import type RangePickerDropdown from './range-picker-dropdown.vue';

export const rangePickerDropdownProps = buildProps({} as const);

export type RangePickerDropdownProps = ExtractPropTypes<
  typeof rangePickerDropdownProps
>;
export type RangePickerDropdownInstance = InstanceType<
  typeof RangePickerDropdown
>;
