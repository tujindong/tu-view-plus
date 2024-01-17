import { defineComponent as t, createVNode as m, mergeProps as p } from "vue";
import { datePickerProps as a } from "./date-picker.mjs";
import i from "../picker.vue.mjs";
const c = /* @__PURE__ */ t({
  name: "TuDatePicker",
  props: a,
  setup(e, {
    attrs: r,
    slots: o
  }) {
    return () => m(i, p(e, r, {
      mode: "date"
    }), o);
  }
});
export {
  c as default
};
