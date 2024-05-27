import { defineComponent as s, computed as m, openBlock as p, createElementBlock as a, normalizeClass as l, unref as o, createElementVNode as i, createVNode as c, renderSlot as n, createTextVNode as d, toDisplayString as v } from "vue";
import { menuItemGroupProps as f } from "./menu-item-group.mjs";
import { useNamespace as _ } from "@tu-view-plus/hooks";
import { useLevel as N, provideLevel as g } from "./hooks/use-level.mjs";
import I from "./menu-indent.vue.mjs";
import "../style/menu.css";
const L = s({
  name: "TuMenuItemGroup"
}), S = /* @__PURE__ */ s({
  ...L,
  props: f,
  setup(M) {
    const { level: e } = N(), u = m(
      () => e.value === 1 ? e.value + 1 : e.value
    );
    g(u);
    const r = _("menu");
    return (t, T) => (p(), a("div", {
      class: l(o(r).e("group"))
    }, [
      i("div", {
        class: l(o(r).e("group-title"))
      }, [
        c(I, { level: o(e) }, null, 8, ["level"]),
        n(t.$slots, "title", {}, () => [
          d(v(t.title), 1)
        ])
      ], 2),
      n(t.$slots, "default")
    ], 2));
  }
});
export {
  S as default
};
