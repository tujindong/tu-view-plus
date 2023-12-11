import { useSizeProp } from '@tu-view-plus/hooks';
import { buildProps, definePropType } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';
import type { Arrayable } from '@tu-view-plus/utils';
import type { FormItemRule } from './types';

export const formItemValidateStates = [
  '',
  'error',
  'validating',
  'success'
] as const;
export type FormItemValidateState = (typeof formItemValidateStates)[number];

export type FormItemProp = Arrayable<string>;

export const formItemProps = buildProps({
  /**
   * @zh 标签文本
   * @en Label text.
   */
  label: String,

  /**
   * @zh标签宽度，例如 '50px'。 可以使用 auto。
   * @en Width of label, e.g. `'50px'`. `'auto'` is supported.
   */
  labelWidth: {
    type: [String, Number],
    default: ''
  },

  /**
   * @zh model 的键名。 它可以是一个属性的值(如 a.b.0 或 [a', 'b', '0'])。 在定义了 validate、resetFields 的方法时，该属性是必填的
   * @en A key of `model`. It could be an array of property paths (e.g `['a', 'b', 0]`). In the use of `validate` and `resetFields` method, the attribute is required.
   */
  prop: {
    type: definePropType<FormItemProp>([String, Array])
  },

  /**
   * @zh 是否为必填项，如不设置，则会根据校验规则确认
   * @en Whether the field is required or not, will be determined by validation rules if omitted.
   */
  required: {
    type: Boolean,
    default: undefined
  },

  /**
   * @zh 表单验证规则, 具体配置见下表, 更多内容可以参考async-validator
   * @en Validation rules of form, see the [following table](#formitemrule), more advanced usage at [async-validator](https://github.com/yiminghe/async-validator).
   */
  rules: {
    type: definePropType<Arrayable<FormItemRule>>([Object, Array])
  },

  /**
   * @zh 表单域验证错误时的提示信息。设置该值会导致表单验证状态变为 error，并显示该错误信息。
   * @en Field error message, set its value and the field will validate error and show this message immediately.
   */
  error: String,

  /**
   * @zh formitem 校验的状态
   * @en Validation state of formItem.
   */
  validateStatus: {
    type: String,
    values: formItemValidateStates
  },

  /**
   * @zh 和原生标签相同能力
   * @en Same as for in native label.
   */
  for: String,

  /**
   * @zh 是否在行内显示校验信息
   * @en Inline style validate message.
   */
  inlineMessage: {
    type: [String, Boolean],
    default: ''
  },

  /**
   * @zh 是否显示校验错误信息
   * @en Whether to show the error message.
   */
  showMessage: {
    type: Boolean,
    default: true
  },

  /**
   * @zh 	用于控制该表单域下组件的尺寸
   * @en Control the size of components in this form-item.
   * @values 'mini','small','medium','large'
   * @defaultValue 'medium'
   */
  size: { ...useSizeProp, default: 'medium' }
} as const);
export type FormItemProps = ExtractPropTypes<typeof formItemProps>;
