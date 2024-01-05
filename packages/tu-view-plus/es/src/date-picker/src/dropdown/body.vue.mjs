import { defineComponent as _, toRefs as z, reactive as W, computed as C, openBlock as n, createElementBlock as t, normalizeClass as r, unref as o, Fragment as v, renderList as b, createElementVNode as p, toDisplayString as y, createBlock as j } from "vue";
import { bodyProps as q, bodyEmits as A } from "./body.mjs";
import { useNamespace as G } from "@tu-view-plus/hooks";
import { RenderFunction as H } from "@tu-view-plus/constants";
import { getDateValue as w, isFunction as J } from "@tu-view-plus/utils";
import "b-tween";
import { useCellClassName as K } from "../hooks/use-cell-class-name.mjs";
const O = ["onMouseenter", "onMouseleave", "onClick"], Q = _({
  name: "TuBody"
}), ee = /* @__PURE__ */ _({
  ...Q,
  props: q,
  emits: A,
  setup(g, { emit: M }) {
    const N = g, d = M, s = G("picker"), { value: B, disabledDate: a, isSameTime: E, mode: u, rangeValues: R } = z(N), { getCellClassName: F } = K(
      W({
        value: B,
        isSameTime: E,
        mode: u,
        rangeValues: R
      })
    ), k = C(() => (u == null ? void 0 : u.value) === "week"), V = C(() => ({
      [s.e("row")]: !0,
      [s.em("row", "week")]: k.value
    })), c = (e) => !!(J(a == null ? void 0 : a.value) && (a != null && a.value(w(e.value)))), $ = (e) => {
      const i = c(e);
      return F(e, i);
    }, h = (e) => {
      c(e) || d("cell-mouse-enter", e);
    }, L = (e) => {
      c(e) || d("cell-mouse-enter", e);
    }, P = (e) => {
      c(e) || d("cell-click", e);
    };
    return (e, i) => (n(), t("div", {
      class: r(o(s).e("body"))
    }, [
      (n(!0), t(v, null, b(e.rows, (S, T) => (n(), t("div", {
        key: T,
        class: r(V.value)
      }, [
        (n(!0), t(v, null, b(S, (l, m) => (n(), t(v, null, [
          k.value && m === 0 ? (n(), t("div", {
            key: m,
            class: r([o(s).e("cell"), o(s).e("cell-week")])
          }, [
            p("div", {
              class: r(o(s).e("date"))
            }, [
              p("div", {
                class: r(o(s).e("date-value"))
              }, y(l.label), 3)
            ], 2)
          ], 2)) : (n(), t("div", {
            key: m,
            class: r($(l)),
            onMouseenter: (f) => h(l),
            onMouseleave: (f) => L(l),
            onClick: (f) => P(l)
          }, [
            e.dateRender ? (n(), j(o(H), {
              key: 0,
              "render-func": e.dateRender,
              date: o(w)(l.value)
            }, null, 8, ["render-func", "date"])) : (n(), t("div", {
              key: 1,
              class: r(o(s).e("date"))
            }, [
              p("div", {
                class: r(o(s).e("date-value"))
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
