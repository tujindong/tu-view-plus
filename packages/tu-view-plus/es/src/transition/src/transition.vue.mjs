import { defineComponent as t, useAttrs as i, computed as m, openBlock as p, createBlock as c, Transition as u, mergeProps as f, unref as l, withCtx as _, renderSlot as d } from "vue";
import { transitionProps as T } from "./transition.mjs";
import { useNamespace as h } from "@tu-view-plus/hooks";
import "../style/transition.css";
const k = t({
  name: "TuTransition",
  inheritAttrs: !0
}), P = /* @__PURE__ */ t({
  ...k,
  props: T,
  setup(e) {
    const n = h(""), o = e, r = i(), s = m(() => n.b() + o.name);
    return (a, x) => (p(), c(u, f({ name: s.value }, l(r)), {
      default: _(() => [
        d(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["name"]));
  }
});
export {
  P as default
};
