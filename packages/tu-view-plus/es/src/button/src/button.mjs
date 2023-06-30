import { buildProps as e, iconPropType as o } from "@tu-view-plus/utils";
import { Loading as n } from "@tu-view-plus/icons-vue";
import { useSizeProp as i } from "@tu-view-plus/hooks";
import { buttonTypes as a, buttonNativeTypes as u } from "./constants.mjs";
const d = e({
  /**
   * @zh 是否禁用按钮
   * @en disable the button
   */
  disabled: Boolean,
  /**
   * @zh 按钮的尺寸
   * @en Button size
   * @values 'mini','small','medium','large'
   * @defaultValue 'medium'
   */
  size: { ...i, default: "medium" },
  /**
   * @zh 按钮的类型
   * @en Button type
   * @values 'default','primary','success','warning', 'info', 'danger', 'text', ''
   * @defaultValue 'default'
   */
  type: {
    type: String,
    values: a,
    default: "default"
  },
  /**
   * @zh 图标
   * @en Icon
   * @slot icon
   */
  icon: {
    type: o
  },
  /**
   * @zh 按钮的原始类型
   * @en native button type
   */
  nativeType: {
    type: String,
    values: u,
    default: "button"
  },
  /**
   * @zh 按钮是否为加载中状态
   * @en Whether the button is in the loading state
   */
  loading: Boolean,
  /**
   * @zh 按钮加载中状态使用的组件
   * @en customize loading icon component
   */
  loadingIcon: {
    type: o,
    default: () => n
  },
  /**
   * @zh 按钮原始属性 autofocus
   * @en native button autofocus
   */
  autofocus: Boolean,
  /**
   * @zh 按钮是否为圆角属性
   * @en determine whether it's a round button
   */
  round: Boolean,
  /**
   * @zh 按钮是否为圆形属性
   * @en determine whether it's a circle button
   */
  circle: Boolean
}), c = {
  click: (t) => t instanceof MouseEvent
};
export {
  c as buttonEmits,
  d as buttonProps
};
