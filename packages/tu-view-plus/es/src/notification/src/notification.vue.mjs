import { defineComponent as S, ref as A, computed as s, onMounted as F, openBlock as a, createBlock as u, Transition as G, unref as t, withCtx as d, withDirectives as f, createElementVNode as m, normalizeClass as r, normalizeStyle as T, resolveDynamicComponent as O, createCommentVNode as j, toDisplayString as g, renderSlot as q, createElementBlock as w, vShow as y, createVNode as z, withModifiers as J } from "vue";
import { useEventListener as Q, useTimeoutFn as R } from "@vueuse/core";
import { notificationProps as X, notificationEmits as Y } from "./notification.mjs";
import { useNamespace as x, defaultNamespace as ee } from "@tu-view-plus/hooks";
import { TypeComponentsMap as M, addUnit as oe } from "@tu-view-plus/utils";
import { EVENT_CODE as v } from "@tu-view-plus/constants";
import "../../config-provider/index.mjs";
import { Close as te } from "@tu-view-plus/icons-vue";
import { TuIcon as N } from "../../icon/index.mjs";
import "../style/notification.css";
import { useGlobalComponentSettings as ne } from "../../config-provider/src/hooks/use-global-config.mjs";
const se = ["id"], ie = { key: 0 }, re = ["innerHTML"], ae = S({
  name: "TuNotification"
}), Te = /* @__PURE__ */ S({
  ...ae,
  props: X,
  emits: Y,
  setup(E, { expose: L, emit: I }) {
    const o = E;
    let l;
    const n = x("notification"), { ns: b, zIndex: B } = ne("notification"), { nextZIndex: D, currentZIndex: _ } = B, i = A(!1), V = s(
      () => o.position.endsWith("r") ? "right" : "left"
    ), H = s(
      () => o.position.startsWith("t") ? "top" : "bottom"
    ), C = s(() => o.type && M[o.type] || o.icon), P = s(() => [
      n.b(),
      { [n.m(o.size)]: o.size },
      { [n.is("show-close")]: o.showClose },
      o.customClass,
      V.value
    ]), K = s(() => ({
      [H.value]: oe(o.offset),
      zIndex: o.zIndex ?? _.value
    })), U = s(() => {
      const e = o.type;
      return e && M[o.type] ? n.em("type-icon", e) : "";
    }), W = s(() => o.title ? void 0 : { margin: 0 }), Z = () => {
      I("destroy");
    }, p = () => {
      o.duration > 0 && ({ stop: l } = R(() => {
        i.value && c();
      }, o.duration));
    }, h = () => {
      l == null || l();
    }, c = () => {
      i.value = !1;
    };
    return Q(document, "keydown", ({ code: e }) => {
      e === v.delete || e === v.backspace ? h() : e === v.esc ? i.value && c() : p();
    }), F(() => {
      p(), D(), i.value = !0;
    }), L({
      visible: i,
      close: c
    }), (e, k) => (a(), u(G, {
      name: `${t(ee)}-notification-fade`,
      onBeforeLeave: e.onClose,
      onAfterLeave: Z
    }, {
      default: d(() => [
        f(m("div", {
          role: "alert",
          id: e.id,
          class: r(t(P)),
          style: T(t(K)),
          onMouseenter: h,
          onMouseleave: p,
          onClick: k[0] || (k[0] = //@ts-ignore
          (...$) => e.onClick && e.onClick(...$))
        }, [
          t(C) ? (a(), u(t(N), {
            key: 0,
            class: r([t(b).e("type-icon"), t(U)])
          }, {
            default: d(() => [
              (a(), u(O(t(C))))
            ]),
            _: 1
          }, 8, ["class"])) : j("", !0),
          m("div", {
            class: r(t(n).e("group"))
          }, [
            m("div", {
              class: r(t(n).e("title"))
            }, g(e.title), 3),
            f(m("div", {
              class: r(t(n).e("content")),
              style: T(t(W))
            }, [
              q(e.$slots, "default", {}, () => [
                e.dangerouslyUseHTMLString ? (a(), w("div", {
                  key: 1,
                  innerHTML: e.message
                }, null, 8, re)) : (a(), w("div", ie, g(e.message), 1))
              ])
            ], 6), [
              [y, e.message]
            ]),
            f(z(t(N), {
              class: r(t(n).e("close-icon")),
              onClick: J(c, ["stop"])
            }, {
              default: d(() => [
                z(t(te))
              ]),
              _: 1
            }, 8, ["class", "onClick"]), [
              [y, e.showClose]
            ])
          ], 2)
        ], 46, se), [
          [y, i.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave"]));
  }
});
export {
  Te as default
};
