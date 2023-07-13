import {
  buildProps,
  definePropType,
  iconPropType,
  mutable
} from '@tu-view-plus/utils';
import { useSizeProp } from '@tu-view-plus/hooks';
import { UPDATE_MODEL_EVENT } from '@tu-view-plus/constants';

import type { ExtractPropTypes, StyleValue } from 'vue';
import type Input from './input.vue';

export const inputProps = buildProps({
  /**
   * @zh 原生的输入框id
   * @en native input id
   */
  id: {
    type: String,
    default: undefined
  },

  /**
   * @zh 按钮的尺寸
   * @en Input size
   * @values 'mini','small','medium','large'
   * @defaultValue 'medium'
   */
  size: { ...useSizeProp, default: 'medium' },

  /**
   * @zh 是否禁用
   * @en whether to disable
   */
  disabled: Boolean,

  /**
   * @zh 绑定值
   * @en binding value
   */
  modelValue: {
    type: definePropType<string | number | null | undefined>([
      String,
      Number,
      Object
    ]),
    default: ''
  },

  /**
   * @zh 输入框类型
   * @en type of input
   */
  type: {
    type: String,
    default: 'text'
  },

  /**
   * @zh 原生输入框自动填充
   * @en native input autocomplete
   */
  autocomplete: {
    type: String,
    default: 'off'
  },

  /**
   * @zh 内容格式化
   * @en format content
   */
  formatter: {
    type: Function
  },

  /**
   * @zh 内容解析
   * @en parse content
   */
  parser: {
    type: Function
  },

  /**
   * @zh 占位内容
   * @en placeholder
   */
  placeholder: {
    type: String
  },

  /**
   * @zh 原生输入表单
   * @en native input form
   */
  form: {
    type: String
  },

  /**
   * @zh 原生输入框只读属性
   * @en native input readonly
   */
  readonly: {
    type: Boolean,
    default: false
  },

  /**
   * @zh 是否清空内容
   * @en whether to clearable
   */
  clearable: {
    type: Boolean,
    default: false
  },

  /**
   * @zh 可切换为密码输入
   * @en toggleable password input
   */
  showPassword: {
    type: Boolean,
    default: false
  },

  /**
   * @zh 是否显示输入字数统计
   * @en word count
   */
  showWordLimit: {
    type: Boolean,
    default: false
  },

  /**
   * @zh 输入框尾部图标
   * @en suffix icon
   */
  suffixIcon: {
    type: iconPropType
  },

  /**
   * @zh 输入框头部图标
   * @en prefix icon
   */
  prefixIcon: {
    type: iconPropType
  },

  /**
   * @zh 选择器组件使用的内部属性
   * @en container role, internal properties provided for use by the picker component
   */
  containerRole: {
    type: String,
    default: undefined
  },

  /**
   * @zh 原生输入框 aria-label
   * @en native input aria-label
   */
  label: {
    type: String,
    default: undefined
  },

  /**
   * @zh 输入框 tabIndex
   * @en input tabindex
   */
  tabindex: {
    type: [String, Number],
    default: 0
  },

  /**
   * @zh 是否触发表单验证
   * @en whether to trigger form validation
   */
  validateEvent: {
    type: Boolean,
    default: true
  },

  /**
   * @zh 输入框元素样式
   * @en input element style
   */
  inputStyle: {
    type: definePropType<StyleValue>([Object, Array, String]),
    default: () => mutable({} as const)
  }
} as const);

export const inputEmits = {
  [UPDATE_MODEL_EVENT]: (value: string) => true,
  input: (value: string) => true,
  change: (value: string) => true,
  focus: (evt: FocusEvent) => true,
  blur: (evt: FocusEvent) => true,
  clear: () => true,
  mouseleave: (evt: MouseEvent) => true,
  mouseenter: (evt: MouseEvent) => true,
  keydown: (evt: KeyboardEvent | Event) => true,
  compositionstart: (evt: CompositionEvent) => true,
  compositionupdate: (evt: CompositionEvent) => true,
  compositionend: (evt: CompositionEvent) => true
};

export type InputEmits = typeof inputEmits;
export type InputProps = ExtractPropTypes<typeof inputProps>;
export type InputInstance = InstanceType<typeof Input>;
