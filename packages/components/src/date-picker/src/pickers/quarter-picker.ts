import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';
import type QuarterPicker from './quarter-picker.vue';

export const quarterPickerProps = buildProps({} as const);

export type QuarterPickerProps = ExtractPropTypes<typeof quarterPickerProps>;
export type QuarterPickerInstance = InstanceType<typeof QuarterPicker>;
