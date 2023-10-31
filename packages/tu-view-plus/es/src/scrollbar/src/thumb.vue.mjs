import { defineComponent as N, inject as A, ref as i, computed as E, onBeforeUnmount as O, toRef as P, openBlock as j, createBlock as K, Transition as U, unref as m, withCtx as F, withDirectives as I, createElementVNode as y, normalizeClass as C, normalizeStyle as V, vShow as q } from "vue";
import { useEventListener as _ } from "@vueuse/core";
import { throwError as G, isClient as J } from "@tu-view-plus/utils";
import { useNamespace as k } from "@tu-view-plus/hooks";
import { scrollbarContextKey as Q } from "./constants.mjs";
import { BAR_MAP as W, renderThumbStyle as X } from "./util.mjs";
import { thumbProps as Y } from "./thumb.mjs";
const Z = "Thumb", re = /* @__PURE__ */ N({
  __name: "thumb",
  props: Y,
  setup(z) {
    const s = z, o = A(Q), v = k("scrollbar"), L = k("scrollbar-fade");
    o || G(Z, "can not inject scrollbar context");
    const n = i(), a = i(), f = i({}), u = i(!1);
    let c = !1, d = !1, p = J ? document.onselectstart : null;
    const e = E(() => W[s.vertical ? "vertical" : "horizontal"]), M = E(
      () => X({
        size: s.size,
        move: s.move,
        bar: e.value
      })
    ), g = E(
      () => n.value[e.value.offset] ** 2 / o.wrapElement[e.value.scrollSize] / s.ratio / a.value[e.value.offset]
    ), x = (t) => {
      var r;
      if (t.stopPropagation(), t.ctrlKey || [1, 2].includes(t.button))
        return;
      (r = window.getSelection()) == null || r.removeAllRanges(), H(t);
      const l = t.currentTarget;
      l && (f.value[e.value.axis] = l[e.value.offset] - (t[e.value.client] - l.getBoundingClientRect()[e.value.direction]));
    }, B = (t) => {
      if (!a.value || !n.value || !o.wrapElement)
        return;
      const l = Math.abs(
        t.target.getBoundingClientRect()[e.value.direction] - t[e.value.client]
      ), r = a.value[e.value.offset] / 2, h = (l - r) * 100 * g.value / n.value[e.value.offset];
      o.wrapElement[e.value.scroll] = h * o.wrapElement[e.value.scrollSize] / 100;
    }, H = (t) => {
      t.stopImmediatePropagation(), c = !0, document.addEventListener("mousemove", w), document.addEventListener("mouseup", b), p = document.onselectstart, document.onselectstart = () => !1;
    }, w = (t) => {
      if (!n.value || !a.value || c === !1)
        return;
      const l = f.value[e.value.axis];
      if (!l)
        return;
      const r = (n.value.getBoundingClientRect()[e.value.direction] - t[e.value.client]) * -1, h = a.value[e.value.offset] - l, D = (r - h) * 100 * g.value / n.value[e.value.offset];
      o.wrapElement[e.value.scroll] = D * o.wrapElement[e.value.scrollSize] / 100;
    }, b = () => {
      c = !1, f.value[e.value.axis] = 0, document.removeEventListener("mousemove", w), document.removeEventListener("mouseup", b), S(), d && (u.value = !1);
    }, R = () => {
      d = !1, u.value = !!s.size;
    }, T = () => {
      d = !0, u.value = c;
    };
    O(() => {
      S(), document.removeEventListener("mouseup", b);
    });
    const S = () => {
      document.onselectstart !== p && (document.onselectstart = p);
    };
    return _(
      P(o, "scrollbarElement"),
      "mousemove",
      R
    ), _(
      P(o, "scrollbarElement"),
      "mouseleave",
      T
    ), (t, l) => (j(), K(U, {
      name: m(L).b()
    }, {
      default: F(() => [
        I(y("div", {
          ref_key: "instance",
          ref: n,
          class: C([m(v).e("bar"), m(v).is(e.value.key)]),
          onMousedown: B
        }, [
          y("div", {
            ref_key: "thumb",
            ref: a,
            class: C(m(v).e("thumb")),
            style: V(M.value),
            onMousedown: x
          }, null, 38)
        ], 34), [
          [q, t.always || u.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
export {
  re as default
};
