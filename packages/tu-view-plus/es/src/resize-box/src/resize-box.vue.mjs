import { defineComponent as S, toRefs as Z, ref as R, reactive as T, computed as D, openBlock as y, createBlock as M, resolveDynamicComponent as ee, mergeProps as te, unref as _, withCtx as N, renderSlot as W, createElementBlock as oe, Fragment as se, renderList as re, normalizeClass as ne, createCommentVNode as ie } from "vue";
import { resizeBoxProps as ae, resizeBoxEmits as le } from "./resize-box.mjs";
import { useNamespace as ue, useMergeState as X } from "@tu-view-plus/hooks";
import { isNumber as Y, addUnit as g, on as b, off as k } from "@tu-view-plus/utils";
import { TuResizeTrigger as ce } from "../../resize-trigger/index.mjs";
import { allDirections as de, DIRECTION_TOP as $, DIRECTION_BOTTOM as L, DIRECTION_RIGHT as ge, DIRECTION_LEFT as me } from "./interface.mjs";
import "../style/resize-box.css";
const pe = S({
  name: "TuResizeBox",
  inheritAttrs: !1
}), ye = /* @__PURE__ */ S({
  ...pe,
  props: ae,
  emits: le,
  setup(F, { emit: A }) {
    const G = F, i = A, C = ue("resize-box"), { height: U, width: V, directions: j } = Z(G), m = R(0), p = R(0), [E, H] = X(
      null,
      T({
        value: V
      })
    ), [I, P] = X(
      null,
      T({
        value: U
      })
    ), h = R(), q = D(
      () => j.value.filter((e) => de.includes(e))
    ), B = T(
      {}
    ), J = D(() => ({
      ...Y(E.value) ? { width: g(E.value) } : {},
      ...Y(I.value) ? { height: g(I.value) } : {},
      left: g(m.value),
      top: g(p.value),
      ...B
    })), f = (e) => [$, L].indexOf(e) > -1, O = (e, r) => {
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
      startLeft: 0,
      startTop: 0,
      moving: !1,
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }
    }, K = (e, r) => {
      var c, d;
      i("movingStart", r), o.moving = !0, o.startPageX = r.pageX, o.startPageY = r.pageY, o.direction = e, o.startLeft = m.value, o.startTop = p.value;
      const { top: t, left: s, right: n, bottom: v } = o.padding;
      o.startWidth = O(
        ((c = h.value) == null ? void 0 : c.clientWidth) || 0,
        s + n
      ), o.startHeight = O(
        ((d = h.value) == null ? void 0 : d.clientHeight) || 0,
        t + v
      ), b(window, "mousemove", x), b(window, "mouseup", u), b(window, "contextmenu", u), document.body.style.cursor = f(e) ? "row-resize" : "col-resize";
    }, x = (e) => {
      if (!o.moving)
        return;
      const {
        startPageX: r,
        startPageY: t,
        startWidth: s,
        startHeight: n,
        direction: v,
        startLeft: c,
        startTop: d
      } = o;
      let a = s, l = n;
      const w = e.pageX - r, z = e.pageY - t;
      switch (v) {
        case me:
          a = s - w, H(a), m.value = c + w, i("update:width", a);
          break;
        case ge:
          a = s + w, H(a), i("update:width", a);
          break;
        case $:
          l = n - z, P(l), p.value = d + z, i("update:height", l);
          break;
        case L:
          l = n + z, P(l), i("update:height", l);
          break;
      }
      i(
        "moving",
        {
          width: a,
          height: l
        },
        e
      );
    }, u = (e) => {
      o.moving = !1, k(window, "mousemove", x), k(window, "mouseup", u), k(window, "contextmenu", u), document.body.style.cursor = "default", i("movingEnd", e);
    }, Q = (e, r) => {
      const { width: t, height: s } = r.contentRect, n = f(e) ? s : t;
      o.padding[e] = n, B[`padding-${e}`] = `${n}px`;
    };
    return (e, r) => (y(), M(ee(e.component), te(e.$attrs, {
      ref_key: "wrapperRef",
      ref: h,
      class: _(C).b(),
      style: J.value
    }), {
      default: N(() => [
        W(e.$slots, "default"),
        (y(!0), oe(se, null, re(q.value, (t) => (y(), M(_(ce), {
          key: t,
          class: ne(_(C).e(t)),
          direction: f(t) ? "horizontal" : "vertical",
          onMousedown: (s) => {
            K(t, s);
          },
          onResize: (s) => {
            Q(t, s);
          }
        }, {
          default: N(() => [
            e.$slots["resize-trigger"] ? W(e.$slots, "resize-trigger", {
              key: 0,
              direction: t
            }) : ie("", !0)
          ]),
          _: 2
        }, 1032, ["class", "direction", "onMousedown", "onResize"]))), 128))
      ]),
      _: 3
    }, 16, ["class", "style"]));
  }
});
export {
  ye as default
};
