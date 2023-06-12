import { SIZES as t } from "@tu-view-plus/constants";
import { buildProps as r, definePropType as e } from "@tu-view-plus/utils";
const a = [
  "",
  "error",
  "validating",
  "success"
];
r({
  /**
   * @en Label text.
   */
  label: String,
  /**
   * @en Width of label, e.g. `'50px'`. `'auto'` is supported.
   */
  labelWidth: {
    type: [String, Number],
    default: ""
  },
  /**
   * @en  A key of `model`. It could be an array of property paths (e.g `['a', 'b', 0]`). In the use of `validate` and `resetFields` method, the attribute is required.
   */
  prop: {
    type: e([String, Array])
  },
  /**
   * @en Whether the field is required or not, will be determined by validation rules if omitted.
   */
  required: {
    type: Boolean,
    default: void 0
  },
  /**
   * @en Validation rules of form, see the [following table](#formitemrule), more advanced usage at [async-validator](https://github.com/yiminghe/async-validator).
   */
  rules: {
    type: e([Object, Array])
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
    values: a
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
    default: ""
  },
  /**
   * @en Whether to show the error message.
   */
  showMessage: {
    type: Boolean,
    default: !0
  },
  /**
   * @zh 	用于控制该表单域下组件的尺寸
   * @en Control the size of components in this form-item.
   * @values 'mini','small','medium','large'
   * @defaultValue 'medium'
   */
  size: {
    type: String,
    values: t
  }
});
export {
  a as formItemValidateStates
};
