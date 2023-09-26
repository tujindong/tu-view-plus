import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes, PropType } from 'vue';
import type TabsButton from './tabs-button.vue';
import type { TabDirection } from './constants';

type ButtonTypes = 'previous' | 'next';

export const tabsButtonProps = buildProps({
  type: {
    type: String as PropType<ButtonTypes>,
    default: 'next'
  },

  direction: {
    type: String as PropType<TabDirection>,
    default: 'horizontal'
  },

  disabled: {
    type: Boolean,
    default: false
  },

  onClick: {
    type: Function as PropType<(type: ButtonTypes, ev: Event) => void>
  }
} as const);

export const tabsButtonEmits = {
  click: (type: string) => true
};

export type TabsButtonProps = ExtractPropTypes<typeof tabsButtonProps>;
export type TabsButtonInstance = InstanceType<typeof TabsButton>;
export type TabsButtonEmits = typeof tabsButtonEmits;
