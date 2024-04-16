import { defineComponent as f, openBlock as o, createElementBlock as s, normalizeClass as B, unref as n, createBlock as c, withCtx as i, createTextVNode as m, toDisplayString as a, createCommentVNode as N, Fragment as p, renderList as b } from "vue";
import { shortcutsProps as x, shortcutsEmits as z } from "./shortcuts.mjs";
import { useNamespace as E, useLocale as F } from "@tu-view-plus/hooks";
import { RenderFunction as I } from "@tu-view-plus/constants";
import { isFunction as L } from "@tu-view-plus/utils";
import { TuButton as k } from "../../../button/index.mjs";
const T = f({
  name: "TuShortcuts"
}), j = /* @__PURE__ */ f({
  ...T,
  props: x,
  emits: z,
  setup($, { emit: d }) {
    const r = d, C = E("picker"), { t: v } = F(), _ = () => {
      r("now-click");
    }, h = (e) => {
      r("item-click", e);
    }, w = (e) => {
      r("item-mouse-enter", e);
    }, y = (e) => {
      r("item-mouse-leave", e);
    };
    return (e, l) => (o(), s("div", {
      class: B(n(C).e("shortcuts"))
    }, [
      e.showNowBtn ? (o(), c(n(k), {
        key: 0,
        type: "text",
        size: "small",
        onClick: l[0] || (l[0] = () => _())
      }, {
        default: i(() => [
          m(a(n(v)("tu.datepicker.now")), 1)
        ]),
        _: 1
      })) : N("", !0),
      (o(!0), s(p, null, b(e.shortcuts, (t, M) => (o(), c(n(k), {
        size: "small",
        key: M,
        onClick: (u) => h(t),
        onMouseenter: (u) => w(t),
        onMouseleave: (u) => y(t)
      }, {
        default: i(() => [
          n(L)(t.label) ? (o(), c(n(I), {
            key: 0,
            "render-func": t.label
          }, null, 8, ["render-func"])) : (o(), s(p, { key: 1 }, [
            m(a(t.label), 1)
          ], 64))
        ]),
        _: 2
      }, 1032, ["onClick", "onMouseenter", "onMouseleave"]))), 128))
    ], 2));
  }
});
export {
  j as default
};
