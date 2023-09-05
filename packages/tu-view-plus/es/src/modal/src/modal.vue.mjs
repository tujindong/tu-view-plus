import { defineComponent as re, toRefs as Be, ref as y, computed as u, watch as _, onBeforeUnmount as Ee, onMounted as De, openBlock as a, createBlock as k, unref as o, withCtx as m, Teleport as ze, withDirectives as L, createElementBlock as p, mergeProps as R, createVNode as C, Transition as x, normalizeClass as t, normalizeStyle as N, vShow as S, createCommentVNode as i, createElementVNode as $, withModifiers as ee, resolveDynamicComponent as Oe, renderSlot as P, createTextVNode as A, toDisplayString as K } from "vue";
import { modalProps as Le, modalEmits as Re } from "./modal.mjs";
import { TuOnlyClient as Ne } from "../../only-client/index.mjs";
import { useLocale as Se, useNamespace as V, useTeleportContainer as $e, usePopupManager as Pe, useDraggable as Ae, useOverflow as Ke } from "@tu-view-plus/hooks";
import { TypeComponentsMap as oe, addUnit as le, getElement as Ve, isFunction as se, isPromise as ae, isBoolean as ne, contains as Ie, on as Ge, off as He, KEYBOARD_KEY as Ue } from "@tu-view-plus/utils";
import { Close as Ye } from "@tu-view-plus/icons-vue";
import { TuButton as te } from "../../button/index.mjs";
import { TuIcon as ie } from "../../icon/index.mjs";
import "../style/modal.css";
const Fe = ["onClick", "onMousedown"], We = re({
  name: "TuModal",
  inheritAttrs: !1
}), oo = /* @__PURE__ */ re({
  ...We,
  props: Le,
  emits: Re,
  setup(ue, { emit: d }) {
    const l = ue;
    let T = 0, M = !1;
    const { t: I } = Se(), s = V("modal"), G = V("modal-container"), B = V("modal-wrapper"), { fullscreen: de, popupContainer: fe } = Be(l), b = y(), H = y(), g = y(l.defaultVisible), E = y(!1), v = y(!1), n = u(() => l.visible ?? g.value), ce = u(() => l.okLoading || v.value), U = u(
      () => oe[l.messageType] || ""
    ), w = y(n.value), D = u(() => l.draggable && !l.fullscreen), { teleportContainer: me, containerRef: Y } = $e({
      popupContainer: fe,
      visible: n
    }), { zIndex: pe, isLastDialog: ve } = Pe("dialog", {
      visible: n
    }), { position: f, handleMoveDown: F } = Ae({
      wrapperRef: b,
      modalRef: H,
      draggable: D
    }), { setOverflowHidden: W, resetOverflow: j } = Ke(Y), ye = u(() => ({
      [B.b()]: !0,
      [B.is("align-center")]: l.alignCenter && !l.fullscreen,
      [B.is("moved")]: !!f.value
    })), ke = u(() => {
      const e = l.messageType;
      return {
        [s.em("icon", e)]: e && oe[e]
      };
    }), Ce = u(() => [
      s.b(),
      l.modalClass,
      {
        [s.m(l.size)]: l.size,
        [s.m("simple")]: l.simple,
        [s.m("draggable")]: D.value,
        [s.m("fullscreen")]: l.fullscreen
      }
    ]), be = u(() => {
      const e = { ...l.modalStyle ?? {} };
      return l.width && (e.width = le(l.width)), !l.alignCenter && l.top && (e.top = le(l.top)), f.value && (e.transform = `translate(${f.value[0]}px, ${f.value[1]}px)`), e;
    }), ge = (e) => {
      l.mask && l.maskClosable && E.value && h(e);
    }, we = (e) => {
      e.target === b.value && (E.value = !0);
    }, he = async (e) => {
      const c = T, z = await new Promise(async (O) => {
        if (se(l.onBeforeOk)) {
          let r = l.onBeforeOk((Z = !0) => O(Z));
          if ((ae(r) || !ne(r)) && (v.value = !0), ae(r))
            try {
              r = await r ?? !0;
            } catch {
              r = !1;
            }
          ne(r) && O(r);
        } else
          O(!0);
      });
      c === T && (z ? (d("ok", e), q()) : v.value && (v.value = !1));
    }, h = (e) => {
      let c = !0;
      se(l.onBeforeCancel) && (c = l.onBeforeCancel() ?? !1), c && (d("cancel", e), q());
    }, q = () => {
      T++, v.value && (v.value = !1), g.value = !1, d("update:visible", !1);
    }, Te = () => {
      n.value && (!Ie(b.value, document.activeElement) && document.activeElement instanceof HTMLElement && document.activeElement.blur(), d("open"));
    }, Me = () => {
      n.value || (D.value && (f.value = void 0), w.value = !1, j(), d("close"));
    }, J = () => {
      l.escToClose && !M && (M = !0, Ge(document.documentElement, "keydown", X));
    }, Q = () => {
      M = !1, He(document.documentElement, "keydown", X);
    }, X = (e) => {
      l.escToClose && e.key === Ue.ESC && ve() && h(e);
    };
    return _(de, () => {
      f.value && (f.value = void 0);
    }), _(n, (e) => {
      g.value !== e && (g.value = e), e ? (d("beforeOpen"), w.value = !0, E.value = !1, W(), J()) : (d("beforeClose"), Q());
    }), Ee(() => {
      j(), Q();
    }), De(() => {
      Y.value = Ve(l.popupContainer), n.value && (W(), l.escToClose && J());
    }), (e, c) => (a(), k(o(Ne), null, {
      default: m(() => [
        (a(), k(ze, {
          to: o(me),
          disabled: !e.renderToBody
        }, [
          !e.unmountOnClose || o(n) || w.value ? L((a(), p("div", R({
            key: 0,
            class: o(G).b(),
            style: { zIndex: o(pe) }
          }, e.$attrs), [
            C(x, {
              name: e.maskAnimationName,
              appear: ""
            }, {
              default: m(() => [
                e.mask ? L((a(), p("div", {
                  key: 0,
                  ref: "maskRef",
                  class: t(o(G).e("mask")),
                  style: N(e.maskStyle)
                }, null, 6)), [
                  [S, o(n)]
                ]) : i("", !0)
              ]),
              _: 1
            }, 8, ["name"]),
            $("div", {
              ref_key: "wrapperRef",
              ref: b,
              class: t(o(ye)),
              onClick: ee(ge, ["self"]),
              onMousedown: ee(we, ["self"])
            }, [
              C(x, {
                appear: "",
                name: e.modalAnimationName,
                onAfterEnter: Te,
                onAfterLeave: Me
              }, {
                default: m(() => [
                  L($("div", {
                    ref_key: "modalRef",
                    ref: H,
                    class: t(o(Ce)),
                    style: N(o(be))
                  }, [
                    e.$slots.title || e.title || e.closable ? (a(), p("div", {
                      key: 0,
                      class: t(o(s).e("header")),
                      onMousedown: c[0] || (c[0] = //@ts-ignore
                      (...z) => o(F) && o(F)(...z))
                    }, [
                      e.$slots.title || e.title ? (a(), p("div", {
                        key: 0,
                        class: t([
                          o(s).e("title"),
                          o(s).is(`align-${e.titleAlign}`)
                        ])
                      }, [
                        e.messageType ? (a(), p("div", {
                          key: 0,
                          class: t(o(s).e("title-icon"))
                        }, [
                          o(U) ? (a(), k(o(ie), {
                            key: 0,
                            class: t([o(s).e("icon"), o(ke)])
                          }, {
                            default: m(() => [
                              (a(), k(Oe(o(U))))
                            ]),
                            _: 1
                          }, 8, ["class"])) : i("", !0)
                        ], 2)) : i("", !0),
                        P(e.$slots, "title", {}, () => [
                          A(K(e.title), 1)
                        ])
                      ], 2)) : i("", !0),
                      !e.simple && e.closable ? (a(), p("div", {
                        key: 1,
                        tabindex: "-1",
                        role: "button",
                        "aria-label": "Close",
                        class: t(o(s).e("icon-close")),
                        onClick: h
                      }, [
                        C(o(ie), null, {
                          default: m(() => [
                            C(o(Ye))
                          ]),
                          _: 1
                        })
                      ], 2)) : i("", !0)
                    ], 34)) : i("", !0),
                    $("div", {
                      class: t([o(s).e("body"), e.bodyClass]),
                      style: N(e.bodyStyle)
                    }, [
                      P(e.$slots, "default")
                    ], 6),
                    e.footer ? (a(), p("div", {
                      key: 1,
                      class: t(o(s).e("footer"))
                    }, [
                      P(e.$slots, "footer", {}, () => [
                        e.hideCancel ? i("", !0) : (a(), k(o(te), R({ key: 0 }, e.cancelButtonProps, {
                          size: e.size,
                          onClick: h
                        }), {
                          default: m(() => [
                            A(K(e.cancelText || o(I)("tu.modal.cancel")), 1)
                          ]),
                          _: 1
                        }, 16, ["size"])),
                        C(o(te), R({ type: "primary" }, e.okButtonProps, {
                          size: e.size,
                          loading: o(ce),
                          onClick: he
                        }), {
                          default: m(() => [
                            A(K(e.okText || o(I)("tu.modal.confirm")), 1)
                          ]),
                          _: 1
                        }, 16, ["size", "loading"])
                      ])
                    ], 2)) : i("", !0)
                  ], 6), [
                    [S, o(n)]
                  ])
                ]),
                _: 3
              }, 8, ["name"])
            ], 42, Fe)
          ], 16)), [
            [S, o(n) || w.value]
          ]) : i("", !0)
        ], 8, ["to", "disabled"]))
      ]),
      _: 3
    }));
  }
});
export {
  oo as default
};
