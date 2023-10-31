import { defineComponent as Q, toRefs as ce, ref as z, computed as c, watch as fe, onMounted as me, onBeforeUnmount as pe, openBlock as a, createBlock as T, unref as t, withCtx as f, Teleport as ve, withDirectives as D, createElementBlock as m, mergeProps as O, createVNode as w, Transition as R, normalizeClass as i, vShow as E, createCommentVNode as u, createElementVNode as F, normalizeStyle as we, renderSlot as h, createTextVNode as L, toDisplayString as P } from "vue";
import { drawerProps as ke, drawerEmits as ye } from "./drawer.mjs";
import { TuOnlyClient as Ce } from "../../only-client/index.mjs";
import { useLocale as be, useNamespace as U, useTeleportContainer as he, usePopupManager as ge, useOverflow as Be } from "@tu-view-plus/hooks";
import { addUnit as Y, isFunction as H, isPromise as j, isBoolean as q, on as ze, KEYBOARD_KEY as Te, off as De } from "@tu-view-plus/utils";
import { Close as Oe } from "@tu-view-plus/icons-vue";
import { TuButton as J } from "../../button/index.mjs";
import { TuIcon as Ee } from "../../icon/index.mjs";
import "../style/drawer.css";
const Le = Q({
  name: "TuDrawer",
  inheritAttrs: !1
}), Me = /* @__PURE__ */ Q({
  ...Le,
  props: ke,
  emits: ye,
  setup(W, { emit: X }) {
    let g = 0, k = !1;
    const o = W, s = X, { t: S } = be(), r = U("drawer"), N = U("drawer-container"), { popupContainer: Z } = ce(o), y = z(o.defaultVisible), d = z(!1), l = c(() => o.visible ?? y.value), _ = c(() => o.okLoading || d.value), p = z(l.value), { teleportContainer: x, containerRef: C } = he({
      popupContainer: Z,
      visible: l
    }), { zIndex: ee, isLastDialog: oe } = ge("dialog", {
      visible: l
    }), { setOverflowHidden: $, resetOverflow: K } = Be(C), te = c(() => (C == null ? void 0 : C.value) === document.body), le = c(() => te.value ? { zIndex: ee.value } : { zIndex: "inherit", position: "absolute" }), ae = c(() => ({
      [r.b()]: !0,
      [r.m(o.size)]: o.size
    })), ne = c(() => {
      const e = {
        [o.placement]: 0,
        ...o.drawerStyle
      };
      return ["right", "left"].includes(o.placement) && (e.width = Y(o.width)), ["top", "bottom"].includes(o.placement) && (e.height = Y(o.height)), e;
    }), se = (e) => {
      o.maskClosable && b(e);
    }, b = (e) => {
      let v = !0;
      H(o.onBeforeCancel) && (v = o.onBeforeCancel() ?? !1), v && (s("cancel", e), V());
    }, re = async (e) => {
      const v = g, de = await new Promise(async (B) => {
        if (H(o.onBeforeOk)) {
          let n = o.onBeforeOk((M = !0) => B(M));
          if ((j(n) || !q(n)) && (d.value = !0), j(n))
            try {
              n = await n ?? !0;
            } catch {
              n = !1;
            }
          q(n) && B(n);
        } else
          B(!0);
      });
      v === g && (de ? (s("ok", e), V()) : d.value && (d.value = !1));
    }, V = () => {
      g++, d.value && (d.value = !1), y.value = !1, s("update:visible", !1);
    }, ie = () => {
      l.value && s("open");
    }, ue = () => {
      l.value || (p.value = !1, K(), s("close"));
    }, A = () => {
      o.escToClose && !k && (k = !0, ze(document.documentElement, "keydown", G));
    }, I = () => {
      k && (k = !1, De(document.documentElement, "keydown", G));
    }, G = (e) => {
      o.escToClose && e.key === Te.ESC && oe() && b(e);
    };
    return fe(l, (e) => {
      y.value !== e && (y.value = e), e ? (s("beforeOpen"), p.value = !0, $(), A()) : (s("beforeClose"), I());
    }), me(() => {
      l.value && (p.value = !0, $(), A());
    }), pe(() => {
      K(), I();
    }), (e, v) => (a(), T(t(Ce), null, {
      default: f(() => [
        (a(), T(ve, {
          to: t(x),
          disabled: !e.renderToBody
        }, [
          !e.unmountOnClose || l.value || p.value ? D((a(), m("div", O({
            key: 0,
            class: t(N).b(),
            style: le.value
          }, e.$attrs), [
            w(R, { name: "fade-drawer" }, {
              default: f(() => [
                e.mask ? D((a(), m("div", {
                  key: 0,
                  class: i(t(N).e("mask")),
                  onClick: se
                }, null, 2)), [
                  [E, l.value]
                ]) : u("", !0)
              ]),
              _: 1
            }),
            w(R, {
              name: `slider-drawer-${e.placement}`,
              appear: "",
              onAfterEnter: ie,
              onAfterLeave: ue
            }, {
              default: f(() => [
                D(F("div", {
                  class: i(ae.value),
                  style: we(ne.value)
                }, [
                  e.header ? (a(), m("div", {
                    key: 0,
                    class: i(t(r).e("header"))
                  }, [
                    h(e.$slots, "header", {}, () => [
                      e.$slots.title || e.title ? (a(), m("div", {
                        key: 0,
                        class: i(t(r).e("title"))
                      }, [
                        h(e.$slots, "title", {}, () => [
                          L(P(e.title), 1)
                        ])
                      ], 2)) : u("", !0),
                      e.closable ? (a(), m("div", {
                        key: 1,
                        tabindex: "-1",
                        role: "button",
                        "aria-label": "Close",
                        class: i(t(r).e("icon")),
                        onClick: b
                      }, [
                        w(t(Ee), null, {
                          default: f(() => [
                            w(t(Oe))
                          ]),
                          _: 1
                        })
                      ], 2)) : u("", !0)
                    ])
                  ], 2)) : u("", !0),
                  F("div", {
                    class: i(t(r).e("body"))
                  }, [
                    h(e.$slots, "default")
                  ], 2),
                  e.footer ? (a(), m("div", {
                    key: 1,
                    class: i(t(r).e("footer"))
                  }, [
                    h(e.$slots, "footer", {}, () => [
                      e.hideCancel ? u("", !0) : (a(), T(t(J), O({ key: 0 }, e.cancelButtonProps, {
                        size: e.size,
                        onClick: b
                      }), {
                        default: f(() => [
                          L(P(e.cancelText || t(S)("tu.drawer.cancel")), 1)
                        ]),
                        _: 1
                      }, 16, ["size"])),
                      w(t(J), O({ type: "primary" }, e.okButtonProps, {
                        size: e.size,
                        loading: _.value,
                        onClick: re
                      }), {
                        default: f(() => [
                          L(P(e.okText || t(S)("tu.drawer.confirm")), 1)
                        ]),
                        _: 1
                      }, 16, ["size", "loading"])
                    ])
                  ], 2)) : u("", !0)
                ], 6), [
                  [E, l.value]
                ])
              ]),
              _: 3
            }, 8, ["name"])
          ], 16)), [
            [E, l.value || p.value]
          ]) : u("", !0)
        ], 8, ["to", "disabled"]))
      ]),
      _: 3
    }));
  }
});
export {
  Me as default
};
