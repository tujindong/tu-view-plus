import { defineComponent as I, useSlots as pe, toRefs as ce, reactive as c, computed as r, provide as re, openBlock as i, createElementBlock as ie, mergeProps as me, createElementVNode as de, normalizeClass as B, unref as u, renderSlot as b, createBlock as g, withCtx as S, createVNode as ve, createCommentVNode as fe } from "vue";
import { baseMenuProps as ye, baseMenuEmits as Ce } from "./base-menu.mjs";
import { useNamespace as ge, useMergeState as x, useResponsive as Ke, usePickSlots as O } from "@tu-view-plus/hooks";
import { isNumber as Me, addUnit as he, isObject as ke, omit as Be } from "@tu-view-plus/utils";
import { Expand as be, Fold as Se } from "@tu-view-plus/icons-vue";
import { provideLevel as xe } from "./hooks/use-level.mjs";
import { MenuInjectionKey as Oe } from "./context.mjs";
import { useMenuDataCollector as Ie } from "./hooks/use-menu-data-collector.mjs";
import { useMenuOpenState as _e } from "./hooks/use-menu-open-state.mjs";
import { TuIcon as we } from "../../icon/index.mjs";
import { TuButton as ze } from "../../button/index.mjs";
import "../style/menu.css";
const Ne = I({
  name: "TuBaseMenu",
  inheritAttrs: !1
}), Ue = /* @__PURE__ */ I({
  ...Ne,
  props: ye,
  emits: Ce,
  setup(_, { emit: w }) {
    const z = _, l = w, K = pe(), o = ge("menu"), {
      style: m,
      mode: s,
      effect: M,
      levelIndent: N,
      accordion: P,
      showCollapseButton: T,
      scrollConfig: E,
      autoScrollIntoView: D,
      collapsedWidth: n,
      autoOpen: V,
      collapsed: $,
      defaultCollapsed: d,
      selectedKeys: H,
      defaultSelectedKeys: R,
      openKeys: j,
      defaultOpenKeys: A,
      triggerProps: F,
      tooltipProps: L,
      autoOpenSelected: U,
      breakpoint: q,
      popupMaxHeight: G,
      inTrigger: v,
      siderCollapsed: f,
      isRoot: y
    } = ce(z), { subMenuKeys: J, menuData: Q } = Ie({
      type: y != null && y.value ? "menu" : "popupMenu"
    }), [h, X] = x(
      R.value,
      c({
        value: H
      })
    ), { openKeys: Y, setOpenKeys: Z, open: W } = _e(
      c({
        modelValue: j,
        defaultValue: A,
        autoOpen: V,
        autoOpenSelected: U,
        selectedKeys: h,
        subMenuKeys: J,
        menuData: Q,
        accordion: P
      })
    ), [C, ee] = x(
      d == null ? void 0 : d.value,
      c({
        value: $
      })
    ), a = r(
      () => (f == null ? void 0 : f.value) || C.value || s.value === "popButton"
    ), oe = r(
      () => ["horizontal", "popButton"].indexOf(s.value) < 0 && !v.value && T.value
    ), te = r(() => ({
      [o.b()]: !0,
      [o.m("horizontal")]: s.value === "horizontal",
      [o.m("vertical")]: s.value === "vertical",
      [o.m("pop")]: s.value === "pop" || a.value,
      [o.m("pop-button")]: s.value === "popButton",
      [o.m("trigger")]: v.value,
      [o.m(M.value)]: M.value,
      [o.is("collapsed")]: a.value
    })), se = r(() => {
      const e = Me(n == null ? void 0 : n.value) ? he(n == null ? void 0 : n.value) : void 0, t = ke(m.value) ? m.value : void 0, p = a.value ? e : t == null ? void 0 : t.width;
      return [t ? Be(t, ["width"]) : m.value, { width: p }];
    }), k = (e, t) => {
      e !== C.value && (ee(e), l("update:collapsed", e), l("collapse", e, t));
    }, le = () => {
      k(!C.value, "clickTrigger");
    };
    Ke(q, (e) => {
      k(!e, "responsive");
    });
    const ne = O(K, "expand-icon-down"), ae = O(K, "expand-icon-right"), ue = c({
      mode: s,
      levelIndent: N,
      autoScrollIntoView: D,
      selectedKeys: h,
      openKeys: Y,
      scrollConfig: E,
      inTrigger: v,
      collapsed: a,
      triggerProps: F,
      tooltipProps: L,
      popupMaxHeight: G,
      expandIconDown: ne,
      expandIconRight: ae,
      onMenuItemClick: (e) => {
        X([e]), l("update:selectedKeys", [e]), l("menu-item-click", e);
      },
      onSubMenuClick: (e, t) => {
        const p = W(e, t);
        Z(p), l("update:openKeys", p), l("sub-menu-click", e, p);
      }
    });
    return re(Oe, ue), xe(1), (e, t) => (i(), ie("div", me(e.$attrs, {
      class: te.value,
      style: se.value
    }), [
      de("div", {
        class: B(u(o).e("inner"))
      }, [
        b(e.$slots, "default")
      ], 2),
      oe.value ? (i(), g(u(ze), {
        key: 0,
        size: "small",
        class: B(u(o).e("collapse-button")),
        onClick: le
      }, {
        default: S(() => [
          b(e.$slots, "collapse-icon", { collapsed: a.value }, () => [
            ve(u(we), null, {
              default: S(() => [
                a.value ? (i(), g(u(be), { key: 0 })) : (i(), g(u(Se), { key: 1 }))
              ]),
              _: 1
            })
          ])
        ]),
        _: 3
      }, 8, ["class"])) : fe("", !0)
    ], 16));
  }
});
export {
  Ue as default
};
