import { defineComponent as m, createVNode as p, mergeProps as t } from "vue";
import { yearPickerProps as a } from "./year-picker.mjs";
import i from "../picker.vue.mjs";
const c = /* @__PURE__ */ m({
  name: "TuYearPicker",
  props: a,
  setup(e, {
    attrs: r,
    slots: o
  }) {
    return () => p(i, t(e, r, {
      mode: "year"
    }), o);
  }
});
export {
  c as default
};
