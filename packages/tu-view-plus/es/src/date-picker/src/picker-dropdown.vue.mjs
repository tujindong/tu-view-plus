import { defineComponent as b, toRefs as W, computed as t, reactive as q, openBlock as o, createElementBlock as p, normalizeClass as h, createElementVNode as F, unref as w, Fragment as y, createBlock as s, mergeProps as n, normalizeProps as P } from "vue";
import { pickerDropdownProps as M, pickerDropdownEmits as j } from "./picker-dropdown.mjs";
import { useNamespace as A } from "@tu-view-plus/hooks";
import { getNow as G } from "@tu-view-plus/utils";
import J from "./dropdown/year/year.vue.mjs";
import K from "./dropdown/quarter/quarter.vue.mjs";
import Q from "./dropdown/month/month.vue.mjs";
import U from "./dropdown/week/week.vue.mjs";
import X from "./dropdown/date/date.vue.mjs";
const Y = b({
  name: "PickerDropdown"
}), ce = /* @__PURE__ */ b({
  ...Y,
  props: M,
  emits: j,
  setup(S, { emit: _ }) {
    const g = S, i = _, r = A("picker"), {
      shortcuts: u,
      shortcutsPosition: k,
      format: Z,
      value: l,
      disabledDate: $,
      hideTrigger: c,
      showNowBtn: m,
      dateRender: D,
      showConfirmBtn: d,
      headerValue: V,
      headerIcons: B,
      headerOperations: C,
      headerMode: E
    } = W(g), f = t(
      () => !!(u.value && u.value.length)
    ), I = t(
      () => (m == null ? void 0 : m.value) && (d == null ? void 0 : d.value) && !f.value
    ), v = t(
      () => I.value || f.value
    ), L = t(
      () => v.value && k.value === "left"
    ), N = t(
      () => v.value && k.value === "right"
    ), O = t(() => (l == null ? void 0 : l.value) || G()), R = t(() => ({
      [r.e("dropdown")]: !0,
      [r.em("dropdown", "dropdown-only")]: c == null ? void 0 : c.value,
      [r.em("dropdown", "shortcuts-placement-left")]: L.value,
      [r.em("dropdown", "shortcuts-placement-right")]: N.value
    })), z = (e) => {
      i("cell-click", e);
    }, H = (e) => {
      i("header-label-click", e);
    }, T = (e) => {
      i("time-picker-select", e);
    }, a = q({
      value: l,
      headerValue: V,
      headerIcons: B,
      headerOperations: C,
      disabledDate: $,
      dateRender: D,
      onSelect: z,
      onHeaderLabelClick: H
    });
    return (e, x) => (o(), p("div", {
      class: h(R.value)
    }, [
      F("div", {
        class: h(w(r).e("dropdown-content"))
      }, [
        w(E) ? (o(), p(y, { key: 0 }, [], 64)) : (o(), p(y, { key: 1 }, [
          e.mode === "week" ? (o(), s(U, n({ key: 0 }, a, { "day-start-of-week": e.dayStartOfWeek }), null, 16, ["day-start-of-week"])) : e.mode === "month" ? (o(), s(Q, n({
            key: 1,
            abbreviation: e.abbreviation
          }, a), null, 16, ["abbreviation"])) : e.mode === "year" ? (o(), s(J, P(n({ key: 2 }, a)), null, 16)) : e.mode === "quarter" ? (o(), s(K, P(n({ key: 3 }, a)), null, 16)) : (o(), s(X, n({ key: 4 }, a, {
            mode: "date",
            "show-time": e.showTime,
            "time-picker-props": e.timePickerProps,
            "day-start-of-week": e.dayStartOfWeek,
            "footer-value": O.value,
            "time-picker-value": e.timePickerValue,
            "disabled-time": e.disabledTime,
            onTimePickerSelect: T
          }), null, 16, ["show-time", "time-picker-props", "day-start-of-week", "footer-value", "time-picker-value", "disabled-time"]))
        ], 64))
      ], 2)
    ], 2));
  }
});
export {
  ce as default
};
