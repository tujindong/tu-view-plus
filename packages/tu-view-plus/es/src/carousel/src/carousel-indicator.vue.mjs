import { defineComponent as p, computed as c, openBlock as n, createElementBlock as s, mergeProps as k, normalizeStyle as x, normalizeClass as m, unref as a, Fragment as _, renderList as h } from "vue";
import { carouselIndicatorProps as C, carouselIndicatorEmits as N } from "./carousel-indicator.mjs";
import { useNamespace as b } from "@tu-view-plus/hooks";
const T = ["data-index"], w = p({
  name: "TuCarouselIndicator"
}), E = /* @__PURE__ */ p({
  ...w,
  props: C,
  emits: N,
  setup(f, { emit: y }) {
    const t = f, l = y, r = b("carousel"), g = c(() => ({
      [r.e("indicator")]: !0,
      [r.em("indicator", t.type)]: t.type,
      [r.em("indicator", t.position)]: t.position
    })), d = (e) => {
      if (e.preventDefault(), t.type == "slider") {
        const i = e.offsetX, u = e.currentTarget.clientWidth;
        if (e.target === e.currentTarget) {
          const o = Math.floor(i / u * t.count);
          o !== t.activeIndex && l("select", o);
        }
      } else {
        const i = Number.parseInt(
          e.target.getAttribute("data-index") ?? "",
          10
        );
        !Number.isNaN(i) && i !== t.activeIndex && l("select", i);
      }
    }, v = c(() => t.trigger === "click" ? { onClick: d } : { onMouseover: d }), I = c(() => {
      const e = 100 / t.count;
      return { width: `${e}%`, left: `${t.activeIndex * e}%` };
    });
    return (e, i) => (n(), s("div", k({ class: g.value }, v.value), [
      e.type === "slider" ? (n(), s("span", {
        key: 0,
        style: x(I.value),
        class: m([
          a(r).e("indicator-item"),
          a(r).em("indicator-item", "active")
        ])
      }, null, 6)) : (n(!0), s(_, { key: 1 }, h(Array(e.count), (u, o) => (n(), s("span", {
        key: o,
        "data-index": o,
        class: m([
          a(r).e("indicator-item"),
          { [a(r).em("indicator-item", "active")]: o === e.activeIndex }
        ])
      }, null, 10, T))), 128))
    ], 16));
  }
});
export {
  E as default
};
