import { defineComponent as K, toRefs as ve, computed as C, ref as de, watch as ke, reactive as fe, openBlock as t, createElementBlock as v, normalizeClass as N, unref as r, createBlock as f, normalizeProps as s, mergeProps as n, createCommentVNode as E, createElementVNode as j, Fragment as p, createVNode as l, guardReactiveProps as S, createSlots as pe, withCtx as q, renderSlot as be } from "vue";
import { useNamespace as we } from "@tu-view-plus/hooks";
import { isArray as ye, isFunction as $, getDayjsValue as Pe } from "@tu-view-plus/utils";
import { RenderFunction as he } from "@tu-view-plus/constants";
import { rangePickerDropdownProps as ge, rangePickerDropdownEmits as Ve } from "./range-picker-dropdown.mjs";
import { normalizeRangeValue as Se } from "./utils.mjs";
import D from "./dropdown/year/year.vue.mjs";
import A from "./dropdown/quarter/quarter.vue.mjs";
import B from "./dropdown/month/month.vue.mjs";
import G from "./dropdown/week/week.vue.mjs";
import J from "./dropdown/date/date.vue.mjs";
import O from "./dropdown/shortcuts.vue.mjs";
import Ce from "./dropdown/footer.vue.mjs";
const Ee = K({
  name: "TuRangePickerDropdown"
}), Te = /* @__PURE__ */ K({
  ...Ee,
  props: ge,
  emits: Ve,
  setup(Q, { emit: X }) {
    const Y = Q, o = X, b = we("picker"), {
      shortcuts: F,
      shortcutsPosition: h,
      format: Z,
      hideTrigger: H,
      value: w,
      disabledDate: u,
      disabledTime: m,
      startHeaderProps: _,
      endHeaderProps: x,
      dateRender: c,
      visible: ee,
      startHeaderMode: y,
      endHeaderMode: P
    } = ve(Y), g = C(
      () => ye(F.value) && F.value.length
    ), V = de("date"), re = C(() => ({
      [b.e("range-dropdown")]: !0,
      [b.em("range-dropdown", "dropdown-only")]: H == null ? void 0 : H.value,
      [b.em("range-dropdown", "shortcuts-placement-left")]: g.value && h.value === "left",
      [b.em("range-dropdown", "shortcuts-placement-right")]: g.value && h.value === "right"
    })), L = (e) => Pe(
      Se(
        $(e.value) ? e.value() : e.value
      ),
      e.format || Z.value
    ), te = (e) => {
      o("shortcut-click", L(e), e);
    }, oe = (e) => {
      o("shortcut-mouse-enter", L(e));
    }, ae = (e) => {
      o("shortcut-mouse-leave", L(e));
    }, W = (e) => {
      o("cell-click", e);
    }, z = (e) => {
      o("cell-mouse-enter", e);
    }, ne = () => {
      o("confirm");
    }, le = (e) => {
      o("time-picker-select", e, "start");
    }, ie = (e) => {
      o("time-picker-select", e, "end");
    }, se = (e) => {
      o("start-header-label-click", e);
    }, ue = (e) => {
      o("end-header-label-click", e);
    }, me = (e) => {
      o("start-header-select", e);
    }, ce = (e) => {
      o("end-header-select", e);
    }, I = (e) => $(u == null ? void 0 : u.value) ? (a) => {
      var i;
      return ((i = u == null ? void 0 : u.value) == null ? void 0 : i.call(u, a, e === 0 ? "start" : "end")) || !1;
    } : void 0, R = (e) => $(m == null ? void 0 : m.value) ? (a) => {
      var i;
      return ((i = m == null ? void 0 : m.value) == null ? void 0 : i.call(m, a, e === 0 ? "start" : "end")) || !1;
    } : void 0, T = (e) => $(c == null ? void 0 : c.value) ? (a) => {
      var U;
      const i = {
        ...a,
        type: e === 0 ? "start" : "end"
      };
      return (U = c == null ? void 0 : c.value) == null ? void 0 : U.call(c, i);
    } : void 0;
    ke(ee, (e, a) => {
      e && !a && (V.value = "date");
    });
    const M = fe({
      shortcuts: F,
      onItemClick: te,
      onItemMouseEnter: oe,
      onItemMouseLeave: ae
    }), d = C(() => ({
      ..._.value,
      rangeValues: w.value,
      disabledDate: I(0),
      dateRender: T(0),
      onSelect: y != null && y.value ? me : W,
      onCellMouseEnter: z,
      onHeaderLabelClick: se
    })), k = C(() => ({
      ...x.value,
      rangeValues: w.value,
      disabledDate: I(1),
      dateRender: T(1),
      onSelect: P != null && P.value ? ce : W,
      onCellMouseEnter: z,
      onHeaderLabelClick: ue
    }));
    return (e, a) => (t(), v("div", {
      class: N(re.value)
    }, [
      g.value && r(h) === "left" ? (t(), f(O, s(n({ key: 0 }, M)), null, 16)) : E("", !0),
      j("div", {
        class: N(r(b).e("range-dropdown-content"))
      }, [
        j("div", {
          class: N(r(b).e("range"))
        }, [
          r(y) || r(P) ? (t(), v(p, { key: 0 }, [
            r(y) === "year" ? (t(), f(D, s(n({ key: 0 }, d.value)), null, 16)) : E("", !0),
            r(P) === "year" ? (t(), f(D, s(n({ key: 1 }, k.value)), null, 16)) : r(y) === "month" ? (t(), f(B, n({ key: 2 }, d.value, { abbreviation: e.abbreviation }), null, 16, ["abbreviation"])) : r(P) === "month" ? (t(), f(B, n({ key: 3 }, k.value, { abbreviation: e.abbreviation }), null, 16, ["abbreviation"])) : E("", !0)
          ], 64)) : (t(), v(p, { key: 1 }, [
            e.mode === "week" ? (t(), v(p, { key: 0 }, [
              l(G, n(d.value, { "day-start-of-week": e.dayStartOfWeek }), null, 16, ["day-start-of-week"]),
              l(G, n(k.value, { "day-start-of-week": e.dayStartOfWeek }), null, 16, ["day-start-of-week"])
            ], 64)) : e.mode === "month" ? (t(), v(p, { key: 1 }, [
              l(B, n(d.value, { abbreviation: e.abbreviation }), null, 16, ["abbreviation"]),
              l(B, n(k.value, { abbreviation: e.abbreviation }), null, 16, ["abbreviation"])
            ], 64)) : e.mode === "year" ? (t(), v(p, { key: 2 }, [
              l(D, s(S(d.value)), null, 16),
              l(D, s(S(k.value)), null, 16)
            ], 64)) : e.mode === "quarter" ? (t(), v(p, { key: 3 }, [
              l(A, s(S(d.value)), null, 16),
              l(A, s(S(k.value)), null, 16)
            ], 64)) : (t(), v(p, { key: 4 }, [
              l(J, n({
                currentView: V.value,
                "onUpdate:currentView": a[0] || (a[0] = (i) => V.value = i)
              }, d.value, {
                "is-range": "",
                value: r(w) && r(w)[0],
                "footer-value": e.footerValue && e.footerValue[0],
                "time-picker-value": e.timePickerValue && e.timePickerValue[0],
                "day-start-of-week": e.dayStartOfWeek,
                "show-time": e.showTime,
                "time-picker-props": e.timePickerProps,
                "disabled-time": R(0),
                disabled: e.disabled[0],
                onTimePickerSelect: le
              }), null, 16, ["currentView", "value", "footer-value", "time-picker-value", "day-start-of-week", "show-time", "time-picker-props", "disabled-time", "disabled"]),
              l(J, n({
                currentView: V.value,
                "onUpdate:currentView": a[1] || (a[1] = (i) => V.value = i)
              }, k.value, {
                "is-range": "",
                value: r(w) && r(w)[1],
                "footer-value": e.footerValue && e.footerValue[1],
                "time-picker-value": e.timePickerValue && e.timePickerValue[1],
                "day-start-of-week": e.dayStartOfWeek,
                "show-time": e.showTime,
                "time-picker-props": e.timePickerProps,
                "disabled-time": R(1),
                disabled: e.disabled[1],
                onTimePickerSelect: ie
              }), null, 16, ["currentView", "value", "footer-value", "time-picker-value", "day-start-of-week", "show-time", "time-picker-props", "disabled-time", "disabled"])
            ], 64))
          ], 64))
        ], 2),
        l(Ce, {
          "show-today-btn": !1,
          "show-confirm-btn": e.showConfirmBtn,
          "confirm-btn-disabled": e.confirmBtnDisabled,
          onConfirmBtnClick: ne
        }, pe({ _: 2 }, [
          e.extra || e.$slots.extra ? {
            name: "extra",
            fn: q(() => [
              e.$slots.extra ? be(e.$slots, "extra", { key: 0 }) : (t(), f(r(he), {
                key: 1,
                "render-func": e.extra
              }, null, 8, ["render-func"]))
            ]),
            key: "0"
          } : void 0,
          g.value && r(h) === "bottom" ? {
            name: "button",
            fn: q(() => [
              l(O, s(S(M)), null, 16)
            ]),
            key: "1"
          } : void 0
        ]), 1032, ["show-confirm-btn", "confirm-btn-disabled"])
      ], 2),
      g.value && r(h) === "right" ? (t(), f(O, s(n({ key: 1 }, M)), null, 16)) : E("", !0)
    ], 2));
  }
});
export {
  Te as default
};
