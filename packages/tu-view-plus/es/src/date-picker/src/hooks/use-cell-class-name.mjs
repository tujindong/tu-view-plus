import { toRefs as p, computed as u } from "vue";
import { isDayjs as w, getSortedDayjsArray as R, getNow as g } from "@tu-view-plus/utils";
import { useNamespace as C } from "@tu-view-plus/hooks";
function E(i) {
  const s = C("picker"), { rangeValues: l } = p(i), v = u(
    () => l != null && l.value && l.value.every(w) ? R(l.value) : l == null ? void 0 : l.value
  ), n = u(() => {
    var e;
    return (e = v.value) == null ? void 0 : e[0];
  }), t = u(() => {
    var e;
    return (e = v.value) == null ? void 0 : e[1];
  });
  return {
    getCellClassName: (e, f) => {
      const { value: r, isSameTime: a, mode: y } = i, o = !e.isPrev && !e.isNext, N = r && a(e.value, r);
      let c = a(e.value, g());
      y === "week" && (c = g().isSame(e.value, "date"));
      const m = o && n.value && a(e.value, n.value), d = o && t.value && a(e.value, t.value), S = o && n.value && t.value && (m || d || e.value.isBetween(
        n.value,
        t.value,
        null,
        "[]"
      ));
      return [
        s.e("cell"),
        {
          [s.e("cell-in-view")]: o,
          [s.e("cell-today")]: c,
          [s.e("cell-selected")]: N,
          [s.e("cell-range-start")]: m,
          [s.e("cell-range-end")]: d,
          [s.e("cell-in-range")]: S,
          [s.e("cell-cell-disabled")]: f
        },
        e.classNames
      ];
    }
  };
}
export {
  E as useCellClassName
};
