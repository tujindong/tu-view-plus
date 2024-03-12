import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';
import type MenuItemGroup from './menu-item-group.vue';

export const menuItemGroupProps = buildProps({} as const);

export type MenuItemGroupProps = ExtractPropTypes<typeof menuItemGroupProps>;
export type MenuItemGroupInstance = InstanceType<typeof MenuItemGroup>;
