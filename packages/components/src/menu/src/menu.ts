import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes, PropType } from 'vue';
import type Menu from './menu.vue';

export const menuProps = buildProps({
  mode: {
    type: String as PropType<'vertical' | 'horizontal' | 'pop' | 'popButton'>,
    default: 'vertical'
  }
} as const);

export type MenuProps = ExtractPropTypes<typeof menuProps>;
export type MenuInstance = InstanceType<typeof Menu>;
