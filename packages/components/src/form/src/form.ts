import { SIZES } from '@tu-view-plus/constants';
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

const formBaseProps = buildProps({
  /**
   * @en Control the size of components in this form.
   */
  size: {
    type: String,
    values: SIZES
  },

  /**
   * @en Whether to disable all components in this form. If set to `true`, it will override the `disabled` prop of the inner component.
   */
  disabled: Boolean
} as const);

export const formProps = buildProps({
  ...formBaseProps,

  /**
   * @en Data of form component.
   */
  model: Object,

  /**
   * @en Validation rules of form.
   */
  rules: {
    type: definePropType<FormRules>(Object)
  },

  /**
   * @en Position of label. If set to `'left'` or `'right'`, `label-width` prop is also required.
   */
  labelPosition: {
    type: String,
    values: ['left', 'right', 'top'],
    default: 'right'
  },

  /**
   * @en Position of asterisk.
   */
  requireAsteriskPosition: {
    type: String,
    values: ['left', 'right'],
    default: 'left'
  },

  /**
   * @en Width of label, e.g. `'50px'`. All its direct child form items will inherit this value. `auto` is supported.
   */
  labelWidth: {
    type: [String, Number],
    default: ''
  },

  /**
   * @en Suffix of the label.
   */
  labelSuffix: {
    type: String,
    default: ''
  },

  /**
   * @en Whether the form is inline.
   */
  inline: Boolean,

  /**
   * @en Whether to display the error message inline with the form item.
   */
  inlineMessage: Boolean,

  /**
   * @en Whether to display an icon indicating the validation result.
   */
  statusIcon: Boolean,

  /**
   * @en Whether to show the error message.
   */
  showMessage: {
    type: Boolean,
    default: true
  },

  /**
   * @en Whether to trigger validation when the `rules` prop is changed.
   */
  validateOnRuleChange: {
    type: Boolean,
    default: true
  },

  /**
   * @en Whether to hide required fields should have a red asterisk (star) beside their labels.
   */
  hideRequiredAsterisk: Boolean,

  /**
   * @en When validation fails, scroll to the first error form entry.
   */
  scrollToError: Boolean,

  /**
   * @en When validation fails, it scrolls to the first error item based on the scrollIntoView option.
   */
  scrollIntoViewOptions: {
    type: [Object, Boolean]
  }
} as const);

export type FormProps = ExtractPropTypes<typeof formProps>;
export type FormMetaProps = ExtractPropTypes<typeof formBaseProps>;

export const formEmits = {
  validate: (prop: FormItemProp, isValid: boolean, message: string) =>
    (isArray(prop) || isString(prop)) && isBoolean(isValid) && isString(message)
};
export type FormEmits = typeof formEmits;
