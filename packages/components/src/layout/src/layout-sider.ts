import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';
import type LayoutSider from './layout-sider.vue';

export const layoutSiderProps = buildProps({});

export type LayoutSiderProps = ExtractPropTypes<typeof layoutSiderProps>;
export type LayoutSiderInstance = InstanceType<typeof LayoutSider>;
