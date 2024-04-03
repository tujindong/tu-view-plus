import { defineComponent as N, useSlots as _, toRefs as A, computed as s, ref as L, openBlock as g, createBlock as O, unref as o, mergeProps as x, withCtx as r, createVNode as a, normalizeStyle as j, createSlots as q, renderSlot as l, createElementVNode as u, createElementBlock as I, Fragment as G, normalizeClass as c, createTextVNode as S, toDisplayString as V, createCommentVNode as J } from "vue";
import { subMenuPopProps as Q } from "./sub-menu-pop.mjs";
import { useNamespace as U } from "@tu-view-plus/hooks";
import { isNumber as W, omit as X } from "@tu-view-plus/utils";
import { useLevel as Y } from "./hooks/use-level.mjs";
import { useMenuContext as Z } from "./hooks/use-menu-context.mjs";
import { useMenu as ee } from "./hooks/use-menu.mjs";
import { RenderFunction as w } from "@tu-view-plus/constants";
import { TuTrigger as oe } from "../../trigger/index.mjs";
import ne from "./base-menu.vue.mjs";
import te from "./menu-indent.vue.mjs";
import "../style/menu.css";
const se = N({
  name: "TuSubMenuPop",
  inheritAttrs: !1
}), he = /* @__PURE__ */ N({
  ...se,
  props: Q,
  setup(T) {
    const B = T, p = _(), t = U("menu"), { key: m } = ee(), { level: v } = Y(), { selectable: y, isChildrenSelected: d, popupMaxHeight: f } = A(B), n = Z(), { onSubMenuClick: h, onMenuItemClick: i } = n, k = s(() => n.mode), b = s(() => n.selectedKeys || []), C = s(
      () => y.value && b.value.includes(m.value) || (d == null ? void 0 : d.value)
    ), z = s(() => [
      t.e("pop"),
      t.is("selected", C.value),
      t.is("has-icon", !!(p != null && p.icon))
    ]), R = s(() => {
      const e = (f == null ? void 0 : f.value) ?? n.popupMaxHeight;
      return W(e) ? { maxHeight: `${e}px` } : e ? {} : { maxHeight: "unset" };
    }), M = s(
      () => k.value === "horizontal" && !n.inTrigger
    ), P = L(!1), $ = (e) => {
      P.value = e;
    }, D = s(() => {
      var e;
      return [
        t.e("trigger"),
        (e = n.triggerProps) == null ? void 0 : e.class
      ];
    }), H = s(
      () => X(n.triggerProps || {}, ["class"])
    ), E = (e) => {
      $(e);
    }, F = () => {
      h && h(m.value, v.value), y.value && i && i(m.value);
    }, K = (e) => {
      i && i(e), $(!1);
    };
    return (e, le) => (g(), O(o(oe), x({
      trigger: "hover",
      "animation-class": "fade-in"
    }, H.value, {
      class: D.value,
      position: M.value ? "bl" : "rt",
      "mouse-enter-delay": 50,
      "mouse-leave-delay": 50,
      "popup-offset": 10,
      "auto-fit-popup-min-width": !0,
      duration: 100,
      "unmount-on-close": !1,
      "popup-visible": P.value,
      onPopupVisibleChange: E
    }), {
      content: r(() => [
        a(ne, {
          "in-trigger": "",
          "selected-keys": b.value,
          "trigger-props": o(n).triggerProps,
          style: j(R.value),
          onMenuItemClick: K
        }, q({
          default: r(() => [
            l(e.$slots, "default")
          ]),
          _: 2
        }, [
          o(n).expandIconDown ? {
            name: "expand-icon-down",
            fn: r(() => [
              a(o(w), {
                "render-func": o(n).expandIconDown
              }, null, 8, ["render-func"])
            ]),
            key: "0"
          } : void 0,
          o(n).expandIconRight ? {
            name: "expand-icon-right",
            fn: r(() => [
              a(o(w), {
                "render-func": o(n).expandIconRight
              }, null, 8, ["render-func"])
            ]),
            key: "1"
          } : void 0
        ]), 1032, ["selected-keys", "trigger-props", "style"])
      ]),
      default: r(() => [
        u("div", x({
          class: z.value,
          "aria-haspopup": "true"
        }, e.$attrs, { onClick: F }), [
          a(te, { level: o(v) }, null, 8, ["level"]),
          e.$slots.icon ? (g(), I(G, { key: 0 }, [
            u("span", {
              class: c(o(t).e("icon"))
            }, [
              l(e.$slots, "icon")
            ], 2),
            u("span", {
              class: c(o(t).e("title"))
            }, [
              l(e.$slots, "title", {}, () => [
                S(V(e.title), 1)
              ])
            ], 2)
          ], 64)) : l(e.$slots, "title", { key: 1 }, () => [
            S(V(e.title), 1)
          ]),
          u("span", {
            class: c(o(t).e("icon-suffix"))
          }, [
            M.value ? l(e.$slots, "expand-icon-down", { key: 0 }) : l(e.$slots, "expand-icon-right", { key: 1 })
          ], 2),
          C.value && k.value === "horizontal" ? (g(), I("div", {
            key: 2,
            class: c(o(t).e("selected-label"))
          }, null, 2)) : J("", !0)
        ], 16)
      ]),
      _: 3
    }, 16, ["class", "position", "popup-visible"]));
  }
});
export {
  he as default
};
