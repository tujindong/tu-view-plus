import { buildProps } from '@tu-view-plus/utils';
import { useSizeProp } from '@tu-view-plus/hooks';

import type { ExtractPropTypes, PropType, CSSProperties } from 'vue';
import type Pagination from './pagination.vue';
import type { SelectProps } from '../../select/src/select';

export const paginationProps = buildProps({
  /**
   * @zh 数据总数
   * @en Total number of data
   */
  total: {
    type: Number,
    required: true
  },
  /**
   * @zh 当前的页数
   * @en Current page number
   * @vModel
   */
  current: Number,
  /**
   * @zh 默认的页数（非受控状态）
   * @en The default number of pages (uncontrolled state)
   */
  defaultCurrent: {
    type: Number,
    default: 1
  },
  /**
   * @zh 每页展示的数据条数
   * @en Number of data items displayed per page
   * @vModel
   */
  pageSize: Number,
  /**
   * @zh 默认每页展示的数据条数（非受控状态）
   * @en The number of data items displayed per page by default (uncontrolled state)
   */
  defaultPageSize: {
    type: Number,
    default: 10
  },
  /**
   * @zh 是否禁用
   * @en Whether to disable
   */
  disabled: {
    type: Boolean,
    default: false
  },
  /**
   * @zh 单页时是否隐藏分页
   * @en Whether to hide pagination when single page
   */
  hideOnSinglePage: {
    type: Boolean,
    default: false
  },
  /**
   * @zh 是否为简单模式
   * @en Whether it is simple mode
   */
  simple: {
    type: Boolean,
    default: false
  },
  /**
   * @zh 是否为button模式
   * @en Whether it is button mode
   */
  button: {
    type: Boolean,
    default: false
  },
  /**
   * @zh 是否显示数据总数
   * @en Whether to display the total number of data
   */
  showTotal: {
    type: Boolean,
    default: false
  },
  /**
   * @zh 是否显示更多按钮
   * @en Whether to show more buttons
   */
  showMore: {
    type: Boolean,
    default: false
  },
  /**
   * @zh 是否显示跳转
   * @en Whether to show jump
   */
  showJumper: {
    type: Boolean,
    default: false
  },
  /**
   * @zh 是否显示数据条数选择器
   * @en Whether to display the data number selector
   */
  showPageSize: {
    type: Boolean,
    default: false
  },
  /**
   * @zh 数据条数选择器的选项列表
   * @en Selection list of data number selector
   */
  pageSizeOptions: {
    type: Array as PropType<number[]>,
    default: () => [10, 20, 30, 40, 50]
  },
  /**
   * @zh 数据条数选择器的Props
   * @en Props of data number selector
   */
  pageSizeProps: {
    type: Object as PropType<SelectProps>
  },
  /**
   * @zh 分页选择器的大小
   * @en The size of the page selector
   * @values 'mini', 'small', 'medium', 'large'
   * @defaultValue 'medium'
   */
  size: useSizeProp,
  /**
   * @zh 分页按钮的样式
   * @en The style of the paging button
   */
  pageItemStyle: {
    type: Object as PropType<CSSProperties>
  },
  /**
   * @zh 当前分页按钮的样式
   * @en The style of the current paging button
   */
  activePageItemStyle: {
    type: Object as PropType<CSSProperties>
  },
  /**
   * @zh 计算显示省略的基础个数。显示省略的个数为 `baseSize + 2 * bufferSize`
   * @en Calculate and display the number of omitted bases. Display the omitted number as `baseSize + 2 * bufferSize`
   */
  baseSize: {
    type: Number,
    default: 6
  },
  /**
   * @zh 显示省略号时，当前页码左右显示的页码个数
   * @en When the ellipsis is displayed, the number of page numbers displayed on the left and right of the current page number
   */
  bufferSize: {
    type: Number,
    default: 2
  },
  /**
   * @zh 是否在改变数据条数时调整页码
   * @en Whether to adjust the page number when changing the number of data
   */
  autoAdjust: {
    type: Boolean,
    default: true
  }
} as const);

export const paginationEmits = {
  'update:current': (current: number) => true,
  'update:pageSize': (pageSize: number) => true,
  /**
   * @zh 页码改变时触发
   * @en Triggered when page number changes
   * @param {number} current
   */
  change: (current: number) => true,
  /**
   * @zh 数据条数改变时触发
   * @en Triggered when the number of data items changes
   * @param {number} pageSize
   */
  pageSizeChange: (pageSize: number) => true
};

export type PaginationProps = ExtractPropTypes<typeof paginationProps>;
export type PaginationInstance = InstanceType<typeof Pagination>;
