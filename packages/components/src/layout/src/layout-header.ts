import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';

export const layoutHeaderProps = buildProps({});

export type LayoutHeaderProps = ExtractPropTypes<typeof layoutHeaderProps>;
