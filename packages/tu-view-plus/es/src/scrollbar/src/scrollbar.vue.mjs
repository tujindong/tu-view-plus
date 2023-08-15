import { defineComponent as L, ref as r, computed as H, provide as D, reactive as G, watch as k, nextTick as z, onMounted as K, onUpdated as O, openBlock as w, createElementBlock as X, normalizeClass as b, unref as u, createElementVNode as Y, normalizeStyle as _, createBlock as R, resolveDynamicComponent as q, withCtx as F, renderSlot as I, createCommentVNode as J } from "vue";
import { useResizeObserver as Q, useEventListener as Z } from "@vueuse/core";
import { scrollbarProps as ee, scrollbarEmits as te } from "./scrollbar.mjs";
import { useNamespace as le } from "@tu-view-plus/hooks";
import { addUnit as E, isObject as oe, isNumber as m, debugWarn as W } from "@tu-view-plus/utils";
import { GAP as v } from "./util.mjs";
import { scrollbarContextKey as re } from "./constants.mjs";
import ae from "./bar.vue.mjs";
import "../style/scrollbar.css";
const se = L({
  name: "TuScrollbar"
}), de = /* @__PURE__ */ L({
  ...se,
  props: ee,
  emits: te,
  setup(N, { expose: $, emit: B }) {
    const l = N;
    let s, i;
    const n = le("scrollbar"), y = r(), t = r(), M = r(), S = r("0"), g = r("0"), h = r(), T = r(1), x = r(1), P = H(() => [
      l.wrapClass,
      n.e("wrap"),
      { [n.em("wrap", "hidden-default")]: !l.native }
    ]), U = H(() => {
      const e = {};
      return l.height && (e.height = E(l.height)), l.maxHeight && (e.maxHeight = E(l.maxHeight)), [l.wrapStyle, e];
    }), C = () => {
      var e;
      t.value && ((e = h.value) == null || e.handleScroll(t.value), B("scroll", {
        scrollTop: t.value.scrollTop,
        scrollLeft: t.value.scrollLeft
      }));
    };
    function V(e, o) {
      oe(e) ? t.value.scrollTo(e) : m(e) && m(o) && t.value.scrollTo(e, o);
    }
    const j = (e) => {
      if (!m(e)) {
        W("TuSrollbar", "value must be a number");
        return;
      }
      t.value.scrollTop = e;
    }, A = (e) => {
      if (!m(e)) {
        W("TuSrollbar", "value must be a number");
        return;
      }
      t.value.scrollLeft = e;
    }, a = () => {
      if (!t.value)
        return;
      const e = t.value.offsetHeight - v, o = t.value.offsetWidth - v, p = e ** 2 / t.value.scrollHeight, d = o ** 2 / t.value.scrollWidth, c = Math.max(p, l.minSize), f = Math.max(d, l.minSize);
      T.value = p / (e - p) / (c / (e - c)), x.value = d / (o - d) / (f / (o - f)), g.value = c + v < e ? `${c}px` : "", S.value = f + v < o ? `${f}px` : "";
    };
    return D(
      re,
      G({
        scrollbarElement: y,
        wrapElement: t
      })
    ), k(
      () => l.noresize,
      (e) => {
        e ? (s == null || s(), i == null || i()) : ({ stop: s } = Q(M, a), i = Z("resize", a));
      },
      { immediate: !0 }
    ), k(
      () => [l.maxHeight, l.height],
      () => {
        l.native || z(() => {
          var e;
          a(), t.value && ((e = h.value) == null || e.handleScroll(t.value));
        });
      }
    ), K(async () => {
      l.native || (await z(), a());
    }), O(() => a()), $({
      wrapRef: t,
      update: a,
      scrollTo: V,
      setScrollTop: j,
      setScrollLeft: A,
      handleScroll: C
    }), (e, o) => (w(), X("div", {
      ref_key: "scrollbarRef",
      ref: y,
      class: b(u(n).b())
    }, [
      Y("div", {
        ref_key: "wrapRef",
        ref: t,
        class: b(u(P)),
        style: _(u(U)),
        onScroll: C
      }, [
        (w(), R(q(e.tag), {
          ref: "viewRef",
          class: b([u(n).e("view"), e.viewClass]),
          style: _(e.viewStyle)
        }, {
          default: F(() => [
            I(e.$slots, "default")
          ]),
          _: 3
        }, 8, ["class", "style"])),
        e.native ? J("", !0) : (w(), R(ae, {
          key: 0,
          ref_key: "barRef",
          ref: h,
          height: g.value,
          width: S.value,
          always: e.always,
          "ratio-x": x.value,
          "ratio-y": T.value
        }, null, 8, ["height", "width", "always", "ratio-x", "ratio-y"]))
      ], 38)
    ], 2));
  }
});
export {
  de as default
};
