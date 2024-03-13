import { defineComponent as W, toRefs as j, reactive as m, ref as q, computed as H, openBlock as p, createBlock as I, resolveDynamicComponent as J, mergeProps as K, unref as h, withCtx as P, renderSlot as B, createElementBlock as Q, Fragment as Z, renderList as ee, normalizeClass as te, createCommentVNode as oe } from "vue";
import { resizeBoxProps as se, resizeBoxEmits as re } from "./resize-box.mjs";
import { useNamespace as ne, useMergeState as O } from "@tu-view-plus/hooks";
import { isNumber as x, addUnit as D, on as f, off as w } from "@tu-view-plus/utils";
import { TuResizeTrigger as ie } from "../../resize-trigger/index.mjs";
import { allDirections as ae, DIRECTION_TOP as M, DIRECTION_BOTTOM as N, DIRECTION_RIGHT as le, DIRECTION_LEFT as ce } from "./interface.mjs";
import "../style/resize-box.css";
const ue = W({
  name: "TuResizeBox",
  inheritAttrs: !1
}), ve = /* @__PURE__ */ W({
  ...ue,
  props: se,
  emits: re,
  setup(X, { emit: Y }) {
    const $ = X, l = Y, v = ne("resize-box"), { height: S, width: F, directions: L } = j($), [z, R] = O(
      null,
      m({
        value: F
      })
    ), [T, y] = O(
      null,
      m({
        value: S
      })
    ), u = q(), A = H(
      () => L.value.filter((e) => ae.includes(e))
    ), b = m(
      {}
    ), G = H(() => ({
      ...x(z.value) ? { width: D(z.value) } : {},
      ...x(T.value) ? { height: D(T.value) } : {},
      ...b
    })), d = (e) => [M, N].indexOf(e) > -1, k = (e, r) => {
      if (e === 0)
        return 0;
      const t = e - r;
      return t <= 0 ? 0 : t;
    }, o = {
      direction: "",
      startPageX: 0,
      startPageY: 0,
      startWidth: 0,
      startHeight: 0,
      moving: !1,
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }
    }, U = (e, r) => {
      var n, i;
      l("movingStart", r), o.moving = !0, o.startPageX = r.pageX, o.startPageY = r.pageY, o.direction = e;
      const { top: t, left: s, right: a, bottom: g } = o.padding;
      o.startWidth = k(
        ((n = u.value) == null ? void 0 : n.clientWidth) || 0,
        s + a
      ), o.startHeight = k(
        ((i = u.value) == null ? void 0 : i.clientHeight) || 0,
        t + g
      ), f(window, "mousemove", _), f(window, "mouseup", c), f(window, "contextmenu", c), document.body.style.cursor = d(e) ? "row-resize" : "col-resize";
    }, _ = (e) => {
      if (!o.moving)
        return;
      const { startPageX: r, startPageY: t, startWidth: s, startHeight: a, direction: g } = o;
      let n = s, i = a;
      const C = e.pageX - r, E = e.pageY - t;
      switch (g) {
        case ce:
          n = s - C, R(n), l("update:width", n);
          break;
        case le:
          n = s + C, R(n), l("update:width", n);
          break;
        case M:
          i = a - E, y(i), l("update:height", i);
          break;
        case N:
          i = a + E, y(i), l("update:height", i);
          break;
      }
      l(
        "moving",
        {
          width: n,
          height: i
        },
        e
      );
    }, c = (e) => {
      o.moving = !1, w(window, "mousemove", _), w(window, "mouseup", c), w(window, "contextmenu", c), document.body.style.cursor = "default", l("movingEnd", e);
    }, V = (e, r) => {
      const { width: t, height: s } = r.contentRect, a = d(e) ? s : t;
      o.padding[e] = a, b[`padding-${e}`] = `${a}px`;
    };
    return (e, r) => (p(), I(J(e.component), K(e.$attrs, {
      ref_key: "wrapperRef",
      ref: u,
      class: h(v).b(),
      style: G.value
    }), {
      default: P(() => [
        B(e.$slots, "default"),
        (p(!0), Q(Z, null, ee(A.value, (t) => (p(), I(h(ie), {
          key: t,
          class: te(h(v).e(t)),
          direction: d(t) ? "horizontal" : "vertical",
          onMousedown: (s) => {
            U(t, s);
          },
          onResize: (s) => {
            V(t, s);
          }
        }, {
          default: P(() => [
            e.$slots["resize-trigger"] ? B(e.$slots, "resize-trigger", {
              key: 0,
              direction: t
            }) : oe("", !0)
          ]),
          _: 2
        }, 1032, ["class", "direction", "onMousedown", "onResize"]))), 128))
      ]),
      _: 3
    }, 16, ["class", "style"]));
  }
});
export {
  ve as default
};
