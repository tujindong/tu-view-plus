import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';

export const dropdownGroupProps = buildProps({
  /**
   * @zh 分组标题
   * @en Group title
   */
  title: String
} as const);

export type DropdownGroupProps = ExtractPropTypes<typeof dropdownGroupProps>;
