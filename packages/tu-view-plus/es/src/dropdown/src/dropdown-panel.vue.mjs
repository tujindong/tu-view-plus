import { defineComponent as c, ref as C, inject as _, computed as i, openBlock as s, createElementBlock as n, normalizeClass as l, unref as r, renderSlot as a, createVNode as m, createCommentVNode as d, withCtx as k } from "vue";
import { dropdownPanelProps as E, dropdownPanelEmits as P } from "./dropdown-panel.mjs";
import { useNamespace as S } from "@tu-view-plus/hooks";
import { isNumber as g, addUnit as N } from "@tu-view-plus/utils";
import { TuEmpty as $ } from "../../empty/index.mjs";
import { TuScrollbar as b } from "../../scrollbar/index.mjs";
import { dropdownInjectionKey as z } from "./constants.mjs";
const H = c({
  name: "TuDropdownPanel"
}), K = /* @__PURE__ */ c({
  ...H,
  props: E,
  emits: P,
  setup(T, { emit: f }) {
    const o = S("dropdown"), u = f, w = C(), t = _(
      z,
      {}
    ), y = i(() => ({
      [o.b()]: !0,
      [o.m(t.size)]: t.size
    })), v = i(() => {
      const { popupMaxHeight: e } = t;
      if (g(e))
        return {
          maxHeight: N(e)
        };
      if (!e)
        return {
          maxHeight: "none",
          overflowY: "hidden"
        };
    }), h = ({
      scrollTop: e,
      scrollLeft: p
    }) => {
      u("scroll", { scrollTop: e, scrollLeft: p });
    };
    return (e, p) => (s(), n("div", {
      class: l(y.value)
    }, [
      e.isEmpty ? (s(), n("div", {
        key: 0,
        class: l(r(o).e("empty"))
      }, [
        a(e.$slots, "empty", {}, () => [
          m(r($))
        ])
      ], 2)) : d("", !0),
      m(r(b), {
        ref_key: "wrapRef",
        ref: w,
        tag: "ul",
        "wrap-class": r(o).e("wrap"),
        "view-class": r(o).e("list"),
        "wrap-style": v.value,
        onScroll: h
      }, {
        default: k(() => [
          a(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["wrap-class", "view-class", "wrap-style"]),
      e.$slots.footer && !e.isEmpty ? (s(), n("div", {
        key: 1,
        class: l(r(o).e("footer"))
      }, [
        a(e.$slots, "footer")
      ], 2)) : d("", !0)
    ], 2));
  }
});
export {
  K as default
};
