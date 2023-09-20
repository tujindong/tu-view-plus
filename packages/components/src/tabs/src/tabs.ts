import { buildProps, definePropType } from '@tu-view-plus/utils';
import { UPDATE_MODEL_EVENT } from '@tu-view-plus/constants';
import { tabPositions, isPaneName, tabTypes } from './constants';

import type { ExtractPropTypes } from 'vue';
import type Tabs from './tabs.vue';
import type { Awaitable } from '@tu-view-plus/utils';
import type { TabPaneName, TabsPaneContext } from './constants';

export const tabsProps = buildProps({
  type: {
    type: String,
    values: tabTypes,
    default: ''
  },

  activeName: {
    type: [String, Number]
  },

  closable: Boolean,

  addable: Boolean,

  modelValue: {
    type: [String, Number]
  },

  editable: Boolean,

  tabPosition: {
    type: String,
    values: tabPositions,
    default: 'top'
  },

  beforeLeave: {
    type: definePropType<
      (newName: TabPaneName, oldName: TabPaneName) => Awaitable<void | boolean>
    >(Function),
    default: () => true
  },
  stretch: Boolean
} as const);

export const tabsEmits = {
  [UPDATE_MODEL_EVENT]: (name: TabPaneName) => isPaneName(name),
  tabClick: (pane: TabsPaneContext, ev: Event) => ev instanceof Event,
  tabChange: (name: TabPaneName) => isPaneName(name),
  edit: (paneName: TabPaneName | undefined, action: 'remove' | 'add') =>
    ['remove', 'add'].includes(action),
  tabRemove: (name: TabPaneName) => isPaneName(name),
  tabAdd: () => true
};

export type TabsProps = ExtractPropTypes<typeof tabsProps>;
export type TabsInstance = InstanceType<typeof Tabs>;
export type TabsEmits = typeof tabsEmits;
