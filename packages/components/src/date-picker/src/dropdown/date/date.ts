import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';
import type Date from './date.vue';

export const dateProps = buildProps({} as const);

export type DateProps = ExtractPropTypes<typeof dateProps>;
export type DateInstance = InstanceType<typeof Date>;
