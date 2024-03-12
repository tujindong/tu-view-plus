import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';
import type BaseMenu from './base-menu.vue';

export const baseMenuProps = buildProps({} as const);

export type BaseMenuProps = ExtractPropTypes<typeof baseMenuProps>;
export type BaseMenuInstance = InstanceType<typeof BaseMenu>;
