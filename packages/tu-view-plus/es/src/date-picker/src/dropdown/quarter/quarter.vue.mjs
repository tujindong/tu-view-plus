import { defineComponent as i, toRefs as b, computed as s, openBlock as C, createElementBlock as q, normalizeClass as n, unref as o, createElementVNode as w, createVNode as m, mergeProps as _ } from "vue";
import { quarterProps as $, quarterEmits as y } from "./quarter.mjs";
import { useNamespace as E } from "@tu-view-plus/hooks";
import { dayjs as S, padStart as V } from "@tu-view-plus/utils";
import Y from "../header.vue.mjs";
import M from "../body.vue.mjs";
const N = i({
  name: "TuQuarter"
}), j = /* @__PURE__ */ i({
  ...N,
  props: $,
  emits: y,
  setup(d, { emit: u }) {
    const c = d, l = u, t = E("picker"), { headerValue: r } = b(c), p = s(() => r.value.format("YYYY")), f = s(() => {
      const e = r.value.year();
      return [
        [1, 2, 3, 4].map((a) => ({
          label: `Q${a}`,
          value: S(`${e}-${V((a - 1) * 3 + 1, 2, "0")}-01`)
        }))
      ];
    }), v = (e, a) => e.isSame(a, "month") || e.isSame(a, "year") && Math.floor(e.month() / 3) === Math.floor(a.month() / 3), h = (e) => {
      l("select", e.value);
    }, k = (e) => {
      l("cell-mouse-enter", e.value);
    };
    return (e, a) => (C(), q("div", {
      class: n(o(t).e("dropdown-quarter"))
    }, [
      w("div", {
        class: n(o(t).e("dropdown-quarter-inner"))
      }, [
        m(Y, _({
          ...e.headerOperations,
          icons: e.headerIcons
        }, {
          mode: "quarter",
          title: p.value,
          value: o(r),
          "on-label-click": e.onHeaderLabelClick
        }), null, 16, ["title", "value", "on-label-click"]),
        m(M, {
          mode: "quarter",
          rows: f.value,
          value: e.value,
          "range-values": e.rangeValues,
          "disabled-date": e.disabledDate,
          "is-same-time": v,
          "date-render": e.dateRender,
          onCellClick: h,
          onCellMouseEnter: k
        }, null, 8, ["rows", "value", "range-values", "disabled-date", "date-render"])
      ], 2)
    ], 2));
  }
});
export {
  j as default
};
