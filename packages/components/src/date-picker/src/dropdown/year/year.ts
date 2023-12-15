import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';
import type Year from './year.vue';

export const yearProps = buildProps({} as const);

export type YearProps = ExtractPropTypes<typeof yearProps>;
export type YearInstance = InstanceType<typeof Year>;
