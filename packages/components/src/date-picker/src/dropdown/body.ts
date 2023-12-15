import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';
import type Body from './body.vue';

export const bodyProps = buildProps({} as const);

export type BodyProps = ExtractPropTypes<typeof bodyProps>;
export type BodyInstance = InstanceType<typeof Body>;
