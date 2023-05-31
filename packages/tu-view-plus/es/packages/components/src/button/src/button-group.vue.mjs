import { defineComponent as o, provide as u, reactive as c, toRef as e, computed as a, openBlock as i, createElementBlock as m, normalizeClass as l, unref as f, renderSlot as d } from "vue";
import { buttonGroupProps as _ } from "./button-group.mjs";
import { buttonGroupInjectionKey as b } from "./constants.mjs";
import { useNamespace as B } from "@tu-view-plus/hooks";
const G = o({
  name: "TuButtonGroup",
  inheritAttrs: !1
}), C = /* @__PURE__ */ o({
  ...G,
  props: _,
  setup(r) {
    const t = r;
    u(
      b,
      c({
        size: e(t, "size"),
        type: e(t, "type")
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
  C as default
};
