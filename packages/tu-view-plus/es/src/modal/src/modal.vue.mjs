import { defineComponent as re, toRefs as Ee, ref as y, computed as t, watch as _, onBeforeUnmount as ze, onMounted as Oe, openBlock as a, createBlock as k, unref as l, withCtx as m, Teleport as Le, withDirectives as L, createElementBlock as p, mergeProps as R, createVNode as C, Transition as x, normalizeClass as i, normalizeStyle as N, vShow as S, createCommentVNode as r, createElementVNode as $, withModifiers as ee, resolveDynamicComponent as Re, renderSlot as P, createTextVNode as A, toDisplayString as K } from "vue";
import { modalProps as Ne, modalEmits as Se } from "./modal.mjs";
import { TuOnlyClient as $e } from "../../only-client/index.mjs";
import { useLocale as Pe, useNamespace as V, useTeleportContainer as Ae, usePopupManager as Ke, useDraggable as Ve, useOverflow as Ie } from "@tu-view-plus/hooks";
import { TypeComponentsMap as oe, addUnit as le, getElement as Ge, isFunction as se, isPromise as ae, isBoolean as ne, contains as He, on as Ue, off as Ye, KEYBOARD_KEY as Fe } from "@tu-view-plus/utils";
import { Close as We } from "@tu-view-plus/icons-vue";
import { TuButton as te } from "../../button/index.mjs";
import { TuIcon as ie } from "../../icon/index.mjs";
import "../style/modal.css";
const je = ["onClick", "onMousedown"], qe = re({
  name: "TuModal",
  inheritAttrs: !1
}), so = /* @__PURE__ */ re({
  ...qe,
  props: Ne,
  emits: Se,
  setup(ue, { emit: d }) {
    const o = ue;
    let h = 0, M = !1;
    const { t: I } = Pe(), s = V("modal"), G = V("modal-container"), B = V("modal-wrapper"), { fullscreen: de, popupContainer: ce } = Ee(o), b = y(), H = y(), g = y(o.defaultVisible), D = y(!1), v = y(!1), n = t(() => o.visible ?? g.value), fe = t(() => o.okLoading || v.value), U = t(
      () => oe[o.messageType] || ""
    ), w = y(n.value), E = t(() => o.draggable && !o.fullscreen), me = t(
      () => o.cancelText || I("tu.modal.cancel")
    ), pe = t(() => o.okText || I("tu.modal.confirm")), { teleportContainer: ve, containerRef: Y } = Ae({
      popupContainer: ce,
      visible: n
    }), { zIndex: ye, isLastDialog: ke } = Ke("dialog", {
      visible: n
    }), { position: c, handleMoveDown: F } = Ve({
      wrapperRef: b,
      modalRef: H,
      draggable: E
    }), { setOverflowHidden: W, resetOverflow: j } = Ie(Y), Ce = t(() => ({
      [B.b()]: !0,
      [B.is("align-center")]: o.alignCenter && !o.fullscreen,
      [B.is("moved")]: !!c.value
    })), be = t(() => {
      const e = o.messageType;
      return {
        [s.em("icon", e)]: e && oe[e]
      };
    }), ge = t(() => [
      s.b(),
      o.modalClass,
      {
        [s.m(o.size)]: o.size,
        [s.m("simple")]: o.simple,
        [s.m("draggable")]: E.value,
        [s.m("fullscreen")]: o.fullscreen
      }
    ]), we = t(() => {
      const e = { ...o.modalStyle ?? {} };
      return o.width && (e.width = le(o.width)), !o.alignCenter && o.top && (e.top = le(o.top)), c.value && (e.transform = `translate(${c.value[0]}px, ${c.value[1]}px)`), e;
    }), Te = (e) => {
      o.mask && o.maskClosable && D.value && T(e);
    }, he = (e) => {
      e.target === b.value && (D.value = !0);
    }, Me = async (e) => {
      const f = h, z = await new Promise(async (O) => {
        if (se(o.onBeforeOk)) {
          let u = o.onBeforeOk((Z = !0) => O(Z));
          if ((ae(u) || !ne(u)) && (v.value = !0), ae(u))
            try {
              u = await u ?? !0;
            } catch {
              u = !1;
            }
          ne(u) && O(u);
        } else
          O(!0);
      });
      f === h && (z ? (d("ok", e), q()) : v.value && (v.value = !1));
    }, T = (e) => {
      let f = !0;
      se(o.onBeforeCancel) && (f = o.onBeforeCancel() ?? !1), f && (d("cancel", e), q());
    }, q = () => {
      h++, v.value && (v.value = !1), g.value = !1, d("update:visible", !1);
    }, Be = () => {
      n.value && (!He(b.value, document.activeElement) && document.activeElement instanceof HTMLElement && document.activeElement.blur(), d("open"));
    }, De = () => {
      n.value || (E.value && (c.value = void 0), w.value = !1, j(), d("close"));
    }, J = () => {
      o.escToClose && !M && (M = !0, Ue(document.documentElement, "keydown", X));
    }, Q = () => {
      M = !1, Ye(document.documentElement, "keydown", X);
    }, X = (e) => {
      o.escToClose && e.key === Fe.ESC && ke() && T(e);
    };
    return _(de, () => {
      c.value && (c.value = void 0);
    }), _(n, (e) => {
      g.value !== e && (g.value = e), e ? (d("beforeOpen"), w.value = !0, D.value = !1, W(), J()) : (d("beforeClose"), Q());
    }), ze(() => {
      j(), Q();
    }), Oe(() => {
      Y.value = Ge(o.popupContainer), n.value && (W(), o.escToClose && J());
    }), (e, f) => (a(), k(l($e), null, {
      default: m(() => [
        (a(), k(Le, {
          to: l(ve),
          disabled: !e.renderToBody
        }, [
          !e.unmountOnClose || l(n) || w.value ? L((a(), p("div", R({
            key: 0,
            class: l(G).b(),
            style: { zIndex: l(ye) }
          }, e.$attrs), [
            C(x, {
              name: e.maskAnimationName,
              appear: ""
            }, {
              default: m(() => [
                e.mask ? L((a(), p("div", {
                  key: 0,
                  ref: "maskRef",
                  class: i(l(G).e("mask")),
                  style: N(e.maskStyle)
                }, null, 6)), [
                  [S, l(n)]
                ]) : r("", !0)
              ]),
              _: 1
            }, 8, ["name"]),
            $("div", {
              ref_key: "wrapperRef",
              ref: b,
              class: i(l(Ce)),
              onClick: ee(Te, ["self"]),
              onMousedown: ee(he, ["self"])
            }, [
              C(x, {
                name: e.modalAnimationName,
                appear: "",
                onAfterEnter: Be,
                onAfterLeave: De
              }, {
                default: m(() => [
                  L($("div", {
                    ref_key: "modalRef",
                    ref: H,
                    class: i(l(ge)),
                    style: N(l(we))
                  }, [
                    e.$slots.title || e.title || e.closable ? (a(), p("div", {
                      key: 0,
                      class: i(l(s).e("header")),
                      onMousedown: f[0] || (f[0] = //@ts-ignore
                      (...z) => l(F) && l(F)(...z))
                    }, [
                      e.$slots.title || e.title ? (a(), p("div", {
                        key: 0,
                        class: i([
                          l(s).e("title"),
                          l(s).is(`align-${e.titleAlign}`)
                        ])
                      }, [
                        e.messageType ? (a(), p("div", {
                          key: 0,
                          class: i(l(s).e("title-icon"))
                        }, [
                          l(U) ? (a(), k(l(ie), {
                            key: 0,
                            class: i([l(s).e("icon"), l(be)])
                          }, {
                            default: m(() => [
                              (a(), k(Re(l(U))))
                            ]),
                            _: 1
                          }, 8, ["class"])) : r("", !0)
                        ], 2)) : r("", !0),
                        P(e.$slots, "title", {}, () => [
                          A(K(e.title), 1)
                        ])
                      ], 2)) : r("", !0),
                      !e.simple && e.closable ? (a(), p("div", {
                        key: 1,
                        tabindex: "-1",
                        role: "button",
                        "aria-label": "Close",
                        class: i(l(s).e("icon-close")),
                        onClick: T
                      }, [
                        C(l(ie), null, {
                          default: m(() => [
                            C(l(We))
                          ]),
                          _: 1
                        })
                      ], 2)) : r("", !0)
                    ], 34)) : r("", !0),
                    $("div", {
                      class: i([l(s).e("body"), e.bodyClass]),
                      style: N(e.bodyStyle)
                    }, [
                      P(e.$slots, "default")
                    ], 6),
                    e.footer ? (a(), p("div", {
                      key: 1,
                      class: i(l(s).e("footer"))
                    }, [
                      P(e.$slots, "footer", {}, () => [
                        e.hideCancel ? r("", !0) : (a(), k(l(te), R({ key: 0 }, e.cancelButtonProps, {
                          size: e.size,
                          onClick: T
                        }), {
                          default: m(() => [
                            A(K(l(me)), 1)
                          ]),
                          _: 1
                        }, 16, ["size"])),
                        C(l(te), R({ type: "primary" }, e.okButtonProps, {
                          size: e.size,
                          loading: l(fe),
                          onClick: Me
                        }), {
                          default: m(() => [
                            A(K(l(pe)), 1)
                          ]),
                          _: 1
                        }, 16, ["size", "loading"])
                      ])
                    ], 2)) : r("", !0)
                  ], 6), [
                    [S, l(n)]
                  ])
                ]),
                _: 3
              }, 8, ["name"])
            ], 42, je)
          ], 16)), [
            [S, l(n) || w.value]
          ]) : r("", !0)
        ], 8, ["to", "disabled"]))
      ]),
      _: 3
    }));
  }
});
export {
  so as default
};
