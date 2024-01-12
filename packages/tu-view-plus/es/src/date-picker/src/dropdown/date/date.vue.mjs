import { defineComponent as H, toRefs as se, reactive as oe, computed as l, openBlock as w, createElementBlock as k, normalizeClass as r, unref as a, createVNode as n, mergeProps as E, createCommentVNode as $, createElementVNode as u, toDisplayString as y, withCtx as R } from "vue";
import { dateProps as re, dateEmits as ne } from "./date.mjs";
import { useNamespace as ie, useLocale as ue } from "@tu-view-plus/hooks";
import { methods as S, getDateValue as ce, getNow as ve } from "@tu-view-plus/utils";
import { Calendar as me, Clock as de } from "@tu-view-plus/icons-vue";
import "b-tween";
import { useMergeState as pe } from "../../hooks/use-merge-state.mjs";
import { newArray as W } from "../../utils.mjs";
import fe from "../header.vue.mjs";
import we from "../week-list.vue.mjs";
import ke from "../body.vue.mjs";
import Ce from "../../../../time-picker/src/time-picker-dropdown.vue.mjs";
import { TuIcon as I } from "../../../../icon/index.mjs";
const Oe = H({
  name: "TuDate"
}), Se = /* @__PURE__ */ H({
  ...Oe,
  props: re,
  emits: ne,
  setup(B, { emit: z }) {
    const A = (e) => ({
      label: e.date(),
      value: e
    }), j = B, c = z, t = ie("picker"), { t: q } = ue(), {
      isRange: C,
      headerValue: O,
      footerValue: v,
      dayStartOfWeek: F,
      isSameTime: h,
      mode: m,
      showTime: p,
      currentView: G,
      disabledTime: d
    } = se(j), [L, J] = pe(
      "date",
      oe({ value: G })
    ), b = l(() => (m == null ? void 0 : m.value) === "week"), s = l(
      () => b.value ? "dropdown-week" : "dropdown-date"
    ), f = l(() => p.value && C.value), D = l(
      () => !p.value || !f.value || L.value === "date"
    ), K = l(() => O.value.format("YYYY-MM")), T = l(() => {
      const e = [0, 1, 2, 3, 4, 5, 6], o = Math.max(F.value % 7, 0);
      return [...e.slice(o), ...e.slice(0, o)];
    }), Q = l(
      () => b.value ? [-1, ...T.value] : T.value
    ), X = l(() => {
      const e = S.startOf(O.value, "month"), o = e.day(), U = e.daysInMonth(), N = T.value.indexOf(o), g = W(42);
      for (let i = 0; i < g.length; i++)
        g[i] = {
          ...A(S.add(e, i - N, "day")),
          isPrev: i < N,
          isNext: i > N + U - 1
        };
      return W(6).map((i, M) => {
        const V = g.slice(M * 7, (M + 1) * 7);
        if (b.value) {
          const Y = V[0].value;
          V.unshift({
            label: Y.week(),
            value: Y
          });
        }
        return V;
      });
    }), Z = l(
      () => (h == null ? void 0 : h.value) || ((e, o) => e.isSame(o, "day"))
    ), P = l(
      () => p.value && (!f.value || L.value === "time")
    ), x = l(
      () => {
        var e;
        return p.value && ((e = d == null ? void 0 : d.value) == null ? void 0 : e.call(d, ce((v == null ? void 0 : v.value) || ve()))) || {};
      }
    ), ee = l(() => ({
      [t.e(s.value)]: !0,
      [t.em(s.value, "with-view-tabs")]: f.value
    })), ae = (e) => {
      c("select", e.value);
    }, te = (e) => {
      c("cell-mouse-enter", e.value);
    }, le = (e) => {
      c("time-picker-select", e);
    }, _ = (e) => {
      c("current-view-change", e), c("update:currentView", e), J(e);
    };
    return (e, o) => (w(), k("div", {
      class: r(ee.value)
    }, [
      D.value ? (w(), k("div", {
        key: 0,
        class: r(a(t).e(`${s.value}-inner`))
      }, [
        n(fe, E({
          ...e.headerOperations,
          icons: e.headerIcons
        }, {
          title: K.value,
          mode: a(m),
          value: a(O),
          "on-label-click": e.onHeaderLabelClick
        }), null, 16, ["title", "mode", "value", "on-label-click"]),
        n(we, { "week-list": Q.value }, null, 8, ["week-list"]),
        n(ke, {
          mode: a(m),
          rows: X.value,
          value: a(C) ? void 0 : e.value,
          "range-values": e.rangeValues,
          "disabled-date": e.disabledDate,
          "is-same-time": Z.value,
          "date-render": e.dateRender,
          onCellClick: ae,
          onCellMouseEnter: te
        }, null, 8, ["mode", "rows", "value", "range-values", "disabled-date", "is-same-time", "date-render"])
      ], 2)) : $("", !0),
      P.value ? (w(), k("div", {
        key: 1,
        class: r(a(t).e(`${s.value}-timepicker`))
      }, [
        u("header", {
          class: r(a(t).e(`${s.value}-timepicker-title`))
        }, y(a(q)("tu.datepicker.selectTime")), 3),
        n(Ce, E({
          ...e.timePickerProps,
          ...x.value
        }, {
          "hide-footer": "",
          value: e.value || a(C) ? e.timePickerValue : void 0,
          disabled: e.disabled,
          onSelect: le
        }), null, 16, ["value", "disabled"])
      ], 2)) : $("", !0),
      f.value ? (w(), k("div", {
        key: 2,
        class: r(a(t).e(`${s.value}-footer`))
      }, [
        u("div", {
          class: r(a(t).e(`${s.value}-view-tabs`))
        }, [
          u("div", {
            class: r([
              a(t).e(`${s.value}-view-tab-pane`),
              { [a(t).is("active")]: D.value }
            ]),
            onClick: o[0] || (o[0] = (U) => _("date"))
          }, [
            n(a(I), null, {
              default: R(() => [
                n(a(me))
              ]),
              _: 1
            }),
            u("span", {
              class: r(a(t).e(`${s.value}-view-tab-pane-text`))
            }, y(a(v) && a(v).format("YYYY-MM-DD")), 3)
          ], 2),
          u("div", {
            class: r([
              a(t).e(`${s.value}-view-tab-pane`),
              { [a(t).is("active")]: P.value }
            ]),
            onClick: o[1] || (o[1] = () => _("time"))
          }, [
            n(a(I), null, {
              default: R(() => [
                n(a(de))
              ]),
              _: 1
            }),
            u("span", {
              class: r(a(t).e(`${s.value}-view-tab-pane-text`))
            }, y(e.timePickerValue && e.timePickerValue.format("HH:mm:ss")), 3)
          ], 2)
        ], 2)
      ], 2)) : $("", !0)
    ], 2));
  }
});
export {
  Se as default
};
