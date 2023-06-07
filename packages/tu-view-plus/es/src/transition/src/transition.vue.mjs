import { defineComponent as t, computed as a, openBlock as i, createBlock as m, Transition as p, unref as c, withCtx as u, renderSlot as f } from "vue";
import { transitionProps as l } from "./transition.mjs";
import { useNamespace as _ } from "@tu-view-plus/hooks";
import "../style/transition.css";
const d = t({
  name: "TuTransition"
}), C = /* @__PURE__ */ t({
  ...d,
  props: l,
  setup(n) {
    const o = n, e = _(""), r = a(() => e.b() + o.name);
    return (s, T) => (i(), m(p, { name: c(r) }, {
      default: u(() => [
        f(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
export {
  C as default
};
