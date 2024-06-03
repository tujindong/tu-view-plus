import { buildProps } from '@tu-view-plus/utils';
import { useSizeProp } from '@tu-view-plus/hooks';
import { colors } from './context';

import type { ExtractPropTypes, PropType } from 'vue';
import type { TriggerProps } from '../../trigger';

export const colorPickerProps = buildProps({
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
    type: String as PropType<'hex' | 'rgb'>
  },
  /**
   * @zh 尺寸
   * @en Size
   * @values 'mini','small','medium','large'
   */
  size: useSizeProp,
  /**
   * @zh 显示颜色值
   * @en Show color value
   */
  showText: {
    type: Boolean,
    default: false
  },
  /**
   * @zh 显示历史颜色
   * @en Show history colors
   */
  showHistory: {
    type: Boolean,
    default: false
  },
  /**
   * @zh 显示预设颜色
   * @en Show preset colors
   */
  showPreset: {
    type: Boolean,
    default: false
  },
  /**
   * @zh 禁用
   * @en disabled
   */
  disabled: {
    type: Boolean,
    default: false
  },
  /**
   * @zh 禁用透明通道
   * @en Disable transparency channel
   */
  disabledAlpha: {
    type: Boolean,
    default: false
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
    type: Object as PropType<Partial<TriggerProps>>
  },
  /**
   * @zh 历史颜色的颜色数组
   * @en Color array of historical colors
   */
  historyColors: {
    type: Array as PropType<string[]>
  },
  /**
   * @zh 预设颜色的颜色数组
   * @en Color array of preset colors
   */
  presetColors: {
    type: Array as PropType<string[]>,
    default: () => colors
  }
} as const);

export const colorPickerEmits = {
  'update:modelValue': (value: string) => true,
  'popup-visible-change': (visible: boolean, value: string) => true,
  change: (value: string) => true
};

export type ColorPickerProps = ExtractPropTypes<typeof colorPickerProps>;
