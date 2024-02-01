import { VNode } from 'vue';
import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes, PropType } from 'vue';
import type TreeTransitionNodeList from './tree-transition-node-list.vue';

export const treeTransitionNodeListProps = buildProps({
  nodeKey: {
    type: [String, Number] as PropType<TreeNodeKey>,
    required: true
  }
} as const);

export type TreeTransitionNodeListProps = ExtractPropTypes<
  typeof treeTransitionNodeListProps
>;
export type TreeTransitionNodeListInstance = InstanceType<
  typeof TreeTransitionNodeList
>;
