import { buildProps } from '@tu-view-plus/utils';
import { useSizeProp } from '@tu-view-plus/hooks';

import type { ExtractPropTypes, PropType, Slots } from 'vue';
import type { TreeProps, TreeNodeKey } from '../../tree/src/interface';
import type { ScrollbarProps } from '../../scrollbar';

export const treeSelectDropdownProps = buildProps({
  treeProps: {
    type: Object as PropType<Partial<TreeProps>>,
    default: () => ({})
  },
  selectedKeys: {
    type: Array as PropType<TreeNodeKey[]>
  },
  showCheckable: {
    type: Boolean,
    default: false
  },
  treeSlots: {
    type: Object as PropType<Slots>,
    default: () => ({})
  },
  scrollbar: {
    type: [Boolean, Object] as PropType<boolean | ScrollbarProps>,
    default: true
  },
  size: useSizeProp
} as const);

export const treeSelectDropdownEmits = ['change'];

export type TreeSelectDropdownProps = ExtractPropTypes<
  typeof treeSelectDropdownProps
>;
