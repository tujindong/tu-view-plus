import { defineComponent as Re, toRefs as we, computed as T, inject as Ce, ref as c, provide as ye, reactive as Me, watch as H, onMounted as Te, onUpdated as ge, onDeactivated as Ee, onBeforeUnmount as Pe, createVNode as s, Fragment as Se, Teleport as Fe, mergeProps as be, Transition as Oe, withDirectives as ze, vShow as ke, nextTick as K } from "vue";
import { triggerProps as Le, triggerEmits as Ae } from "./trigger.mjs";
import { TuOnlyClient as De } from "../../only-client/index.mjs";
import { TuResizeObserver as X } from "../../resize-observer/index.mjs";
import { useFirstElement as Ve, useNamespace as Be, useTeleportContainer as We, usePopupManager as Ne, usePickSlots as xe, useResizeObserver as Ie, defaultNamespace as $e } from "@tu-view-plus/hooks";
import { omit as _e, isEmptyChildren as je, throttleByRaf as Ge, on as Y, mergeFirstChild as Ue, off as He } from "@tu-view-plus/utils";
import { triggerInjectionKey as q } from "./constant.mjs";
import { getScrollElements as J, getElementScrollRect as Q, getPopupStyle as Ke, getTransformOrigin as Xe, getArrowStyle as Ye } from "./utils.mjs";
import "../style/trigger.css";
const qe = ["onClick", "onMouseenter", "onMouseleave", "onFocusin", "onFocusout", "onContextmenu"], sn = /* @__PURE__ */ Re({
  name: "TuTrigger",
  inheritAttrs: !1,
  props: Le,
  emits: Ae,
  setup(n, {
    emit: w,
    slots: r,
    attrs: l
  }) {
    const {
      popupContainer: Z
    } = we(n), ee = T(() => _e(l, qe)), v = T(() => [].concat(n.trigger)), O = /* @__PURE__ */ new Set(), u = Ce(q, void 0), {
      children: g,
      firstElement: C
    } = Ve(), h = c(), W = c(n.defaultPopupVisible), E = c(n.position), N = c({}), x = c({}), I = c({}), ne = c(), d = c({
      top: 0,
      left: 0
    }), t = T(() => n.popupVisible ?? W.value), p = Be("popup"), {
      teleportContainer: oe,
      containerRef: z
    } = We({
      popupContainer: Z,
      visible: t,
      documentContainer: !0
    }), {
      zIndex: te
    } = Ne("popup", {
      visible: t
    });
    let y = 0, m = !1;
    const le = () => {
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
      if (!C.value || !h.value || !z.value)
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
        Q(h.value, e)
      ), F = a(), {
        style: M,
        position: b
      } = Ke(n.position, e, o, F, {
        offset: n.popupOffset,
        translate: n.popupTranslate,
        customStyle: n.popupStyle,
        autoFitPosition: n.autoFitPosition
      });
      n.autoFitTransformOrigin && (x.value = {
        transformOrigin: Xe(b)
      }), n.autoFitPopupMinWidth ? M.minWidth = `${o.width}px` : n.autoFitPopupWidth && (M.width = `${o.width}px`), E.value !== b && (E.value = b), N.value = M, n.showArrow && K(() => {
        I.value = Ye(b, o, a(), {
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
      o ? (le(), e !== t.value && (y = window.setTimeout(a, o))) : a();
    }, ue = (e) => {
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
    }, ie = (e) => {
      var o;
      (o = l.onFocusin) == null || o.call(l, e), !(n.disabled || !v.value.includes("focus")) && f(!0, n.focusDelay);
    }, ae = (e) => {
      var o;
      (o = l.onFocusout) == null || o.call(l, e), !(n.disabled || !v.value.includes("focus")) && n.blurToClose && f(!1);
    }, ce = (e) => {
      var o;
      (o = l.onContextmenu) == null || o.call(l, e), !(n.disabled || !v.value.includes("contextMenu") || t.value && !n.clickToClose) && (k(e), f(!t.value), e.preventDefault());
    };
    ye(q, Me({
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
      He(document.documentElement, "mousedown", D), m = !1;
    }, A = xe(r, "content"), se = T(() => {
      var e;
      return n.hideEmpty && je((e = A.value) == null ? void 0 : e.call(A));
    }), D = (e) => {
      var o, a, F;
      if (!((o = C.value) != null && o.contains(e.target) || (a = h.value) != null && a.contains(e.target))) {
        for (const M of O)
          if ((F = M.value) != null && F.contains(e.target))
            return;
        L(), f(!1);
      }
    }, P = Ge(() => {
      t.value && R();
    }), V = () => {
      t.value && R();
    }, de = () => {
      V(), w("resize");
    }, fe = (e) => {
      n.preventFocus && e.preventDefault();
    };
    u == null || u.addChildRef(h);
    const re = T(() => t.value ? n.openedClass : void 0);
    let i;
    H(t, (e) => {
      if (n.clickOutsideToClose && (!e && m ? L() : e && !m && (Y(document.documentElement, "mousedown", D), m = !0)), n.updateAtScroll) {
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
      createResizeObserver: ve,
      destroyResizeObserver: me
    } = Ie({
      elementRef: z,
      onResize: V
    });
    Te(() => {
      if (ve(), t.value && (R(), n.clickOutsideToClose && !m && (Y(document.documentElement, "mousedown", D), m = !0), n.updateAtScroll)) {
        i = J(C.value);
        for (const e of i)
          e.addEventListener("scroll", P);
      }
    }), ge(() => {
      t.value && R();
    }), Ee(() => {
      f(!1);
    }), Pe(() => {
      if (u == null || u.removeChildRef(h), me(), m && L(), i) {
        for (const e of i)
          e.removeEventListener("scroll", P);
        i = void 0;
      }
    });
    const B = c(t.value), S = c(!1), U = () => {
      S.value = !0;
    }, he = () => {
      S.value = !1, t.value && w("show");
    }, pe = () => {
      S.value = !1, t.value || (B.value = !1, w("hide"));
    };
    return () => {
      var e;
      return g.value = ((e = r.default) == null ? void 0 : e.call(r)) ?? [], Ue(g.value, {
        class: re.value,
        onClick: ue,
        onMouseenter: $,
        onMouseleave: j,
        onFocusin: ie,
        onFocusout: ae,
        onContextmenu: ce
      }), s(Se, null, [n.autoFixPosition ? s(X, {
        onResize: de
      }, {
        default: () => [g.value]
      }) : g.value, s(De, null, {
        default: () => [s(Fe, {
          to: oe.value,
          disabled: !n.renderToBody
        }, {
          default: () => [(!n.unmountOnClose || t.value || B.value) && !se.value && s(X, {
            onResize: V
          }, {
            default: () => [s("div", be({
              ref: h,
              class: [p.b(), p.m(E.value)],
              style: {
                ...N.value,
                zIndex: te.value,
                pointerEvents: S.value ? "none" : "auto"
              },
              "trigger-placement": E.value,
              onMouseenter: _,
              onMouseleave: G,
              onMousedown: fe
            }, ee.value), [s(Oe, {
              name: `${$e}-${n.animationName}`,
              duration: n.duration,
              appear: !0,
              onBeforeEnter: U,
              onAfterEnter: he,
              onBeforeLeave: U,
              onAfterLeave: pe
            }, {
              default: () => {
                var o;
                return [ze(s("div", {
                  class: p.e("wrapper"),
                  style: x.value
                }, [s("div", {
                  class: [p.e("content"), n.contentClass],
                  style: n.contentStyle
                }, [(o = r.content) == null ? void 0 : o.call(r)]), n.showArrow && s("div", {
                  ref: ne,
                  class: [p.e("arrow"), p.em("arrow", n.size), n.arrowClass],
                  style: I.value
                }, null)]), [[ke, t.value]])];
              }
            })])]
          })]
        })]
      })]);
    };
  }
});
export {
  sn as default
};
