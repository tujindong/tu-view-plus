import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes, PropType } from 'vue';

export const monthPickerProps = buildProps({
  /**
   * @zh 绑定值
   * @en Value
   */
  modelValue: {
    type: [Object, String, Number] as PropType<Date | string | number>
  },

  /**
   * @zh 默认值
   * @en Default value
   */
  defaultValue: {
    type: [Object, String, Number] as PropType<Date | string | number>
  },

  /**
   * @zh 展示日期的格式，参考[字符串解析格式](#字符串解析格式)
   * @en Display the format of the date, refer to [String Parsing Format](#String Parsing Format)
   */
  format: {
    type: String,
    default: 'YYYY-MM'
  }
} as const);

export type MonthPickerProps = ExtractPropTypes<typeof monthPickerProps>;
