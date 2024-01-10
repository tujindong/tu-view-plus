import { defineComponent as r, useAttrs as n, openBlock as a, createBlock as c, mergeProps as p, unref as u, withCtx as m, renderSlot as f } from "vue";
import { quarterPickerProps as _ } from "./quarter-picker.mjs";
import i from "../picker.vue.mjs";
const l = r({
  name: "TuQuarterPicker"
}), q = /* @__PURE__ */ r({
  ...l,
  props: _,
  setup(e) {
    const t = e, o = n();
    return (s, d) => (a(), c(i, p({ ...t, ...u(o) }, { mode: "quarter" }), {
      default: m(() => [
        f(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
export {
  q as default
};
