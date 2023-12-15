import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';
import type Month from './month.vue';

export const monthProps = buildProps({} as const);

export type MonthProps = ExtractPropTypes<typeof monthProps>;
export type MonthInstance = InstanceType<typeof Month>;
