import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';
import type TabButton from './tab-button.vue';

export const tabButtonProps = buildProps({} as const);

export type TabButtonProps = ExtractPropTypes<typeof tabButtonProps>;
export type TabButtonInstance = InstanceType<typeof TabButton>;
