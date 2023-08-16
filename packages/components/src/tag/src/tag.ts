import { buildProps } from '@tu-view-plus/utils';
import { useSizeProp } from '@tu-view-plus/hooks';
import { tagEffects } from './constants';

import type { ExtractPropTypes } from 'vue';
import type Tag from './tag.vue';

export const tagProps = buildProps({
  /**
   * @zh 是否可关闭
   * @en whether Tag can be removed
   */
  closable: Boolean,

  /**
   * @zh 是否禁用渐变动画
   * @en whether to disable animations
   */
  disableTransitions: Boolean,

  /**
   * @zh 是否有边框描边
   * @en whether Tag has a highlighted border
   */
  hit: Boolean,

  /**
   * @zh 标签主色
   * @en main color of the Tag
   */
  color: {
    type: String,
    default: ''
  },

  /**
   * @zh 标签的尺寸
   * @en Tag size
   * @values 'mini','small','medium','large'
   * @defaultValue 'medium'
   */
  size: { ...useSizeProp, default: 'medium' },

  /**
   * @zh
   * @en theme of Tag
   */
  effect: {
    type: String,
    values: tagEffects,
    default: 'neumorphic'
  },

  /**
   * @zh
   * @en whether Tag is rounded
   */
  round: Boolean
} as const);

export const tagEmits = {
  close: (evt: MouseEvent) => evt instanceof MouseEvent,
  click: (evt: MouseEvent) => evt instanceof MouseEvent
};

export type TagProps = ExtractPropTypes<typeof tagProps>;
export type TagInstance = InstanceType<typeof Tag>;
export type TagEmits = typeof tagEmits;
