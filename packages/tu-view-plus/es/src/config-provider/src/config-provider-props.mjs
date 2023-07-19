import { buildProps as t, definePropType as e } from "@tu-view-plus/utils";
import { useSizeProp as o } from "@tu-view-plus/hooks";
const a = t({
  /**
   * @zh 控制用户是否使用多语言功能
   * @en Controlling if the users want a11y features
   */
  a11y: {
    type: Boolean,
    default: !0
  },
  /**
   * @zh 设置地区对象
   * @en Locale Object
   */
  locale: {
    type: e(Object)
  },
  /**
   * @zh 全局组件尺寸
   * @en global component size
   */
  size: o,
  /**
   * @zh 按钮相关配置
   * @en button related configuration, [see the following table](#button-attributes)
   */
  button: {
    type: e(Object)
  },
  /**
   * @zh 要添加的实验阶段的特性，所有特性默认设置为 false
   * @en features at experimental stage to be added, all features are default to be set to false | ^[object]
   */
  experimentalFeatures: {
    type: e(Object)
  },
  /**
   * @zh 控制是否处理键盘导航
   * @en Controls if we should handle keyboard navigation
   */
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  /**
   * @zh 消息相关配置
   * @en message related configuration, [see the following table](#message-attributes)
   */
  message: {
    type: e(Object)
  },
  /**
   * @zh 全局初始化层级
   * @en global Initial zIndex
   */
  zIndex: Number,
  /**
   * @zh 全局组件类名前缀
   * @en global component className prefix | ^[string]
   */
  namespace: {
    type: String,
    default: "tu"
  }
});
export {
  a as configProviderProps
};
