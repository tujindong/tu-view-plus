import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';
import type SubMenuInline from './sub-menu-inline.vue';

export const subMenuInlineProps = buildProps({
  title: {
    type: String
  },
  isChildrenSelected: {
    type: Boolean
  }
} as const);

export type SubMenuInlineProps = ExtractPropTypes<typeof subMenuInlineProps>;
export type SubMenuInlineInstance = InstanceType<typeof SubMenuInline>;
