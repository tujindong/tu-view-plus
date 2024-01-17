import { defineComponent as Q, toRefs as de, computed as E, ref as ke, watch as pe, reactive as fe, openBlock as o, createElementBlock as v, normalizeClass as O, unref as r, createBlock as f, normalizeProps as s, mergeProps as n, createCommentVNode as $, createElementVNode as A, Fragment as b, createVNode as l, guardReactiveProps as C, createSlots as be, withCtx as z, renderSlot as we } from "vue";
import { useNamespace as ye } from "@tu-view-plus/hooks";
import { isArray as Pe, isFunction as D, getDayjsValue as he } from "@tu-view-plus/utils";
import { RenderFunction as ge } from "@tu-view-plus/constants";
import { rangePickerDropdownProps as Ve, rangePickerDropdownEmits as Se } from "./range-picker-dropdown.mjs";
import { normalizeRangeValue as Ce } from "./utils.mjs";
import B from "./dropdown/year/year.vue.mjs";
import G from "./dropdown/quarter/quarter.vue.mjs";
import F from "./dropdown/month/month.vue.mjs";
import J from "./dropdown/week/week.vue.mjs";
import K from "./dropdown/date/date.vue.mjs";
import W from "./dropdown/shortcuts.vue.mjs";
import Ee from "./dropdown/footer.vue.mjs";
const $e = Q({
  name: "TuRangePickerDropdown"
}), je = /* @__PURE__ */ Q({
  ...$e,
  props: Ve,
  emits: Se,
  setup(X, { emit: Y }) {
    const Z = X, t = Y, d = ye("picker"), {
      shortcuts: H,
      shortcutsPosition: g,
      format: _,
      hideTrigger: L,
      value: w,
      disabledDate: u,
      disabledTime: m,
      startHeaderProps: x,
      endHeaderProps: ee,
      dateRender: c,
      visible: re,
      startHeaderMode: y,
      endHeaderMode: P,
      size: h
    } = de(Z), V = E(
      () => Pe(H.value) && H.value.length
    ), S = ke("date"), oe = E(() => ({
      [d.e("range-dropdown")]: !0,
      [d.em("dropdown", h == null ? void 0 : h.value)]: h == null ? void 0 : h.value,
      [d.em("range-dropdown", "dropdown-only")]: L == null ? void 0 : L.value,
      [d.em("range-dropdown", "shortcuts-placement-left")]: V.value && g.value === "left",
      [d.em("range-dropdown", "shortcuts-placement-right")]: V.value && g.value === "right"
    })), M = (e) => he(
      Ce(
        D(e.value) ? e.value() : e.value
      ),
      e.format || _.value
    ), te = (e) => {
      t("shortcut-click", M(e), e);
    }, ae = (e) => {
      t("shortcut-mouse-enter", M(e));
    }, ne = (e) => {
      t("shortcut-mouse-leave", M(e));
    }, I = (e) => {
      t("cell-click", e);
    }, R = (e) => {
      t("cell-mouse-enter", e);
    }, le = () => {
      t("confirm");
    }, ie = (e) => {
      t("time-picker-select", e, "start");
    }, se = (e) => {
      t("time-picker-select", e, "end");
    }, ue = (e) => {
      t("start-header-label-click", e);
    }, me = (e) => {
      t("end-header-label-click", e);
    }, ce = (e) => {
      t("start-header-select", e);
    }, ve = (e) => {
      t("end-header-select", e);
    }, T = (e) => D(u == null ? void 0 : u.value) ? (a) => {
      var i;
      return ((i = u == null ? void 0 : u.value) == null ? void 0 : i.call(u, a, e === 0 ? "start" : "end")) || !1;
    } : void 0, U = (e) => D(m == null ? void 0 : m.value) ? (a) => {
      var i;
      return ((i = m == null ? void 0 : m.value) == null ? void 0 : i.call(m, a, e === 0 ? "start" : "end")) || !1;
    } : void 0, j = (e) => D(c == null ? void 0 : c.value) ? (a) => {
      var q;
      const i = {
        ...a,
        type: e === 0 ? "start" : "end"
      };
      return (q = c == null ? void 0 : c.value) == null ? void 0 : q.call(c, i);
    } : void 0;
    pe(re, (e, a) => {
      e && !a && (S.value = "date");
    });
    const N = fe({
      shortcuts: H,
      onItemClick: te,
      onItemMouseEnter: ae,
      onItemMouseLeave: ne
    }), k = E(() => ({
      ...x.value,
      rangeValues: w.value,
      disabledDate: T(0),
      dateRender: j(0),
      onSelect: y != null && y.value ? ce : I,
      onCellMouseEnter: R,
      onHeaderLabelClick: ue
    })), p = E(() => ({
      ...ee.value,
      rangeValues: w.value,
      disabledDate: T(1),
      dateRender: j(1),
      onSelect: P != null && P.value ? ve : I,
      onCellMouseEnter: R,
      onHeaderLabelClick: me
    }));
    return (e, a) => (o(), v("div", {
      class: O(oe.value)
    }, [
      V.value && r(g) === "left" ? (o(), f(W, s(n({ key: 0 }, N)), null, 16)) : $("", !0),
      A("div", {
        class: O(r(d).e("range-dropdown-content"))
      }, [
        A("div", {
          class: O(r(d).e("range"))
        }, [
          r(y) || r(P) ? (o(), v(b, { key: 0 }, [
            r(y) === "year" ? (o(), f(B, s(n({ key: 0 }, k.value)), null, 16)) : $("", !0),
            r(P) === "year" ? (o(), f(B, s(n({ key: 1 }, p.value)), null, 16)) : r(y) === "month" ? (o(), f(F, n({ key: 2 }, k.value, { abbreviation: e.abbreviation }), null, 16, ["abbreviation"])) : r(P) === "month" ? (o(), f(F, n({ key: 3 }, p.value, { abbreviation: e.abbreviation }), null, 16, ["abbreviation"])) : $("", !0)
          ], 64)) : (o(), v(b, { key: 1 }, [
            e.mode === "week" ? (o(), v(b, { key: 0 }, [
              l(J, n(k.value, { "day-start-of-week": e.dayStartOfWeek }), null, 16, ["day-start-of-week"]),
              l(J, n(p.value, { "day-start-of-week": e.dayStartOfWeek }), null, 16, ["day-start-of-week"])
            ], 64)) : e.mode === "month" ? (o(), v(b, { key: 1 }, [
              l(F, n(k.value, { abbreviation: e.abbreviation }), null, 16, ["abbreviation"]),
              l(F, n(p.value, { abbreviation: e.abbreviation }), null, 16, ["abbreviation"])
            ], 64)) : e.mode === "year" ? (o(), v(b, { key: 2 }, [
              l(B, s(C(k.value)), null, 16),
              l(B, s(C(p.value)), null, 16)
            ], 64)) : e.mode === "quarter" ? (o(), v(b, { key: 3 }, [
              l(G, s(C(k.value)), null, 16),
              l(G, s(C(p.value)), null, 16)
            ], 64)) : (o(), v(b, { key: 4 }, [
              l(K, n({
                currentView: S.value,
                "onUpdate:currentView": a[0] || (a[0] = (i) => S.value = i)
              }, k.value, {
                "is-range": "",
                value: r(w) && r(w)[0],
                "footer-value": e.footerValue && e.footerValue[0],
                "time-picker-value": e.timePickerValue && e.timePickerValue[0],
                "day-start-of-week": e.dayStartOfWeek,
                "show-time": e.showTime,
                "time-picker-props": e.timePickerProps,
                "disabled-time": U(0),
                disabled: e.disabled[0],
                onTimePickerSelect: ie
              }), null, 16, ["currentView", "value", "footer-value", "time-picker-value", "day-start-of-week", "show-time", "time-picker-props", "disabled-time", "disabled"]),
              l(K, n({
                currentView: S.value,
                "onUpdate:currentView": a[1] || (a[1] = (i) => S.value = i)
              }, p.value, {
                "is-range": "",
                value: r(w) && r(w)[1],
                "footer-value": e.footerValue && e.footerValue[1],
                "time-picker-value": e.timePickerValue && e.timePickerValue[1],
                "day-start-of-week": e.dayStartOfWeek,
                "show-time": e.showTime,
                "time-picker-props": e.timePickerProps,
                "disabled-time": U(1),
                disabled: e.disabled[1],
                onTimePickerSelect: se
              }), null, 16, ["currentView", "value", "footer-value", "time-picker-value", "day-start-of-week", "show-time", "time-picker-props", "disabled-time", "disabled"])
            ], 64))
          ], 64))
        ], 2),
        l(Ee, {
          "show-today-btn": !1,
          "show-confirm-btn": e.showConfirmBtn,
          "confirm-btn-disabled": e.confirmBtnDisabled,
          onConfirmBtnClick: le
        }, be({ _: 2 }, [
          e.extra || e.$slots.extra ? {
            name: "extra",
            fn: z(() => [
              e.$slots.extra ? we(e.$slots, "extra", { key: 0 }) : (o(), f(r(ge), {
                key: 1,
                "render-func": e.extra
              }, null, 8, ["render-func"]))
            ]),
            key: "0"
          } : void 0,
          V.value && r(g) === "bottom" ? {
            name: "button",
            fn: z(() => [
              l(W, s(C(N)), null, 16)
            ]),
            key: "1"
          } : void 0
        ]), 1032, ["show-confirm-btn", "confirm-btn-disabled"])
      ], 2),
      V.value && r(g) === "right" ? (o(), f(W, s(n({ key: 1 }, N)), null, 16)) : $("", !0)
    ], 2));
  }
});
export {
  je as default
};
