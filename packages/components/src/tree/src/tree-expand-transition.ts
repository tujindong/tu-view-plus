import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes, PropType } from 'vue';
import type TreeExpandTransition from './tree-expand-transition.vue';

export const treeExpandTransitionProps = buildProps({
  expanded: Boolean
} as const);

export const treeExpandTransitionEmits = ['end'];

export type TreeExpandTransitionProps = ExtractPropTypes<
  typeof treeExpandTransitionProps
>;
export type TreeExpandTransitionInstance = InstanceType<
  typeof TreeExpandTransition
>;
