import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes, PropType } from 'vue';
import type SubMenu from './sub-menu.vue';

export const subMenuProps = buildProps({
  /**
   * @zh 唯一标志
   * @en Unique key
   */
  key: {
    type: String
  },
  /**
   * @zh 子菜单的标题
   * @en The title of the submenu
   */
  title: {
    type: String
  },
  /**
   * @zh 弹出模式下，是否将多级菜单头也作为一个菜单项，支持点击选中等状态
   * @en In the pop-up mode, whether the multi-level menu header is also used as a menu item to support the state such as click to select
   */
  selectable: {
    type: Boolean,
    default: false
  },
  /**
   * @zh 是否强制使用弹出模式，`level` 表示当前子菜单的层级
   * @en Whether to force the use of pop-up mode, `level` indicates the level of the current submenu
   */
  popup: {
    type: [Boolean, Function] as PropType<
      boolean | ((level: number) => boolean)
    >,
    default: false
  },
  /**
   * @zh 弹出框的最大高度
   * @en The maximum height of popover
   * @defaultValue true
   */
  popupMaxHeight: {
    type: [Boolean, Number] as PropType<boolean | number>,
    default: undefined
  }
} as const);

export type SubMenuProps = ExtractPropTypes<typeof subMenuProps>;
export type SubMenuInstance = InstanceType<typeof SubMenu>;
