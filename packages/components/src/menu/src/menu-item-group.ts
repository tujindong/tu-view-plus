import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';

export const menuItemGroupProps = buildProps({
  /**
   * @zh 菜单组的标题
   * @en The title of the menu group
   */
  title: {
    type: String
  }
} as const);

export type MenuItemGroupProps = ExtractPropTypes<typeof menuItemGroupProps>;
