import { defineComponent as s, computed as c, openBlock as u, createElementBlock as f, normalizeClass as d, unref as e, renderSlot as g, createVNode as n, withCtx as _ } from "vue";
import { paginationItemEllipsisProps as k, paginationItemEllipsisEmits as C } from "./pagination-item-ellipsis.mjs";
import { useNamespace as E } from "@tu-view-plus/hooks";
import { MoreFilled as P } from "@tu-view-plus/icons-vue";
import { getLegalPage as x } from "./utils.mjs";
import { TuIcon as I } from "../../icon/index.mjs";
import "../style/pagination.css";
const h = s({
  name: "TuPaginationItemEllipsis"
}), M = /* @__PURE__ */ s({
  ...h,
  props: k,
  emits: C,
  setup(a, { emit: m }) {
    const t = a, l = m, o = E("pagination"), r = c(
      () => x(t.current + t.step, {
        min: 1,
        max: t.pages
      })
    ), p = (i) => {
      l("click", r.value);
    };
    return (i, B) => (u(), f("li", {
      class: d([e(o).e("item"), e(o).em("item", "ellipsis")]),
      onClick: p
    }, [
      g(i.$slots, "default", {}, () => [
        n(e(I), null, {
          default: _(() => [
            n(e(P))
          ]),
          _: 1
        })
      ])
    ], 2));
  }
});
export {
  M as default
};
