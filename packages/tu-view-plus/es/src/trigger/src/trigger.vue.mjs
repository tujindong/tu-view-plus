import { defineComponent as we, toRefs as Ce, computed as T, inject as ye, ref as c, provide as Me, reactive as Te, watch as H, onMounted as ge, onUpdated as Ee, onDeactivated as Pe, onBeforeUnmount as Se, createVNode as s, Fragment as Fe, Teleport as be, mergeProps as Oe, Transition as ze, withDirectives as ke, vShow as Le, nextTick as K } from "vue";
import { triggerProps as Ae, triggerEmits as De } from "./trigger.mjs";
import { TuOnlyClient as Ve } from "../../only-client/index.mjs";
import { TuResizeObserver as X } from "../../resize-observer/index.mjs";
import { useFirstElement as Be, useNamespace as We, useTeleportContainer as Ne, usePopupManager as xe, usePickSlots as Ie, useResizeObserver as $e, defaultNamespace as _e } from "@tu-view-plus/hooks";
import { omit as je, isEmptyChildren as Ge, throttleByRaf as Ue, on as Y, mergeFirstChild as He, off as Ke } from "@tu-view-plus/utils";
import { triggerInjectionKey as q } from "./constant.mjs";
import { getScrollElements as J, getElementScrollRect as Q, getPopupStyle as Xe, getTransformOrigin as Ye, getArrowStyle as qe } from "./utils.mjs";
import "../style/trigger.css";
const Je = ["onClick", "onMouseenter", "onMouseleave", "onFocusin", "onFocusout", "onContextmenu"], dn = /* @__PURE__ */ we({
  name: "TuTrigger",
  inheritAttrs: !1,
  props: Ae,
  emits: De,
  setup(n, {
    emit: w,
    slots: r,
    attrs: l,
    expose: Z
  }) {
    const {
      popupContainer: ee
    } = Ce(n), ne = T(() => je(l, Je)), v = T(() => [].concat(n.trigger)), O = /* @__PURE__ */ new Set(), u = ye(q, void 0), {
      children: g,
      firstElement: C
    } = Be(), m = c(), W = c(n.defaultPopupVisible), E = c(n.position), N = c({}), x = c({}), I = c({}), oe = c(), d = c({
      top: 0,
      left: 0
    }), t = T(() => n.popupVisible ?? W.value), p = We("popup"), {
      teleportContainer: te,
      containerRef: z
    } = Ne({
      popupContainer: ee,
      visible: t,
      documentContainer: !0
    }), {
      zIndex: le
    } = xe("popup", {
      visible: t
    });
    let y = 0, h = !1;
    const ue = () => {
      y && (window.clearTimeout(y), y = 0);
    }, k = (e) => {
      if (n.alignPoint) {
        const {
          pageX: o,
          pageY: a
        } = e;
        d.value = {
          top: a,
          left: o
        };
      }
    }, R = () => {
      if (!C.value || !m.value || !z.value)
        return;
      const e = z.value.getBoundingClientRect(), o = n.alignPoint ? {
        top: d.value.top,
        bottom: d.value.top,
        left: d.value.left,
        right: d.value.left,
        scrollTop: d.value.top,
        scrollBottom: d.value.top,
        scrollLeft: d.value.left,
        scrollRight: d.value.left,
        width: 0,
        height: 0
      } : Q(C.value, e), a = () => (
        // @ts-ignore
        Q(m.value, e)
      ), F = a(), {
        style: M,
        position: b
      } = Xe(n.position, e, o, F, {
        offset: n.popupOffset,
        translate: n.popupTranslate,
        customStyle: n.popupStyle,
        autoFitPosition: n.autoFitPosition
      });
      n.autoFitTransformOrigin && (x.value = {
        transformOrigin: Ye(b)
      }), n.autoFitPopupMinWidth ? M.minWidth = `${o.width}px` : n.autoFitPopupWidth && (M.width = `${o.width}px`), E.value !== b && (E.value = b), N.value = M, n.showArrow && K(() => {
        I.value = qe(b, o, a(), {
          customStyle: n.arrowStyle
        });
      });
    }, f = (e, o) => {
      if (e === t.value && y === 0)
        return;
      const a = () => {
        W.value = e, w("update:popupVisible", e), w("popupVisibleChange", e), e && K(() => {
          R();
        });
      };
      o ? (ue(), e !== t.value && (y = window.setTimeout(a, o))) : a();
    }, ie = (e) => {
      var o;
      (o = l.onClick) == null || o.call(l, e), !(n.disabled || t.value && !n.clickToClose) && (v.value.includes("click") ? (k(e), f(!t.value)) : v.value.includes("contextMenu") && t.value && f(!1));
    }, $ = (e) => {
      var o;
      (o = l.onMouseenter) == null || o.call(l, e), !(n.disabled || !v.value.includes("hover")) && (k(e), f(!0, n.mouseEnterDelay));
    }, _ = (e) => {
      u == null || u.onMouseenter(e), $(e);
    }, j = (e) => {
      var o;
      (o = l.onMouseleave) == null || o.call(l, e), !(n.disabled || !v.value.includes("hover")) && f(!1, n.mouseLeaveDelay);
    }, G = (e) => {
      u == null || u.onMouseleave(e), j(e);
    }, ae = (e) => {
      var o;
      (o = l.onFocusin) == null || o.call(l, e), !(n.disabled || !v.value.includes("focus")) && f(!0, n.focusDelay);
    }, ce = (e) => {
      var o;
      (o = l.onFocusout) == null || o.call(l, e), !(n.disabled || !v.value.includes("focus")) && n.blurToClose && f(!1);
    }, se = (e) => {
      var o;
      (o = l.onContextmenu) == null || o.call(l, e), !(n.disabled || !v.value.includes("contextMenu") || t.value && !n.clickToClose) && (k(e), f(!t.value), e.preventDefault());
    };
    Me(q, Te({
      onMouseenter: _,
      onMouseleave: G,
      addChildRef: (e) => {
        O.add(e), u == null || u.addChildRef(e);
      },
      removeChildRef: (e) => {
        O.delete(e), u == null || u.removeChildRef(e);
      }
    }));
    const L = () => {
      Ke(document.documentElement, "mousedown", D), h = !1;
    }, A = Ie(r, "content"), de = T(() => {
      var e;
      return n.hideEmpty && Ge((e = A.value) == null ? void 0 : e.call(A));
    }), D = (e) => {
      var o, a, F;
      if (!((o = C.value) != null && o.contains(e.target) || (a = m.value) != null && a.contains(e.target))) {
        for (const M of O)
          if ((F = M.value) != null && F.contains(e.target))
            return;
        L(), f(!1);
      }
    }, P = Ue(() => {
      t.value && R();
    }), V = () => {
      t.value && R();
    }, fe = () => {
      V(), w("resize");
    }, re = (e) => {
      n.preventFocus && e.preventDefault();
    };
    u == null || u.addChildRef(m);
    const ve = T(() => t.value ? n.openedClass : void 0);
    let i;
    H(t, (e) => {
      if (n.clickOutsideToClose && (!e && h ? L() : e && !h && (Y(document.documentElement, "mousedown", D), h = !0)), n.updateAtScroll) {
        if (e) {
          i = J(C.value);
          for (const o of i)
            o.addEventListener("scroll", P);
        } else if (i) {
          for (const o of i)
            o.removeEventListener("scroll", P);
          i = void 0;
        }
      }
      e && (B.value = !0);
    }), H(() => [n.autoFitPopupWidth, n.autoFitPopupMinWidth], () => {
      t.value && R();
    });
    const {
      createResizeObserver: me,
      destroyResizeObserver: he
    } = $e({
      elementRef: z,
      onResize: V
    });
    ge(() => {
      if (me(), t.value && (R(), n.clickOutsideToClose && !h && (Y(document.documentElement, "mousedown", D), h = !0), n.updateAtScroll)) {
        i = J(C.value);
        for (const e of i)
          e.addEventListener("scroll", P);
      }
    }), Ee(() => {
      t.value && R();
    }), Pe(() => {
      f(!1);
    }), Se(() => {
      if (u == null || u.removeChildRef(m), he(), h && L(), i) {
        for (const e of i)
          e.removeEventListener("scroll", P);
        i = void 0;
      }
    });
    const B = c(t.value), S = c(!1), U = () => {
      S.value = !0;
    }, pe = () => {
      S.value = !1, t.value && w("show");
    }, Re = () => {
      S.value = !1, t.value || (B.value = !1, w("hide"));
    };
    return Z({
      popupRef: m
    }), () => {
      var e;
      return g.value = ((e = r.default) == null ? void 0 : e.call(r)) ?? [], He(g.value, {
        class: ve.value,
        onClick: ie,
        onMouseenter: $,
        onMouseleave: j,
        onFocusin: ae,
        onFocusout: ce,
        onContextmenu: se
      }), s(Fe, null, [n.autoFixPosition ? s(X, {
        onResize: fe
      }, {
        default: () => [g.value]
      }) : g.value, s(Ve, null, {
        default: () => [s(be, {
          to: te.value,
          disabled: !n.renderToBody
        }, {
          default: () => [(!n.unmountOnClose || t.value || B.value) && !de.value && s(X, {
            onResize: V
          }, {
            default: () => [s("div", Oe({
              ref: m,
              class: [p.b(), p.m(E.value)],
              style: {
                ...N.value,
                zIndex: le.value,
                pointerEvents: S.value ? "none" : "auto"
              },
              "trigger-placement": E.value,
              onMouseenter: _,
              onMouseleave: G,
              onMousedown: re
            }, ne.value), [s(ze, {
              name: `${_e}-${n.animationName}`,
              duration: n.duration,
              appear: !0,
              onBeforeEnter: U,
              onAfterEnter: pe,
              onBeforeLeave: U,
              onAfterLeave: Re
            }, {
              default: () => {
                var o;
                return [ke(s("div", {
                  class: p.e("wrapper"),
                  style: x.value
                }, [s("div", {
                  class: [p.e("content"), n.contentClass],
                  style: n.contentStyle
                }, [(o = r.content) == null ? void 0 : o.call(r)]), n.showArrow && s("div", {
                  ref: oe,
                  class: [p.e("arrow"), p.em("arrow", n.size), n.arrowClass],
                  style: I.value
                }, null)]), [[Le, t.value]])];
              }
            })])]
          })]
        })]
      })]);
    };
  }
});
export {
  dn as default
};
