import { defineComponent as g, toRefs as z, reactive as W, computed as C, openBlock as n, createElementBlock as o, normalizeClass as r, unref as t, Fragment as v, renderList as b, createElementVNode as p, toDisplayString as y, createBlock as j } from "vue";
import { bodyProps as q, bodyEmits as A } from "./body.mjs";
import { useNamespace as G } from "@tu-view-plus/hooks";
import { RenderFunction as H } from "@tu-view-plus/constants";
import { getDateValue as _, isFunction as J } from "@tu-view-plus/utils";
import "b-tween";
import { useCellClassName as K } from "../hooks/use-cell-class-name.mjs";
const O = ["onMouseenter", "onMouseleave", "onClick"], Q = g({
  name: "TuBody"
}), ee = /* @__PURE__ */ g({
  ...Q,
  props: q,
  emits: A,
  setup(w, { emit: M }) {
    const N = w, d = M, s = G("picker"), { value: B, disabledDate: a, isSameTime: E, mode: u, rangeValues: R } = z(N), { getCellClassName: F } = K(
      W({
        value: B,
        isSameTime: E,
        mode: u,
        rangeValues: R
      })
    ), k = C(() => (u == null ? void 0 : u.value) === "week"), V = C(() => ({
      [s.e("row")]: !0,
      [s.is("week")]: k.value
    })), c = (e) => !!(J(a == null ? void 0 : a.value) && (a != null && a.value(_(e.value)))), $ = (e) => {
      const i = c(e);
      return F(e, i);
    }, h = (e) => {
      c(e) || d("cell-mouse-enter", e);
    }, L = (e) => {
      c(e) || d("cell-mouse-enter", e);
    }, P = (e) => {
      c(e) || d("cell-click", e);
    };
    return (e, i) => (n(), o("div", {
      class: r(t(s).e("body"))
    }, [
      (n(!0), o(v, null, b(e.rows, (S, T) => (n(), o("div", {
        key: T,
        class: r(V.value)
      }, [
        (n(!0), o(v, null, b(S, (l, m) => (n(), o(v, null, [
          k.value && m === 0 ? (n(), o("div", {
            key: m,
            class: r([t(s).e("cell"), t(s).is("week")])
          }, [
            p("div", {
              class: r(t(s).e("date"))
            }, [
              p("div", {
                class: r(t(s).e("date-value"))
              }, y(l.label), 3)
            ], 2)
          ], 2)) : (n(), o("div", {
            key: m,
            class: r($(l)),
            onMouseenter: (f) => h(l),
            onMouseleave: (f) => L(l),
            onClick: (f) => P(l)
          }, [
            e.dateRender ? (n(), j(t(H), {
              key: 0,
              "render-func": e.dateRender,
              date: t(_)(l.value)
            }, null, 8, ["render-func", "date"])) : (n(), o("div", {
              key: 1,
              class: r(t(s).e("date"))
            }, [
              p("div", {
                class: r(t(s).e("date-value"))
              }, y(l.label), 3)
            ], 2))
          ], 42, O))
        ], 64))), 256))
      ], 2))), 128))
    ], 2));
  }
});
export {
  ee as default
};
