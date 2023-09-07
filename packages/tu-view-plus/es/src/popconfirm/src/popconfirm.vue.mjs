import { defineComponent as E, ref as h, computed as i, resolveComponent as q, openBlock as u, createBlock as C, unref as o, normalizeClass as l, withCtx as c, createElementVNode as y, createElementBlock as A, resolveDynamicComponent as G, createCommentVNode as v, renderSlot as B, createTextVNode as k, toDisplayString as g, createVNode as T, mergeProps as N } from "vue";
import { popconfirmProps as H, popconfirmEmits as J } from "./popconfirm.mjs";
import { TuTrigger as K } from "../../trigger/index.mjs";
import { TuIcon as Q } from "../../icon/index.mjs";
import { useLocale as U, useNamespace as W } from "@tu-view-plus/hooks";
import { TypeComponentsMap as X, isFunction as z, isPromise as L, isBoolean as S } from "@tu-view-plus/utils";
import "../style/popconfirm.css";
const Y = E({
  name: "TuPopconfirm"
}), ae = /* @__PURE__ */ E({
  ...Y,
  props: H,
  emits: J,
  setup(O, { emit: a }) {
    const n = O;
    let f = 0;
    const { t: b } = U(), t = W("popconfirm"), m = h(n.defaultPopupVisible), r = h(!1), _ = i(
      () => n.popupVisible ?? m.value
    ), D = i(() => n.okLoading || r.value), w = i(() => X[n.type] || ""), R = i(() => ({
      [t.b()]: !0,
      [t.m(n.size)]: n.size
    })), $ = i(() => [
      t.e("popup-content"),
      n.contentClass
    ]), F = i(() => [
      t.e("popup-arrow"),
      n.arrowClass
    ]), d = () => {
      f++, r.value && (r.value = !1), m.value = !1, a("update:popupVisible", !1), a("popupVisibleChange", !1);
    }, I = (e) => {
      e ? (m.value = e, a("update:popupVisible", e), a("popupVisibleChange", e)) : d();
    }, M = () => {
      let e = !0;
      z(n.onBeforeCancel) && (e = n.onBeforeCancel() ?? !1), e && (a("cancel"), d());
    }, j = async () => {
      const e = f, V = await new Promise(async (p) => {
        if (z(n.onBeforeOk)) {
          let s = n.onBeforeOk((P = !0) => p(P));
          if ((L(s) || !S(s)) && (r.value = !0), L(s))
            try {
              s = await s ?? !0;
            } catch {
              s = !1;
            }
          S(s) && p(s);
        } else
          p(!0);
      });
      e === f && (V ? (a("ok"), d()) : r.value && (r.value = !1));
    };
    return (e, V) => {
      const p = q("tu-button");
      return u(), C(o(K), {
        "show-arrow": "",
        trigger: "click",
        "animation-name": "zoom-in-fade-out",
        "auto-fit-transform-origin": "",
        class: l(o(R)),
        position: e.position,
        "popup-visible": o(_),
        "popup-offset": 14,
        "popup-container": e.popupContainer,
        "content-class": o($),
        "content-style": e.contentStyle,
        "arrow-class": o(F),
        "arrow-style": e.arrowStyle,
        onPopupVisibleChange: I
      }, {
        content: c(() => [
          y("div", {
            class: l(o(t).e("body"))
          }, [
            e.type ? (u(), A("span", {
              key: 0,
              class: l(o(t).e("icon"))
            }, [
              o(w) ? (u(), C(o(Q), { key: 0 }, {
                default: c(() => [
                  (u(), C(G(o(w))))
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
            T(p, N({ size: "mini" }, e.cancelButtonProps, { onClick: M }), {
              default: c(() => [
                k(g(e.cancelText || o(b)("tu.modal.cancel")), 1)
              ]),
              _: 1
            }, 16),
            T(p, N({
              size: "mini",
              type: "primary"
            }, e.okButtonProps, {
              loading: o(D),
              onClick: j
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
  ae as default
};
