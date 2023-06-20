import { defineComponent as e, provide as u, reactive as c, toRef as o, computed as a, openBlock as i, createElementBlock as m, normalizeClass as l, unref as f, renderSlot as d } from "vue";
import { buttonGroupProps as _ } from "./button-group.mjs";
import { buttonGroupInjectionKey as b } from "./constants.mjs";
import { useNamespace as B } from "@tu-view-plus/hooks";
import "../style/button-group.css";
const G = e({
  name: "TuButtonGroup",
  inheritAttrs: !1
}), g = /* @__PURE__ */ e({
  ...G,
  props: _,
  setup(r) {
    const t = r;
    u(
      b,
      c({
        size: o(t, "size"),
        type: o(t, "type")
      })
    );
    const s = B("button-group"), n = a(() => ({
      [s.b()]: !0
    }));
    return (p, v) => (i(), m("div", {
      class: l(f(n))
    }, [
      d(p.$slots, "default")
    ], 2));
  }
});
export {
  g as default
};
