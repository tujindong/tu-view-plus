import { buildProps, definePropType, mutable } from '@tu-view-plus/utils';
import { tabTypes, tabPositions } from './constants';

import type { ExtractPropTypes } from 'vue';
import type TabNav from './tab-nav.vue';
import type { TabsPaneContext } from './constants';

export const tabNavProps = buildProps({
  panes: {
    type: definePropType<TabsPaneContext[]>(Array),
    default: () => mutable([] as const)
  },

  currentName: {
    type: [String, Number],
    default: ''
  },

  editable: Boolean,

  type: {
    type: String,
    values: tabTypes,
    default: ''
  },

  stretch: Boolean
} as const);

export type TabNavProps = ExtractPropTypes<typeof tabNavProps>;
export type TabNavInstance = InstanceType<typeof TabNav>;
