import { defineComponent as C, useSlots as N, computed as r, openBlock as p, createElementBlock as m, normalizeClass as s, unref as o, createElementVNode as t, createVNode as d, Fragment as T, renderSlot as l, createTextVNode as f, toDisplayString as v, withCtx as b, withDirectives as w, vShow as I } from "vue";
import { subMenuInlineProps as V } from "./sub-menu-inline.mjs";
import { useNamespace as g } from "@tu-view-plus/hooks";
import { useLevel as x } from "./hooks/use-level.mjs";
import { useMenuContext as B } from "./hooks/use-menu-context.mjs";
import "@tu-view-plus/utils";
import { useMenu as D } from "./hooks/use-menu.mjs";
import E from "./menu-indent.vue.mjs";
import { TuCollapseTransition as L } from "../../collapse-transition/index.mjs";
import "../style/menu.css";
const O = C({
  name: "TuSubMenuInline"
}), Q = /* @__PURE__ */ C({
  ...O,
  props: V,
  setup(k) {
    const S = k, e = g("menu"), h = N(), { key: u } = D(), { level: a } = x({
      provideNextLevel: !0
    }), i = B(), M = r(() => S.isChildrenSelected), c = r(
      () => (i.openKeys || []).indexOf(u.value) > -1
    ), $ = r(() => ({
      [e.e("inline-header")]: !0,
      [e.is("selected")]: M.value,
      [e.is("has-icon")]: h.icon
    })), y = () => {
      i.onSubMenuClick && i.onSubMenuClick(u.value, a.value);
    };
    return (n, z) => (p(), m("div", {
      class: s(o(e).e("inline"))
    }, [
      t("div", {
        class: s($.value),
        onClick: y
      }, [
        d(E, { level: o(a) }, null, 8, ["level"]),
        n.$slots.icon ? (p(), m(T, { key: 0 }, [
          t("span", {
            class: s(o(e).e("inline-icon"))
          }, [
            l(n.$slots, "icon")
          ], 2),
          t("span", {
            class: s(o(e).e("inline-title"))
          }, [
            l(n.$slots, "title", {}, () => [
              f(v(n.title), 1)
            ])
          ], 2)
        ], 64)) : l(n.$slots, "title", { key: 1 }, () => [
          f(v(n.title), 1)
        ]),
        t("span", {
          class: s([o(e).e("inline-icon-suffix"), o(e).is("open", c.value)])
        }, [
          l(n.$slots, "expand-icon-down")
        ], 2)
      ], 2),
      d(o(L), null, {
        default: b(() => [
          w(t("div", {
            class: s(o(e).e("inline-content"))
          }, [
            l(n.$slots, "default")
          ], 2), [
            [I, c.value]
          ])
        ]),
        _: 3
      })
    ], 2));
  }
});
export {
  Q as default
};
