import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';
import type SubMenu from './sub-menu.vue';

export const subMenuProps = buildProps({} as const);

export type SubMenuProps = ExtractPropTypes<typeof subMenuProps>;
export type SubMenuInstance = InstanceType<typeof SubMenu>;
