import { buildProps } from '@tu-view-plus/utils';
import { useSizeProp } from '@tu-view-plus/hooks';
import { TagData, InputTagFieldNames } from './interface';

import type { ExtractPropTypes, PropType } from 'vue';
import type InputTag from './input-tag.vue';

export const inputTagProps = buildProps({
  /**
   * @zh 绑定值
   * @en Value
   * @vModel
   */
  modelValue: {
    type: Array as PropType<(string | number | TagData)[]>
  },

  /**
   * @zh 默认值（非受控状态）
   * @en Default value (uncontrolled state)
   */
  defaultValue: {
    type: Array as PropType<(string | number | TagData)[]>,
    default: () => []
  },

  /**
   * @zh 输入框的值
   * @en The value of the input
   * @vModel
   */
  inputValue: String,

  /**
   * @zh 输入框的默认值（非受控状态）
   * @en The default value of the input (uncontrolled state)
   */
  defaultInputValue: {
    type: String,
    default: ''
  },

  /**
   * @zh 占位符
   * @en Placeholder
   */
  placeholder: String,

  /**
   * @zh 是否禁用
   * @en Whether to disable
   */
  disabled: {
    type: Boolean,
    default: false
  },

  /**
   * @zh 是否为错误状态
   * @en Whether it is an error state
   */
  error: {
    type: Boolean,
    default: false
  },

  /**
   * @zh 是否为只读模式
   * @en Whether it is read-only mode
   */
  readonly: {
    type: Boolean,
    default: false
  },

  /**
   * @zh 是否允许清空
   * @en Whether to allowClear
   */
  allowClear: {
    type: Boolean,
    default: false
  },

  /**
   * @zh 输入框的尺寸
   * @en Input size
   * @values 'mini','small','medium','large'
   * @defaultValue ''
   */
  size: useSizeProp,

  /**
   * @zh 最多展示的标签个数，`0` 表示不限制
   * @en The maximum number of tags displayed, `0` means unlimited
   */
  maxTagCount: {
    type: Number,
    default: 0
  },

  /**
   * @zh 是否保留输入框的内容
   * @en Whether to keep the content of the input box
   */
  retainInputValue: {
    type: [Boolean, Object] as PropType<
      boolean | { create?: boolean; blur?: boolean }
    >,
    default: false
  },

  /**
   * @zh 格式化标签内容
   * @en Format tag content
   */
  formatTag: {
    type: Function as PropType<(data: TagData) => string>
  },

  /**
   * @zh 是否仅创建唯一的值
   * @en Whether to create only unique values
   */
  uniqueValue: {
    type: Boolean,
    default: false
  },

  /**
   * @zh 自定义 `TagData` 中的字段
   * @en Customize fields in `TagData`
   */
  fieldNames: {
    type: Object as PropType<InputTagFieldNames>
  },

  // private
  baseClass: String,
  focused: Boolean,
  disabledInput: Boolean,
  uninjectFormItemContext: Boolean
} as const);

export const inputTagEmits = {
  'update:modelValue': (value: (string | number | TagData)[]) => true,
  'update:inputValue': (inputValue: string) => true,
  change: (value: (string | number | TagData)[], evt: Event) => true,
  inputValueChange: (inputValue: string, evt: Event) => true,
  pressEnter: (inputValue: string, evt: KeyboardEvent) => true,
  remove: (removed: string | number, evt: Event) => true,
  clear: (evt: MouseEvent) => true,
  focus: (evt: FocusEvent) => true,
  blur: (evt: FocusEvent) => true,
  mouseleave: (evt: MouseEvent) => true,
  mouseenter: (evt: MouseEvent) => true
};

export type InputTagProps = ExtractPropTypes<typeof inputTagProps>;
export type InputTagInstance = InstanceType<typeof InputTag>;
export type InputTagEmits = typeof inputTagEmits;
