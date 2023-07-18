import { buildProps, definePropType } from '@tu-view-plus/utils';
import { useSizeProp } from '@tu-view-plus/hooks';

import type { ExtractPropTypes } from 'vue';
import type { Language } from '@tu-view-plus/locale';
import type { ButtonConfigContext } from '../../button';
import type { MessageConfigContext } from '../../message';

export type ExperimentalFeatures = {
  // TO BE Defined
};

export const configProviderProps = buildProps({
  /**
   * @zh 控制用户是否使用多语言功能
   * @en Controlling if the users want a11y features
   */
  a11y: {
    type: Boolean,
    default: true
  },

  /**
   * @zh 设置地区对象
   * @en Locale Object
   */
  locale: {
    type: definePropType<Language>(Object)
  },

  /**
   * @zh 全局组件尺寸
   * @en global component size
   */
  size: useSizeProp,

  /**
   * @zh 按钮相关配置
   * @en button related configuration, [see the following table](#button-attributes)
   */
  button: {
    type: definePropType<ButtonConfigContext>(Object)
  },

  /**
   * @zh 要添加的实验阶段的特性，所有特性默认设置为 false
   * @en features at experimental stage to be added, all features are default to be set to false | ^[object]
   */
  experimentalFeatures: {
    type: definePropType<ExperimentalFeatures>(Object)
  },

  /**
   * @zh 控制是否处理键盘导航
   * @en Controls if we should handle keyboard navigation
   */
  keyboardNavigation: {
    type: Boolean,
    default: true
  },

  /**
   * @zh 消息相关配置
   * @en message related configuration, [see the following table](#message-attributes)
   */
  message: {
    type: definePropType<MessageConfigContext>(Object)
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
    default: 'tu'
  }
} as const);

export type ConfigProviderProps = ExtractPropTypes<typeof configProviderProps>;
