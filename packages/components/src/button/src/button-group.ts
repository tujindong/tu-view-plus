import { buttonProps } from './button';

import type { ExtractPropTypes } from 'vue';

export const buttonGroupProps = {
  /**
   * @zh 按钮的尺寸
   * @en Button size
   * @values 'mini','small','medium','large'
   * @defaultValue 'medium'
   */
  size: buttonProps.size,

  /**
   * @zh 按钮的类型
   * @en Button type
   * @values 'default','primary','success','warning', 'info', 'danger', 'text', ''
   * @defaultValue 'default'
   */
  type: buttonProps.type
} as const;

export type ButtonGroupProps = ExtractPropTypes<typeof buttonGroupProps>;
