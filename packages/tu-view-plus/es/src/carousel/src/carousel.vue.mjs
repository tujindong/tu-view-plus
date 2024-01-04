import { defineComponent as O, toRefs as V, ref as v, computed as i, reactive as H, provide as K, watchEffect as R, onBeforeUnmount as Y, createVNode as c, mergeProps as q } from "vue";
import { carouselProps as z, carouselEmits as G } from "./carousel.mjs";
import { useNamespace as J, useChildrenComponents as Q } from "@tu-view-plus/hooks";
import { isObject as W, isNumber as X } from "@tu-view-plus/utils";
import Z from "./carousel-indicator.vue.mjs";
import p from "./carousel-arrow.vue.mjs";
import { carouselInjectionKey as ee } from "./constants.mjs";
import "../style/carousel.css";
const se = /* @__PURE__ */ O({
  name: "TuCarousel",
  props: z,
  emits: G,
  setup(e, {
    emit: C,
    slots: m
  }) {
    const o = J("carousel"), {
      current: w,
      animationName: b,
      moveSpeed: N,
      transitionTimingFunction: M
    } = V(e), T = {
      interval: 3e3,
      hoverToPause: !0
    }, g = v(!1), f = v(), x = v(), y = i(() => W(e.autoPlay) ? {
      ...T,
      ...e.autoPlay
    } : e.autoPlay ? T : {});
    let I = 0, h = 0;
    const {
      children: _,
      components: u
    } = Q("TuCarouselItem"), l = v(e.defaultCurrent - 1), r = i(() => {
      const n = u.value.length, t = X(w.value) ? P(w.value - 1, n) : l.value, a = P(t - 1, n), d = P(t + 1, n);
      return {
        mergedIndex: t,
        mergedPrevIndex: a,
        mergedNextIndex: d
      };
    }), s = ({
      targetIndex: n,
      isNegative: t = !1,
      isManual: a = !1
    }) => {
      !h && n !== r.value.mergedIndex && (f.value = l.value, l.value = n, x.value = t ? "negative" : "positive", h = window.setTimeout(() => {
        h = 0;
      }, N.value), C("updateCurrent", l.value + 1), C("change", l.value + 1, f.value + 1, a));
    }, $ = H({
      items: u,
      slideTo: s,
      mergedIndexes: r,
      previousIndex: f,
      animationName: b,
      slideDirection: x,
      transitionTimingFunction: M,
      moveSpeed: N
    });
    K(ee, $);
    const A = () => {
      I && window.clearInterval(I);
    };
    function P(n, t) {
      const a = +n;
      return typeof a == "number" && !Number.isNaN(a) ? (a + t) % t : n;
    }
    const k = () => {
      s({
        targetIndex: r.value.mergedPrevIndex,
        isNegative: !0,
        isManual: !0
      });
    }, E = () => {
      s({
        targetIndex: r.value.mergedNextIndex,
        isManual: !0
      });
    }, L = (n) => {
      s({
        targetIndex: n,
        isNegative: n < r.value.mergedIndex,
        isManual: !0
      });
    }, S = i(() => y.value.hoverToPause ? {
      onMouseenter: () => {
        g.value = !0;
      },
      onMouseleave: () => {
        g.value = !1;
      }
    } : {}), U = i(() => e.indicatorType !== "never" && u.value.length > 1), j = i(() => e.showArrow !== "never" && u.value.length > 1), B = i(() => ({
      [o.b()]: !0,
      [o.m(`indicator-position-${e.indicatorPosition}`)]: e.indicatorPosition
    })), D = i(() => ({
      [o.m(`${e.animationName}`)]: e.animationName,
      [o.m(`${e.direction}`)]: e.direction,
      [o.m("negative")]: x.value === "negative"
    })), F = i(() => ({
      [o.e("indicator-wrapper")]: !0,
      [o.em("indicator-wrapper", e.indicatorPosition)]: e.indicatorPosition
    }));
    return R(() => {
      var d;
      const {
        interval: n
      } = y.value || {}, {
        mergedNextIndex: t
      } = r.value, a = ((d = u.value) == null ? void 0 : d.length) > 1 && !g.value && !!n;
      A(), a && (I = window.setInterval(() => {
        s({
          targetIndex: t
        });
      }, n));
    }), Y(() => {
      A();
    }), () => {
      var n;
      return _.value = (n = m.default) == null ? void 0 : n.call(m), c("div", q({
        class: B.value
      }, S.value), [c("div", {
        class: D.value
      }, [_.value]), U.value && c("div", {
        class: F.value
      }, [c(Z, {
        class: e.indicatorClasses,
        type: e.indicatorType,
        count: u.value.length,
        activeIndex: r.value.mergedIndex,
        position: e.indicatorPosition,
        trigger: e.trigger,
        onSelect: L
      }, null)]), j.value && c(p, {
        class: e.arrowClass,
        direction: e.direction,
        showArrow: e.showArrow,
        onPreviousClick: k,
        onNextClick: E
      }, null)]);
    };
  }
});
export {
  se as default
};
