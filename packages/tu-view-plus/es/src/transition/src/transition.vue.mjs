import { defineComponent as t, computed as s, openBlock as i, createBlock as m, Transition as p, withCtx as c, renderSlot as u } from "vue";
import { transitionProps as f } from "./transition.mjs";
import { useNamespace as l } from "@tu-view-plus/hooks";
import "../style/transition.css";
const _ = t({
  name: "TuTransition"
}), B = /* @__PURE__ */ t({
  ..._,
  props: f,
  setup(o) {
    const n = o, e = l(""), r = s(() => e.b() + n.name);
    return (a, d) => (i(), m(p, { name: r.value }, {
      default: c(() => [
        u(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
export {
  B as default
};
