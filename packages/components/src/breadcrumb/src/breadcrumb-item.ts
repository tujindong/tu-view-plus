import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes, PropType } from 'vue';
import type { BreadcrumbRoute } from './interface';
import type { DropdownProps } from '../../dropdown/src/dropdown';

export const breadcrumbItemProps = buildProps({
  /**
   * @zh 分隔符文字
   * @en Delimiter text
   */
  separator: {
    type: [String, Number]
  },
  /**
   * @zh 下拉菜单内容
   * @en Dropdown content
   */
  droplist: {
    type: Array as PropType<BreadcrumbRoute['children']>
  },
  /**
   * @zh 下拉菜单属性
   * @en Dropdown props
   */
  dropdownProps: {
    type: Object as PropType<DropdownProps>
  },
  // private
  index: {
    type: Number,
    default: 0
  }
} as const);

export type BreadcrumbItemProps = ExtractPropTypes<typeof breadcrumbItemProps>;
