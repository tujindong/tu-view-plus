import { defineComponent as T, ref as f, computed as n, onMounted as $, watch as R, openBlock as r, createBlock as p, Transition as V, unref as o, withCtx as C, withDirectives as _, createElementVNode as D, normalizeClass as a, normalizeStyle as H, createCommentVNode as h, renderSlot as Z, createElementBlock as k, toDisplayString as A, withModifiers as F, createVNode as G, vShow as P } from "vue";
import { useEventListener as U, useResizeObserver as j, useTimeoutFn as q } from "@vueuse/core";
import { messageProps as J } from "./message.mjs";
import { EVENT_CODE as K } from "@tu-view-plus/constants";
import { defaultNamespace as Q } from "@tu-view-plus/hooks";
import "../../config-provider/index.mjs";
import { getLastOffset as W, getOffsetOrSpace as X } from "./instance.mjs";
import { Close as Y } from "@tu-view-plus/icons-vue";
import { TuIcon as x } from "../../icon/index.mjs";
import { TuBadge as ee } from "../../badge/index.mjs";
import "../style/message.css";
import { useGlobalComponentSettings as te } from "../../config-provider/src/hooks/use-global-config.mjs";
const oe = ["id"], se = ["innerHTML"], ne = T({
  name: "TuMessage"
}), Ce = /* @__PURE__ */ T({
  ...ne,
  props: J,
  setup(w, { expose: b }) {
    const e = w, { ns: s, zIndex: L } = te("message"), { currentZIndex: M, nextZIndex: N } = L, u = f(), l = f(!1), d = f(0);
    let i;
    const S = n(() => ({
      [s.b()]: !0,
      [s.m(e.type)]: e.type && !e.icon,
      [s.is("center")]: e.center,
      [s.is("closable")]: e.showClose,
      [e.customClass]: !0
    })), B = n(() => W(e.id)), v = n(
      () => X(e.id, e.offset) + B.value
    ), E = n(() => d.value + v.value), O = n(() => ({
      top: `${v.value}px`,
      zIndex: M.value
    })), z = n(
      () => e.type ? e.type === "error" ? "danger" : e.type : "info"
    ), m = () => {
      l.value = !1;
    }, g = () => {
      i == null || i();
    }, c = () => {
      e.duration !== 0 && ({ stop: i } = q(() => {
        m();
      }, e.duration));
    }, I = ({ code: t }) => {
      t === K.esc && m();
    };
    return $(() => {
      c(), N(), l.value = !0;
    }), R(
      () => e.repeatNum,
      () => {
        g(), c();
      }
    ), U(document, "keydown", I), j(u, () => {
      d.value = u.value.getBoundingClientRect().height;
    }), b({
      visible: l,
      bottom: E,
      close: m
    }), (t, y) => (r(), p(V, {
      name: `${o(Q)}-fade-in-linear`,
      onBeforeLeave: t.onClose,
      onAfterLeave: y[0] || (y[0] = (re) => t.$emit("destroy"))
    }, {
      default: C(() => [
        _(D("div", {
          ref_key: "messageRef",
          ref: u,
          role: "alert",
          id: t.id,
          class: a(o(S)),
          style: H(o(O)),
          onMouseenter: g,
          onMouseleave: c
        }, [
          t.repeatNum > 1 ? (r(), p(o(ee), {
            key: 0,
            value: t.repeatNum,
            type: o(z),
            class: a(o(s).e("badge"))
          }, null, 8, ["value", "type", "class"])) : h("", !0),
          Z(t.$slots, "default", {}, () => [
            t.dangerouslyUseHTMLString ? (r(), k("span", {
              key: 1,
              class: a(o(s).e("content")),
              innerHTML: t.message
            }, null, 10, se)) : (r(), k("span", {
              key: 0,
              class: a(o(s).e("content"))
            }, A(t.message), 3))
          ]),
          t.showClose ? (r(), p(o(x), {
            key: 1,
            class: a(o(s).em("icon", "close")),
            onClick: F(m, ["stop"])
          }, {
            default: C(() => [
              G(o(Y))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : h("", !0)
        ], 46, oe), [
          [P, l.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave"]));
  }
});
export {
  Ce as default
};
