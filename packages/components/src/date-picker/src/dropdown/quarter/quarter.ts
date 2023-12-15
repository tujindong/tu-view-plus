import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';
import type Quarter from './quarter.vue';

export const quarterProps = buildProps({} as const);

export type QuarterProps = ExtractPropTypes<typeof quarterProps>;
export type QuarterInstance = InstanceType<typeof Quarter>;
