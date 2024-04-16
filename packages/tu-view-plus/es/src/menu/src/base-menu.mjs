import { buildProps as e } from "@tu-view-plus/utils";
import { effectTypes as t } from "./context.mjs";
const a = e({
  style: {
    type: Object,
    default: {}
  },
  /**
   * @zh 菜单的模式
   * @en The mode of menu
   */
  mode: {
    type: String,
    default: "vertical"
  },
  /**
  * @zh  主题
  * @en  theme of Menu
  * @values 'default' 'inset' 'bordered', 'outlined', 'flat'
  * @defaultValue 'outset'
  */
  effect: {
    type: String,
    values: t,
    default: "default"
  },
  /**
   * @zh 层级之间的缩进量
   * @en Indentation between levels
   */
  levelIndent: {
    type: Number
  },
  /**
   * @zh 默认展开所有多级菜单
   * @en Expand all multi-level menus by default
   */
  autoOpen: {
    type: Boolean,
    default: !1
  },
  /**
   * @zh 是否折叠菜单
   * @en Whether to collapse the menu
   * @vModel
   */
  collapsed: {
    type: Boolean,
    default: void 0
  },
  /**
   * @zh 默认是否折叠菜单
   * @en Whether to collapse the menu by default
   */
  defaultCollapsed: {
    type: Boolean
  },
  /**
   * @zh 折叠菜单宽度
   * @en Collapse menu width
   */
  collapsedWidth: {
    type: Number
  },
  /**
   * @zh 开启手风琴效果
   * @en Turn on the accordion effect
   */
  accordion: {
    type: Boolean,
    default: !1
  },
  /**
   * @zh 是否自动滚动选中项目到可见区域
   * @en Whether to automatically scroll the selected item to the visible area
   */
  autoScrollIntoView: {
    type: Boolean,
    default: !1
  },
  /**
   * @zh 是否内置折叠按钮
   * @en Whether built-in folding button
   */
  showCollapseButton: {
    type: Boolean,
    default: !1
  },
  /**
   * @zh 选中的菜单项 key 数组
   * @en The selected menu item key array
   * @vModel
   */
  selectedKeys: {
    type: Array
  },
  /**
   * @zh 默认选中的菜单项 key 数组
   * @en The key array of the menu items selected by default
   */
  defaultSelectedKeys: {
    type: Array,
    default: () => []
  },
  /**
   * @zh 展开的子菜单 key 数组
   * @en Expanded submenu key array
   * @vModel
   */
  openKeys: {
    type: Array
  },
  /**
   * @zh 默认展开的子菜单 key 数组
   * @en The default expanded submenu key array
   */
  defaultOpenKeys: {
    type: Array,
    default: () => []
  },
  /**
   * @zh 滚动到可见区域的配置项，接收所有[scroll-into-view-if-needed](https://github.com/stipsan/scroll-into-view-if-needed)的参数
   * @en Scroll to the configuration items in the visible area and receive all the parameters of [scroll-into-view-if-needed](https://github.com/stipsan/scroll-into-view-if-needed)
   */
  scrollConfig: {
    type: Object
  },
  /**
   * @zh 弹出模式下可接受所有 `Trigger` 的 `Props`
   * @en Accept all `Props` of `Trigger` in pop-up mode
   */
  triggerProps: {
    type: Object
  },
  /**
   * @zh 弹出模式下可接受所有 `ToolTip` 的 `Props`
   * @en Accept all `Props` of `ToolTip` in pop-up mode
   */
  tooltipProps: {
    type: Object
  },
  /**
   * @zh 默认展开选中的菜单
   * @en Expand the selected menus by default
   */
  autoOpenSelected: {
    type: Boolean,
    default: !1
  },
  /**
   * @zh 响应式的断点, 详见[响应式栅格](/vue/component/grid)
   * @en Responsive breakpoints, see [Responsive Grid](/vue/component/grid) for details
   */
  breakpoint: {
    type: String
  },
  /**
   * @zh 弹出框的最大高度
   * @en The maximum height of popover
   */
  popupMaxHeight: {
    type: [Boolean, Number],
    default: !0
  },
  // internal
  prefixCls: {
    type: String
  },
  inTrigger: {
    type: Boolean,
    default: !1
  },
  siderCollapsed: {
    type: Boolean
  },
  isRoot: {
    type: Boolean
  }
}), p = [
  "update:collapsed",
  "update:selectedKeys",
  "update:openKeys",
  /**
   * @zh 折叠状态改变时触发
   * @en Triggered when the collapsed state changes
   * @param {boolean} collapsed
   * @param {'clickTrigger'|'responsive'} type
   */
  "collapse",
  /**
   * @zh 点击菜单项时触发
   * @en Triggered when the menu item is clicked
   * @param {string} key
   */
  "menu-item-click",
  /**
   * @zh 点击子菜单时触发
   * @en Triggered when the submenu is clicked
   * @param {string} key
   * @param {string[]} openKeys
   */
  "sub-menu-click"
];
export {
  p as baseMenuEmits,
  a as baseMenuProps
};
