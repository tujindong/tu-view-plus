import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes, PropType } from 'vue';
import type TabsNavIndicate from './tabs-nav-indicate.vue';
import type { TabDirection } from './constants';

export const tabsNavIndicateProps = buildProps({
  activeTabRef: {
    type: Object as PropType<HTMLElement>
  },

  direction: {
    type: String as PropType<TabDirection>
  },

  disabled: Boolean,

  animation: Boolean
} as const);

export type TabsNavIndicateProps = ExtractPropTypes<
  typeof tabsNavIndicateProps
>;
export type TabsNavIndicateInstance = InstanceType<typeof TabsNavIndicate>;
