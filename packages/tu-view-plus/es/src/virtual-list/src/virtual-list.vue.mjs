import { defineComponent as x, toRefs as M, ref as L, computed as s, openBlock as i, createBlock as d, resolveDynamicComponent as v, unref as e, normalizeClass as U, normalizeStyle as q, withCtx as f, mergeProps as P, createElementBlock as G, Fragment as J, renderList as Q, renderSlot as W, nextTick as X } from "vue";
import { virtualListProps as Y, virtualListEmits as Z } from "./virtual-list.mjs";
import { isObject as tt, addUnit as a, isNumber as et } from "@tu-view-plus/utils";
import { useNamespace as ot } from "@tu-view-plus/hooks";
import { useVirtualListSize as nt } from "./use-virtual-list-size.mjs";
import lt from "./virtual-list-item.vue.mjs";
import "../style/virtual-list.css";
const rt = x({
  name: "TuVirtualList"
}), vt = /* @__PURE__ */ x({
  ...rt,
  props: Y,
  emits: Z,
  setup(R, { expose: C, emit: h }) {
    const n = R, { data: c, itemKey: g, fixedSize: V, estimatedSize: O, buffer: y, height: w } = M(n), A = ot("virtual-list"), l = L(), S = L(), _ = s(
      () => c.value.map((t, o) => t[g.value] ?? o)
    ), {
      frontPadding: T,
      behindPadding: z,
      start: u,
      end: E,
      getStartByScroll: H,
      setItemSize: I,
      hasItemSize: K,
      setStart: k,
      getScrollOffset: b
    } = nt({
      dataKeys: _,
      contentRef: S,
      fixedSize: V,
      estimatedSize: O,
      buffer: y
    }), p = s(() => tt(n.component) ? {
      container: "div",
      list: "div",
      content: "div",
      ...n.component
    } : {
      container: n.component,
      list: "div",
      content: "div"
    }), N = s(() => ({
      height: a(w.value),
      overflow: "auto"
    })), $ = s(
      () => n.paddingPosition === "list" ? {
        paddingTop: a(T.value),
        paddingBottom: a(z.value)
      } : {}
    ), j = s(
      () => n.paddingPosition === "content" ? {
        paddingTop: a(T.value),
        paddingBottom: a(z.value)
      } : {}
    ), D = s(() => n.threshold && c.value.length <= n.threshold ? c.value : c.value.slice(u.value, E.value)), F = (t) => {
      const { scrollTop: o, scrollHeight: r, offsetHeight: m } = t.target, B = H(o);
      B !== u.value && k(B), h("scroll", t), Math.floor(r - (o + m)) <= 0 && h("reachBottom", t);
    };
    return C({
      scrollTo: (t) => {
        if (l.value)
          if (et(t))
            l.value.scrollTop = t;
          else {
            const o = t.index ?? _.value.indexOf(t.key ?? "");
            k(o - y.value), l.value.scrollTop = b(o), X(() => {
              if (l.value) {
                const r = b(o);
                r !== l.value.scrollTop && (l.value.scrollTop = r);
              }
            });
          }
      }
    }), (t, o) => (i(), d(v(e(p).container), {
      ref_key: "containerRef",
      ref: l,
      class: U(e(A).b()),
      style: q(e(N)),
      onScroll: F
    }, {
      default: f(() => [
        (i(), d(v(e(p).list), P(t.listAttrs, { style: e($) }), {
          default: f(() => [
            (i(), d(v(e(p).content), P({
              ref_key: "contentRef",
              ref: S
            }, t.contentAttrs, { style: e(j) }), {
              default: f(() => [
                (i(!0), G(J, null, Q(e(D), (r, m) => (i(), d(lt, {
                  key: r[e(g)] ?? e(u) + m,
                  "has-item-size": e(K),
                  "set-item-size": e(I)
                }, {
                  default: f(() => [
                    W(t.$slots, "item", {
                      item: r,
                      index: e(u) + m
                    })
                  ]),
                  _: 2
                }, 1032, ["has-item-size", "set-item-size"]))), 128))
              ]),
              _: 3
            }, 16, ["style"]))
          ]),
          _: 3
        }, 16, ["style"]))
      ]),
      _: 3
    }, 40, ["class", "style"]));
  }
});
export {
  vt as default
};
