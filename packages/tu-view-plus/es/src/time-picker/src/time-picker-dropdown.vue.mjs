import { defineComponent as j, toRefs as le, reactive as h, ref as ue, computed as a, watch as ae, openBlock as r, createElementBlock as C, normalizeClass as v, createElementVNode as me, unref as t, createBlock as c, createCommentVNode as l, renderSlot as ce, withCtx as g, createTextVNode as M, toDisplayString as R, createVNode as de } from "vue";
import { timePickerDropdownProps as pe, timePickerDropdownEmits as fe } from "./time-picker-dropdown.mjs";
import { useLocale as ve, useNamespace as be } from "@tu-view-plus/hooks";
import { isUndefined as V, dayjs as U } from "@tu-view-plus/utils";
import { useIsDisabledTime as ke } from "./hooks/use-is-disabled-time.mjs";
import { useTimeFormat as $e } from "./hooks/use-time-format.mjs";
import { useTimeList as we } from "./hooks/use-time-list.mjs";
import b from "./time-picker-column.vue.mjs";
import { TuButton as _ } from "../../button/index.mjs";
import "../style/time-picker.css";
const Se = j({
  name: "TuTimePickerDropdown"
}), Pe = /* @__PURE__ */ j({
  ...Se,
  props: pe,
  emits: fe,
  setup(A, { emit: I }) {
    const k = A, N = I, { t: z } = ve(), {
      value: n,
      visible: u,
      format: O,
      step: q,
      use12Hours: G,
      hideDisabledOptions: J,
      disabledHours: B,
      disabledMinutes: P,
      disabledSeconds: x,
      disabled: K
    } = le(k), m = be("time-picker"), {
      columns: d,
      use12Hours: p,
      format: Q
    } = $e(
      h({
        format: O,
        use12Hours: G
      })
    ), i = ue(n == null ? void 0 : n.value), F = (e) => {
      i.value = e;
    }, $ = a(() => {
      var o;
      const e = (o = i.value) == null ? void 0 : o.hour();
      return V(e) || !p.value ? e : e > 12 ? e - 12 : e === 0 ? 12 : e;
    }), w = a(() => {
      var e;
      return (e = i.value) == null ? void 0 : e.minute();
    }), S = a(() => {
      var e;
      return (e = i.value) == null ? void 0 : e.second();
    }), y = a(() => {
      var o;
      const e = (o = i.value) == null ? void 0 : o.hour();
      return !V(e) && e >= 12 ? "pm" : "am";
    }), { hours: W, minutes: X, seconds: Y, ampmList: Z } = we(
      h({
        format: Q,
        step: q,
        use12Hours: p,
        hideDisabledOptions: J,
        disabledHours: B,
        disabledMinutes: P,
        disabledSeconds: x,
        selectedHour: $,
        selectedMinute: w,
        selectedSecond: S,
        selectedAmpm: y,
        disabled: K
      })
    ), ee = ke(
      h({
        disabledHours: B,
        disabledMinutes: P,
        disabledSeconds: x
      })
    ), te = a(() => ee(i.value)), se = a(() => ({
      [m.e("dropdown")]: !0,
      [m.em("dropdown", k.size)]: k.size
    })), oe = (e) => {
      V(e) || N("confirm", e);
    }, E = (e) => {
      F(e), N("select", e);
    }, f = (e, o = "hour") => {
      let s;
      const H = $.value || "00", D = w.value || "00", T = S.value || "00", ne = y.value || "am";
      switch (o) {
        case "hour":
          s = `${e}:${D}:${T}`;
          break;
        case "minute":
          s = `${H}:${e}:${T}`;
          break;
        case "second":
          s = `${H}:${D}:${e}`;
          break;
        case "ampm":
          s = `${H}:${D}:${T} ${e}`;
          break;
        default:
          s = "00:00:00";
      }
      let L = "HH:mm:ss";
      p.value && (L = "HH:mm:ss a", o !== "ampm" && (s = `${s} ${ne}`)), s = U(s, L), E(s);
    }, ie = () => {
      const e = U(/* @__PURE__ */ new Date());
      E(e);
    }, re = () => {
      oe(i.value);
    };
    return ae([u, n], () => {
      u.value && F(n == null ? void 0 : n.value);
    }), (e, o) => (r(), C("div", {
      class: v(se.value)
    }, [
      me("div", {
        class: v(t(m).e("column-wrap"))
      }, [
        t(d).includes("H") || t(d).includes("h") ? (r(), c(b, {
          key: 0,
          value: $.value,
          list: t(W),
          visible: t(u),
          onSelect: o[0] || (o[0] = (s) => f(s, "hour"))
        }, null, 8, ["value", "list", "visible"])) : l("", !0),
        t(d).includes("m") ? (r(), c(b, {
          key: 1,
          value: w.value,
          list: t(X),
          visible: t(u),
          onSelect: o[1] || (o[1] = (s) => f(s, "minute"))
        }, null, 8, ["value", "list", "visible"])) : l("", !0),
        t(d).includes("s") ? (r(), c(b, {
          key: 2,
          value: S.value,
          list: t(Y),
          visible: t(u),
          onSelect: o[2] || (o[2] = (s) => f(s, "second"))
        }, null, 8, ["value", "list", "visible"])) : l("", !0),
        t(p) ? (r(), c(b, {
          key: 3,
          value: y.value,
          list: t(Z),
          visible: t(u),
          onSelect: o[3] || (o[3] = (s) => f(s, "ampm"))
        }, null, 8, ["value", "list", "visible"])) : l("", !0)
      ], 2),
      e.$slots["extra-footer"] ? (r(), C("div", {
        key: 0,
        class: v(t(m).e("footer-extra-wrap"))
      }, [
        ce(e.$slots, "extra-footer")
      ], 2)) : l("", !0),
      e.hideFooter ? l("", !0) : (r(), C("div", {
        key: 1,
        class: v(t(m).e("footer-button-wrap"))
      }, [
        e.isRange ? l("", !0) : (r(), c(t(_), {
          key: 0,
          type: "text",
          size: "mini",
          onClick: ie
        }, {
          default: g(() => [
            M(R(t(z)("tu.datepicker.now")), 1)
          ]),
          _: 1
        })),
        de(t(_), {
          type: "primary",
          size: "mini",
          disabled: te.value || !i.value,
          onClick: re
        }, {
          default: g(() => [
            M(R(t(z)("tu.datepicker.confirm")), 1)
          ]),
          _: 1
        }, 8, ["disabled"])
      ], 2))
    ], 2));
  }
});
export {
  Pe as default
};
