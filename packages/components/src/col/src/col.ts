import { buildProps, definePropType, mutable } from '@tu-view-plus/utils';
import type { ExtractPropTypes } from 'vue';
import type Col from './col.vue';

export type ColSizeObject = {
  span?: number;
  offset?: number;
  pull?: number;
  push?: number;
};
export type ColSize = number | ColSizeObject;

export const colProps = buildProps({
  /**
   * @zh 自定义元素标签
   * @en custom element tag
   * @defaultValue 'div'
   */
  tag: {
    type: String,
    default: 'div'
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
    type: definePropType<ColSize>([Number, Object]),
    default: () => mutable({} as const)
  },

  /**
   * @zh 	`≥768px` 响应式栅格数或者栅格属性对象
   * @en `≥768px` Responsive columns or column props object
   * @defaultValue 0
   */
  sm: {
    type: definePropType<ColSize>([Number, Object]),
    default: () => mutable({} as const)
  },

  /**
   * @zh `≥992px` 响应式栅格数或者栅格属性对象
   * @en `≥992px` Responsive columns or column props object
   * @defaultValue 0
   */
  md: {
    type: definePropType<ColSize>([Number, Object]),
    default: () => mutable({} as const)
  },

  /**
   * @zh 	`≥1200px` 响应式栅格数或者栅格属性对象
   * @en `≥1200px` Responsive columns or column props object
   * @defaultValue 0
   */
  lg: {
    type: definePropType<ColSize>([Number, Object]),
    default: () => mutable({} as const)
  },

  /**
   * @zh 	`≥1920px` 响应式栅格数或者栅格属性对象
   * @en `≥1920px` Responsive columns or column props object
   * @defaultValue 0
   */
  xl: {
    type: definePropType<ColSize>([Number, Object]),
    default: () => mutable({} as const)
  }
});

export type ColProps = ExtractPropTypes<typeof colProps>;
export type ColInstance = InstanceType<typeof Col>;
