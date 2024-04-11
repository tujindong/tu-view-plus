import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';

export const layoutContentProps = buildProps({});

export type LayoutContentProps = ExtractPropTypes<typeof layoutContentProps>;
