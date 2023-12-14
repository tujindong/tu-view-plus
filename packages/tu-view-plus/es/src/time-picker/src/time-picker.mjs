import { buildProps as o } from "@tu-view-plus/utils";
import { useSizeProp as i } from "@tu-view-plus/hooks";
const r = o({
  /**
   * @zh 选择器类型
   * @en Selector type
   */
  type: {
    type: String,
    default: "time"
  },
  /**
   * @zh 绑定值
   * @en Value
   * */
  modelValue: {
    type: [String, Number, Date, Array]
  },
  /**
   * @zh 默认值
   * @en Default value
   * */
  defaultValue: {
    type: [String, Number, Date, Array]
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
    default: !1
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
    default: "HH:mm:ss"
  },
  /**
   * @zh 提示文案
   * @en Prompt copy
   * */
  placeholder: {
    type: [String, Array]
  },
  /**
   * @zh 输入框尺寸
   * @en Input box size
   * @values 'mini','small','medium','large'
   * @defaultValue 'medium'
   * */
  size: i,
  /**
   * @zh 弹出框的挂载容器
   * @en Mount container for pop-up box
   * */
  popupContainer: {
    type: [String, Object]
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
    type: Object
  },
  /**
   * @zh 禁用的部分小时选项
   * @en Disabled partial hour options
   * */
  disabledHours: {
    type: Function
  },
  /**
   * @zh 禁用的部分分钟选项
   * @en Disabled some minutes options
   * */
  disabledMinutes: {
    type: Function
  },
  /**
   * @zh 禁用的部分秒数选项
   * @en Disabled partial seconds option
   * */
  disabledSeconds: {
    type: Function
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
    default: !1
  },
  /**
   * @zh 弹出的位置
   * @en Pop-up position
   * */
  position: {
    type: String,
    default: "bl"
  },
  /**
   * @zh 控制弹出框打开或者关闭
   * @en Control the pop-up box to open or close
   * @vModel
   */
  popupVisible: {
    type: Boolean,
    default: void 0
  },
  /**
   * @zh 弹出框默认打开或者关闭
   * @en The pop-up box is opened or closed by default
   * */
  defaultPopupVisible: {
    type: Boolean,
    default: !1
  },
  /**
   * @zh 可以传入 `Trigger` 组件的参数
   * @en You can pass in the parameters of the `Trigger` component
   * */
  triggerProps: {
    type: Object
  },
  /**
   * @zh 是否在关闭后销毁 dom 结构
   * @en Whether to destroy the dom structure after closing
   * */
  unmountOnClose: {
    type: Boolean
  }
}), a = {
  /**
   * @zh 组件值发生改变
   * @en The component value changes
   * @param {string | Array<string | undefined> | undefined} timeString
   * @param {date | Array<date | undefined> | undefined} time
   */
  change: (e, t) => !0,
  "update:modelValue": (e) => !0,
  /**
   * @zh 选择时间但未触发组件值变化
   * @en Select time but do not trigger component value change
   * @param {string | Array<string | undefined>} timeString
   * @param {Date | Array<Date | undefined>} time
   */
  select: (e, t) => !0,
  /**
   * @zh 点击清除按钮
   * @en Click the clear button
   * */
  clear: () => !0,
  /**
   * @zh 弹出框展开和收起
   * @en Pop-up box expand and collapse
   * @param {boolean} visible
   */
  "popup-visible-change": (e) => !0,
  "update:popupVisible": (e) => !0
};
export {
  a as TimePickerEmits,
  r as timePickerProps
};
