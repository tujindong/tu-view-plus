import { defineComponent as N, useSlots as _, toRefs as A, computed as s, ref as L, openBlock as v, createBlock as O, unref as o, mergeProps as x, withCtx as r, createVNode as i, normalizeStyle as j, createSlots as q, renderSlot as l, createElementVNode as u, createElementBlock as I, Fragment as G, normalizeClass as p, createTextVNode as S, toDisplayString as V, createCommentVNode as J } from "vue";
import { subMenuPopProps as Q } from "./sub-menu-pop.mjs";
import { useNamespace as U } from "@tu-view-plus/hooks";
import { isNumber as W, omit as X } from "@tu-view-plus/utils";
import { useLevel as Y } from "./hooks/use-level.mjs";
import { useMenuContext as Z } from "./hooks/use-menu-context.mjs";
import { useMenu as ee } from "./hooks/use-menu.mjs";
import { RenderFunction as w } from "@tu-view-plus/constants";
import { TuTrigger as oe } from "../../trigger/index.mjs";
import te from "./base-menu.vue.mjs";
import ne from "./menu-indent.vue.mjs";
import "../style/menu.css";
const se = N({
  name: "TuSubMenuPop",
  inheritAttrs: !1
}), he = /* @__PURE__ */ N({
  ...se,
  props: Q,
  setup(T) {
    const B = T, c = _(), n = U("menu"), { key: m } = ee(), { level: y } = Y(), { selectable: h, isChildrenSelected: d, popupMaxHeight: f } = A(B), t = Z(), { onSubMenuClick: k, onMenuItemClick: a } = t, b = s(() => t.mode), C = s(() => t.selectedKeys || []), M = s(
      () => h.value && C.value.includes(m.value) || (d == null ? void 0 : d.value)
    ), z = s(() => [
      n.e("pop"),
      n.is("selected", M.value),
      n.is("has-icon", !!(c != null && c.icon))
    ]), R = s(() => {
      const e = (f == null ? void 0 : f.value) ?? t.popupMaxHeight;
      return W(e) ? { maxHeight: `${e}px` } : e ? {} : { maxHeight: "unset" };
    }), g = s(
      () => b.value === "horizontal" && !t.inTrigger
    ), P = L(!1), $ = (e) => {
      P.value = e;
    }, D = s(() => {
      var e;
      return [
        n.e("trigger"),
        (e = t.triggerProps) == null ? void 0 : e.class
      ];
    }), H = s(
      () => X(t.triggerProps || {}, ["class"])
    ), E = (e) => {
      $(e);
    }, F = () => {
      k && k(m.value, y.value), h.value && a && a(m.value);
    }, K = (e) => {
      a && a(e), $(!1);
    };
    return (e, le) => (v(), O(o(oe), x({
      trigger: "hover",
      "animation-class": "fade-in"
    }, H.value, {
      class: D.value,
      position: g.value ? "bl" : "rt",
      "mouse-enter-delay": 50,
      "mouse-leave-delay": 50,
      "popup-offset": g.value ? 10 : 16,
      "auto-fit-popup-min-width": !0,
      duration: 100,
      "unmount-on-close": !1,
      "popup-visible": P.value,
      onPopupVisibleChange: E
    }), {
      content: r(() => [
        i(te, {
          "in-trigger": "",
          "selected-keys": C.value,
          "trigger-props": o(t).triggerProps,
          style: j(R.value),
          onMenuItemClick: K
        }, q({
          default: r(() => [
            l(e.$slots, "default")
          ]),
          _: 2
        }, [
          o(t).expandIconDown ? {
            name: "expand-icon-down",
            fn: r(() => [
              i(o(w), {
                "render-func": o(t).expandIconDown
              }, null, 8, ["render-func"])
            ]),
            key: "0"
          } : void 0,
          o(t).expandIconRight ? {
            name: "expand-icon-right",
            fn: r(() => [
              i(o(w), {
                "render-func": o(t).expandIconRight
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
          i(ne, { level: o(y) }, null, 8, ["level"]),
          e.$slots.icon ? (v(), I(G, { key: 0 }, [
            u("span", {
              class: p(o(n).e("icon"))
            }, [
              l(e.$slots, "icon")
            ], 2),
            u("span", {
              class: p(o(n).e("title"))
            }, [
              l(e.$slots, "title", {}, () => [
                S(V(e.title), 1)
              ])
            ], 2)
          ], 64)) : l(e.$slots, "title", { key: 1 }, () => [
            S(V(e.title), 1)
          ]),
          u("span", {
            class: p(o(n).e("icon-suffix"))
          }, [
            g.value ? l(e.$slots, "expand-icon-down", { key: 0 }) : l(e.$slots, "expand-icon-right", { key: 1 })
          ], 2),
          M.value && b.value === "horizontal" ? (v(), I("div", {
            key: 2,
            class: p(o(n).e("selected-label"))
          }, null, 2)) : J("", !0)
        ], 16)
      ]),
      _: 3
    }, 16, ["class", "position", "popup-offset", "popup-visible"]));
  }
});
export {
  he as default
};
