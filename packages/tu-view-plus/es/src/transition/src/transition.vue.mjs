import { defineComponent as e, computed as a, openBlock as i, createBlock as m, Transition as p, mergeProps as c, unref as f, withCtx as u, renderSlot as l } from "vue";
import { transitionProps as d } from "./transition.mjs";
import { useNamespace as _ } from "@tu-view-plus/hooks";
import "../style/transition.css";
const T = e({
  name: "TuTransition",
  inheritAttrs: !1
}), P = /* @__PURE__ */ e({
  ...T,
  props: d,
  setup(n) {
    const o = n, r = _(""), s = a(() => r.b() + o.name);
    return (t, h) => (i(), m(p, c({ name: f(s) }, t.$attrs), {
      default: u(() => [
        l(t.$slots, "default")
      ]),
      _: 3
    }, 16, ["name"]));
  }
});
export {
  P as default
};
