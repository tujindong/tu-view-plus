import { buildProps } from '@tu-view-plus/utils';
import { effectTypes, EffectTypes } from './context';

import type { ExtractPropTypes, PropType } from 'vue';

export const menuProps = buildProps({
  mode: {
    type: String as PropType<'vertical' | 'horizontal' | 'pop' | 'popButton'>,
    default: 'vertical'
  },
   /**
   * @zh  主题
   * @en  theme of Menu
   * @values '', 'inset', 'outset', 'bordered', 'outlined', 'flat'
   * @defaultValue 'outset'
   */
   effect: {
    type: String as PropType<EffectTypes>,
    values: effectTypes,
    default: 'outset'
  }
} as const);

export type MenuProps = ExtractPropTypes<typeof menuProps>;
