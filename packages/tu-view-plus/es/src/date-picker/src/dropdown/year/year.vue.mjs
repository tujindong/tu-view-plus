import { defineComponent as u, toRefs as U, computed as l, openBlock as y, createElementBlock as L, normalizeClass as n, unref as m, createElementVNode as w, createVNode as c, mergeProps as P } from "vue";
import { yearProps as b, yearEmits as h } from "./year.mjs";
import { useNamespace as E } from "@tu-view-plus/hooks";
import { dayjs as R } from "@tu-view-plus/utils";
import { newArray as i } from "../../utils.mjs";
import S from "../header.vue.mjs";
import Y from "../body.vue.mjs";
const k = u({
  name: "TuYear"
}), F = /* @__PURE__ */ u({
  ...k,
  props: b,
  emits: h,
  setup(d, { emit: p }) {
    const C = d, s = p, t = E("picker"), { headerValue: O } = U(C), o = l(() => {
      const e = Math.floor(O.value.year() / 10) * 10 - 1, r = i(12).map((T, a) => ({
        label: e + a,
        value: R(`${e + a}`, "YYYY"),
        isPrev: a < 1,
        isNext: a > 10
      }));
      return i(4).map(
        (T, a) => r.slice(a * 3, (a + 1) * 3)
      );
    }), N = l(
      () => `${o.value[0][1].label}-${o.value[4 - 1][3 - 1].label}`
    ), _ = (e, r) => e.isSame(r, "year"), f = (e) => {
      s("select", e.value);
    }, v = (e) => {
      s("cell-mouse-enter", e.value);
    };
    return (e, r) => (y(), L("div", {
      class: n(m(t).e("dropdown-year"))
    }, [
      w("div", {
        class: n(m(t).e("dropdown-year-inner"))
      }, [
        c(S, P({
          ...e.headerOperations,
          icons: e.headerIcons
        }, { title: N.value }), null, 16, ["title"]),
        c(Y, {
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
