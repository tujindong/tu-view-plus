import { defineComponent as p, computed as n, openBlock as s, createElementBlock as A, normalizeClass as m, createElementVNode as d, createBlock as a, unref as e, withCtx as c, createVNode as i } from "vue";
import { carouselArrowProps as y, carouselArrowEmits as N } from "./carousel-arrow.mjs";
import { TuIcon as l } from "../../icon/index.mjs";
import { useNamespace as g } from "@tu-view-plus/hooks";
import { ArrowLeft as x, ArrowUp as z, ArrowRight as B, ArrowDown as E } from "@tu-view-plus/icons-vue";
const P = p({
  name: "TuCarouselArrow"
}), R = /* @__PURE__ */ p({
  ...P,
  props: y,
  emits: N,
  setup(w, { emit: f }) {
    const r = w, u = f, o = g("carousel"), k = n(() => ({
      [o.e("arrow")]: !0,
      [o.em("arrow", r.showArrow)]: r.showArrow === "hover"
    })), v = n(() => ({
      [o.em("arrow", "top")]: r.direction === "vertical",
      [o.em("arrow", "left")]: r.direction !== "vertical"
    })), C = n(() => ({
      [o.em("arrow", "bottom")]: r.direction === "vertical",
      [o.em("arrow", "right")]: r.direction !== "vertical"
    })), h = (t) => {
      u("previousClick", t);
    }, _ = (t) => {
      u("nextClick", t);
    };
    return (t, T) => (s(), A("div", {
      class: m(k.value)
    }, [
      d("div", {
        class: m(v.value),
        onClick: h
      }, [
        t.direction === "horizontal" ? (s(), a(e(l), { key: 0 }, {
          default: c(() => [
            i(e(x))
          ]),
          _: 1
        })) : (s(), a(e(l), { key: 1 }, {
          default: c(() => [
            i(e(z))
          ]),
          _: 1
        }))
      ], 2),
      d("div", {
        class: m(C.value),
        onClick: _
      }, [
        t.direction === "horizontal" ? (s(), a(e(l), { key: 0 }, {
          default: c(() => [
            i(e(B))
          ]),
          _: 1
        })) : (s(), a(e(l), { key: 1 }, {
          default: c(() => [
            i(e(E))
          ]),
          _: 1
        }))
      ], 2)
    ], 2));
  }
});
export {
  R as default
};
