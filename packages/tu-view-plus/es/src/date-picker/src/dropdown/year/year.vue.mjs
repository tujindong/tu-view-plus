import { defineComponent as d, toRefs as U, computed as n, openBlock as y, createElementBlock as L, normalizeClass as m, unref as c, createElementVNode as w, createVNode as i, mergeProps as P } from "vue";
import { yearProps as b, yearEmits as h } from "./year.mjs";
import { useNamespace as E } from "@tu-view-plus/hooks";
import { dayjs as R } from "@tu-view-plus/utils";
import { newArray as u } from "../../utils.mjs";
import S from "../header.vue.mjs";
import Y from "../body.vue.mjs";
const g = d({
  name: "TuYear"
}), F = /* @__PURE__ */ d({
  ...g,
  props: b,
  emits: h,
  setup(p, { emit: C }) {
    const s = p, t = C;
    console.log("year~~~~props", s);
    const l = E("picker"), { headerValue: O } = U(s), o = n(() => {
      const e = Math.floor(O.value.year() / 10) * 10 - 1, r = u(12).map((T, a) => ({
        label: e + a,
        value: R(`${e + a}`, "YYYY"),
        isPrev: a < 1,
        isNext: a > 10
      }));
      return u(4).map(
        (T, a) => r.slice(a * 3, (a + 1) * 3)
      );
    }), N = n(
      () => `${o.value[0][1].label}-${o.value[4 - 1][3 - 1].label}`
    ), _ = (e, r) => e.isSame(r, "year"), f = (e) => {
      t("select", e.value);
    }, v = (e) => {
      t("cell-mouse-enter", e.value);
    };
    return (e, r) => (y(), L("div", {
      class: m(c(l).e("dropdown-year"))
    }, [
      w("div", {
        class: m(c(l).e("dropdown-year-inner"))
      }, [
        i(S, P({
          ...e.headerOperations,
          icons: e.headerIcons
        }, { title: N.value }), null, 16, ["title"]),
        i(Y, {
          mode: "year",
          rows: o.value,
          value: e.value,
          "range-values": e.rangeValues,
          "disabled-date": e.disabledDate,
          "is-same-time": _,
          "date-render": e.dateRender,
          onCellClick: f,
          onCellMouseEnter: v
        }, null, 8, ["rows", "value", "range-values", "disabled-date", "date-render"])
      ], 2)
    ], 2));
  }
});
export {
  F as default
};
