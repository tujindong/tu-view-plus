import { PropType } from 'vue';
import { buildProps } from '@tu-view-plus/utils';
import { ScrollbarProps } from '../../scrollbar/src/scrollbar';

import type { ExtractPropTypes } from 'vue';
import type { EmitType } from '@tu-view-plus/utils';

export const selectDropDownProps = buildProps({
  loading: Boolean,

  empty: Boolean,

  virtualList: Boolean,

  bottomOffset: {
    type: Number,
    default: 0
  },

  scrollbar: {
    type: [Boolean, Object] as PropType<boolean | ScrollbarProps>,
    default: true
  },

  onScroll: {
    type: [Function, Array] as PropType<EmitType<(ev: Event) => void>>
  },

  onReachBottom: {
    type: [Function, Array] as PropType<EmitType<(ev: Event) => void>>
  },

  showHeaderOnEmpty: {
    type: Boolean as PropType<boolean>,
    default: false
  },

  showFooterOnEmpty: {
    type: Boolean as PropType<boolean>,
    default: false
  }
} as const);

export const selectDropDownEmits = ['scroll', 'reachBottom'];

export type SelectDropDownProps = ExtractPropTypes<typeof selectDropDownProps>;
