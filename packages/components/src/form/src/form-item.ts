import { SIZES } from '@tu-view-plus/constants';
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
   * @en Label text.
   */
  label: String,

  /**
   * @en Width of label, e.g. `'50px'`. `'auto'` is supported.
   */
  labelWidth: {
    type: [String, Number],
    default: ''
  },

  /**
   * @en  A key of `model`. It could be an array of property paths (e.g `['a', 'b', 0]`). In the use of `validate` and `resetFields` method, the attribute is required.
   */
  prop: {
    type: definePropType<FormItemProp>([String, Array])
  },

  /**
   * @en Whether the field is required or not, will be determined by validation rules if omitted.
   */
  required: {
    type: Boolean,
    default: undefined
  },

  /**
   * @en Validation rules of form, see the [following table](#formitemrule), more advanced usage at [async-validator](https://github.com/yiminghe/async-validator).
   */
  rules: {
    type: definePropType<Arrayable<FormItemRule>>([Object, Array])
  },

  /**
   * @en Field error message, set its value and the field will validate error and show this message immediately.
   */
  error: String,

  /**
   * @en Validation state of formItem.
   */
  validateStatus: {
    type: String,
    values: formItemValidateStates
  },

  /**
   * @en Same as for in native label.
   */
  for: String,

  /**
   * @en Inline style validate message.
   */
  inlineMessage: {
    type: [String, Boolean],
    default: ''
  },

  /**
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
  size: {
    type: String,
    values: SIZES
  }
} as const);
export type FormItemProps = ExtractPropTypes<typeof formItemProps>;
