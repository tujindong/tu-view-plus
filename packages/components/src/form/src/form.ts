import { useSizeProp } from '@tu-view-plus/hooks';
import {
  buildProps,
  definePropType,
  isArray,
  isBoolean,
  isString
} from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';
import type { FormItemProp } from './form-item';
import type { FormRules } from './types';

const formMetaProps = buildProps({
  /**
   * @zh 用于控制该表单内组件的尺寸
   * @en Control the size of components in this form.
   */
  size: { ...useSizeProp, default: 'medium' },

  /**
   * @zh是否禁用该表单内的所有组件。 如果设置为 true, 它将覆盖内部组件的 disabled 属性
   * @en Whether to disable all components in this form. If set to `true`, it will override the `disabled` prop of the inner component.
   */
  disabled: Boolean
} as const);

export const formProps = buildProps({
  ...formMetaProps,

  /**
   * @zh 表单数据对象
   * @en Data of form component.
   */
  model: Object,

  /**
   * @zh 表单验证规则
   * @en Validation rules of form.
   */
  rules: {
    type: definePropType<FormRules>(Object)
  },

  /**
   * @zh 表单域标签的位置， 当设置为 left 或 right 时，则也需要设置 label-width 属性
   * @en Position of label. If set to `'left'` or `'right'`, `label-width` prop is also required.
   */
  labelPosition: {
    type: String,
    values: ['left', 'right', 'top'],
    default: 'right'
  },

  /**
   * @zh 星号的位置。
   * @en Position of asterisk.
   */
  requireAsteriskPosition: {
    type: String,
    values: ['left', 'right'],
    default: 'left'
  },

  /**
   * @zh 标签的长度，例如 '50px'。 作为 Form 直接子元素的 form-item 会继承该值。 可以使用 auto。
   * @en Width of label, e.g. `'50px'`. All its direct child form items will inherit this value. `auto` is supported.
   */
  labelWidth: {
    type: [String, Number],
    default: ''
  },

  /**
   * @zh 表单域标签的后缀
   * @en Suffix of the label.
   */
  labelSuffix: {
    type: String,
    default: ''
  },

  /**
   * @zh 行内表单模式
   * @en Whether the form is inline.
   */
  inline: Boolean,

  /**
   * @zh 是否以行内形式展示校验信息
   * @en Whether to display the error message inline with the form item.
   */
  inlineMessage: Boolean,

  /**
   * @zh 是否在输入框中显示校验结果反馈图标
   * @en Whether to display an icon indicating the validation result.
   */
  statusIcon: Boolean,

  /**
   * @zh 是否显示校验错误信息
   * @en Whether to show the error message.
   */
  showMessage: {
    type: Boolean,
    default: true
  },

  /**
   * @zh 是否在 rules 属性改变后立即触发一次验证
   * @en Whether to trigger validation when the `rules` prop is changed.
   */
  validateOnRuleChange: {
    type: Boolean,
    default: true
  },

  /**
   * @zh 是否隐藏必填字段标签旁边的红色星号。
   * @en Whether to hide required fields should have a red asterisk (star) beside their labels.
   */
  hideRequiredAsterisk: Boolean,

  /**
   * @zh 当校验失败时，滚动到第一个错误表单项
   * @en When validation fails, scroll to the first error form entry.
   */
  scrollToError: Boolean,

  /**
   * @zh 当校验有失败结果时，滚动到第一个失败的表单项目 可通过
   * @en When validation fails, it scrolls to the first error item based on the scrollIntoView option.
   */
  scrollIntoViewOptions: {
    type: [Object, Boolean]
  }
} as const);

export type FormProps = ExtractPropTypes<typeof formProps>;
export type FormMetaProps = ExtractPropTypes<typeof formMetaProps>;

export const formEmits = {
  validate: (prop: FormItemProp, isValid: boolean, message: string) =>
    (isArray(prop) || isString(prop)) && isBoolean(isValid) && isString(message)
};
export type FormEmits = typeof formEmits;
