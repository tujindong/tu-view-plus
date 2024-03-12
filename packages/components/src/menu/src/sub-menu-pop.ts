import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';
import type SubMenuPop from './sub-menu-pop.vue';

export const subMenuPopProps = buildProps({} as const);

export type SubMenuPopProps = ExtractPropTypes<typeof subMenuPopProps>;
export type SubMenuPopInstance = InstanceType<typeof SubMenuPop>;
