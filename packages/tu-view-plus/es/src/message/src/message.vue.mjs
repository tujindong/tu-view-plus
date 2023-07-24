import { defineComponent as w, ref as p, computed as r, onMounted as D, watch as R, openBlock as n, createBlock as l, Transition as V, unref as t, withCtx as d, withDirectives as H, createElementVNode as _, normalizeClass as a, normalizeStyle as Z, createCommentVNode as v, resolveDynamicComponent as A, renderSlot as F, createElementBlock as h, toDisplayString as G, withModifiers as P, createVNode as U, vShow as j } from "vue";
import { useEventListener as q, useResizeObserver as J, useTimeoutFn as K } from "@vueuse/core";
import { messageProps as Q } from "./message.mjs";
import { EVENT_CODE as W } from "@tu-view-plus/constants";
import { defaultNamespace as X } from "@tu-view-plus/hooks";
import "../../config-provider/index.mjs";
import { getLastOffset as Y, getOffsetOrSpace as x } from "./instance.mjs";
import { Close as ee } from "@tu-view-plus/icons-vue";
import { TuIcon as T } from "../../icon/index.mjs";
import { TuBadge as oe } from "../../badge/index.mjs";
import "../style/message.css";
import { useGlobalComponentSettings as te } from "../../config-provider/src/hooks/use-global-config.mjs";
const se = ["id"], ne = ["innerHTML"], re = w({
  name: "TuMessage"
}), ke = /* @__PURE__ */ w({
  ...re,
  props: Q,
  setup(b, { expose: L }) {
    const e = b, { ns: s, zIndex: M } = te("message"), { currentZIndex: N, nextZIndex: S } = M, c = p(), i = p(!1), y = p(0);
    let m;
    const B = r(() => ({
      [s.b()]: !0,
      [s.m(e.type)]: e.type,
      [s.is("center")]: e.center,
      [s.is("closable")]: e.showClose,
      [e.customClass]: !0
    })), E = r(() => Y(e.id)), g = r(
      () => x(e.id, e.offset) + E.value
    ), O = r(() => y.value + g.value), z = r(() => ({
      top: `${g.value}px`,
      zIndex: N.value
    })), I = r(
      () => e.type ? e.type === "error" ? "danger" : e.type : "info"
    ), u = () => {
      i.value = !1;
    }, C = () => {
      m == null || m();
    }, f = () => {
      e.duration !== 0 && ({ stop: m } = K(() => {
        u();
      }, e.duration));
    }, $ = ({ code: o }) => {
      o === W.esc && u();
    };
    return D(() => {
      f(), S(), i.value = !0;
    }), R(
      () => e.repeatNum,
      () => {
        C(), f();
      }
    ), q(document, "keydown", $), J(c, () => {
      y.value = c.value.getBoundingClientRect().height;
    }), L({
      visible: i,
      bottom: O,
      close: u
    }), (o, k) => (n(), l(V, {
      name: `${t(X)}-fade-in-linear`,
      onBeforeLeave: o.onClose,
      onAfterLeave: k[0] || (k[0] = (ae) => o.$emit("destroy"))
    }, {
      default: d(() => [
        H(_("div", {
          ref_key: "messageRef",
          ref: c,
          role: "alert",
          id: o.id,
          class: a(t(B)),
          style: Z(t(z)),
          onMouseenter: C,
          onMouseleave: f
        }, [
          o.repeatNum > 1 ? (n(), l(t(oe), {
            key: 0,
            value: o.repeatNum,
            type: t(I),
            class: a(t(s).e("badge"))
          }, null, 8, ["value", "type", "class"])) : v("", !0),
          o.icon ? (n(), l(t(T), {
            key: 1,
            class: a([t(s).e("icon")])
          }, {
            default: d(() => [
              (n(), l(A(o.icon)))
            ]),
            _: 1
          }, 8, ["class"])) : v("", !0),
          F(o.$slots, "default", {}, () => [
            o.dangerouslyUseHTMLString ? (n(), h("span", {
              key: 1,
              class: a(t(s).e("content")),
              innerHTML: o.message
            }, null, 10, ne)) : (n(), h("span", {
              key: 0,
              class: a(t(s).e("content"))
            }, G(o.message), 3))
          ]),
          o.showClose ? (n(), l(t(T), {
            key: 2,
            class: a(t(s).em("icon", "close")),
            onClick: P(u, ["stop"])
          }, {
            default: d(() => [
              U(t(ee))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : v("", !0)
        ], 46, se), [
          [j, i.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave"]));
  }
});
export {
  ke as default
};
