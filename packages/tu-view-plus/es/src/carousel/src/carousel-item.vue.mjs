import { defineComponent as l, getCurrentInstance as p, inject as v, computed as s, openBlock as _, createElementBlock as f, normalizeClass as x, normalizeStyle as C, renderSlot as g } from "vue";
import { useNamespace as h } from "@tu-view-plus/hooks";
import { carouselInjectionKey as y } from "./constants.mjs";
const I = ["aria-hidden"], S = l({
  name: "TuCarouselItem"
}), j = /* @__PURE__ */ l({
  ...S,
  setup(D) {
    const t = h("carousel"), r = p(), o = v(y, {}), a = s(
      () => {
        var e;
        return ((e = o.items) == null ? void 0 : e.indexOf((r == null ? void 0 : r.uid) ?? -1)) ?? -1;
      }
    ), m = s(
      () => {
        var e;
        return ((e = o.mergedIndexes) == null ? void 0 : e.mergedIndex) === a.value;
      }
    ), c = s(() => {
      const { previousIndex: e, animationName: n, slideDirection: u, mergedIndexes: i } = o;
      return {
        [t.e("item")]: !0,
        [t.em("item", "prev")]: a.value === (i == null ? void 0 : i.mergedPrevIndex),
        [t.em("item", "next")]: a.value === (i == null ? void 0 : i.mergedNextIndex),
        [t.em("item", "current")]: m.value,
        [t.em("item", "slide-in")]: n === "slide" && u && m.value,
        [t.em("item", "slide-out")]: n === "slide" && u && a.value === e
      };
    }), d = s(() => {
      const { transitionTimingFunction: e, moveSpeed: n } = o;
      return {
        transitionTimingFunction: e,
        transitionDuration: `${n}ms`,
        animationTimingFunction: e,
        animationDuration: `${n}ms`
      };
    });
    return (e, n) => (_(), f("div", {
      "aria-hidden": !m.value,
      class: x(c.value),
      style: C(d.value)
    }, [
      g(e.$slots, "default")
    ], 14, I));
  }
});
export {
  j as default
};
