import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';

export const overflowWrapProps = buildProps({} as const);

export type objectsverflowWrapProps = ExtractPropTypes<
  typeof overflowWrapProps
>;
