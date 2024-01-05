import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes, PropType } from 'vue';
import type WeekPicker from './week-picker.vue';
import type { WeekStart } from '../interface';

export const weekPickerProps = buildProps({
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
    default: 'gggg-wo'
  },

  /**
   * @zh 值的格式，对 `value` `defaultValue` `pickerValue` `defaultPickerValue` 以及事件中的返回值生效，支持设置为时间戳，Date 和字符串（参考[字符串解析格式](#字符串解析格式)）。
   * @en The format of the value, valid for `value` `defaultValue` `pickerValue` `defaultPickerValue` and the return value in the event, supports setting as timestamp, Date and string (refer to [String parsing format](#string-parsing-format) ).
   */
  valueFormat: {
    type: String,
    default: 'YYYY-MM-DD'
  },

  /**
   * @zh 每周的第一天开始于周几，0 - 周日，1 - 周一，以此类推。
   * @en The first day of the week starts on the day of the week, 0-Sunday, 1-Monday, and so on.
   * @type 0 | 1 | 2 | 3 | 4 | 5 | 6
   */
  dayStartOfWeek: {
    type: Number as PropType<WeekStart>,
    default: 0
  }
} as const);

export type WeekPickerProps = ExtractPropTypes<typeof weekPickerProps>;
export type WeekPickerInstance = InstanceType<typeof WeekPicker>;
