import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';

export const treeExpandTransitionProps = buildProps({
  expanded: Boolean
} as const);

export const treeExpandTransitionEmits = ['end'];

export type TreeExpandTransitionProps = ExtractPropTypes<
  typeof treeExpandTransitionProps
>;
