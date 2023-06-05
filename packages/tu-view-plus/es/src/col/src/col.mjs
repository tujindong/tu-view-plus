import { buildProps as u, definePropType as e, mutable as t } from "@tu-view-plus/utils";
const l = u({
  /**
   * @zh 自定义元素标签
   * @en custom element tag
   * @defaultValue 'div'
   */
  tag: {
    type: String,
    default: "div"
  },
  /**
   * @zh 栅格占据的列数
   * @en number of column the grid spans
   * @defaultValue 24
   */
  span: {
    type: Number,
    default: 24
  },
  /**
   * @zh 栅格左侧的间隔格数
   * @en number of spacing on the left side of the grid
   * @defaultValue 24
   */
  offset: {
    type: Number,
    default: 0
  },
  /**
   * @zh 栅格向左移动格数
   * @en number of columns that grid moves to the left
   * @defaultValue 0
   */
  pull: {
    type: Number,
    default: 0
  },
  /**
   * @zh 栅格向右移动格数
   * @en number of columns that grid moves to the right
   * @defaultValue 0
   */
  push: {
    type: Number,
    default: 0
  },
  /**
   * @zh `<768px` 响应式栅格数或者栅格属性对象
   * @en `<768px` Responsive columns or column props object
   * @defaultValue 0
   */
  xs: {
    type: e([Number, Object]),
    default: () => t({})
  },
  /**
   * @zh 	`≥768px` 响应式栅格数或者栅格属性对象
   * @en `≥768px` Responsive columns or column props object
   * @defaultValue 0
   */
  sm: {
    type: e([Number, Object]),
    default: () => t({})
  },
  /**
   * @zh `≥992px` 响应式栅格数或者栅格属性对象
   * @en `≥992px` Responsive columns or column props object
   * @defaultValue 0
   */
  md: {
    type: e([Number, Object]),
    default: () => t({})
  },
  /**
   * @zh 	`≥1200px` 响应式栅格数或者栅格属性对象
   * @en `≥1200px` Responsive columns or column props object
   * @defaultValue 0
   */
  lg: {
    type: e([Number, Object]),
    default: () => t({})
  },
  /**
   * @zh 	`≥1920px` 响应式栅格数或者栅格属性对象
   * @en `≥1920px` Responsive columns or column props object
   * @defaultValue 0
   */
  xl: {
    type: e([Number, Object]),
    default: () => t({})
  }
});
export {
  l as colProps
};
