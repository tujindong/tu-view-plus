import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';
import type OverflowWrap from './overflow-wrap.vue';

export const overflowWrapProps = buildProps({} as const);

export type objectsverflowWrapProps = ExtractPropTypes<
  typeof overflowWrapProps
>;
export type OverflowWrapInstance = InstanceType<typeof OverflowWrap>;
