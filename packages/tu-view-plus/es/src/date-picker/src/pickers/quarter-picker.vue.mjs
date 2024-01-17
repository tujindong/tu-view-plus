import { defineComponent as t, createVNode as m, mergeProps as p } from "vue";
import { quarterPickerProps as a } from "./quarter-picker.mjs";
import i from "../picker.vue.mjs";
const u = /* @__PURE__ */ t({
  name: "TuQuarterPicker",
  props: a,
  setup(r, {
    attrs: e,
    slots: o
  }) {
    return () => m(i, p(r, e, {
      mode: "quarter"
    }), o);
  }
});
export {
  u as default
};
