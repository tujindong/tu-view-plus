import { defineComponent as e, useAttrs as n, openBlock as a, createBlock as c, mergeProps as p, unref as m, withCtx as f, renderSlot as u } from "vue";
import { yearPickerProps as _ } from "./year-picker.mjs";
import i from "../picker.vue.mjs";
const l = e({
  name: "TuYearPicker"
}), x = /* @__PURE__ */ e({
  ...l,
  props: _,
  setup(r) {
    const t = r, o = n();
    return (s, d) => (a(), c(i, p({ ...t, ...m(o) }, { mode: "year" }), {
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
