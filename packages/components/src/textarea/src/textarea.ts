import { buildProps, definePropType, mutable } from '@tu-view-plus/utils';
import { UPDATE_MODEL_EVENT } from '@tu-view-plus/constants';
import { useSizeProp } from '@tu-view-plus/hooks';

import type { ExtractPropTypes, StyleValue } from 'vue';
import type Textarea from './textarea.vue';

export type TextareaAutoSize = { minRows?: number; maxRows?: number } | boolean;

export const textareaProps = buildProps({
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
   * @zh 是否禁用
   * @en whether to disable
   */
  disabled: Boolean,

  /**
   * @zh 原生输入框自动填充
   * @en native input autocomplete
   */
  autocomplete: {
    type: String,
    default: 'off'
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
   * @zh 控制是否能被用户缩放
   * @en control the resizability
   */
  resize: {
    type: String,
    values: ['none', 'both', 'horizontal', 'vertical']
  },

  /**
   * @zh 文本域是否根据内容适配高度
   * @en whether textarea has an adaptive height
   */
  autosize: {
    type: definePropType<TextareaAutoSize>([Boolean, Object]),
    default: false
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
   * @zh 输入框类型
   * @en type of input
   */
  type: {
    type: String,
    default: 'text'
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
   * @en textarea element style
   */
  textareaStyle: {
    type: definePropType<StyleValue>([Object, Array, String]),
    default: () => mutable({} as const)
  }
} as const);

export const textareaEmits = {
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

export type TextareaEmits = typeof textareaEmits;
export type TextareaProps = ExtractPropTypes<typeof textareaProps>;
export type TextareaInstance = InstanceType<typeof Textarea>;
