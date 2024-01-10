import { toRefs as p, computed as u } from "vue";
import { isDayjs as w, getSortedDayjsArray as R, getNow as g } from "@tu-view-plus/utils";
import { useNamespace as C } from "@tu-view-plus/hooks";
function E(v) {
  const s = C("picker"), { rangeValues: i } = p(v), r = u(
    () => i != null && i.value && i.value.every(w) ? R(i.value) : i == null ? void 0 : i.value
  ), n = u(() => {
    var e;
    return (e = r.value) == null ? void 0 : e[0];
  }), t = u(() => {
    var e;
    return (e = r.value) == null ? void 0 : e[1];
  });
  return {
    getCellClassName: (e, f) => {
      const { value: l, isSameTime: a, mode: y } = v, o = !e.isPrev && !e.isNext, N = l && a(e.value, l);
      let m = a(e.value, g());
      y === "week" && (m = g().isSame(e.value, "date"));
      const d = o && n.value && a(e.value, n.value), c = o && t.value && a(e.value, t.value), S = o && n.value && t.value && (d || c || e.value.isBetween(
        n.value,
        t.value,
        null,
        "[]"
      ));
      return [
        s.e("cell"),
        {
          [s.is("in-view")]: o,
          [s.is("today")]: m,
          [s.is("selected")]: N,
          [s.is("range-start")]: d,
          [s.is("range-end")]: c,
          [s.is("in-range")]: S,
          [s.is("disabled")]: f
        },
        e.classNames
      ];
    }
  };
}
export {
  E as useCellClassName
};
