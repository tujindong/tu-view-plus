import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes, PropType } from 'vue';
import type TabsTab from './tabs-tab.vue';
import type { TabData } from './constants';

export const tabsTabProps = buildProps({
  tab: {
    type: Object as PropType<TabData>,
    required: true
  },

  active: Boolean,

  editable: Boolean
} as const);

export const tabsTabEmits = {
  click: (key: string | number, evt: Event) => true,
  delete: (key: string | number, ev: Event) => true
};

export type TabsTabProps = ExtractPropTypes<typeof tabsTabProps>;
export type TabsTabInstance = InstanceType<typeof TabsTab>;
export type TabsTabEmits = typeof tabsTabEmits;
