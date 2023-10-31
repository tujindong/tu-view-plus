import { defineComponent as x, toRefs as U, ref as L, computed as s, openBlock as i, createBlock as d, resolveDynamicComponent as v, normalizeClass as q, unref as r, normalizeStyle as G, withCtx as f, mergeProps as P, createElementBlock as J, Fragment as Q, renderList as W, renderSlot as X, nextTick as Y } from "vue";
import { virtualListProps as Z, virtualListEmits as ee } from "./virtual-list.mjs";
import { isObject as te, addUnit as a, isNumber as oe } from "@tu-view-plus/utils";
import { useNamespace as le } from "@tu-view-plus/hooks";
import { useVirtualListSize as ne } from "./use-virtual-list-size.mjs";
import se from "./virtual-list-item.vue.mjs";
import "../style/virtual-list.css";
const re = x({
  name: "TuVirtualList"
}), he = /* @__PURE__ */ x({
  ...re,
  props: Z,
  emits: ee,
  setup(R, { expose: C, emit: V }) {
    const o = R, h = V, { data: c, itemKey: g, fixedSize: O, estimatedSize: w, buffer: y, height: A } = U(o), E = le("virtual-list"), l = L(), S = L(), _ = s(
      () => c.value.map((e, t) => e[g.value] ?? t)
    ), {
      frontPadding: T,
      behindPadding: z,
      start: u,
      end: H,
      getStartByScroll: I,
      setItemSize: K,
      hasItemSize: N,
      setStart: k,
      getScrollOffset: b
    } = ne({
      dataKeys: _,
      contentRef: S,
      fixedSize: O,
      estimatedSize: w,
      buffer: y
    }), p = s(() => te(o.component) ? {
      container: "div",
      list: "div",
      content: "div",
      ...o.component
    } : {
      container: o.component,
      list: "div",
      content: "div"
    }), $ = s(() => ({
      height: a(A.value),
      overflow: "auto"
    })), j = s(
      () => o.paddingPosition === "list" ? {
        paddingTop: a(T.value),
        paddingBottom: a(z.value)
      } : {}
    ), D = s(
      () => o.paddingPosition === "content" ? {
        paddingTop: a(T.value),
        paddingBottom: a(z.value)
      } : {}
    ), F = s(() => o.threshold && c.value.length <= o.threshold ? c.value : c.value.slice(u.value, H.value)), M = (e) => {
      const { scrollTop: t, scrollHeight: n, offsetHeight: m } = e.target, B = I(t);
      B !== u.value && k(B), h("scroll", e), Math.floor(n - (t + m)) <= 0 && h("reachBottom", e);
    };
    return C({
      scrollTo: (e) => {
        if (l.value)
          if (oe(e))
            l.value.scrollTop = e;
          else {
            const t = e.index ?? _.value.indexOf(e.key ?? "");
            k(t - y.value), l.value.scrollTop = b(t), Y(() => {
              if (l.value) {
                const n = b(t);
                n !== l.value.scrollTop && (l.value.scrollTop = n);
              }
            });
          }
      }
    }), (e, t) => (i(), d(v(p.value.container), {
      ref_key: "containerRef",
      ref: l,
      class: q(r(E).b()),
      style: G($.value),
      onScroll: M
    }, {
      default: f(() => [
        (i(), d(v(p.value.list), P(e.listAttrs, { style: j.value }), {
          default: f(() => [
            (i(), d(v(p.value.content), P({
              ref_key: "contentRef",
              ref: S
            }, e.contentAttrs, { style: D.value }), {
              default: f(() => [
                (i(!0), J(Q, null, W(F.value, (n, m) => (i(), d(se, {
                  key: n[r(g)] ?? r(u) + m,
                  "has-item-size": r(N),
                  "set-item-size": r(K)
                }, {
                  default: f(() => [
                    X(e.$slots, "item", {
                      item: n,
                      index: r(u) + m
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
  he as default
};
