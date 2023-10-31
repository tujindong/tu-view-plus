import { defineComponent as D, ref as P, computed as a, openBlock as c, createBlock as C, unref as t, normalizeClass as i, withCtx as p, createElementVNode as y, createElementBlock as K, resolveDynamicComponent as Q, createCommentVNode as h, renderSlot as B, createTextVNode as v, toDisplayString as k, createVNode as T, mergeProps as N } from "vue";
import { popconfirmProps as U, popconfirmEmits as W } from "./popconfirm.mjs";
import { TuTrigger as X } from "../../trigger/index.mjs";
import { TuIcon as Y } from "../../icon/index.mjs";
import { TuButton as z } from "../../button/index.mjs";
import { useLocale as Z, useNamespace as _ } from "@tu-view-plus/hooks";
import { TypeComponentsMap as L, isFunction as S, isPromise as E, isBoolean as O } from "@tu-view-plus/utils";
import "../style/popconfirm.css";
const x = D({
  name: "TuPopconfirm"
}), ie = /* @__PURE__ */ D({
  ...x,
  props: U,
  emits: W,
  setup(R, { emit: $ }) {
    let u = 0;
    const o = R, l = $, { t: g } = Z(), n = _("popconfirm"), m = P(o.defaultPopupVisible), r = P(!1), F = a(
      () => o.popupVisible ?? m.value
    ), I = a(() => o.okLoading || r.value), w = a(() => L[o.type] || ""), M = a(() => {
      const e = o.type;
      return {
        [n.em("icon", e)]: e && L[e]
      };
    }), j = a(() => ({
      [n.b()]: !0,
      [n.m(o.size)]: o.size
    })), q = a(() => [
      n.e("popup-content"),
      o.contentClass
    ]), A = a(() => [
      n.e("popup-arrow"),
      o.arrowClass
    ]), f = () => {
      u++, r.value && (r.value = !1), m.value = !1, l("update:popupVisible", !1), l("popupVisibleChange", !1);
    }, G = (e) => {
      e ? (m.value = e, l("update:popupVisible", e), l("popupVisibleChange", e)) : f();
    }, H = () => {
      let e = !0;
      S(o.onBeforeCancel) && (e = o.onBeforeCancel() ?? !1), e && (l("cancel"), f());
    }, J = async () => {
      const e = u, b = await new Promise(async (d) => {
        if (S(o.onBeforeOk)) {
          let s = o.onBeforeOk((V = !0) => d(V));
          if ((E(s) || !O(s)) && (r.value = !0), E(s))
            try {
              s = await s ?? !0;
            } catch {
              s = !1;
            }
          O(s) && d(s);
        } else
          d(!0);
      });
      e === u && (b ? (l("ok"), f()) : r.value && (r.value = !1));
    };
    return (e, b) => (c(), C(t(X), {
      "show-arrow": "",
      trigger: "click",
      "animation-name": "zoom-in-fade-out",
      "auto-fit-transform-origin": "",
      class: i(j.value),
      position: e.position,
      "popup-visible": F.value,
      "popup-offset": 14,
      "popup-container": e.popupContainer,
      "content-class": q.value,
      "content-style": e.contentStyle,
      "arrow-class": A.value,
      "arrow-style": e.arrowStyle,
      onPopupVisibleChange: G
    }, {
      content: p(() => [
        y("div", {
          class: i(t(n).e("body"))
        }, [
          e.type ? (c(), K("span", {
            key: 0,
            class: i([t(n).e("icon"), M.value])
          }, [
            w.value ? (c(), C(t(Y), { key: 0 }, {
              default: p(() => [
                (c(), C(Q(w.value)))
              ]),
              _: 1
            })) : h("", !0)
          ], 2)) : h("", !0),
          y("span", {
            class: i(t(n).e("content"))
          }, [
            B(e.$slots, "content", {}, () => [
              v(k(e.content), 1)
            ])
          ], 2)
        ], 2),
        y("div", {
          class: i(t(n).e("footer"))
        }, [
          T(t(z), N({ size: "small" }, e.cancelButtonProps, { onClick: H }), {
            default: p(() => [
              v(k(e.cancelText || t(g)("tu.modal.cancel")), 1)
            ]),
            _: 1
          }, 16),
          T(t(z), N({
            size: "small",
            type: "primary"
          }, e.okButtonProps, {
            loading: I.value,
            onClick: J
          }), {
            default: p(() => [
              v(k(e.okText || t(g)("tu.modal.confirm")), 1)
            ]),
            _: 1
          }, 16, ["loading"])
        ], 2)
      ]),
      default: p(() => [
        B(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "position", "popup-visible", "popup-container", "content-class", "content-style", "arrow-class", "arrow-style"]));
  }
});
export {
  ie as default
};
