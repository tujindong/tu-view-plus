import { defineComponent as w, useSlots as B, ref as C, inject as D, computed as E, openBlock as t, createElementBlock as p, normalizeClass as s, unref as r, renderSlot as l, createCommentVNode as a, createBlock as u, createVNode as b, withDirectives as R, withCtx as T, vShow as z } from "vue";
import { selectDropDownProps as H, selectDropDownEmits as N } from "./select-dropdown.mjs";
import { useNamespace as O } from "@tu-view-plus/hooks";
import { selectInjectionKey as j } from "./context.mjs";
import { TuSpin as L } from "../../spin/index.mjs";
import { TuEmpty as V } from "../../empty/index.mjs";
import { TuScrollbar as F } from "../../scrollbar/index.mjs";
const I = w({
  name: "TuSelectDropdown"
}), U = /* @__PURE__ */ w({
  ...I,
  props: H,
  emits: N,
  setup(y, { emit: h }) {
    const v = y, i = h, m = B(), o = O("select"), c = C(), d = D(j, void 0), k = E(() => ({
      [o.e("dropdown")]: !0,
      [o.em("dropdown", d == null ? void 0 : d.selectSize)]: !0,
      [o.e("dropdown-header")]: !!m.header,
      [o.e("dropdown-footer")]: !!m.footer
    })), S = ({ scrollTop: e }) => {
      var f;
      const n = (f = c.value) == null ? void 0 : f.wrapRef, { scrollHeight: g, offsetHeight: $ } = n;
      g - (e + $) <= v.bottomOffset && i("reachBottom", n), i("scroll", n);
    };
    return (e, n) => (t(), p("div", {
      class: s(k.value)
    }, [
      e.$slots.header && (!e.empty || e.showHeaderOnEmpty) ? (t(), p("div", {
        key: 0,
        class: s(r(o).e("dropdown-header"))
      }, [
        l(e.$slots, "header")
      ], 2)) : a("", !0),
      e.loading ? (t(), u(r(L), {
        key: 1,
        loading: "",
        dot: "",
        class: s(r(o).e("dropdown-loading")),
        size: 10
      }, null, 8, ["class"])) : e.empty ? (t(), p("div", {
        key: 2,
        class: s(r(o).e("dropdown-empty"))
      }, [
        l(e.$slots, "empty", {}, () => [
          b(r(V))
        ])
      ], 2)) : a("", !0),
      e.virtualList && !e.loading && !e.empty ? l(e.$slots, "virtual-list", { key: 3 }) : a("", !0),
      e.virtualList ? a("", !0) : R((t(), u(r(F), {
        key: 4,
        ref_key: "wrapperComRef",
        ref: c,
        tag: "ul",
        "wrap-class": r(o).e("dropdown-wrap"),
        "view-class": r(o).e("dropdown-list"),
        onScroll: S
      }, {
        default: T(() => [
          l(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["wrap-class", "view-class"])), [
        [z, !e.loading && !e.empty]
      ]),
      e.$slots.footer && (!e.empty || e.showFooterOnEmpty) ? (t(), p("div", {
        key: 5,
        class: s(r(o).e("dropdown-footer"))
      }, [
        l(e.$slots, "footer")
      ], 2)) : a("", !0)
    ], 2));
  }
});
export {
  U as default
};
