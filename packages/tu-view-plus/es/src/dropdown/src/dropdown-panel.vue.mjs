import { defineComponent as c, ref as v, inject as C, computed as i, openBlock as s, createElementBlock as n, normalizeClass as l, unref as o, renderSlot as a, createVNode as m, createCommentVNode as d, withCtx as _ } from "vue";
import { dropdownPanelProps as k, dropdownPanelEmits as E } from "./dropdown-panel.mjs";
import { useNamespace as P } from "@tu-view-plus/hooks";
import { isNumber as S, addUnit as g } from "@tu-view-plus/utils";
import { TuEmpty as N } from "../../empty/index.mjs";
import { TuScrollbar as $ } from "../../scrollbar/index.mjs";
import { dropdownInjectionKey as b } from "./constants.mjs";
const z = c({
  name: "TuDropdownPanel"
}), I = /* @__PURE__ */ c({
  ...z,
  props: k,
  emits: E,
  setup(H, { emit: f }) {
    const r = P("dropdown"), u = v(), t = C(
      b,
      {}
    ), w = i(() => ({
      [r.b()]: !0,
      [r.m(t.size)]: t.size
    })), y = i(() => {
      const { popupMaxHeight: e } = t;
      if (S(e))
        return {
          maxHeight: g(e)
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
      f("scroll", { scrollTop: e, scrollLeft: p });
    };
    return (e, p) => (s(), n("div", {
      class: l(o(w))
    }, [
      e.isEmpty ? (s(), n("div", {
        key: 0,
        class: l(o(r).e("empty"))
      }, [
        a(e.$slots, "empty", {}, () => [
          m(o(N))
        ])
      ], 2)) : d("", !0),
      m(o($), {
        ref_key: "wrapRef",
        ref: u,
        tag: "ul",
        "wrap-class": o(r).e("wrap"),
        "view-class": o(r).e("list"),
        "wrap-style": o(y),
        onScroll: h
      }, {
        default: _(() => [
          a(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["wrap-class", "view-class", "wrap-style"]),
      e.$slots.footer && !e.isEmpty ? (s(), n("div", {
        key: 1,
        class: l(o(r).e("footer"))
      }, [
        a(e.$slots, "footer")
      ], 2)) : d("", !0)
    ], 2));
  }
});
export {
  I as default
};
