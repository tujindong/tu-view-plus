import { PropType } from 'vue';
import { buildProps } from '@tu-view-plus/utils';

import type { TagProps } from '../../tag/src/tag';
import type { ExtractPropTypes } from 'vue';

export const selectOptionProps = buildProps({
  /**
   * @zh 选项值（如不填，会从内容中获取）
   * @en Option value (if not filled, it will be obtained from the content)
   */
  value: {
    type: [String, Number, Boolean, Object],
    default: undefined
  },

  /**
   * @zh 选项标签（如不填，会从内容中获取）
   * @en Option label (if not filled, it will be obtained from the content)
   */
  label: String,

  /**
   * @zh 是否禁用
   * @en Whether to disable
   */
  disabled: Boolean,

  /**
   * @zh 展示的标签属性
   * @en Displayed tag attributes
   */
  tagProps: {
    type: Object as PropType<TagProps>
  },

  /**
   * @zh 额外数据
   * @en Extra data
   */
  extra: {
    type: Object
  },

  /**
   * @zh 用于手动指定选项的 index
   * @en index for manually specifying option
   */
  index: {
    type: Number
  },

  // private
  internal: Boolean
} as const);

export type SelectOptionProps = ExtractPropTypes<typeof selectOptionProps>;
