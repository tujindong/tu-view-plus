import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes, PropType } from 'vue';
import type TabNav from './tab-nav.vue';
import type { TabData, TabDirection, TabsType } from './constants';

export const tabNavProps = buildProps({
  tabs: {
    type: Array as PropType<TabData[]>,
    required: true
  },

  direction: {
    type: String as PropType<TabDirection>,
    required: true
  },

  type: {
    type: String as PropType<TabsType>,
    required: true
  },

  activeKey: {
    type: [String, Number]
  },

  activeIndex: {
    type: Number,
    required: true
  },

  position: {
    type: String,
    required: true
  },

  size: {
    type: String,
    required: true
  },

  showAddButton: {
    type: Boolean,
    default: false
  },

  editable: {
    type: Boolean,
    default: false
  },

  animation: {
    type: Boolean,
    required: true
  },

  headerPadding: {
    type: Boolean,
    default: true
  }
} as const);

export const tabNavEmits = {
  click: (ev: Event) => true,
  add: (ev: Event) => true,
  delete: (key: string | number, ev: Event) => true
};

export type TabNavProps = ExtractPropTypes<typeof tabNavProps>;
export type TabNavInstance = InstanceType<typeof TabNav>;
