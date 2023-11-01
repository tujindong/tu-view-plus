import { buildProps, definePropType, mutable } from '@tu-view-plus/utils';
import { useSizeProp } from '@tu-view-plus/hooks';
import { effectTypes, EffectTypes } from './constants';

import type { ExtractPropTypes, PropType, StyleValue } from 'vue';
import type Card from './card.vue';

export const cardProps = buildProps({
  /**
   * @zh 卡片标题
   * @en  title of the card. Also accepts a DOM passed by `slot#title`
   * @defaultValue ''
   */
  title: {
    type: String
  },

  /**
   * @zh card body样式
   * @en card body style
   */
  bodyStyle: {
    type: definePropType<StyleValue>([Object, Array, String]),
    default: () => mutable({} as const)
  },

  /**
   * @zh  卡片尺寸
   * @en  caord size
   * @values 'mini','small','large'
   * @defaultValue 'medium'
   */
  size: { ...useSizeProp, default: 'medium' },

  /**
   * @zh  主题
   * @en  theme of Card
   * @values 'line' 'down', 'up'
   * @defaultValue 'line'
   */
  effect: {
    type: String as PropType<EffectTypes>,
    values: effectTypes,
    default: 'line'
  }
} as const);

export type CardProps = ExtractPropTypes<typeof cardProps>;
export type CardInstance = InstanceType<typeof Card>;
