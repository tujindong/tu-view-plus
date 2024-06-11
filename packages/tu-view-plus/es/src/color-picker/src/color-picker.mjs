import { buildProps as o } from "@tu-view-plus/utils";
import { useSizeProp as t } from "@tu-view-plus/hooks";
import { colors as l } from "./context.mjs";
const i = o({
  /**
   * @zh 绑定值
   * @en Value
   */
  modelValue: String,
  /**
   * @zh 默认值（非受控状态）
   * @en Default value (uncontrolled state)
   */
  defaultValue: {
    type: String
  },
  /**
   * @zh 颜色值的格式
   * @en Color value format
   */
  format: {
    type: String
  },
  /**
   * @zh 尺寸
   * @en Size
   * @values 'mini','small','medium','large'
   */
  size: t,
  /**
   * @zh 显示颜色值
   * @en Show color value
   */
  showText: {
    type: Boolean,
    default: !1
  },
  /**
   * @zh 显示历史颜色
   * @en Show history colors
   */
  showHistory: {
    type: Boolean,
    default: !1
  },
  /**
   * @zh 显示预设颜色
   * @en Show preset colors
   */
  showPreset: {
    type: Boolean,
    default: !1
  },
  /**
   * @zh 禁用
   * @en disabled
   */
  disabled: {
    type: Boolean,
    default: !1
  },
  /**
   * @zh 禁用透明通道
   * @en Disable transparency channel
   */
  disabledAlpha: {
    type: Boolean,
    default: !1
  },
  /**
   * @zh 没有触发元素，只显示颜色面板
   * @en There is no trigger element, only the color panel is displayed
   * */
  hideTrigger: {
    type: Boolean
  },
  /**
   * @zh 接受所有 [Trigger](/vue/component/trigger) 组件的Props
   * @en Can accept Props of all [Trigger](/vue/component/trigger) components
   * */
  triggerProps: {
    type: Object
  },
  /**
   * @zh 历史颜色的颜色数组
   * @en Color array of historical colors
   */
  historyColors: {
    type: Array
  },
  /**
   * @zh 预设颜色的颜色数组
   * @en Color array of preset colors
   */
  presetColors: {
    type: Array,
    default: () => l
  }
}), u = {
  "update:modelValue": (e) => !0,
  "popup-visible-change": (e, r) => !0,
  change: (e) => !0
};
export {
  u as colorPickerEmits,
  i as colorPickerProps
};
