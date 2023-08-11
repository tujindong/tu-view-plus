import { buildProps as t } from "@tu-view-plus/utils";
import { useSizeProp as o } from "@tu-view-plus/hooks";
import { UPDATE_MODEL_EVENT as a, CHANGE_EVENT as l } from "@tu-view-plus/constants";
const d = t({
  /**
   * @zh 绑定值
   * @en Value
   * @vModel
   */
  modelValue: {
    type: [Number, Array],
    default: void 0
  },
  /**
   * @zh 默认值（非受控状态）
   * @en Default value (uncontrolled state)
   */
  defaultValue: {
    type: [Number, Array],
    default: 0
  },
  /**
   * @zh 滑块的尺寸
   * @en slider size
   * @values 'mini','small','medium','large'
   * @defaultValue 'medium'
   */
  size: { ...o, default: "medium" },
  /**
   * @zh 滑动的步长
   * @en Sliding step
   */
  step: {
    type: Number,
    default: 1
  },
  /**
   * @zh 滑动范围的最小值
   * @en Minimum sliding range
   */
  min: {
    type: Number,
    default: 0
  },
  /**
   * @zh 设置显示的标签
   * @en Set the displayed label
   */
  marks: {
    type: Object
  },
  /**
   * @zh 滑动范围的最大值
   * @en Maximum sliding range
   */
  max: {
    type: Number,
    default: 100
  },
  /**
   * @zh 滑动输入条的方向
   * @en The direction of the slider
   */
  direction: {
    type: String,
    default: "horizontal"
  },
  /**
   * @zh 是否禁用
   * @en Whether to disable
   */
  disabled: {
    type: Boolean,
    default: !1
  },
  /**
   * @zh 是否显示刻度线
   * @en Whether to show ticks
   */
  showTicks: {
    type: Boolean,
    default: !1
  },
  /**
   * @zh 是否显示输入框
   * @en Whether to show the input
   */
  showInput: {
    type: Boolean,
    default: !1
  },
  /**
   * @zh 是否开启范围选择
   * @en Whether to use range selection
   */
  range: {
    type: Boolean,
    default: !1
  },
  formatTooltip: {
    type: Function
  },
  /**
   * @zh 是否显示tooltip
   * @en Whether to show tooltip
   */
  showTooltip: {
    type: Boolean,
    default: !0
  }
}), f = {
  [a]: (e) => !0,
  [l]: (e) => !0
};
export {
  f as sliderEmits,
  d as sliderProps
};
