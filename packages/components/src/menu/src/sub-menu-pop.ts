import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';
import type SubMenuPop from './sub-menu-pop.vue';

export const subMenuPopProps = buildProps({
  title: {
    type: String
  },
  selectable: {
    type: Boolean,
    default: false
  },
  isChildrenSelected: {
    type: Boolean
  },
  popupMaxHeight: {
    type: [Boolean, Number],
    default: undefined
  }
} as const);

export type SubMenuPopProps = ExtractPropTypes<typeof subMenuPopProps>;
export type SubMenuPopInstance = InstanceType<typeof SubMenuPop>;
