import { VNode } from 'vue';
import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes, PropType } from 'vue';
import type TreeBaseNode from './tree-base-node.vue';

export const treeBaseNodeProps = buildProps({
  key: {
    type: [String, Number] as PropType<string | number>
  },
  title: {
    type: String
  },
  selectable: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  disableCheckbox: {
    type: Boolean,
    default: false
  },
  checkable: {
    type: Boolean,
    default: false
  },
  draggable: {
    type: Boolean,
    default: false
  },
  isLeaf: {
    type: Boolean,
    default: false
  },
  icon: {
    type: Function as PropType<() => VNode>
  },
  switcherIcon: {
    type: Function as PropType<() => VNode>
  },
  loadingIcon: {
    type: Function as PropType<() => VNode>
  },
  dragIcon: {
    type: Function as PropType<() => VNode>
  },
  isTail: {
    type: Boolean,
    default: false
  },
  blockNode: {
    type: Boolean
  },
  showLine: {
    type: Boolean
  },
  level: {
    type: Number,
    default: 0
  },
  lineless: {
    type: Array as PropType<boolean[]>,
    default: () => []
  }
} as const);

export type TreeBaseNodeProps = ExtractPropTypes<typeof treeBaseNodeProps>;
export type TreeBaseNodeInstance = InstanceType<typeof TreeBaseNode>;
