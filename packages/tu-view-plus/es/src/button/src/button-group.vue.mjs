import { defineComponent as e, provide as u, reactive as c, toRef as o, computed as a, openBlock as i, createElementBlock as m, normalizeClass as l, renderSlot as f } from "vue";
import { buttonGroupProps as d } from "./button-group.mjs";
import { buttonGroupInjectionKey as _ } from "./constants.mjs";
import { useNamespace as b } from "@tu-view-plus/hooks";
import "../style/button-group.css";
const v = e({
  name: "TuButtonGroup",
  inheritAttrs: !0
}), C = /* @__PURE__ */ e({
  ...v,
  props: d,
  setup(r) {
    const t = r;
    u(
      _,
      c({
        size: o(t, "size"),
        type: o(t, "type")
      })
    );
    const s = b("button-group"), n = a(() => ({
      [s.b()]: !0
    }));
    return (p, B) => (i(), m("div", {
      class: l(n.value)
    }, [
      f(p.$slots, "default")
    ], 2));
  }
});
export {
  C as default
};
