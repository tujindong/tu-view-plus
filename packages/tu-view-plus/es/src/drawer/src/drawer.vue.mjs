import { defineComponent as Q, toRefs as de, ref as z, computed as c, watch as ce, onMounted as fe, onBeforeUnmount as me, openBlock as n, createBlock as T, unref as o, withCtx as f, Teleport as pe, withDirectives as D, createElementBlock as m, mergeProps as O, createVNode as w, Transition as R, normalizeClass as i, vShow as E, createCommentVNode as u, createElementVNode as F, normalizeStyle as ve, renderSlot as h, createTextVNode as L, toDisplayString as P } from "vue";
import { drawerProps as we, drawerEmits as ke } from "./drawer.mjs";
import { TuOnlyClient as ye } from "../../only-client/index.mjs";
import { useLocale as Ce, useNamespace as U, useTeleportContainer as be, usePopupManager as he, useOverflow as ge } from "@tu-view-plus/hooks";
import { addUnit as Y, isFunction as H, isPromise as j, isBoolean as q, on as Be, KEYBOARD_KEY as ze, off as Te } from "@tu-view-plus/utils";
import { Close as De } from "@tu-view-plus/icons-vue";
import { TuButton as J } from "../../button/index.mjs";
import { TuIcon as Oe } from "../../icon/index.mjs";
import "../style/drawer.css";
const Ee = Q({
  name: "TuDrawer",
  inheritAttrs: !1
}), Ge = /* @__PURE__ */ Q({
  ...Ee,
  props: we,
  emits: ke,
  setup(W, { emit: a }) {
    const t = W;
    let g = 0, k = !1;
    const { t: S } = Ce(), r = U("drawer"), N = U("drawer-container"), { popupContainer: X } = de(t), y = z(t.defaultVisible), d = z(!1), l = c(() => t.visible ?? y.value), Z = c(() => t.okLoading || d.value), p = z(l.value), { teleportContainer: _, containerRef: C } = be({
      popupContainer: X,
      visible: l
    }), { zIndex: x, isLastDialog: ee } = he("dialog", {
      visible: l
    }), { setOverflowHidden: $, resetOverflow: K } = ge(C), oe = c(() => (C == null ? void 0 : C.value) === document.body), te = c(() => oe.value ? { zIndex: x.value } : { zIndex: "inherit", position: "absolute" }), le = c(() => ({
      [r.b()]: !0,
      [r.m(t.size)]: t.size
    })), ne = c(() => {
      const e = {
        [t.placement]: 0,
        ...t.drawerStyle
      };
      return ["right", "left"].includes(t.placement) && (e.width = Y(t.width)), ["top", "bottom"].includes(t.placement) && (e.height = Y(t.height)), e;
    }), se = (e) => {
      t.maskClosable && b(e);
    }, b = (e) => {
      let v = !0;
      H(t.onBeforeCancel) && (v = t.onBeforeCancel() ?? !1), v && (a("cancel", e), V());
    }, ae = async (e) => {
      const v = g, ue = await new Promise(async (B) => {
        if (H(t.onBeforeOk)) {
          let s = t.onBeforeOk((M = !0) => B(M));
          if ((j(s) || !q(s)) && (d.value = !0), j(s))
            try {
              s = await s ?? !0;
            } catch {
              s = !1;
            }
          q(s) && B(s);
        } else
          B(!0);
      });
      v === g && (ue ? (a("ok", e), V()) : d.value && (d.value = !1));
    }, V = () => {
      g++, d.value && (d.value = !1), y.value = !1, a("update:visible", !1);
    }, re = () => {
      l.value && a("open");
    }, ie = () => {
      l.value || (p.value = !1, K(), a("close"));
    }, A = () => {
      t.escToClose && !k && (k = !0, Be(document.documentElement, "keydown", G));
    }, I = () => {
      k && (k = !1, Te(document.documentElement, "keydown", G));
    }, G = (e) => {
      t.escToClose && e.key === ze.ESC && ee() && b(e);
    };
    return ce(l, (e) => {
      y.value !== e && (y.value = e), e ? (a("beforeOpen"), p.value = !0, $(), A()) : (a("beforeClose"), I());
    }), fe(() => {
      l.value && (p.value = !0, $(), A());
    }), me(() => {
      K(), I();
    }), (e, v) => (n(), T(o(ye), null, {
      default: f(() => [
        (n(), T(pe, {
          to: o(_),
          disabled: !e.renderToBody
        }, [
          !e.unmountOnClose || o(l) || p.value ? D((n(), m("div", O({
            key: 0,
            class: o(N).b(),
            style: o(te)
          }, e.$attrs), [
            w(R, { name: "fade-drawer" }, {
              default: f(() => [
                e.mask ? D((n(), m("div", {
                  key: 0,
                  class: i(o(N).e("mask")),
                  onClick: se
                }, null, 2)), [
                  [E, o(l)]
                ]) : u("", !0)
              ]),
              _: 1
            }),
            w(R, {
              name: `slider-drawer-${e.placement}`,
              appear: "",
              onAfterEnter: re,
              onAfterLeave: ie
            }, {
              default: f(() => [
                D(F("div", {
                  class: i(o(le)),
                  style: ve(o(ne))
                }, [
                  e.header ? (n(), m("div", {
                    key: 0,
                    class: i(o(r).e("header"))
                  }, [
                    h(e.$slots, "header", {}, () => [
                      e.$slots.title || e.title ? (n(), m("div", {
                        key: 0,
                        class: i(o(r).e("title"))
                      }, [
                        h(e.$slots, "title", {}, () => [
                          L(P(e.title), 1)
                        ])
                      ], 2)) : u("", !0),
                      e.closable ? (n(), m("div", {
                        key: 1,
                        tabindex: "-1",
                        role: "button",
                        "aria-label": "Close",
                        class: i(o(r).e("icon")),
                        onClick: b
                      }, [
                        w(o(Oe), null, {
                          default: f(() => [
                            w(o(De))
                          ]),
                          _: 1
                        })
                      ], 2)) : u("", !0)
                    ])
                  ], 2)) : u("", !0),
                  F("div", {
                    class: i(o(r).e("body"))
                  }, [
                    h(e.$slots, "default")
                  ], 2),
                  e.footer ? (n(), m("div", {
                    key: 1,
                    class: i(o(r).e("footer"))
                  }, [
                    h(e.$slots, "footer", {}, () => [
                      e.hideCancel ? u("", !0) : (n(), T(o(J), O({ key: 0 }, e.cancelButtonProps, {
                        size: e.size,
                        onClick: b
                      }), {
                        default: f(() => [
                          L(P(e.cancelText || o(S)("tu.drawer.cancel")), 1)
                        ]),
                        _: 1
                      }, 16, ["size"])),
                      w(o(J), O({ type: "primary" }, e.okButtonProps, {
                        size: e.size,
                        loading: o(Z),
                        onClick: ae
                      }), {
                        default: f(() => [
                          L(P(e.okText || o(S)("tu.drawer.confirm")), 1)
                        ]),
                        _: 1
                      }, 16, ["size", "loading"])
                    ])
                  ], 2)) : u("", !0)
                ], 6), [
                  [E, o(l)]
                ])
              ]),
              _: 3
            }, 8, ["name"])
          ], 16)), [
            [E, o(l) || p.value]
          ]) : u("", !0)
        ], 8, ["to", "disabled"]))
      ]),
      _: 3
    }));
  }
});
export {
  Ge as default
};
