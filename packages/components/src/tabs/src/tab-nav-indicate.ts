import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';
import type TabNavIndicate from './tab-nav-indicate.vue';

export const tabNavIndicateProps = buildProps({} as const);

export type TabNavIndicateProps = ExtractPropTypes<typeof tabNavIndicateProps>;
export type TabNavIndicateInstance = InstanceType<typeof TabNavIndicate>;
