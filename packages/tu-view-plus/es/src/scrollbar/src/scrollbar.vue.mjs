import { defineComponent as L, ref as r, computed as C, provide as G, reactive as K, watch as H, nextTick as k, onMounted as O, onUpdated as X, openBlock as d, createElementBlock as Y, normalizeClass as w, unref as z, createElementVNode as q, normalizeStyle as _, createBlock as R, resolveDynamicComponent as F, withCtx as I, renderSlot as J, createCommentVNode as Q } from "vue";
import { useResizeObserver as Z, useEventListener as ee } from "@vueuse/core";
import { scrollbarProps as te, scrollbarEmits as le } from "./scrollbar.mjs";
import { useNamespace as oe } from "@tu-view-plus/hooks";
import { addUnit as E, isObject as re, isNumber as f, debugWarn as W } from "@tu-view-plus/utils";
import { GAP as m } from "./util.mjs";
import { scrollbarContextKey as ae } from "./constants.mjs";
import se from "./bar.vue.mjs";
import "../style/scrollbar.css";
const ie = L({
  name: "TuScrollbar"
}), we = /* @__PURE__ */ L({
  ...ie,
  props: te,
  emits: le,
  setup(N, { expose: $, emit: B }) {
    const l = N, M = B;
    let s, i;
    const n = oe("scrollbar"), b = r(), t = r(), P = r(), y = r("0"), S = r("0"), v = r(), g = r(1), T = r(1), U = C(() => [
      l.wrapClass,
      n.e("wrap"),
      { [n.em("wrap", "hidden-default")]: !l.native }
    ]), V = C(() => {
      const e = {};
      return l.height && (e.height = E(l.height)), l.maxHeight && (e.maxHeight = E(l.maxHeight)), [l.wrapStyle, e];
    }), x = () => {
      var e;
      t.value && ((e = v.value) == null || e.handleScroll(t.value), M("scroll", {
        scrollTop: t.value.scrollTop,
        scrollLeft: t.value.scrollLeft
      }));
    };
    function j(e, o) {
      re(e) ? t.value.scrollTo(e) : f(e) && f(o) && t.value.scrollTo(e, o);
    }
    const A = (e) => {
      if (!f(e)) {
        W("TuSrollbar", "value must be a number");
        return;
      }
      t.value.scrollTop = e;
    }, D = (e) => {
      if (!f(e)) {
        W("TuSrollbar", "value must be a number");
        return;
      }
      t.value.scrollLeft = e;
    }, a = () => {
      if (!t.value)
        return;
      const e = t.value.offsetHeight - m, o = t.value.offsetWidth - m, h = e ** 2 / t.value.scrollHeight, p = o ** 2 / t.value.scrollWidth, c = Math.max(h, l.minSize), u = Math.max(p, l.minSize);
      g.value = h / (e - h) / (c / (e - c)), T.value = p / (o - p) / (u / (o - u)), S.value = c + m < e ? `${c}px` : "", y.value = u + m < o ? `${u}px` : "";
    };
    return G(
      ae,
      K({
        scrollbarElement: b,
        wrapElement: t
      })
    ), H(
      () => l.noresize,
      (e) => {
        e ? (s == null || s(), i == null || i()) : ({ stop: s } = Z(P, a), i = ee("resize", a));
      },
      { immediate: !0 }
    ), H(
      () => [l.maxHeight, l.height],
      () => {
        l.native || k(() => {
          var e;
          a(), t.value && ((e = v.value) == null || e.handleScroll(t.value));
        });
      }
    ), O(async () => {
      l.native || (await k(), a());
    }), X(() => a()), $({
      wrapRef: t,
      update: a,
      scrollTo: j,
      setScrollTop: A,
      setScrollLeft: D,
      handleScroll: x
    }), (e, o) => (d(), Y("div", {
      ref_key: "scrollbarRef",
      ref: b,
      class: w(z(n).b())
    }, [
      q("div", {
        ref_key: "wrapRef",
        ref: t,
        class: w(U.value),
        style: _(V.value),
        onScroll: x
      }, [
        (d(), R(F(e.tag), {
          ref: "viewRef",
          class: w([z(n).e("view"), e.viewClass]),
          style: _(e.viewStyle)
        }, {
          default: I(() => [
            J(e.$slots, "default")
          ]),
          _: 3
        }, 8, ["class", "style"])),
        e.native ? Q("", !0) : (d(), R(se, {
          key: 0,
          ref_key: "barRef",
          ref: v,
          height: S.value,
          width: y.value,
          always: e.always,
          "ratio-x": T.value,
          "ratio-y": g.value
        }, null, 8, ["height", "width", "always", "ratio-x", "ratio-y"]))
      ], 38)
    ], 2));
  }
});
export {
  we as default
};
