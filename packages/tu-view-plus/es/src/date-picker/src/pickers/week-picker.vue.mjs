import { defineComponent as e, useAttrs as n, openBlock as c, createBlock as p, mergeProps as m, unref as a, withCtx as f, renderSlot as u } from "vue";
import { weekPickerProps as _ } from "./week-picker.mjs";
import i from "../picker.vue.mjs";
const l = e({
  name: "TuWeekPicker"
}), h = /* @__PURE__ */ e({
  ...l,
  props: _,
  setup(t) {
    const r = t, o = n();
    return (s, d) => (c(), p(i, m({ ...r, ...a(o) }, { mode: "week" }), {
      default: f(() => [
        u(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
export {
  h as default
};
