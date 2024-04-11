import { buildProps, definePropType } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';

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
