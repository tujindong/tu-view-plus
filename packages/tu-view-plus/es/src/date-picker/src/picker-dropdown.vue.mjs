import { defineComponent as P, toRefs as g, computed as r, openBlock as o, createElementBlock as i, normalizeClass as f, createTextVNode as B, createElementVNode as D, unref as k, Fragment as v, createBlock as t, mergeProps as s, normalizeProps as h } from "vue";
import { pickerDropdownProps as I } from "./picker-dropdown.mjs";
import { useNamespace as N } from "@tu-view-plus/hooks";
import O from "./dropdown/year/year.vue.mjs";
import R from "./dropdown/quarter/quarter.vue.mjs";
import z from "./dropdown/month/month.vue.mjs";
import E from "./dropdown/week/week.vue.mjs";
import W from "./dropdown/date/date.vue.mjs";
const q = P({
  name: "PickerDropdown"
}), x = /* @__PURE__ */ P({
  ...q,
  props: I,
  setup(w) {
    const y = w, a = N("picker"), {
      shortcuts: d,
      shortcutsPosition: p,
      format: C,
      value: F,
      disabledDate: L,
      hideTrigger: n,
      showNowBtn: m,
      dateRender: M,
      showConfirmBtn: l,
      headerValue: j,
      headerIcons: A,
      headerOperations: G,
      headerMode: b
    } = g(y), c = r(
      () => !!(d.value && d.value.length)
    ), S = r(
      () => (m == null ? void 0 : m.value) && (l == null ? void 0 : l.value) && !c.value
    ), u = r(
      () => S.value || c.value
    ), T = r(
      () => u.value && p.value === "left"
    ), V = r(
      () => u.value && p.value === "right"
    ), $ = r(() => ({
      [a.e("dropdown")]: !0,
      [a.em("dropdown", "dropdown-only")]: n == null ? void 0 : n.value,
      [a.em("dropdown", "shortcuts-placement-left")]: T.value,
      [a.em("dropdown", "shortcuts-placement-right")]: V.value
    }));
    return (e, H) => (o(), i("div", {
      class: f($.value)
    }, [
      B(" picker-dropdown "),
      D("div", {
        class: f(k(a).e("dropdown-content"))
      }, [
        k(b) ? (o(), i(v, { key: 0 }, [], 64)) : (o(), i(v, { key: 1 }, [
          e.mode === "week" ? (o(), t(E, s({ key: 0 }, e.commonPanelProps, { "day-start-of-week": e.dayStartOfWeek }), null, 16, ["day-start-of-week"])) : e.mode === "month" ? (o(), t(z, s({
            key: 1,
            abbreviation: e.abbreviation
          }, e.commonPanelProps), null, 16, ["abbreviation"])) : e.mode === "year" ? (o(), t(O, h(s({ key: 2 }, e.commonPanelProps)), null, 16)) : e.mode === "quarter" ? (o(), t(R, h(s({ key: 3 }, e.commonPanelProps)), null, 16)) : (o(), t(W, s({ key: 4 }, e.commonPanelProps, {
            mode: "date",
            "show-time": e.showTime,
            "time-picker-props": e.timePickerProps,
            "day-start-of-week": e.dayStartOfWeek,
            "footer-value": e.footerValue,
            "time-picker-value": e.timePickerValue,
            "disabled-time": e.disabledTime,
            onTimePickerSelect: e.onTimePickerSelect
          }), null, 16, ["show-time", "time-picker-props", "day-start-of-week", "footer-value", "time-picker-value", "disabled-time", "onTimePickerSelect"]))
        ], 64))
      ], 2)
    ], 2));
  }
});
export {
  x as default
};
