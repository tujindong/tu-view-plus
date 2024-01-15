import { defineComponent as z, toRefs as ce, computed as n, reactive as V, watch as ue, openBlock as t, createElementBlock as H, normalizeClass as O, unref as o, createBlock as r, normalizeProps as h, mergeProps as s, createCommentVNode as b, createElementVNode as me, Fragment as R, createVNode as F, createSlots as de, withCtx as T, guardReactiveProps as he } from "vue";
import { pickerDropdownProps as pe, pickerDropdownEmits as fe } from "./picker-dropdown.mjs";
import { useNamespace as ke } from "@tu-view-plus/hooks";
import { RenderFunction as ve } from "@tu-view-plus/constants";
import { getNow as W, getDayjsValue as be, isFunction as we } from "@tu-view-plus/utils";
import { useHeaderValue as ye } from "./hooks/use-header-value.mjs";
import "b-tween";
import j from "./dropdown/year/year.vue.mjs";
import Pe from "./dropdown/quarter/quarter.vue.mjs";
import q from "./dropdown/month/month.vue.mjs";
import Se from "./dropdown/week/week.vue.mjs";
import Ce from "./dropdown/date/date.vue.mjs";
import g from "./dropdown/shortcuts.vue.mjs";
import Ve from "./dropdown/footer.vue.mjs";
const He = z({
  name: "PickerDropdown"
}), We = /* @__PURE__ */ z({
  ...He,
  props: pe,
  emits: fe,
  setup(A, { emit: G }) {
    const J = A, a = G, i = ke("picker"), {
      shortcuts: w,
      shortcutsPosition: c,
      format: B,
      value: p,
      disabledDate: K,
      hideTrigger: y,
      showNowBtn: f,
      dateRender: Q,
      showConfirmBtn: u,
      headerValue: I,
      headerIcons: P,
      headerOperations: U,
      headerMode: k,
      size: l
    } = ce(J), L = n(
      () => !!(w.value && w.value.length)
    ), N = n(
      () => (f == null ? void 0 : f.value) && (u == null ? void 0 : u.value) && !L.value
    ), m = n(
      () => N.value || L.value
    ), X = n(
      () => m.value && c.value === "left"
    ), Y = n(
      () => m.value && c.value === "right"
    ), Z = n(() => (p == null ? void 0 : p.value) || W()), _ = n(
      () => m.value && c.value === "bottom"
    ), x = n(() => ({
      [i.e("dropdown")]: !0,
      [i.em("dropdown", l == null ? void 0 : l.value)]: l == null ? void 0 : l.value,
      [i.em("dropdown", "dropdown-only")]: y == null ? void 0 : y.value,
      [i.em("dropdown", "shortcuts-placement-left")]: X.value,
      [i.em("dropdown", "shortcuts-placement-right")]: Y.value
    })), {
      headerValue: $,
      setHeaderValue: ee,
      headerOperations: D
    } = ye(
      V({
        mode: k,
        format: B
      })
    ), oe = (e) => {
      a("cell-click", e);
    }, te = (e) => {
      a("header-label-click", e);
    }, ae = (e) => {
      a("time-picker-select", e);
    }, M = (e) => {
      a("header-select", e);
    }, re = () => {
      a("month-header-click");
    }, E = () => {
      a("today-btn-click", W());
    }, ne = () => {
      a("confirm");
    }, S = (e) => {
      const { value: v } = e;
      return be(
        we(v) ? v() : v,
        e.format || B.value
      );
    }, le = (e) => {
      a("shortcut-click", S(e), e);
    }, se = (e) => {
      a("shortcut-mouse-enter", S(e));
    }, ie = (e) => {
      a("shortcut-mouse-leave", S(e));
    }, d = V({
      value: p,
      headerValue: I,
      headerIcons: P,
      headerOperations: U,
      disabledDate: K,
      dateRender: Q,
      onSelect: oe,
      onHeaderLabelClick: te
    }), C = V({
      shortcuts: w,
      showNowBtn: N,
      onItemClick: le,
      onItemMouseEnter: se,
      onItemMouseLeave: ie,
      onNowClick: E
    });
    return ue(I, (e) => {
      ee(e);
    }), (e, v) => (t(), H("div", {
      class: O(x.value)
    }, [
      m.value && o(c) === "left" ? (t(), r(g, h(s({ key: 0 }, C)), null, 16)) : b("", !0),
      me("div", {
        class: O(o(i).e("dropdown-content"))
      }, [
        o(k) ? (t(), H(R, { key: 0 }, [
          o(k) === "year" ? (t(), r(j, {
            key: 0,
            "header-value": o($),
            "header-icons": o(P),
            "header-operations": o(D),
            onSelect: M
          }, null, 8, ["header-value", "header-icons", "header-operations"])) : o(k) === "month" ? (t(), r(q, {
            key: 1,
            "header-value": o($),
            "header-icons": o(P),
            "header-operations": o(D),
            abbreviation: e.abbreviation,
            onSelect: M,
            onHeaderLabelClick: re
          }, null, 8, ["header-value", "header-icons", "header-operations", "abbreviation"])) : b("", !0)
        ], 64)) : (t(), H(R, { key: 1 }, [
          e.mode === "week" ? (t(), r(Se, s({ key: 0 }, d, { "day-start-of-week": e.dayStartOfWeek }), null, 16, ["day-start-of-week"])) : e.mode === "month" ? (t(), r(q, s({
            key: 1,
            abbreviation: e.abbreviation
          }, d), null, 16, ["abbreviation"])) : e.mode === "year" ? (t(), r(j, h(s({ key: 2 }, d)), null, 16)) : e.mode === "quarter" ? (t(), r(Pe, h(s({ key: 3 }, d)), null, 16)) : (t(), r(Ce, s({ key: 4 }, d, {
            mode: "date",
            "show-time": e.showTime,
            "time-picker-props": e.timePickerProps,
            "day-start-of-week": e.dayStartOfWeek,
            "footer-value": Z.value,
            "time-picker-value": e.timePickerValue,
            "disabled-time": e.disabledTime,
            onTimePickerSelect: ae
          }), null, 16, ["show-time", "time-picker-props", "day-start-of-week", "footer-value", "time-picker-value", "disabled-time"])),
          F(Ve, {
            size: o(l),
            "show-today-btn": o(f) && !(o(u) || _.value),
            "show-confirm-btn": o(u),
            "confirm-btn-disabled": e.confirmBtnDisabled,
            onTodayBtnClick: E,
            onConfirmBtnClick: ne
          }, de({ _: 2 }, [
            e.extra ? {
              name: "extra",
              fn: T(() => [
                e.extra ? (t(), r(o(ve), {
                  key: 0,
                  "render-func": e.extra
                }, null, 8, ["render-func"])) : b("", !0)
              ]),
              key: "0"
            } : void 0,
            _.value ? {
              name: "button",
              fn: T(() => [
                F(g, h(he(C)), null, 16)
              ]),
              key: "1"
            } : void 0
          ]), 1032, ["size", "show-today-btn", "show-confirm-btn", "confirm-btn-disabled"])
        ], 64))
      ], 2),
      m.value && o(c) === "right" ? (t(), r(g, h(s({ key: 1 }, C)), null, 16)) : b("", !0)
    ], 2));
  }
});
export {
  We as default
};
