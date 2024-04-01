import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';
import type LayoutFooter from './layout-footer.vue';

export const layoutFooterProps = buildProps({});

export type LayoutFooterProps = ExtractPropTypes<typeof layoutFooterProps>;
export type LayoutFooterInstance = InstanceType<typeof LayoutFooter>;
