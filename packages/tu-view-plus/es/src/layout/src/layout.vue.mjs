import { defineComponent as r, ref as l, computed as i, provide as c, openBlock as p, createElementBlock as m, normalizeClass as d, renderSlot as f } from "vue";
import { layoutProps as _ } from "./layout.mjs";
import { useNamespace as v } from "@tu-view-plus/hooks";
import { LayoutSiderInjectionKey as y } from "./context.mjs";
import "../style/layout.css";
const h = r({
  name: "TuLayout"
}), I = /* @__PURE__ */ r({
  ...h,
  props: _,
  setup(n) {
    const a = n, t = v("layout"), o = l([]), u = i(() => ({
      [t.b()]: !0,
      [t.is("has-sider")]: a.hasSider || o.value.length
    }));
    return c(y, {
      onSiderMount: (e) => o.value.push(e),
      onSiderUnMount: (e) => {
        o.value = o.value.filter((s) => s !== e);
      }
    }), (e, s) => (p(), m("section", {
      class: d(u.value)
    }, [
      f(e.$slots, "default")
    ], 2));
  }
});
export {
  I as default
};
