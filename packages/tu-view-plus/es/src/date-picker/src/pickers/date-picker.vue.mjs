import { defineComponent as e, useAttrs as n, openBlock as a, createBlock as c, mergeProps as p, unref as m, withCtx as f, renderSlot as u } from "vue";
import { datePickerProps as _ } from "./date-picker.mjs";
import d from "../picker.vue.mjs";
const i = e({
  name: "TuDatePicker"
}), x = /* @__PURE__ */ e({
  ...i,
  props: _,
  setup(t) {
    const r = t, o = n();
    return (s, l) => (a(), c(d, p({ ...r, ...m(o) }, { mode: "date" }), {
      default: f(() => [
        u(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
export {
  x as default
};
