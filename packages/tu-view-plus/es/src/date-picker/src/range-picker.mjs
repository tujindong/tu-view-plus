import { buildProps as a } from "@tu-view-plus/utils";
import { useSizeProp as o } from "@tu-view-plus/hooks";
const p = a({
  /**
   * @zh 范围选择器的类型
   * @en Type of range selector
   * */
  mode: {
    type: String,
    default: "date"
  },
  /**
   * @zh 绑定值
   * @en Value
   */
  modelValue: {
    type: Array
  },
  /**
   * @zh 默认值
   * @en Default value
   */
  defaultValue: {
    type: Array
  },
  /**
   * @zh 默认面板显示的日期
   * @en The date displayed in the default panel
   * */
  pickerValue: {
    type: Array
  },
  /**
   * @zh 面板显示的日期
   * @en Date displayed on the panel
   * */
  defaultPickerValue: {
    type: Array
  },
  /**
   * @zh 是否禁用
   * @en Whether to disable
   * */
  disabled: {
    type: [Boolean, Array],
    default: !1
  },
  /**
   * @zh 每周的第一天开始于周几，0 - 周日，1 - 周一，以此类推。
   * @en The first day of the week starts on the day of the week, 0-Sunday, 1-Monday, and so on.
   * @type 0 | 1 | 2 | 3 | 4 | 5 | 6
   */
  dayStartOfWeek: {
    type: Number,
    default: 0
  },
  /**
   * @zh 展示日期的格式，参考[字符串解析格式](#字符串解析格式)
   * @en Display the format of the date, refer to [String Parsing Format](#string-parsing-format)
   * */
  format: {
    type: String
  },
  /**
   * @zh 值的格式，对 `value` `defaultValue` `pickerValue` `defaultPickerValue` 以及事件中的返回值生效，支持设置为时间戳，Date 和字符串（参考[字符串解析格式](#字符串解析格式)）。如果没有指定，将格式化为字符串，格式同 `format`。
   * @en The format of the value, valid for `value` `defaultValue` `pickerValue` `defaultPickerValue` and the return value in the event, supports setting as timestamp, Date and string (refer to [String parsing format](#string-parsing-format) ). If not specified, it will be formatted as a string, in the same format as `format`.
   */
  valueFormat: {
    type: String
  },
  /**
   * @zh 是否增加时间选择
   * @en Whether to increase time selection
   * */
  showTime: {
    type: Boolean,
    default: !1
  },
  /**
   * @zh 时间显示的参数，参考 [TimePickerProps](/vue/component/time-picker)
   * @en Time display parameters, refer to [TimePickerProps](/vue/component/time-picker)
   * */
  timePickerProps: {
    type: Object
  },
  /**
   * @zh 提示文案
   * @en Prompt copy
   * */
  placeholder: {
    type: Array
  },
  /**
   * @zh 不可选的日期
   * @en Non-selectable date
   * */
  disabledDate: {
    type: Function
  },
  /**
   * @zh 不可选取的时间
   * @en Unselectable time
   * */
  disabledTime: {
    type: Function
  },
  /**
   * @zh 范围选择器输入框内的分割符号
   * @en The segmentation symbol in the input box of the range selector
   * */
  separator: {
    type: String
  },
  /**
   * @zh 时间是否会交换，默认情况下时间会影响和参与开始和结束值的排序，如果要固定时间顺序，可将其关闭。
   * @en Whether the time will be exchanged, by default time will affect and participate in the ordering of start and end values, if you want to fix the time order, you can turn it off.
   * */
  exchangeTime: {
    type: Boolean,
    default: !0
  },
  popupContainer: {
    type: [String, Object]
  },
  locale: {
    type: Object
  },
  hideTrigger: {
    type: Boolean
  },
  allowClear: {
    type: Boolean,
    default: !0
  },
  readonly: {
    type: Boolean
  },
  error: {
    type: Boolean
  },
  size: o,
  shortcuts: {
    type: Array,
    default: () => []
  },
  shortcutsPosition: {
    type: String,
    default: "bottom"
  },
  position: {
    type: String,
    default: "bl"
  },
  popupVisible: {
    type: Boolean,
    default: void 0
  },
  defaultPopupVisible: {
    type: Boolean
  },
  triggerProps: {
    type: Object
  },
  unmountOnClose: {
    type: Boolean
  },
  previewShortcut: {
    type: Boolean,
    default: !0
  },
  showConfirmBtn: {
    type: Boolean,
    default: !1
  },
  /**
   * @zh 是否禁止键盘输入日期
   * @en Whether input is disabled with the keyboard.
   */
  disabledInput: {
    type: Boolean,
    default: !1
  },
  /**
   * @zh 是否启用缩写
   * @en Whether to enable abbreviation
   */
  abbreviation: {
    type: Boolean,
    default: !0
  }
}), i = {
  /**
   * @zh 组件值发生改变
   * @en The component value changes
   * @param {(Date | string | number | undefined)[] | undefined} value
   * @param {(Date | undefined)[] | undefined} date
   * @param {(string | undefined)[] | undefined} dateString
   */
  change: (e, t, r) => !0,
  "update:modelValue": (e) => !0,
  /**
   * @zh 选中日期发生改变但组件值未改变
   * @en The selected date has changed but the component value has not changed
   * @param {(Date | string | number | undefined)[]} value
   * @param {(Date | undefined)[]} date
   * @param {(string | undefined)[]} dateString
   */
  select: (e, t, r) => !0,
  /**
   * @zh 打开或关闭弹出框
   * @en Open or close the pop-up box
   * @param {boolean} visible
   */
  "popup-visible-change": (e) => !0,
  "update:popupVisible": (e) => !0,
  /**
   * @zh 点击确认按钮
   * @en Click the confirm button
   * @param {Date | string | number[]} value
   * @param {Date[]} date
   * @param {string[]} dateString
   */
  ok: (e, t, r) => !0,
  /**
   * @zh 点击清除按钮
   * @en Click the clear button
   */
  clear: () => !0,
  /**
   * @zh 点击快捷选项
   * @en Click on the shortcut option
   * @param {ShortcutType} shortcut
   */
  "select-shortcut": (e) => !0,
  /**
   * @zh 面板日期改变
   * @en Panel date change
   * @param {Date | string | number[]} value
   * @param {Date[]} date
   * @param {string[]} dateString
   */
  "picker-value-change": (e, t, r) => !0,
  "update:pickerValue": (e) => !0
};
export {
  i as rangePickerEmits,
  p as rangePickerProps
};
