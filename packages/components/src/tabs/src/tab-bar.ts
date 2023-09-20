import { buildProps } from '@tu-view-plus/utils';
import type { ExtractPropTypes } from 'vue';
import type TabBar from './tab-bar.vue';

export const tabBarProps = buildProps({} as const);

export type TabBarProps = ExtractPropTypes<typeof tabBarProps>;
export type TabBarInstance = InstanceType<typeof TabBar>;
