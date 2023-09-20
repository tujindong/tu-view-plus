import { buildProps } from '@tu-view-plus/utils';
import { tabTypes, tabPositions } from './constants';
import { tabsProps } from './tabs';

import type { ExtractPropTypes } from 'vue';
import type TabsHeader from './tabs-header.vue';

export const tabsHeaderProps = buildProps({
  ...tabsProps
} as const);

export type TabsHeaderProps = ExtractPropTypes<typeof tabsHeaderProps>;
export type TabsHeaderInstance = InstanceType<typeof TabsHeader>;
