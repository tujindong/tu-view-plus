import { buildProps } from '@tu-view-plus/utils';
import { useSizeProp } from '@tu-view-plus/hooks';

import type { ExtractPropTypes, PropType } from 'vue';
import type TimePicker from './time-picker.vue';
import type { TriggerProps } from '../../trigger';

export const timePickerProps = buildProps({
  /**
   * @zh 选择器类型
   * @en Selector type
   */
  type: {
    type: String as PropType<'time' | 'time-range'>,
    default: 'time'
  },

  /**
   * @zh 绑定值
   * @en Value
   * */
  modelValue: {
    type: [String, Number, Date, Array] as PropType<
      string | number | Date | Array<string | number | Date>
    >
  },

  /**
   * @zh 默认值
   * @en Default value
   * */
  defaultValue: {
    type: [String, Number, Date, Array] as PropType<
      string | number | Date | Array<string | number | Date>
    >
  },

  /**
   * @zh 是否禁用
   * @en Whether to disable
   */
  disabled: {
    type: Boolean
  },

  /**
   * @zh 是否允许清除
   * @en Whether to allow clear
   * */
  allowClear: {
    type: Boolean,
    default: false
  },

  /**
   * @zh 是否为只读模式
   * @en Whether it is read-only mode
   * */
  readonly: {
    type: Boolean
  },

  /**
   * @zh 是否为错误状态
   * @en Whether it is an error state
   * */
  error: {
    type: Boolean
  },

  /**
   * @zh 展示日期的格式，参考[字符串解析格式](#字符串解析格式)
   * @en Display the format of the date, refer to [String Parsing Format](#String Parsing Format)
   * */
  format: {
    type: String,
    default: 'HH:mm:ss'
  },

  /**
   * @zh 提示文案
   * @en Prompt copy
   * */
  placeholder: {
    type: [String, Array] as PropType<String | string[]>
  },

  /**
   * @zh 输入框尺寸
   * @en Input box size
   * @values 'mini','small','medium','large'
   * @defaultValue 'medium'
   * */
  size: useSizeProp,

  /**
   * @zh 弹出框的挂载容器
   * @en Mount container for pop-up box
   * */
  popupContainer: {
    type: [String, Object] as PropType<string | HTMLElement>
  },

  /**
   * @zh 12 小时制
   * @en 12 hour clock
   * */
  use12Hours: {
    type: Boolean
  },

  /**
   * @zh 设置 时 / 分 / 秒 的选择间隔
   * @en Set the hour/minute/second selection interval
   * */
  step: {
    type: Object as PropType<{
      hour?: number;
      minute?: number;
      second?: number;
    }>
  },

  /**
   * @zh 禁用的部分小时选项
   * @en Disabled partial hour options
   * */
  disabledHours: {
    type: Function as PropType<() => number[]>
  },

  /**
   * @zh 禁用的部分分钟选项
   * @en Disabled some minutes options
   * */
  disabledMinutes: {
    type: Function as PropType<(selectedHour?: number) => number[]>
  },

  /**
   * @zh 禁用的部分秒数选项
   * @en Disabled partial seconds option
   * */
  disabledSeconds: {
    type: Function as PropType<
      (selectedHour?: number, selectedMinute?: number) => number[]
    >
  },

  /**
   * @zh 隐藏禁止选择的选项
   * @en Hide prohibited options
   * */
  hideDisabledOptions: {
    type: Boolean
  },

  /**
   * @zh 禁用确认步骤，开启后直接点选时间不需要点击确认按钮
   * @en Disable the confirmation step, click the time directly after opening, without clicking the confirmation button
   * */
  disableConfirm: {
    type: Boolean,
    default: false
  },

  /**
   * @zh 弹出的位置
   * @en Pop-up position
   * */
  position: {
    type: String as PropType<'top' | 'tl' | 'tr' | 'bottom' | 'bl' | 'br'>,
    default: 'bl'
  },

  /**
   * @zh 控制弹出框打开或者关闭
   * @en Control the pop-up box to open or close
   * @vModel
   */
  popupVisible: {
    type: Boolean,
    default: undefined
  },

  /**
   * @zh 弹出框默认打开或者关闭
   * @en The pop-up box is opened or closed by default
   * */
  defaultPopupVisible: {
    type: Boolean,
    default: false
  },

  /**
   * @zh 可以传入 `Trigger` 组件的参数
   * @en You can pass in the parameters of the `Trigger` component
   * */
  triggerProps: {
    type: Object as PropType<TriggerProps>
  },

  /**
   * @zh 是否在关闭后销毁 dom 结构
   * @en Whether to destroy the dom structure after closing
   * */
  unmountOnClose: {
    type: Boolean
  }
} as const);

export const TimePickerEmits = {
  /**
   * @zh 组件值发生改变
   * @en The component value changes
   * @param {string | Array<string | undefined> | undefined} timeString
   * @param {date | Array<date | undefined> | undefined} time
   */
  change: (
    timeString: string | Array<string | undefined> | undefined,
    time: Date | Array<Date | undefined> | undefined
  ) => true,

  'update:modelValue': (
    timeString: string | Array<string | undefined> | undefined
  ) => true,

  /**
   * @zh 选择时间但未触发组件值变化
   * @en Select time but do not trigger component value change
   * @param {string | Array<string | undefined>} timeString
   * @param {Date | Array<Date | undefined>} time
   */
  select: (
    timeString: string | Array<string | undefined>,
    time: Date | Array<Date | undefined>
  ) => true,

  /**
   * @zh 点击清除按钮
   * @en Click the clear button
   * */
  clear: () => true,

  /**
   * @zh 弹出框展开和收起
   * @en Pop-up box expand and collapse
   * @param {boolean} visible
   */
  'popup-visible-change': (visible: boolean) => true,

  'update:popupVisible': (visible: boolean) => true
};

export type TimePickerProps = ExtractPropTypes<typeof timePickerProps>;
export type TimePickerInstance = InstanceType<typeof TimePicker>;
