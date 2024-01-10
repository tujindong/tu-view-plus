import { defineComponent as t, useAttrs as s, openBlock as m, createBlock as c, mergeProps as p, unref as a, withCtx as f, renderSlot as u } from "vue";
import { monthPickerProps as _ } from "./month-picker.mjs";
import i from "../picker.vue.mjs";
const l = t({
  name: "TuMonthPicker"
}), x = /* @__PURE__ */ t({
  ...l,
  props: _,
  setup(o) {
    const e = o, r = s();
    return (n, d) => (m(), c(i, p({ ...e, ...a(r) }, { mode: "month" }), {
      default: f(() => [
        u(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
export {
  x as default
};
