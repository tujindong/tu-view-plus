import { SIZES as t } from "@tu-view-plus/constants";
import { buildProps as e, definePropType as o } from "@tu-view-plus/utils";
const l = e({
  /**
   * @en Control the size of components in this form.
   */
  size: {
    type: String,
    values: t
  },
  /**
   * @en Whether to disable all components in this form. If set to `true`, it will override the `disabled` prop of the inner component.
   */
  disabled: Boolean
}), a = e({
  ...l,
  /**
   * @en Data of form component.
   */
  model: Object,
  /**
   * @en Validation rules of form.
   */
  rules: {
    type: o(Object)
  },
  /**
   * @en Position of label. If set to `'left'` or `'right'`, `label-width` prop is also required.
   */
  labelPosition: {
    type: String,
    values: ["left", "right", "top"],
    default: "right"
  },
  /**
   * @en Position of asterisk.
   */
  requireAsteriskPosition: {
    type: String,
    values: ["left", "right"],
    default: "left"
  },
  /**
   * @en Width of label, e.g. `'50px'`. All its direct child form items will inherit this value. `auto` is supported.
   */
  labelWidth: {
    type: [String, Number],
    default: ""
  },
  /**
   * @en Suffix of the label.
   */
  labelSuffix: {
    type: String,
    default: ""
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
    default: !0
  },
  /**
   * @en Whether to trigger validation when the `rules` prop is changed.
   */
  validateOnRuleChange: {
    type: Boolean,
    default: !0
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
});
export {
  a as formProps
};
