import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes, PropType } from 'vue';
import type { TreeNodeKey } from './interface';

export const treeTransitionNodeListProps = buildProps({
  nodeKey: {
    type: [String, Number] as PropType<TreeNodeKey>,
    required: true
  }
} as const);

export type TreeTransitionNodeListProps = ExtractPropTypes<
  typeof treeTransitionNodeListProps
>;
