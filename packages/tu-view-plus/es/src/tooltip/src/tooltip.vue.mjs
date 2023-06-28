import { defineComponent as s, computed as p, openBlock as c, createBlock as a, unref as t, normalizeClass as l, withCtx as e, renderSlot as r, createTextVNode as i } from "vue";
import { tooltipProps as m } from "./tooltip.mjs";
import { TuTrigger as u } from "../../trigger/index.mjs";
import { useNamespace as f } from "@tu-view-plus/hooks";
import "../style/tooltip.css";
const _ = /* @__PURE__ */ i("content"), d = s({
  name: "TuTooltip"
}), N = /* @__PURE__ */ s({
  ...d,
  props: m,
  setup(T) {
    f("tooltip");
    const n = p(() => ({}));
    return (o, g) => (c(), a(t(u), {
      trigger: "hover",
      class: l(t(n))
    }, {
      content: e(() => [
        r(o.$slots, "content", {}, () => [
          _
        ])
      ]),
      default: e(() => [
        r(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
});
export {
  N as default
};
