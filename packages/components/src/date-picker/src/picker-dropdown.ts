import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';
import type PickerDropdown from './picker-dropdown.vue';

export const pickerDropdownProps = buildProps({} as const);

export type PickerDropdownProps = ExtractPropTypes<typeof pickerDropdownProps>;
export type PickerDropdownInstance = InstanceType<typeof PickerDropdown>;
