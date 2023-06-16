import { defineComponent as o, openBlock as t, createBlock as r, unref as p, withCtx as f, renderSlot as n } from "vue";
import { tooltipProps as l } from "./tooltip.mjs";
import { TuPopper as m } from "../../popper/index.mjs";
import "../style/tooltip.css";
const s = o({
  name: "TuTooltip"
}), T = /* @__PURE__ */ o({
  ...s,
  props: l,
  setup(u) {
    return (e, _) => (t(), r(p(m), { ref: "popperRef" }, {
      default: f(() => [
        n(e.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
export {
  T as default
};
