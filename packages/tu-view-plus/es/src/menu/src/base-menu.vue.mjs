import { defineComponent as O, useSlots as ue, toRefs as pe, reactive as c, computed as r, provide as ce, openBlock as i, createElementBlock as h, mergeProps as re, createElementVNode as ie, normalizeClass as k, unref as p, renderSlot as b, createVNode as me, withCtx as de, createBlock as B, createCommentVNode as ve } from "vue";
import { baseMenuProps as fe, baseMenuEmits as ye } from "./base-menu.mjs";
import { useNamespace as Ce, useMergeState as S, useResponsive as ge, usePickSlots as x } from "@tu-view-plus/hooks";
import { isNumber as Ke, addUnit as Me, isObject as he, omit as ke } from "@tu-view-plus/utils";
import { Expand as be, Fold as Be } from "@tu-view-plus/icons-vue";
import { provideLevel as Se } from "./hooks/use-level.mjs";
import { MenuInjectionKey as xe } from "./context.mjs";
import { useMenuDataCollector as Oe } from "./hooks/use-menu-data-collector.mjs";
import { useMenuOpenState as Ie } from "./hooks/use-menu-open-state.mjs";
import { TuIcon as we } from "../../icon/index.mjs";
import "../style/menu.css";
const _e = O({
  name: "TuBaseMenu",
  inheritAttrs: !1
}), Ae = /* @__PURE__ */ O({
  ..._e,
  props: fe,
  emits: ye,
  setup(I, { emit: w }) {
    const _ = I, n = w, g = ue(), t = Ce("menu"), {
      style: m,
      mode: s,
      levelIndent: N,
      accordion: P,
      showCollapseButton: z,
      scrollConfig: E,
      autoScrollIntoView: T,
      collapsedWidth: l,
      autoOpen: D,
      collapsed: V,
      defaultCollapsed: d,
      selectedKeys: $,
      defaultSelectedKeys: H,
      openKeys: R,
      defaultOpenKeys: j,
      triggerProps: A,
      tooltipProps: F,
      autoOpenSelected: L,
      breakpoint: U,
      popupMaxHeight: q,
      inTrigger: v,
      siderCollapsed: f,
      isRoot: y
    } = pe(_), { subMenuKeys: G, menuData: J } = Oe({
      type: y != null && y.value ? "menu" : "popupMenu"
    }), [K, Q] = S(
      H.value,
      c({
        value: $
      })
    ), { openKeys: X, setOpenKeys: Y, open: Z } = Ie(
      c({
        modelValue: R,
        defaultValue: j,
        autoOpen: D,
        autoOpenSelected: L,
        selectedKeys: K,
        subMenuKeys: G,
        menuData: J,
        accordion: P
      })
    ), [C, W] = S(
      d == null ? void 0 : d.value,
      c({
        value: V
      })
    ), a = r(
      () => (f == null ? void 0 : f.value) || C.value || s.value === "popButton"
    ), ee = r(
      () => ["horizontal", "popButton"].indexOf(s.value) < 0 && !v.value && z.value
    ), oe = r(() => ({
      [t.b()]: !0,
      [t.m("horizontal")]: s.value === "horizontal",
      [t.m("vertical")]: s.value === "vertical",
      [t.m("trigger")]: v.value,
      [t.is("pop")]: s.value === "pop" || a.value,
      [t.is("pop-button")]: s.value === "popButton",
      [t.is("collapsed")]: a.value
    })), te = r(() => {
      const e = Ke(l == null ? void 0 : l.value) ? Me(l == null ? void 0 : l.value) : void 0, o = he(m.value) ? m.value : void 0, u = a.value ? e : o == null ? void 0 : o.width;
      return [o ? ke(o, ["width"]) : m.value, { width: u }];
    }), M = (e, o) => {
      e !== C.value && (W(e), n("update:collapsed", e), n("collapse", e, o));
    }, se = () => {
      M(!C.value, "clickTrigger");
    };
    ge(U, (e) => {
      M(!e, "responsive");
    });
    const ne = x(g, "expand-icon-down"), le = x(g, "expand-icon-right"), ae = c({
      mode: s,
      levelIndent: N,
      autoScrollIntoView: T,
      selectedKeys: K,
      openKeys: X,
      scrollConfig: E,
      inTrigger: v,
      collapsed: a,
      triggerProps: A,
      tooltipProps: F,
      popupMaxHeight: q,
      expandIconDown: ne,
      expandIconRight: le,
      onMenuItemClick: (e) => {
        Q([e]), n("update:selectedKeys", [e]), n("menu-item-click", e);
      },
      onSubMenuClick: (e, o) => {
        const u = Z(e, o);
        Y(u), n("update:openKeys", u), n("sub-menu-click", e, u);
      }
    });
    return ce(xe, ae), Se(1), (e, o) => (i(), h("div", re(e.$attrs, {
      class: oe.value,
      style: te.value
    }), [
      ie("div", {
        class: k(p(t).e("inner"))
      }, [
        b(e.$slots, "default")
      ], 2),
      ee.value ? (i(), h("div", {
        key: 0,
        class: k(p(t).e("collapse-button")),
        onClick: se
      }, [
        b(e.$slots, "collapse-icon", { collapsed: a.value }, () => [
          me(p(we), null, {
            default: de(() => [
              a.value ? (i(), B(p(be), { key: 0 })) : (i(), B(p(Be), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 2)) : ve("", !0)
    ], 16));
  }
});
export {
  Ae as default
};
