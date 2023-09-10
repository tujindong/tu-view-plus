import { defineComponent as O, ref as h, computed as a, resolveComponent as G, openBlock as u, createBlock as C, unref as o, normalizeClass as l, withCtx as c, createElementVNode as y, createElementBlock as H, resolveDynamicComponent as J, createCommentVNode as v, renderSlot as B, createTextVNode as k, toDisplayString as g, createVNode as T, mergeProps as N } from "vue";
import { popconfirmProps as K, popconfirmEmits as Q } from "./popconfirm.mjs";
import { TuTrigger as U } from "../../trigger/index.mjs";
import { TuIcon as W } from "../../icon/index.mjs";
import { useLocale as X, useNamespace as Y } from "@tu-view-plus/hooks";
import { TypeComponentsMap as z, isFunction as L, isPromise as S, isBoolean as E } from "@tu-view-plus/utils";
import "../style/popconfirm.css";
const Z = O({
  name: "TuPopconfirm"
}), re = /* @__PURE__ */ O({
  ...Z,
  props: K,
  emits: Q,
  setup(_, { emit: r }) {
    const n = _;
    let f = 0;
    const { t: b } = X(), t = Y("popconfirm"), m = h(n.defaultPopupVisible), p = h(!1), D = a(
      () => n.popupVisible ?? m.value
    ), R = a(() => n.okLoading || p.value), w = a(() => z[n.type] || ""), $ = a(() => {
      const e = n.type;
      return {
        [t.em("icon", e)]: e && z[e]
      };
    }), F = a(() => ({
      [t.b()]: !0,
      [t.m(n.size)]: n.size
    })), I = a(() => [
      t.e("popup-content"),
      n.contentClass
    ]), M = a(() => [
      t.e("popup-arrow"),
      n.arrowClass
    ]), d = () => {
      f++, p.value && (p.value = !1), m.value = !1, r("update:popupVisible", !1), r("popupVisibleChange", !1);
    }, j = (e) => {
      e ? (m.value = e, r("update:popupVisible", e), r("popupVisibleChange", e)) : d();
    }, q = () => {
      let e = !0;
      L(n.onBeforeCancel) && (e = n.onBeforeCancel() ?? !1), e && (r("cancel"), d());
    }, A = async () => {
      const e = f, V = await new Promise(async (i) => {
        if (L(n.onBeforeOk)) {
          let s = n.onBeforeOk((P = !0) => i(P));
          if ((S(s) || !E(s)) && (p.value = !0), S(s))
            try {
              s = await s ?? !0;
            } catch {
              s = !1;
            }
          E(s) && i(s);
        } else
          i(!0);
      });
      e === f && (V ? (r("ok"), d()) : p.value && (p.value = !1));
    };
    return (e, V) => {
      const i = G("tu-button");
      return u(), C(o(U), {
        "show-arrow": "",
        trigger: "click",
        "animation-name": "zoom-in-fade-out",
        "auto-fit-transform-origin": "",
        class: l(o(F)),
        position: e.position,
        "popup-visible": o(D),
        "popup-offset": 14,
        "popup-container": e.popupContainer,
        "content-class": o(I),
        "content-style": e.contentStyle,
        "arrow-class": o(M),
        "arrow-style": e.arrowStyle,
        onPopupVisibleChange: j
      }, {
        content: c(() => [
          y("div", {
            class: l(o(t).e("body"))
          }, [
            e.type ? (u(), H("span", {
              key: 0,
              class: l([o(t).e("icon"), o($)])
            }, [
              o(w) ? (u(), C(o(W), { key: 0 }, {
                default: c(() => [
                  (u(), C(J(o(w))))
                ]),
                _: 1
              })) : v("", !0)
            ], 2)) : v("", !0),
            y("span", {
              class: l(o(t).e("content"))
            }, [
              B(e.$slots, "content", {}, () => [
                k(g(e.content), 1)
              ])
            ], 2)
          ], 2),
          y("div", {
            class: l(o(t).e("footer"))
          }, [
            T(i, N({ size: "mini" }, e.cancelButtonProps, { onClick: q }), {
              default: c(() => [
                k(g(e.cancelText || o(b)("tu.modal.cancel")), 1)
              ]),
              _: 1
            }, 16),
            T(i, N({
              size: "mini",
              type: "primary"
            }, e.okButtonProps, {
              loading: o(R),
              onClick: A
            }), {
              default: c(() => [
                k(g(e.okText || o(b)("tu.modal.confirm")), 1)
              ]),
              _: 1
            }, 16, ["loading"])
          ], 2)
        ]),
        default: c(() => [
          B(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["class", "position", "popup-visible", "popup-container", "content-class", "content-style", "arrow-class", "arrow-style"]);
    };
  }
});
export {
  re as default
};
