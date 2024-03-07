import { defineComponent as u, computed as a, openBlock as i, createBlock as s, resolveDynamicComponent as v, normalizeClass as x, withCtx as p, renderSlot as C, unref as o, createVNode as c } from "vue";
import { paginationItemStepProps as P, paginationItemStepEmits as b } from "./pagination-item-step.mjs";
import { useNamespace as h } from "@tu-view-plus/hooks";
import { ArrowRight as I, ArrowLeft as S } from "@tu-view-plus/icons-vue";
import { getLegalPage as w } from "./utils.mjs";
import { TuIcon as l } from "../../icon/index.mjs";
import "../style/pagination.css";
const N = u({
  name: "TuPaginationItemStep"
}), V = /* @__PURE__ */ u({
  ...N,
  props: P,
  emits: b,
  setup(f, { emit: d }) {
    const e = f, g = d, n = h("pagination"), t = e.type === "next", m = a(() => e.disabled ? e.disabled : !e.pages || t && e.current === e.pages ? !0 : !t && e.current <= 1), _ = a(
      () => w(e.current + (t ? 1 : -1), {
        min: 1,
        max: e.pages
      })
    ), k = a(() => ({
      [n.e("item")]: !0,
      [n.em("item", e.type)]: e.type,
      [n.is("disabled")]: m.value
    })), y = (r) => {
      m.value || g("click", _.value);
    };
    return (r, A) => (i(), s(v(r.simple ? "span" : "li"), {
      class: x(k.value),
      onClick: y
    }, {
      default: p(() => [
        C(r.$slots, "default", {
          type: t ? "next" : "previous"
        }, () => [
          t ? (i(), s(o(l), { key: 0 }, {
            default: p(() => [
              c(o(I))
            ]),
            _: 1
          })) : (i(), s(o(l), { key: 1 }, {
            default: p(() => [
              c(o(S))
            ]),
            _: 1
          }))
        ])
      ]),
      _: 3
    }, 8, ["class"]));
  }
});
export {
  V as default
};
