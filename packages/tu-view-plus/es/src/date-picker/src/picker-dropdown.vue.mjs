import { defineComponent as z, toRefs as le, computed as r, reactive as y, watch as ie, openBlock as t, createElementBlock as P, normalizeClass as $, createElementVNode as ce, unref as o, Fragment as D, createBlock as n, createCommentVNode as M, mergeProps as c, normalizeProps as S, createVNode as E, createSlots as me, withCtx as O, guardReactiveProps as de } from "vue";
import { pickerDropdownProps as ue, pickerDropdownEmits as he } from "./picker-dropdown.mjs";
import { useNamespace as pe } from "@tu-view-plus/hooks";
import { RenderFunction as fe } from "@tu-view-plus/constants";
import { getNow as R, getDayjsValue as ke, isFunction as ve } from "@tu-view-plus/utils";
import { useHeaderValue as be } from "./hooks/use-header-value.mjs";
import "b-tween";
import F from "./dropdown/year/year.vue.mjs";
import we from "./dropdown/quarter/quarter.vue.mjs";
import T from "./dropdown/month/month.vue.mjs";
import ye from "./dropdown/week/week.vue.mjs";
import Pe from "./dropdown/date/date.vue.mjs";
import Se from "./dropdown/shortcuts.vue.mjs";
import Ce from "./dropdown/footer.vue.mjs";
const Ve = z({
  name: "PickerDropdown"
}), Te = /* @__PURE__ */ z({
  ...Ve,
  props: ue,
  emits: he,
  setup(W, { emit: j }) {
    const q = W, a = j, s = pe("picker"), {
      shortcuts: p,
      shortcutsPosition: f,
      format: C,
      value: m,
      disabledDate: A,
      hideTrigger: k,
      showNowBtn: d,
      dateRender: G,
      showConfirmBtn: l,
      headerValue: V,
      headerIcons: v,
      headerOperations: J,
      headerMode: u
    } = le(q), H = r(
      () => !!(p.value && p.value.length)
    ), g = r(
      () => (d == null ? void 0 : d.value) && (l == null ? void 0 : l.value) && !H.value
    ), b = r(
      () => g.value || H.value
    ), K = r(
      () => b.value && f.value === "left"
    ), Q = r(
      () => b.value && f.value === "right"
    ), U = r(() => (m == null ? void 0 : m.value) || R()), B = r(
      () => b.value && f.value === "bottom"
    ), X = r(() => ({
      [s.e("dropdown")]: !0,
      [s.em("dropdown", "dropdown-only")]: k == null ? void 0 : k.value,
      [s.em("dropdown", "shortcuts-placement-left")]: K.value,
      [s.em("dropdown", "shortcuts-placement-right")]: Q.value
    })), {
      headerValue: I,
      setHeaderValue: Y,
      headerOperations: L
    } = be(
      y({
        mode: u,
        format: C
      })
    ), Z = (e) => {
      a("cell-click", e);
    }, x = (e) => {
      a("header-label-click", e);
    }, ee = (e) => {
      a("time-picker-select", e);
    }, N = (e) => {
      a("header-select", e);
    }, oe = () => {
      a("month-header-click");
    }, _ = () => {
      a("today-btn-click", R());
    }, te = () => {
      a("confirm");
    }, w = (e) => {
      const { value: h } = e;
      return ke(
        ve(h) ? h() : h,
        e.format || C.value
      );
    }, ae = (e) => {
      a("shortcut-click", w(e), e);
    }, re = (e) => {
      a("shortcut-mouse-enter", w(e));
    }, ne = (e) => {
      a("shortcut-mouse-leave", w(e));
    }, i = y({
      value: m,
      headerValue: V,
      headerIcons: v,
      headerOperations: J,
      disabledDate: A,
      dateRender: G,
      onSelect: Z,
      onHeaderLabelClick: x
    }), se = y({
      shortcuts: p,
      showNowBtn: g,
      onItemClick: ae,
      onItemMouseEnter: re,
      onItemMouseLeave: ne,
      onNowClick: _
    });
    return ie(V, (e) => {
      Y(e);
    }), (e, h) => (t(), P("div", {
      class: $(X.value)
    }, [
      ce("div", {
        class: $(o(s).e("dropdown-content"))
      }, [
        o(u) ? (t(), P(D, { key: 0 }, [
          o(u) === "year" ? (t(), n(F, {
            key: 0,
            "header-value": o(I),
            "header-icons": o(v),
            "header-operations": o(L),
            onSelect: N
          }, null, 8, ["header-value", "header-icons", "header-operations"])) : o(u) === "month" ? (t(), n(T, {
            key: 1,
            "header-value": o(I),
            "header-icons": o(v),
            "header-operations": o(L),
            abbreviation: e.abbreviation,
            onSelect: N,
            onHeaderLabelClick: oe
          }, null, 8, ["header-value", "header-icons", "header-operations", "abbreviation"])) : M("", !0)
        ], 64)) : (t(), P(D, { key: 1 }, [
          e.mode === "week" ? (t(), n(ye, c({ key: 0 }, i, { "day-start-of-week": e.dayStartOfWeek }), null, 16, ["day-start-of-week"])) : e.mode === "month" ? (t(), n(T, c({
            key: 1,
            abbreviation: e.abbreviation
          }, i), null, 16, ["abbreviation"])) : e.mode === "year" ? (t(), n(F, S(c({ key: 2 }, i)), null, 16)) : e.mode === "quarter" ? (t(), n(we, S(c({ key: 3 }, i)), null, 16)) : (t(), n(Pe, c({ key: 4 }, i, {
            mode: "date",
            "show-time": e.showTime,
            "time-picker-props": e.timePickerProps,
            "day-start-of-week": e.dayStartOfWeek,
            "footer-value": U.value,
            "time-picker-value": e.timePickerValue,
            "disabled-time": e.disabledTime,
            onTimePickerSelect: ee
          }), null, 16, ["show-time", "time-picker-props", "day-start-of-week", "footer-value", "time-picker-value", "disabled-time"])),
          E(Ce, {
            "show-today-btn": o(d) && !(o(l) || B.value),
            "show-confirm-btn": o(l),
            "confirm-btn-disabled": e.confirmBtnDisabled,
            onTodayBtnClick: _,
            onConfirmBtnClick: te
          }, me({ _: 2 }, [
            e.extra ? {
              name: "extra",
              fn: O(() => [
                e.extra ? (t(), n(o(fe), {
                  key: 0,
                  "render-func": e.extra
                }, null, 8, ["render-func"])) : M("", !0)
              ]),
              key: "0"
            } : void 0,
            B.value ? {
              name: "button",
              fn: O(() => [
                E(Se, S(de(se)), null, 16)
              ]),
              key: "1"
            } : void 0
          ]), 1032, ["show-today-btn", "show-confirm-btn", "confirm-btn-disabled"])
        ], 64))
      ], 2)
    ], 2));
  }
});
export {
  Te as default
};
