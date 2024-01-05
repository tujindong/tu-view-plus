import { defineComponent as a, computed as l, openBlock as t, createElementBlock as s, normalizeClass as o, unref as i, Fragment as p, renderList as m, toDisplayString as k } from "vue";
import { weekListProps as d } from "./week-list.mjs";
import { useNamespace as f, useLocale as _ } from "@tu-view-plus/hooks";
const w = a({
  name: "TuWeekList"
}), C = /* @__PURE__ */ a({
  ...w,
  props: d,
  setup(L) {
    const r = f("picker"), { t: c } = _(), u = l(() => ["sun", "mon", "tue", "wed", "thu", "fri", "sat"].map(
      (e) => c(`tu.datepicker.weeks.${e}`)
    ));
    return (e, v) => (t(), s("div", {
      class: o(i(r).e("week-list"))
    }, [
      (t(!0), s(p, null, m(e.weekList, (n) => (t(), s("div", {
        key: n,
        class: o(i(r).e("week-list-item"))
      }, k(u.value[n] || ""), 3))), 128))
    ], 2));
  }
});
export {
  C as default
};
