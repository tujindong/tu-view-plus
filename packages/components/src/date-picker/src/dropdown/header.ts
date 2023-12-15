import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';
import type Header from './header.vue';

export const headerProps = buildProps({} as const);

export type HeaderProps = ExtractPropTypes<typeof headerProps>;
export type HeaderInstance = InstanceType<typeof Header>;
