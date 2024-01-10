import { defineComponent as u, toRefs as k, computed as l, openBlock as b, createElementBlock as w, normalizeClass as m, unref as n, createElementVNode as Y, createVNode as c, mergeProps as U } from "vue";
import { monthProps as E, monthEmits as g } from "./month.mjs";
import { useNamespace as y, useLocale as $ } from "@tu-view-plus/hooks";
import { dayjs as j } from "@tu-view-plus/utils";
import { newArray as i } from "../../utils.mjs";
import M from "../header.vue.mjs";
import R from "../body.vue.mjs";
const V = u({
  name: "TuMonth"
}), G = /* @__PURE__ */ u({
  ...V,
  props: E,
  emits: g,
  setup(d, { emit: p }) {
    const f = [
      "jan",
      "feb",
      "mar",
      "apr",
      "may",
      "jun",
      "jul",
      "aug",
      "sep",
      "oct",
      "nov",
      "dec"
    ], C = d, s = p, r = y("picker"), { t: v } = $(), { headerValue: t } = k(C), _ = l(() => t.value.format("YYYY")), h = l(() => {
      const e = t.value.year(), a = i(12).map((L, o) => ({
        label: v(`tu.datepicker.months.${f[o]}`),
        value: j(`${e}-${o + 1}`, "YYYY-M")
      }));
      return i(4).map(
        (L, o) => a.slice(o * 3, (o + 1) * 3)
      );
    }), O = (e, a) => e.isSame(a, "month"), T = (e) => {
      s("select", e.value);
    }, N = (e) => {
      s("cell-mouse-enter", e.value);
    };
    return (e, a) => (b(), w("div", {
      class: m(n(r).e("dropdown-month"))
    }, [
      Y("div", {
        class: m(n(r).e("dropdown-month-inner"))
      }, [
        c(M, U({
          ...e.headerOperations,
          icons: e.headerIcons
        }, {
          mode: "month",
          title: _.value,
          value: n(t),
          "on-label-click": e.onHeaderLabelClick
        }), null, 16, ["title", "value", "on-label-click"]),
        c(R, {
          mode: "month",
          rows: h.value,
          value: e.value,
          "range-values": e.rangeValues,
          "disabled-date": e.disabledDate,
          "is-same-time": O,
          "date-render": e.dateRender,
          onCellClick: T,
          onCellMouseEnter: N
        }, null, 8, ["rows", "value", "range-values", "disabled-date", "date-render"])
      ], 2)
    ], 2));
  }
});
export {
  G as default
};
