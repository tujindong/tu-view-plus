import { buildProps } from '@tu-view-plus/utils';
import { useSizeProp } from '@tu-view-plus/hooks';
import { SelectViewValue } from '../../select-view/src/interface';

import type { ExtractPropTypes, PropType } from 'vue';
import type InputLabel from './input-label.vue';

export const inputLabelProps = buildProps({
  /**
   * @zh 绑定值
   * @en Value
   * @vModel
   */
  modelValue: {
    type: Object as PropType<SelectViewValue>
  },

  /**
   * @zh 输入框的值
   * @en The value of the input
   * @vModel
   */
  inputValue: {
    type: String,
    default: ''
  },

  /**
   * @zh 是否能输入
   * @en Whether to input
   * @vModel
   */
  enabledInput: Boolean,

  /**
   * @zh 格式化标签内容
   * @en Format tag content
   */
  formatLabel: {
    type: Function as PropType<(data?: SelectViewValue) => string>
  },

  /**
   * @zh 占位符
   * @en Placeholder
   */
  placeholder: String,

  /**
   * @zh 是否保留输入框的内容
   * @en Whether to keep the content of the input box
   */
  retainInputValue: Boolean,

  /**
   * @zh 是否禁用
   * @en Whether to disable
   */
  disabled: Boolean,

  /**
   * @zh 按钮的尺寸
   * @en Input size
   * @values 'mini','small','medium','large'
   * @defaultValue 'medium'
   */
  size: { ...useSizeProp, default: 'medium' },

  // private
  baseClass: String,
  focused: Boolean,
  uninjectFormItemContext: Boolean
} as const);

export const inputLabelEmits = {
  'update:modelValue': (value: SelectViewValue) => true,
  'update:inputValue': (inputValue: string) => true,
  inputValueChange: (value: SelectViewValue) => true,
  focus: (evt: FocusEvent) => true,
  blur: (evt: FocusEvent) => true
};

export type InputLabelProps = ExtractPropTypes<typeof inputLabelProps>;
export type InputLabelInstance = InstanceType<typeof InputLabel>;
export type InputLabelEmits = typeof inputLabelEmits;
