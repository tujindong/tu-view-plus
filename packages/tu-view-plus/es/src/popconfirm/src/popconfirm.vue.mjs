import { defineComponent as D, ref as h, computed as a, openBlock as c, createBlock as C, unref as o, normalizeClass as l, withCtx as i, createElementVNode as y, createElementBlock as J, resolveDynamicComponent as K, createCommentVNode as B, renderSlot as v, createTextVNode as k, toDisplayString as g, createVNode as T, mergeProps as N } from "vue";
import { popconfirmProps as Q, popconfirmEmits as U } from "./popconfirm.mjs";
import { TuTrigger as W } from "../../trigger/index.mjs";
import { TuIcon as X } from "../../icon/index.mjs";
import { TuButton as z } from "../../button/index.mjs";
import { useLocale as Y, useNamespace as Z } from "@tu-view-plus/hooks";
import { TypeComponentsMap as L, isFunction as S, isPromise as E, isBoolean as O } from "@tu-view-plus/utils";
import "../style/popconfirm.css";
const _ = D({
  name: "TuPopconfirm"
}), pe = /* @__PURE__ */ D({
  ..._,
  props: Q,
  emits: U,
  setup(R, { emit: r }) {
    const n = R;
    let u = 0;
    const { t: w } = Y(), t = Z("popconfirm"), f = h(n.defaultPopupVisible), p = h(!1), $ = a(
      () => n.popupVisible ?? f.value
    ), F = a(() => n.okLoading || p.value), b = a(() => L[n.type] || ""), I = a(() => {
      const e = n.type;
      return {
        [t.em("icon", e)]: e && L[e]
      };
    }), M = a(() => ({
      [t.b()]: !0,
      [t.m(n.size)]: n.size
    })), j = a(() => [
      t.e("popup-content"),
      n.contentClass
    ]), q = a(() => [
      t.e("popup-arrow"),
      n.arrowClass
    ]), m = () => {
      u++, p.value && (p.value = !1), f.value = !1, r("update:popupVisible", !1), r("popupVisibleChange", !1);
    }, A = (e) => {
      e ? (f.value = e, r("update:popupVisible", e), r("popupVisibleChange", e)) : m();
    }, G = () => {
      let e = !0;
      S(n.onBeforeCancel) && (e = n.onBeforeCancel() ?? !1), e && (r("cancel"), m());
    }, H = async () => {
      const e = u, V = await new Promise(async (d) => {
        if (S(n.onBeforeOk)) {
          let s = n.onBeforeOk((P = !0) => d(P));
          if ((E(s) || !O(s)) && (p.value = !0), E(s))
            try {
              s = await s ?? !0;
            } catch {
              s = !1;
            }
          O(s) && d(s);
        } else
          d(!0);
      });
      e === u && (V ? (r("ok"), m()) : p.value && (p.value = !1));
    };
    return (e, V) => (c(), C(o(W), {
      "show-arrow": "",
      trigger: "click",
      "animation-name": "zoom-in-fade-out",
      "auto-fit-transform-origin": "",
      class: l(o(M)),
      position: e.position,
      "popup-visible": o($),
      "popup-offset": 14,
      "popup-container": e.popupContainer,
      "content-class": o(j),
      "content-style": e.contentStyle,
      "arrow-class": o(q),
      "arrow-style": e.arrowStyle,
      onPopupVisibleChange: A
    }, {
      content: i(() => [
        y("div", {
          class: l(o(t).e("body"))
        }, [
          e.type ? (c(), J("span", {
            key: 0,
            class: l([o(t).e("icon"), o(I)])
          }, [
            o(b) ? (c(), C(o(X), { key: 0 }, {
              default: i(() => [
                (c(), C(K(o(b))))
              ]),
              _: 1
            })) : B("", !0)
          ], 2)) : B("", !0),
          y("span", {
            class: l(o(t).e("content"))
          }, [
            v(e.$slots, "content", {}, () => [
              k(g(e.content), 1)
            ])
          ], 2)
        ], 2),
        y("div", {
          class: l(o(t).e("footer"))
        }, [
          T(o(z), N({ size: "small" }, e.cancelButtonProps, { onClick: G }), {
            default: i(() => [
              k(g(e.cancelText || o(w)("tu.modal.cancel")), 1)
            ]),
            _: 1
          }, 16),
          T(o(z), N({
            size: "small",
            type: "primary"
          }, e.okButtonProps, {
            loading: o(F),
            onClick: H
          }), {
            default: i(() => [
              k(g(e.okText || o(w)("tu.modal.confirm")), 1)
            ]),
            _: 1
          }, 16, ["loading"])
        ], 2)
      ]),
      default: i(() => [
        v(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "position", "popup-visible", "popup-container", "content-class", "content-style", "arrow-class", "arrow-style"]));
  }
});
export {
  pe as default
};
