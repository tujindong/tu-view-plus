import { VNode } from 'vue';
import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes, PropType } from 'vue';
import type TreeNodeSwitcher from './tree-node-switcher.vue';
import type { TreeNodeData } from './interface';

export const treeNodeSwitcherProps = buildProps({
  loading: Boolean,
  showLine: Boolean,
  treeNodeData: {
    type: Object as PropType<TreeNodeData>
  },
  icons: {
    type: Object as PropType<Record<string, (() => VNode) | undefined>>
  },
  nodeStatus: {
    type: Object as PropType<{
      loading?: boolean;
      checked?: boolean;
      selected?: boolean;
      expanded?: boolean;
      indeterminate?: boolean;
      isLeaf?: boolean;
    }>
  }
} as const);

export const treeNodeSwitcherEmits = ['click'];

export type TreeNodeSwitcherProps = ExtractPropTypes<
  typeof treeNodeSwitcherProps
>;
export type TreeNodeSwitcherInstance = InstanceType<typeof TreeNodeSwitcher>;
