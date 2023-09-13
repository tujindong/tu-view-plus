import { defineComponent as i, ref as y, inject as h, computed as v, openBlock as t, createElementBlock as s, normalizeClass as n, unref as o, renderSlot as l, createVNode as a, createCommentVNode as m, withCtx as _ } from "vue";
import { dropdownPanelProps as k, dropdownPanelEmits as C } from "./dropdown-panel.mjs";
import { useNamespace as E } from "@tu-view-plus/hooks";
import { isNumber as S, addUnit as g } from "@tu-view-plus/utils";
import { TuEmpty as N } from "../../empty/index.mjs";
import { TuScrollbar as P } from "../../scrollbar/index.mjs";
import { dropdownInjectionKey as $ } from "./constants.mjs";
const b = i({
  name: "TuDropdownPanel"
}), z = /* @__PURE__ */ i({
  ...b,
  props: k,
  emits: C,
  setup(H, { emit: d }) {
    const r = E("dropdown"), c = y(), f = h(
      $,
      {}
    ), u = v(() => {
      const { popupMaxHeight: e } = f;
      if (S(e))
        return {
          maxHeight: g(e)
        };
      if (!e)
        return {
          maxHeight: "none",
          overflowY: "hidden"
        };
    }), w = ({
      scrollTop: e,
      scrollLeft: p
    }) => {
      d("scroll", { scrollTop: e, scrollLeft: p });
    };
    return (e, p) => (t(), s("div", {
      class: n(o(r).b())
    }, [
      e.isEmpty ? (t(), s("div", {
        key: 0,
        class: n(o(r).e("empty"))
      }, [
        l(e.$slots, "empty", {}, () => [
          a(o(N))
        ])
      ], 2)) : m("", !0),
      a(o(P), {
        ref_key: "wrapRef",
        ref: c,
        tag: "ul",
        "wrap-class": o(r).e("wrap"),
        "view-class": o(r).e("list"),
        "wrap-style": o(u),
        onScroll: w
      }, {
        default: _(() => [
          l(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["wrap-class", "view-class", "wrap-style"]),
      e.$slots.footer && !e.isEmpty ? (t(), s("div", {
        key: 1,
        class: n(o(r).e("footer"))
      }, [
        l(e.$slots, "footer")
      ], 2)) : m("", !0)
    ], 2));
  }
});
export {
  z as default
};
