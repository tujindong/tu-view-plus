import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';

export const menuItemGroupProps = buildProps({} as const);

export type MenuItemGroupProps = ExtractPropTypes<typeof menuItemGroupProps>;
