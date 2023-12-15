import { buildProps } from '@tu-view-plus/utils';
import { useSizeProp } from '@tu-view-plus/hooks';

import type { ExtractPropTypes, PropType } from 'vue';
import type Picker from './picker.vue';
import type {
  ShortcutType,
  DisabledTimeProps,
  FormatFunc,
  TimePickerProps,
  WeekStart,
  CalendarValue
} from './interface';
import type { TriggerProps } from '../../trigger';

export const pickerProps = buildProps({
  /**
   * @zh 国际化配置，用于覆盖locale中的 `datePicker` 字段
   * @en Internationalization configuration, used to cover the locale file in the `datePicker` field
   */
  locale: {
    type: Object as PropType<Record<string, any>>
  },

  /**
   * @zh 没有触发元素，只显示选择面板
   * @en There is no trigger element, only the selection panel is displayed
   * */
  hideTrigger: {
    type: Boolean,
    default: false
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
   * @zh 是否为只读
   * @en Whether it is read-only
   * */
  readonly: {
    type: Boolean,
    default: false
  },

  /**
   * @zh 是否为错误状态
   * @en Whether it is an error state
   */
  error: {
    type: Boolean
  },

  /**
   * @zh 日期选择器的尺寸
   * @en The size of the date picker
   * @values 'mini','small','medium','large'
   * @defaultValue 'medium'
   * */
  size: useSizeProp,

  /**
   * @zh 预设时间范围快捷选择
   * @en Quick selection of preset time range
   */
  shortcuts: {
    type: Array as PropType<ShortcutType[]>,
    default: () => []
  },

  /**
   * @zh 预设范围在面板上的位置，默认放在下方，侧边一般用于大量预设时间的场景
   * @en The position of the preset range on the panel, which is placed at the bottom by default, and the side is generally used for scenes with a large number of preset times
   * */
  shortcutsPosition: {
    type: String as PropType<'left' | 'bottom' | 'right'>,
    default: 'bottom'
  },

  /**
   * @zh 弹出的框的位置
   * @en The position of the pop-up box
   */
  position: {
    type: String as PropType<'top' | 'tl' | 'tr' | 'bottom' | 'bl' | 'br'>,
    default: 'bl'
  },

  /**
   * @zh 控制弹出框的打开或者关闭状态
   * @en Control the open or closed state of the pop-up box
   */
  popupVisible: {
    type: Boolean,
    default: undefined
  },

  /**
   * @zh 默认弹出框是打开或者关闭
   * @en The default pop-up box is open or closed
   */
  defaultPopupVisible: {
    type: Boolean,
    default: false
  },

  /**
   * @zh 可以传入 `Trigger` 组件的参数
   * @en You can pass in the parameters of the `Trigger` component
   */
  triggerProps: {
    type: Object as PropType<TriggerProps>
  },

  /**
   * @zh 是否在隐藏的时候销毁DOM结构
   * @en Whether to destroy the DOM structure when hiding
   */
  unmountOnClose: {
    type: Boolean,
    default: false
  },

  /**
   * @zh 提示文案
   * @en Prompt copy
   */
  placeholder: {
    type: String
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
   * @zh 不可选取的日期
   * @en Unselectable date
   */
  disabledDate: {
    type: Function as PropType<(current?: Date) => boolean>
  },

  /**
   * @zh 不可选取的时间
   * @en Unselectable time
   */
  disabledTime: {
    type: Function as PropType<(current: Date) => DisabledTimeProps>
  },

  /**
   * @zh 面板显示的日期
   * @en Date displayed on the panel
   * @vModel
   */
  pickerValue: {
    type: [Object, String, Number] as PropType<Date | string | number>
  },

  /**
   * @zh 面板默认显示的日期
   * @en The date displayed on the panel by default
   */
  defaultPickerValue: {
    type: [Object, String, Number] as PropType<Date | string | number>
  },

  /**
   * @zh 弹出框的挂载容器
   * @en Mount container for pop-up box
   */
  popupContainer: {
    type: [String, Object] as PropType<string | HTMLElement>
  },

  mode: {
    type: String as PropType<'date' | 'year' | 'quarter' | 'month' | 'week'>,
    default: 'date'
  },

  format: {
    type: [String, Function] as PropType<string | FormatFunc>
  },
  /**
   * @zh 值的格式，对 `value` `defaultValue` `pickerValue` `defaultPickerValue` 以及事件中的返回值生效，支持设置为时间戳，Date 和字符串（参考[字符串解析格式](#字符串解析格式)）。如果没有指定，将格式化为字符串，格式同 `format`。
   * @en The format of the value, valid for `value` `defaultValue` `pickerValue` `defaultPickerValue` and the return value in the event, supports setting as timestamp, Date and string (refer to [String parsing format](#string-parsing-format) ). If not specified, it will be formatted as a string, in the same format as `format`.
   */
  valueFormat: {
    type: String as PropType<'timestamp' | 'Date' | string>
  },

  /**
   * @zh 是否要预览快捷选择的结果
   * @en Whether to preview the result of the shortcut
   */
  previewShortcut: {
    type: Boolean,
    default: true
  },

  /**
   * @zh 是否显示确认按钮，`showTime = true` 的时候始终显示。
   * @en Whether to show the confirm button, always show when `showTime = true`.
   */
  showConfirmBtn: {
    type: Boolean,
    default: false
  },

  showTime: {
    type: Boolean,
    default: false
  },

  timePickerProps: {
    type: Object as PropType<Partial<TimePickerProps>>
  },

  showNowBtn: {
    type: Boolean,
    default: true
  },

  dayStartOfWeek: {
    type: Number as PropType<WeekStart>,
    default: 0
  },

  modelValue: {
    type: [Object, String, Number] as PropType<Date | string | number>
  },

  defaultValue: {
    type: [Object, String, Number] as PropType<Date | string | number>
  },

  /**
   * @zh 是否禁止键盘输入日期
   * @en Whether input is disabled with the keyboard.
   */
  disabledInput: {
    type: Boolean,
    default: false
  },

  /**
   * @zh 是否启用缩写
   * @en Whether to enable abbreviation
   */
  abbreviation: {
    type: Boolean,
    default: true
  }
} as const);

export const pickerEmits = {
  /**
   * @zh 组件值发生改变
   * @en The component value changes
   * @param {Date | string | number | undefined} value
   * @param {Date | undefined} date
   * @param {string | undefined} dateString
   */
  change: (
    value: CalendarValue | undefined,
    date: Date | undefined,
    dateString: string | undefined
  ) => true,
  'update:modelValue': (value: CalendarValue | undefined) => true,
  /**
   * @zh 选中日期发生改变但组件值未改变
   * @en The selected date has changed but the component value has not changed
   * @param {Date | string | number} value
   * @param {Date} date
   * @param {string} dateString
   */
  select: (
    value: CalendarValue | undefined,
    date: Date | undefined,
    dateString: string | undefined
  ) => true,
  /**
   * @zh 打开或关闭弹出框
   * @en Open or close the pop-up box
   * @param {boolean} visible
   */
  'popup-visible-change': (visible: boolean) => true,
  'update:popupVisible': (visible: boolean) => true,
  /**
   * @zh 点击确认按钮
   * @en Click the confirm button
   * @param {Date | string | number} value
   * @param {Date} date
   * @param {string} dateString
   */
  ok: (
    value: CalendarValue | undefined,
    date: Date | undefined,
    dateString: string | undefined
  ) => true,
  /**
   * @zh 点击清除按钮
   * @en Click the clear button
   */
  clear: () => true,
  /**
   * @zh 点击快捷选项
   * @en Click on the shortcut option
   * @param {ShortcutType} shortcut
   */
  'select-shortcut': (shortcut: ShortcutType) => true,
  /**
   * @zh 面板日期改变
   * @en Panel date change
   * @param {Date | string | number} value
   * @param {Date} date
   * @param {string} dateString
   */
  'picker-value-change': (
    value: CalendarValue,
    date: Date,
    dateString: string
  ) => true,
  'update:pickerValue': (value: CalendarValue) => true
};

export type PickerProps = ExtractPropTypes<typeof pickerProps>;
export type PickerInstance = InstanceType<typeof Picker>;
