import { defineComponent as H, toRefs as le, reactive as se, computed as s, openBlock as w, createElementBlock as k, normalizeClass as o, unref as a, createVNode as n, mergeProps as E, createElementVNode as u, toDisplayString as $, createCommentVNode as g, withCtx as R } from "vue";
import { dateProps as oe, dateEmits as re } from "./date.mjs";
import { useNamespace as ne, useLocale as ie } from "@tu-view-plus/hooks";
import { methods as S, getDateValue as ue, getNow as ce } from "@tu-view-plus/utils";
import { Calendar as ve, Clock as me } from "@tu-view-plus/icons-vue";
import "b-tween";
import { useMergeState as de } from "../../hooks/use-merge-state.mjs";
import { newArray as W } from "../../utils.mjs";
import pe from "../header.vue.mjs";
import fe from "../week-list.vue.mjs";
import we from "../body.vue.mjs";
import ke from "../../../../time-picker/src/time-picker-dropdown.vue.mjs";
import { TuIcon as I } from "../../../../icon/index.mjs";
const Ce = H({
  name: "TuDate"
}), Re = /* @__PURE__ */ H({
  ...Ce,
  props: oe,
  emits: re,
  setup(B, { emit: z }) {
    const A = B, c = z, r = ne("picker"), { t: j } = ie(), {
      isRange: C,
      headerValue: O,
      footerValue: v,
      dayStartOfWeek: q,
      isSameTime: b,
      mode: m,
      showTime: p,
      currentView: F,
      disabledTime: d
    } = le(A), [V, G] = de(
      "date",
      se({ value: F })
    ), y = s(() => (m == null ? void 0 : m.value) === "week"), t = s(
      () => y.value ? "dropdown-week" : "dropdown-date"
    ), f = s(() => p.value && C.value), L = s(
      () => !p.value || !f.value || V.value === "date"
    ), J = s(() => O.value.format("YYYY-MM")), D = s(() => {
      const e = [0, 1, 2, 3, 4, 5, 6], l = Math.max(q.value % 7, 0);
      return [...e.slice(l), ...e.slice(0, l)];
    }), K = s(() => {
      const e = S.startOf(O.value, "month"), l = e.day(), U = e.daysInMonth(), h = D.value.indexOf(l), T = W(42);
      for (let i = 0; i < T.length; i++)
        T[i] = {
          ...x(S.add(e, i - h, "day")),
          isPrev: i < h,
          isNext: i > h + U - 1
        };
      return W(6).map((i, M) => {
        const N = T.slice(M * 7, (M + 1) * 7);
        if (y.value) {
          const Y = N[0].value;
          N.unshift({
            label: Y.week(),
            value: Y
          });
        }
        return N;
      });
    }), Q = s(
      () => (b == null ? void 0 : b.value) || ((e, l) => e.isSame(l, "day"))
    ), P = s(
      () => p.value && (!f.value || V.value === "time")
    ), X = s(
      () => {
        var e;
        return p.value && ((e = d == null ? void 0 : d.value) == null ? void 0 : e.call(d, ue((v == null ? void 0 : v.value) || ce()))) || {};
      }
    ), Z = s(() => ({
      [r.e(t.value)]: !0,
      [r.em(t.value, "with-view-tabs")]: f.value
    })), x = (e) => ({
      label: e.date(),
      value: e
    }), ee = (e) => {
      c("select", e.value);
    }, ae = (e) => {
      c("cell-mouse-enter", e.value);
    }, te = (e) => {
      c("time-picker-select", e);
    }, _ = (e) => {
      c("current-view-change", e), c("update:currentView", e), G(e);
    };
    return (e, l) => (w(), k("div", {
      class: o(Z.value)
    }, [
      L.value ? (w(), k("div", {
        key: 0,
        class: o(a(r).e(`${t.value}-inner`))
      }, [
        n(pe, E({
          ...e.headerOperations,
          icons: e.headerIcons
        }, {
          title: J.value,
          mode: a(m),
          value: a(O),
          "on-label-click": e.onHeaderLabelClick
        }), null, 16, ["title", "mode", "value", "on-label-click"]),
        n(fe, { "week-list": D.value }, null, 8, ["week-list"]),
        n(we, {
          mode: a(m),
          rows: K.value,
          value: a(C) ? void 0 : e.value,
          "range-values": e.rangeValues,
          "disabled-date": e.disabledDate,
          "is-same-time": Q.value,
          "date-render": e.dateRender,
          onCellClick: ee,
          onCellMouseEnter: ae
        }, null, 8, ["mode", "rows", "value", "range-values", "disabled-date", "is-same-time", "date-render"]),
        P.value ? (w(), k("div", {
          key: 0,
          class: o(a(r).e(`${t.value}-timepicker`))
        }, [
          u("header", {
            class: o(a(r).e(`${t.value}-timepicker-title`))
          }, $(a(j)("tu.datepicker.selectTime")), 3),
          n(ke, E({
            ...e.timePickerProps,
            ...X.value
          }, {
            "hide-footer": "",
            value: e.value || a(C) ? e.timePickerValue : void 0,
            disabled: e.disabled,
            onSelect: te
          }), null, 16, ["value", "disabled"])
        ], 2)) : g("", !0),
        f.value ? (w(), k("div", {
          key: 1,
          class: o(a(r).e(`${t.value}-footer`))
        }, [
          u("div", {
            class: o(a(r).e(`${t.value}-view-tabs`))
          }, [
            u("div", {
              class: o([
                a(r).e(`${t.value}-view-tab-pane`),
                { [a(r).is("active")]: L.value }
              ]),
              onClick: l[0] || (l[0] = (U) => _("date"))
            }, [
              n(a(I), null, {
                default: R(() => [
                  n(a(ve))
                ]),
                _: 1
              }),
              u("span", {
                class: o(`${t.value}-view-tab-pane-text`)
              }, $(a(v) && a(v).format("YYYY-MM-DD")), 3)
            ], 2),
            u("div", {
              class: o([
                `${t.value}-view-tab-pane`,
                { [`${t.value}-view-tab-pane-active`]: P.value }
              ]),
              onClick: l[1] || (l[1] = () => _("time"))
            }, [
              n(a(I), null, {
                default: R(() => [
                  n(a(me))
                ]),
                _: 1
              }),
              u("span", {
                class: o(`${t.value}-view-tab-pane-text`)
              }, $(e.timePickerValue && e.timePickerValue.format("HH:mm:ss")), 3)
            ], 2)
          ], 2)
        ], 2)) : g("", !0)
      ], 2)) : g("", !0)
    ], 2));
  }
});
export {
  Re as default
};
