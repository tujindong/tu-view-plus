import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';
import type TabPane from './tab-pane.vue';

export const tabPaneProps = buildProps({} as const);

export type TabPaneProps = ExtractPropTypes<typeof tabPaneProps>;
export type TabPaneInstance = InstanceType<typeof TabPane>;
