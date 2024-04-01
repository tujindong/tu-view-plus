import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';
import type LayoutContent from './layout-content.vue';

export const layoutContentProps = buildProps({});

export type LayoutContentProps = ExtractPropTypes<typeof layoutContentProps>;
export type LayoutContentInstance = InstanceType<typeof LayoutContent>;
