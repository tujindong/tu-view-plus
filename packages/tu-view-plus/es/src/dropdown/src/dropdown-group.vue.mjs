import { defineComponent as r, openBlock as n, createElementBlock as p, Fragment as s, createElementVNode as l, normalizeClass as a, unref as m, renderSlot as o, createTextVNode as u, toDisplayString as d } from "vue";
import { dropdownGroupProps as i } from "./dropdown-group.mjs";
import { useNamespace as c } from "@tu-view-plus/hooks";
import "../style/dropdown.css";
const f = r({
  name: "TuDropdownGroup"
}), k = /* @__PURE__ */ r({
  ...f,
  props: i,
  setup(_) {
    const t = c("dropdown-group");
    return (e, w) => (n(), p(s, null, [
      l("li", {
        class: a(m(t).e("title"))
      }, [
        o(e.$slots, "title", {}, () => [
          u(d(e.title), 1)
        ])
      ], 2),
      o(e.$slots, "default")
    ], 64));
  }
});
export {
  k as default
};
