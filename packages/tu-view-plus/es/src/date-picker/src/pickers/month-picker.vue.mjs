import { defineComponent as m, createVNode as t, mergeProps as n } from "vue";
import { monthPickerProps as p } from "./month-picker.mjs";
import i from "../picker.vue.mjs";
const c = /* @__PURE__ */ m({
  name: "TuMonthPicker",
  props: p,
  setup(o, {
    attrs: e,
    slots: r
  }) {
    return () => t(i, n(o, e, {
      mode: "month"
    }), r);
  }
});
export {
  c as default
};
