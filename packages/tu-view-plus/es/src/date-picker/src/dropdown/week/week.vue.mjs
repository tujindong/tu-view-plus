import { defineComponent as r, openBlock as l, createBlock as p, mergeProps as u } from "vue";
import { useLocale as d } from "@tu-view-plus/hooks";
import { methods as o } from "@tu-view-plus/utils";
import { weekProps as w, weekEmits as _ } from "./week.mjs";
import O from "../date/date.vue.mjs";
const W = r({
  name: "TuWeek"
}), C = /* @__PURE__ */ r({
  ...W,
  props: w,
  emits: _,
  setup(a, { emit: m }) {
    const n = a, s = m, { lang: c } = d(), f = (e, t) => o.isSameWeek(e, t, n.dayStartOfWeek, c.value), i = (e) => {
      const t = o.startOf(e, "week");
      s("select", t);
    }, k = (e) => {
      const t = o.startOf(e, "week");
      s("cell-mouse-enter", t);
    };
    return (e, t) => (l(), p(O, u(e.$attrs, {
      mode: "week",
      "is-week": "",
      "day-start-of-week": e.dayStartOfWeek,
      "is-same-time": f,
      onSelect: i,
      onCellMouseEnter: k
    }), null, 16, ["day-start-of-week"]));
  }
});
export {
  C as default
};
