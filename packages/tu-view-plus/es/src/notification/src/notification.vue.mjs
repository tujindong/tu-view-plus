import { defineComponent as S, ref as F, computed as s, onMounted as G, openBlock as a, createBlock as p, Transition as O, unref as t, withCtx as d, withDirectives as f, createElementVNode as m, normalizeClass as r, normalizeStyle as T, resolveDynamicComponent as j, createCommentVNode as q, toDisplayString as g, renderSlot as J, createElementBlock as w, vShow as v, createVNode as z, withModifiers as Q } from "vue";
import { useEventListener as R, useTimeoutFn as X } from "@vueuse/core";
import { notificationProps as Y, notificationEmits as x } from "./notification.mjs";
import { useNamespace as ee, defaultNamespace as oe } from "@tu-view-plus/hooks";
import { TypeComponentsMap as M, addUnit as te } from "@tu-view-plus/utils";
import { EVENT_CODE as y } from "@tu-view-plus/constants";
import "../../config-provider/index.mjs";
import { Close as ne } from "@tu-view-plus/icons-vue";
import { TuIcon as N } from "../../icon/index.mjs";
import "../style/notification.css";
import { useGlobalComponentSettings as se } from "../../config-provider/src/hooks/use-global-config.mjs";
const ie = ["id"], re = { key: 0 }, ae = ["innerHTML"], le = S({
  name: "TuNotification"
}), ge = /* @__PURE__ */ S({
  ...le,
  props: Y,
  emits: x,
  setup(E, { expose: L, emit: I }) {
    let l;
    const o = E, b = I, n = ee("notification"), { ns: B, zIndex: D } = se("notification"), { nextZIndex: _, currentZIndex: V } = D, i = F(!1), H = s(
      () => o.position.endsWith("r") ? "right" : "left"
    ), P = s(
      () => o.position.startsWith("t") ? "top" : "bottom"
    ), C = s(() => o.type && M[o.type] || o.icon), K = s(() => [
      n.b(),
      { [n.m(o.size)]: o.size },
      { [n.is("show-close")]: o.showClose },
      o.customClass,
      H.value
    ]), U = s(() => ({
      [P.value]: te(o.offset),
      zIndex: o.zIndex ?? V.value
    })), W = s(() => {
      const e = o.type;
      return e && M[o.type] ? n.em("type-icon", e) : "";
    }), Z = s(() => o.title ? void 0 : { margin: 0 }), $ = () => {
      b("destroy");
    }, u = () => {
      o.duration > 0 && ({ stop: l } = X(() => {
        i.value && c();
      }, o.duration));
    }, h = () => {
      l == null || l();
    }, c = () => {
      i.value = !1;
    };
    return R(document, "keydown", ({ code: e }) => {
      e === y.delete || e === y.backspace ? h() : e === y.esc ? i.value && c() : u();
    }), G(() => {
      u(), _(), i.value = !0;
    }), L({
      visible: i,
      close: c
    }), (e, k) => (a(), p(O, {
      name: `${t(oe)}-notification-fade`,
      onBeforeLeave: e.onClose,
      onAfterLeave: $
    }, {
      default: d(() => [
        f(m("div", {
          role: "alert",
          id: e.id,
          class: r(K.value),
          style: T(U.value),
          onMouseenter: h,
          onMouseleave: u,
          onClick: k[0] || (k[0] = //@ts-ignore
          (...A) => e.onClick && e.onClick(...A))
        }, [
          C.value ? (a(), p(t(N), {
            key: 0,
            class: r([t(B).e("type-icon"), W.value])
          }, {
            default: d(() => [
              (a(), p(j(C.value)))
            ]),
            _: 1
          }, 8, ["class"])) : q("", !0),
          m("div", {
            class: r(t(n).e("group"))
          }, [
            m("div", {
              class: r(t(n).e("title"))
            }, g(e.title), 3),
            f(m("div", {
              class: r(t(n).e("content")),
              style: T(Z.value)
            }, [
              J(e.$slots, "default", {}, () => [
                e.dangerouslyUseHTMLString ? (a(), w("div", {
                  key: 1,
                  innerHTML: e.message
                }, null, 8, ae)) : (a(), w("div", re, g(e.message), 1))
              ])
            ], 6), [
              [v, e.message]
            ]),
            f(z(t(N), {
              class: r(t(n).e("close-icon")),
              onClick: Q(c, ["stop"])
            }, {
              default: d(() => [
                z(t(ne))
              ]),
              _: 1
            }, 8, ["class", "onClick"]), [
              [v, e.showClose]
            ])
          ], 2)
        ], 46, ie), [
          [v, i.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave"]));
  }
});
export {
  ge as default
};
