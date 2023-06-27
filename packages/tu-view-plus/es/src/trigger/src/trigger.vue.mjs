import { defineComponent as Re, toRefs as we, computed as T, inject as Ce, ref as c, provide as ye, reactive as Me, watch as H, onMounted as Te, onUpdated as Ee, onDeactivated as Pe, onBeforeUnmount as ge, createVNode as s, Fragment as Se, Teleport as Fe, mergeProps as be, Transition as Oe, withDirectives as ke, vShow as ze, nextTick as K } from "vue";
import { triggerProps as Le } from "./triggerProps.mjs";
import { TuOnlyClient as Ae } from "../../only-client/index.mjs";
import { TuResizeObserver as X } from "../../resize-observer/index.mjs";
import { useFirstElement as De, useNamespace as Ve, useTeleportContainer as Be, usePopupManager as We, usePickSlots as xe, useResizeObserver as Ie } from "@tu-view-plus/hooks";
import { omit as Ne, isEmptyChildren as _e, throttleByRaf as je, on as Y, mergeFirstChild as Ge, off as Ue } from "@tu-view-plus/utils";
import { triggerInjectionKey as q } from "./constant.mjs";
import { getScrollElements as J, getElementScrollRect as Q, getPopupStyle as $e, getTransformOrigin as He, getArrowStyle as Ke } from "./utils.mjs";
import "../style/trigger.css";
const Xe = ["onClick", "onMouseenter", "onMouseleave", "onFocusin", "onFocusout", "onContextmenu"], an = /* @__PURE__ */ Re({
  name: "TuTrigger",
  props: Le,
  setup(n, {
    emit: R,
    slots: r,
    attrs: l
  }) {
    const {
      popupContainer: Z
    } = we(n), ee = T(() => Ne(l, Xe)), v = T(() => [].concat(n.trigger)), O = /* @__PURE__ */ new Set(), u = Ce(q, void 0), {
      children: E,
      firstElement: w
    } = De(), h = c(), W = c(n.defaultPopupVisible), P = c(n.position), x = c({}), I = c({}), N = c({}), ne = c(), d = c({
      top: 0,
      left: 0
    }), t = T(() => n.popupVisible ?? W.value), C = Ve("popup"), {
      teleportContainer: oe,
      containerRef: k
    } = Be({
      popupContainer: Z,
      visible: t,
      documentContainer: !0
    }), {
      zIndex: te
    } = We("popup", {
      visible: t
    });
    let y = 0, m = !1;
    const le = () => {
      y && (window.clearTimeout(y), y = 0);
    }, z = (e) => {
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
    }, p = () => {
      if (!w.value || !h.value || !k.value)
        return;
      const e = k.value.getBoundingClientRect(), o = n.alignPoint ? {
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
      } : Q(w.value, e), a = () => (
        // @ts-ignore
        Q(h.value, e)
      ), F = a(), {
        style: M,
        position: b
      } = $e(n.position, e, o, F, {
        offset: n.popupOffset,
        translate: n.popupTranslate,
        customStyle: n.popupStyle,
        autoFitPosition: n.autoFitPosition
      });
      n.autoFitTransformOrigin && (I.value = {
        transformOrigin: He(b)
      }), n.autoFitPopupMinWidth ? M.minWidth = `${o.width}px` : n.autoFitPopupWidth && (M.width = `${o.width}px`), P.value !== b && (P.value = b), x.value = M, n.showArrow && K(() => {
        N.value = Ke(b, o, a(), {
          customStyle: n.arrowStyle
        });
      });
    }, f = (e, o) => {
      if (e === t.value && y === 0)
        return;
      const a = () => {
        W.value = e, R("update:popupVisible", e), R("popupVisibleChange", e), e && K(() => {
          p();
        });
      };
      o ? (le(), e !== t.value && (y = window.setTimeout(a, o))) : a();
    }, ue = (e) => {
      var o;
      (o = l.onClick) == null || o.call(l, e), !(n.disabled || t.value && !n.clickToClose) && (v.value.includes("click") ? (z(e), f(!t.value)) : v.value.includes("contextMenu") && t.value && f(!1));
    }, _ = (e) => {
      var o;
      (o = l.onMouseenter) == null || o.call(l, e), !(n.disabled || !v.value.includes("hover")) && (z(e), f(!0, n.mouseEnterDelay));
    }, j = (e) => {
      u == null || u.onMouseenter(e), _(e);
    }, G = (e) => {
      var o;
      (o = l.onMouseleave) == null || o.call(l, e), !(n.disabled || !v.value.includes("hover")) && f(!1, n.mouseLeaveDelay);
    }, U = (e) => {
      u == null || u.onMouseleave(e), G(e);
    }, ie = (e) => {
      var o;
      (o = l.onFocusin) == null || o.call(l, e), !(n.disabled || !v.value.includes("focus")) && f(!0, n.focusDelay);
    }, ae = (e) => {
      var o;
      (o = l.onFocusout) == null || o.call(l, e), !(n.disabled || !v.value.includes("focus")) && n.blurToClose && f(!1);
    }, ce = (e) => {
      var o;
      (o = l.onContextmenu) == null || o.call(l, e), !(n.disabled || !v.value.includes("contextMenu") || t.value && !n.clickToClose) && (z(e), f(!t.value), e.preventDefault());
    };
    ye(q, Me({
      onMouseenter: j,
      onMouseleave: U,
      addChildRef: (e) => {
        O.add(e), u == null || u.addChildRef(e);
      },
      removeChildRef: (e) => {
        O.delete(e), u == null || u.removeChildRef(e);
      }
    }));
    const L = () => {
      Ue(document.documentElement, "mousedown", D), m = !1;
    }, A = xe(r, "content"), se = T(() => {
      var e;
      return n.hideEmpty && _e((e = A.value) == null ? void 0 : e.call(A));
    }), D = (e) => {
      var o, a, F;
      if (!((o = w.value) != null && o.contains(e.target) || (a = h.value) != null && a.contains(e.target))) {
        for (const M of O)
          if ((F = M.value) != null && F.contains(e.target))
            return;
        L(), f(!1);
      }
    }, g = je(() => {
      t.value && p();
    }), V = () => {
      t.value && p();
    }, de = () => {
      V(), R("resize");
    }, fe = (e) => {
      n.preventFocus && e.preventDefault();
    };
    u == null || u.addChildRef(h);
    const re = T(() => t.value ? n.openedClass : void 0);
    let i;
    H(t, (e) => {
      if (n.clickOutsideToClose && (!e && m ? L() : e && !m && (Y(document.documentElement, "mousedown", D), m = !0)), n.updateAtScroll) {
        if (e) {
          i = J(w.value);
          for (const o of i)
            o.addEventListener("scroll", g);
        } else if (i) {
          for (const o of i)
            o.removeEventListener("scroll", g);
          i = void 0;
        }
      }
      e && (B.value = !0);
    }), H(() => [n.autoFitPopupWidth, n.autoFitPopupMinWidth], () => {
      t.value && p();
    });
    const {
      createResizeObserver: ve,
      destroyResizeObserver: me
    } = Ie({
      elementRef: k,
      onResize: V
    });
    Te(() => {
      if (ve(), t.value && (p(), n.clickOutsideToClose && !m && (Y(document.documentElement, "mousedown", D), m = !0), n.updateAtScroll)) {
        i = J(w.value);
        for (const e of i)
          e.addEventListener("scroll", g);
      }
    }), Ee(() => {
      t.value && p();
    }), Pe(() => {
      f(!1);
    }), ge(() => {
      if (u == null || u.removeChildRef(h), me(), m && L(), i) {
        for (const e of i)
          e.removeEventListener("scroll", g);
        i = void 0;
      }
    });
    const B = c(t.value), S = c(!1), $ = () => {
      S.value = !0;
    }, he = () => {
      S.value = !1, t.value && R("show");
    }, pe = () => {
      S.value = !1, t.value || (B.value = !1, R("hide"));
    };
    return () => {
      var e;
      return E.value = ((e = r.default) == null ? void 0 : e.call(r)) ?? [], Ge(E.value, {
        class: re.value,
        onClick: ue,
        onMouseenter: _,
        onMouseleave: G,
        onFocusin: ie,
        onFocusout: ae,
        onContextmenu: ce
      }), s(Se, null, [n.autoFixPosition ? s(X, {
        onResize: de
      }, {
        default: () => [E.value]
      }) : E.value, s(Ae, null, {
        default: () => [s(Fe, {
          to: oe.value,
          disabled: !n.renderToBody
        }, {
          default: () => [(!n.unmountOnClose || t.value || B.value) && !se.value && s(X, {
            onResize: V
          }, {
            default: () => [s("div", be({
              ref: h,
              class: [C.b(), C.m(P.value)],
              style: {
                ...x.value,
                zIndex: te.value,
                pointerEvents: S.value ? "none" : "auto"
              },
              "trigger-placement": P.value,
              onMouseenter: j,
              onMouseleave: U,
              onMousedown: fe
            }, ee.value), [s(Oe, {
              name: n.animationName,
              duration: n.duration,
              appear: !0,
              onBeforeEnter: $,
              onAfterEnter: he,
              onBeforeLeave: $,
              onAfterLeave: pe
            }, {
              default: () => {
                var o;
                return [ke(s("div", {
                  class: C.e("wrapper"),
                  style: I.value
                }, [s("div", {
                  class: [C.e("content"), n.contentClass],
                  style: n.contentStyle
                }, [(o = r.content) == null ? void 0 : o.call(r)]), n.showArrow && s("div", {
                  ref: ne,
                  class: [C.e("arrow"), n.arrowClass],
                  style: N.value
                }, null)]), [[ze, t.value]])];
              }
            })])]
          })]
        })]
      })]);
    };
  }
});
export {
  an as default
};
