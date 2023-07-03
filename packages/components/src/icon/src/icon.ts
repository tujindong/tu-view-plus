import { buildProps, definePropType } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';
import type Icon from './icon.vue';

export const iconProps = buildProps({
  /**
   * @zh 图标的尺寸
   * @en size
   */
  size: {
    type: definePropType<number | string>([Number, String])
  },

  /**
   * @zh 图标的颜色
   * @en color
   */
  color: {
    type: String
  }
});

export type IconProps = ExtractPropTypes<typeof iconProps>;
export type IconInstance = InstanceType<typeof Icon>;
