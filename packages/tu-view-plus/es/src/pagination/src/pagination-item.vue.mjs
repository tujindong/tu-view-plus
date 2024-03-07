import { defineComponent as i, computed as a, openBlock as u, createElementBlock as g, normalizeClass as d, normalizeStyle as f, renderSlot as v, createTextVNode as y, toDisplayString as N } from "vue";
import { paginationItemProps as b, paginationItemEmits as k } from "./pagination-item.mjs";
import { useNamespace as _ } from "@tu-view-plus/hooks";
import "../style/pagination.css";
const C = i({
  name: "TuPaginationItem"
}), B = /* @__PURE__ */ i({
  ...C,
  props: b,
  emits: k,
  setup(n, { emit: l }) {
    const e = n, r = l, o = _("pagination"), s = a(() => e.current === e.pageNumber), m = a(() => ({
      [o.e("item")]: !0,
      [o.is("active")]: s.value
    })), c = a(
      () => s.value ? e.activeStyle : e.style
    ), p = (t) => {
      e.disabled || r("click", e.pageNumber, t);
    };
    return (t, S) => (u(), g("li", {
      class: d(m.value),
      style: f(c.value),
      onClick: p
    }, [
      v(t.$slots, "default", { page: t.pageNumber }, () => [
        y(N(t.pageNumber), 1)
      ])
    ], 6));
  }
});
export {
  B as default
};
