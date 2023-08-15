import { defineComponent as A, inject as O, ref as m, computed as E, onBeforeUnmount as j, toRef as P, openBlock as K, createBlock as U, Transition as F, unref as s, withCtx as I, withDirectives as V, createElementVNode as y, normalizeClass as C, normalizeStyle as q, vShow as G } from "vue";
import { useEventListener as k } from "@vueuse/core";
import { throwError as J, isClient as Q } from "@tu-view-plus/utils";
import { useNamespace as z } from "@tu-view-plus/hooks";
import { scrollbarContextKey as W } from "./constants.mjs";
import { BAR_MAP as X, renderThumbStyle as Y } from "./util.mjs";
import { thumbProps as Z } from "./thumb.mjs";
const ae = /* @__PURE__ */ A({
  name: "thumb",
  props: Z,
  setup(L) {
    const u = L, M = "Thumb", o = O(W), v = z("scrollbar"), _ = z("scrollbar-fade");
    o || J(M, "can not inject scrollbar context");
    const l = m(), r = m(), f = m({}), c = m(!1);
    let i = !1, d = !1, p = Q ? document.onselectstart : null;
    const e = E(() => X[u.vertical ? "vertical" : "horizontal"]), x = E(
      () => Y({
        size: u.size,
        move: u.move,
        bar: e.value
      })
    ), g = E(
      () => l.value[e.value.offset] ** 2 / o.wrapElement[e.value.scrollSize] / u.ratio / r.value[e.value.offset]
    ), B = (t) => {
      var a;
      if (t.stopPropagation(), t.ctrlKey || [1, 2].includes(t.button))
        return;
      (a = window.getSelection()) == null || a.removeAllRanges(), R(t);
      const n = t.currentTarget;
      n && (f.value[e.value.axis] = n[e.value.offset] - (t[e.value.client] - n.getBoundingClientRect()[e.value.direction]));
    }, H = (t) => {
      if (!r.value || !l.value || !o.wrapElement)
        return;
      const n = Math.abs(
        t.target.getBoundingClientRect()[e.value.direction] - t[e.value.client]
      ), a = r.value[e.value.offset] / 2, h = (n - a) * 100 * g.value / l.value[e.value.offset];
      o.wrapElement[e.value.scroll] = h * o.wrapElement[e.value.scrollSize] / 100;
    }, R = (t) => {
      t.stopImmediatePropagation(), i = !0, document.addEventListener("mousemove", w), document.addEventListener("mouseup", b), p = document.onselectstart, document.onselectstart = () => !1;
    }, w = (t) => {
      if (!l.value || !r.value || i === !1)
        return;
      const n = f.value[e.value.axis];
      if (!n)
        return;
      const a = (l.value.getBoundingClientRect()[e.value.direction] - t[e.value.client]) * -1, h = r.value[e.value.offset] - n, N = (a - h) * 100 * g.value / l.value[e.value.offset];
      o.wrapElement[e.value.scroll] = N * o.wrapElement[e.value.scrollSize] / 100;
    }, b = () => {
      i = !1, f.value[e.value.axis] = 0, document.removeEventListener("mousemove", w), document.removeEventListener("mouseup", b), S(), d && (c.value = !1);
    }, T = () => {
      d = !1, c.value = !!u.size;
    }, D = () => {
      d = !0, c.value = i;
    };
    j(() => {
      S(), document.removeEventListener("mouseup", b);
    });
    const S = () => {
      document.onselectstart !== p && (document.onselectstart = p);
    };
    return k(
      P(o, "scrollbarElement"),
      "mousemove",
      T
    ), k(
      P(o, "scrollbarElement"),
      "mouseleave",
      D
    ), (t, n) => (K(), U(F, {
      name: s(_).b()
    }, {
      default: I(() => [
        V(y("div", {
          ref_key: "instance",
          ref: l,
          class: C([s(v).e("bar"), s(v).is(s(e).key)]),
          onMousedown: H
        }, [
          y("div", {
            ref_key: "thumb",
            ref: r,
            class: C(s(v).e("thumb")),
            style: q(s(x)),
            onMousedown: B
          }, null, 38)
        ], 34), [
          [G, t.always || c.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
export {
  ae as default
};
