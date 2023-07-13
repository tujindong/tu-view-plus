import { defineComponent as e, useAttrs as m, computed as p, openBlock as c, createBlock as u, Transition as f, mergeProps as l, unref as t, withCtx as _, renderSlot as d } from "vue";
import { transitionProps as T } from "./transition.mjs";
import { useNamespace as h } from "@tu-view-plus/hooks";
import "../style/transition.css";
const k = e({
  name: "TuTransition",
  inheritAttrs: !0
}), P = /* @__PURE__ */ e({
  ...k,
  props: T,
  setup(n) {
    const o = n, r = h(""), s = m(), a = p(() => r.b() + o.name);
    return (i, x) => (c(), u(f, l({ name: t(a) }, t(s)), {
      default: _(() => [
        d(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["name"]));
  }
});
export {
  P as default
};
