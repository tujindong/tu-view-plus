import { defineComponent as re, toRefs as Ee, ref as y, computed as u, watch as _, onBeforeUnmount as De, onMounted as ze, openBlock as s, createBlock as k, unref as l, withCtx as c, Teleport as Oe, withDirectives as L, createElementBlock as p, mergeProps as R, createVNode as C, Transition as x, normalizeClass as n, normalizeStyle as N, vShow as S, createCommentVNode as i, createElementVNode as $, withModifiers as ee, resolveDynamicComponent as Le, renderSlot as P, createTextVNode as A, toDisplayString as K } from "vue";
import { modalProps as Re, modalEmits as Ne } from "./modal.mjs";
import { TuOnlyClient as Se } from "../../only-client/index.mjs";
import { useLocale as $e, useNamespace as V, useTeleportContainer as Pe, usePopupManager as Ae, useDraggable as Ke, useOverflow as Ve } from "@tu-view-plus/hooks";
import { TypeComponentsMap as oe, addUnit as le, getElement as Ie, isFunction as ae, isPromise as se, isBoolean as te, contains as Ge, on as He, off as Ue, KEYBOARD_KEY as Ye } from "@tu-view-plus/utils";
import { Close as Fe } from "@tu-view-plus/icons-vue";
import { TuButton as ne } from "../../button/index.mjs";
import { TuIcon as ie } from "../../icon/index.mjs";
import "../style/modal.css";
const We = ["onClick", "onMousedown"], je = re({
  name: "TuModal",
  inheritAttrs: !1
}), lo = /* @__PURE__ */ re({
  ...je,
  props: Re,
  emits: Ne,
  setup(ue, { emit: de }) {
    let T = 0, M = !1;
    const o = ue, d = de, { t: I } = $e(), a = V("modal"), G = V("modal-container"), B = V("modal-wrapper"), { fullscreen: me, popupContainer: fe } = Ee(o), b = y(), H = y(), g = y(o.defaultVisible), E = y(!1), v = y(!1), t = u(() => o.visible ?? g.value), ce = u(() => o.okLoading || v.value), U = u(
      () => oe[o.messageType] || ""
    ), w = y(t.value), D = u(() => o.draggable && !o.fullscreen), { teleportContainer: pe, containerRef: Y } = Pe({
      popupContainer: fe,
      visible: t
    }), { zIndex: ve, isLastDialog: ye } = Ae("dialog", {
      visible: t
    }), { position: m, handleMoveDown: F } = Ke({
      wrapperRef: b,
      modalRef: H,
      draggable: D
    }), { setOverflowHidden: W, resetOverflow: j } = Ve(Y), ke = u(() => ({
      [B.b()]: !0,
      [B.is("align-center")]: o.alignCenter && !o.fullscreen,
      [B.is("moved")]: !!m.value
    })), Ce = u(() => {
      const e = o.messageType;
      return {
        [a.em("icon", e)]: e && oe[e]
      };
    }), be = u(() => [
      a.b(),
      o.modalClass,
      {
        [a.m(o.size)]: o.size,
        [a.m("simple")]: o.simple,
        [a.m("draggable")]: D.value,
        [a.m("fullscreen")]: o.fullscreen
      }
    ]), ge = u(() => {
      const e = { ...o.modalStyle ?? {} };
      return o.width && (e.width = le(o.width)), !o.alignCenter && o.top && (e.top = le(o.top)), m.value && (e.transform = `translate(${m.value[0]}px, ${m.value[1]}px)`), e;
    }), we = (e) => {
      o.mask && o.maskClosable && E.value && h(e);
    }, he = (e) => {
      e.target === b.value && (E.value = !0);
    }, Te = async (e) => {
      const f = T, z = await new Promise(async (O) => {
        if (ae(o.onBeforeOk)) {
          let r = o.onBeforeOk((Z = !0) => O(Z));
          if ((se(r) || !te(r)) && (v.value = !0), se(r))
            try {
              r = await r ?? !0;
            } catch {
              r = !1;
            }
          te(r) && O(r);
        } else
          O(!0);
      });
      f === T && (z ? (d("ok", e), q()) : v.value && (v.value = !1));
    }, h = (e) => {
      let f = !0;
      ae(o.onBeforeCancel) && (f = o.onBeforeCancel() ?? !1), f && (d("cancel", e), q());
    }, q = () => {
      T++, v.value && (v.value = !1), g.value = !1, d("update:visible", !1);
    }, Me = () => {
      t.value && (!Ge(b.value, document.activeElement) && document.activeElement instanceof HTMLElement && document.activeElement.blur(), d("open"));
    }, Be = () => {
      t.value || (D.value && (m.value = void 0), w.value = !1, j(), d("close"));
    }, J = () => {
      o.escToClose && !M && (M = !0, He(document.documentElement, "keydown", X));
    }, Q = () => {
      M = !1, Ue(document.documentElement, "keydown", X);
    }, X = (e) => {
      o.escToClose && e.key === Ye.ESC && ye() && h(e);
    };
    return _(me, () => {
      m.value && (m.value = void 0);
    }), _(t, (e) => {
      g.value !== e && (g.value = e), e ? (d("beforeOpen"), w.value = !0, E.value = !1, W(), J()) : (d("beforeClose"), Q());
    }), De(() => {
      j(), Q();
    }), ze(() => {
      Y.value = Ie(o.popupContainer), t.value && (W(), o.escToClose && J());
    }), (e, f) => (s(), k(l(Se), null, {
      default: c(() => [
        (s(), k(Oe, {
          to: l(pe),
          disabled: !e.renderToBody
        }, [
          !e.unmountOnClose || t.value || w.value ? L((s(), p("div", R({
            key: 0,
            class: l(G).b(),
            style: { zIndex: l(ve) }
          }, e.$attrs), [
            C(x, {
              name: e.maskAnimationName,
              appear: ""
            }, {
              default: c(() => [
                e.mask ? L((s(), p("div", {
                  key: 0,
                  ref: "maskRef",
                  class: n(l(G).e("mask")),
                  style: N(e.maskStyle)
                }, null, 6)), [
                  [S, t.value]
                ]) : i("", !0)
              ]),
              _: 1
            }, 8, ["name"]),
            $("div", {
              ref_key: "wrapperRef",
              ref: b,
              class: n(ke.value),
              onClick: ee(we, ["self"]),
              onMousedown: ee(he, ["self"])
            }, [
              C(x, {
                appear: "",
                name: e.modalAnimationName,
                onAfterEnter: Me,
                onAfterLeave: Be
              }, {
                default: c(() => [
                  L($("div", {
                    ref_key: "modalRef",
                    ref: H,
                    class: n(be.value),
                    style: N(ge.value)
                  }, [
                    e.$slots.title || e.title || e.closable ? (s(), p("div", {
                      key: 0,
                      class: n(l(a).e("header")),
                      onMousedown: f[0] || (f[0] = //@ts-ignore
                      (...z) => l(F) && l(F)(...z))
                    }, [
                      e.$slots.title || e.title ? (s(), p("div", {
                        key: 0,
                        class: n([
                          l(a).e("title"),
                          l(a).is(`align-${e.titleAlign}`)
                        ])
                      }, [
                        e.messageType ? (s(), p("div", {
                          key: 0,
                          class: n(l(a).e("title-icon"))
                        }, [
                          U.value ? (s(), k(l(ie), {
                            key: 0,
                            class: n([l(a).e("icon"), Ce.value])
                          }, {
                            default: c(() => [
                              (s(), k(Le(U.value)))
                            ]),
                            _: 1
                          }, 8, ["class"])) : i("", !0)
                        ], 2)) : i("", !0),
                        P(e.$slots, "title", {}, () => [
                          A(K(e.title), 1)
                        ])
                      ], 2)) : i("", !0),
                      !e.simple && e.closable ? (s(), p("div", {
                        key: 1,
                        tabindex: "-1",
                        role: "button",
                        "aria-label": "Close",
                        class: n(l(a).e("icon-close")),
                        onClick: h
                      }, [
                        C(l(ie), null, {
                          default: c(() => [
                            C(l(Fe))
                          ]),
                          _: 1
                        })
                      ], 2)) : i("", !0)
                    ], 34)) : i("", !0),
                    $("div", {
                      class: n([l(a).e("body"), e.bodyClass]),
                      style: N(e.bodyStyle)
                    }, [
                      P(e.$slots, "default")
                    ], 6),
                    e.footer ? (s(), p("div", {
                      key: 1,
                      class: n(l(a).e("footer"))
                    }, [
                      P(e.$slots, "footer", {}, () => [
                        e.hideCancel ? i("", !0) : (s(), k(l(ne), R({ key: 0 }, e.cancelButtonProps, {
                          size: e.size,
                          onClick: h
                        }), {
                          default: c(() => [
                            A(K(e.cancelText || l(I)("tu.modal.cancel")), 1)
                          ]),
                          _: 1
                        }, 16, ["size"])),
                        C(l(ne), R({ type: "primary" }, e.okButtonProps, {
                          size: e.size,
                          loading: ce.value,
                          onClick: Te
                        }), {
                          default: c(() => [
                            A(K(e.okText || l(I)("tu.modal.confirm")), 1)
                          ]),
                          _: 1
                        }, 16, ["size", "loading"])
                      ])
                    ], 2)) : i("", !0)
                  ], 6), [
                    [S, t.value]
                  ])
                ]),
                _: 3
              }, 8, ["name"])
            ], 42, We)
          ], 16)), [
            [S, t.value || w.value]
          ]) : i("", !0)
        ], 8, ["to", "disabled"]))
      ]),
      _: 3
    }));
  }
});
export {
  lo as default
};
