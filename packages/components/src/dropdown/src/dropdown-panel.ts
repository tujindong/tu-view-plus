import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes, PropType } from 'vue';

export type EmitType<T> = T | T[];

export const dropdownPanelProps = buildProps({
  loading: {
    type: Boolean,
    default: false
  },

  isEmpty: {
    type: Boolean,
    default: false
  },

  bottomOffset: {
    type: Number,
    default: 0
  },

  onScroll: {
    type: [Function, Array] as PropType<EmitType<(ev: Event) => void>>
  },

  onReachBottom: {
    type: [Function, Array] as PropType<EmitType<(ev: Event) => void>>
  }
} as const);

export const dropdownPanelEmits = {
  scroll: () => true,
  reachBottom: () => true
};

export type DropdownPanelProps = ExtractPropTypes<typeof dropdownPanelProps>;
export type DropdownPanelEmits = typeof dropdownPanelEmits;
