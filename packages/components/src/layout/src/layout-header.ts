import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';
import type LayoutHeader from './layout-header.vue';

export const layoutHeaderProps = buildProps({});

export type LayoutHeaderProps = ExtractPropTypes<typeof layoutHeaderProps>;
export type LayoutHeaderInstance = InstanceType<typeof LayoutHeader>;
