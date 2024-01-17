import { defineComponent as m, createVNode as p, mergeProps as t } from "vue";
import { weekPickerProps as i } from "./week-picker.mjs";
import n from "../picker.vue.mjs";
const c = /* @__PURE__ */ m({
  name: "TuWeekPicker",
  props: i,
  setup(e, {
    attrs: r,
    slots: o
  }) {
    return () => p(n, t(e, r, {
      mode: "week"
    }), o);
  }
});
export {
  c as default
};
