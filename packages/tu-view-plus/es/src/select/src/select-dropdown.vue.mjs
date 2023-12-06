import { defineComponent as d, useSlots as f, inject as w, computed as c, openBlock as s, createElementBlock as p, normalizeClass as t, unref as r, renderSlot as l, createCommentVNode as a, createBlock as m, createVNode as y, withDirectives as v, withCtx as h, vShow as k } from "vue";
import { selectDropDownProps as S, selectDropDownEmits as D } from "./select-dropdown.mjs";
import { useNamespace as $ } from "@tu-view-plus/hooks";
import { selectInjectionKey as g } from "./context.mjs";
import { TuSpin as B } from "../../spin/index.mjs";
import { TuEmpty as C } from "../../empty/index.mjs";
import { TuScrollbar as E } from "../../scrollbar/index.mjs";
const T = d({
  name: "TuSelectDropDown"
}), K = /* @__PURE__ */ d({
  ...T,
  props: S,
  emits: D,
  setup(N, { emit: j }) {
    const i = f(), o = $("select"), n = w(g, void 0), u = c(() => ({
      [o.e("dropdown")]: !0,
      [o.em("dropdown", n == null ? void 0 : n.selectSize)]: !0,
      [o.e("dropdown-header")]: !!i.header,
      [o.e("dropdown-footer")]: !!i.footer
    }));
    return (e, z) => (s(), p("div", {
      class: t(u.value)
    }, [
      e.$slots.header && (!e.empty || e.showHeaderOnEmpty) ? (s(), p("div", {
        key: 0,
        class: t(r(o).e("header"))
      }, [
        l(e.$slots, "header")
      ], 2)) : a("", !0),
      e.loading ? (s(), m(r(B), {
        key: 1,
        class: t(r(o).e("loading"))
      }, null, 8, ["class"])) : e.empty ? (s(), p("div", {
        key: 2,
        class: t(r(o).e("empty"))
      }, [
        l(e.$slots, "empty", {}, () => [
          y(r(C))
        ])
      ], 2)) : a("", !0),
      e.virtualList && !e.loading && !e.empty ? l(e.$slots, "virtual-list", { key: 3 }) : a("", !0),
      e.virtualList ? a("", !0) : v((s(), m(r(E), {
        key: 4,
        ref: "wrapperComRef",
        tag: "ul",
        "wrap-class": r(o).e("dropdown-wrap"),
        "view-class": r(o).e("dropdown-list")
      }, {
        default: h(() => [
          l(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["wrap-class", "view-class"])), [
        [k, !e.loading && !e.empty]
      ]),
      e.$slots.footer && (!e.empty || e.showFooterOnEmpty) ? (s(), p("div", {
        key: 5,
        class: t(r(o).e("footer"))
      }, [
        l(e.$slots, "footer")
      ], 2)) : a("", !0)
    ], 2));
  }
});
export {
  K as default
};
