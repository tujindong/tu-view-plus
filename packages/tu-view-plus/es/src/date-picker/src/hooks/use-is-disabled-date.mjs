import { toRefs as b, computed as c } from "vue";
import { getDateValue as d } from "@tu-view-plus/utils";
function I(f) {
  const { mode: s, showTime: l, disabledDate: a, disabledTime: n, isRange: r } = b(f), v = c(
    () => (s == null ? void 0 : s.value) === "date" && (l == null ? void 0 : l.value)
  ), m = c(() => (u, e) => {
    if (!(a != null && a.value))
      return !1;
    const t = d(u);
    return r != null && r.value ? a.value(t, e) : a.value(t);
  }), o = (u, e) => ((e == null ? void 0 : e()) || []).includes(u), p = c(() => (u, e) => {
    if (!v.value || !(n != null && n.value))
      return !1;
    const t = d(u), i = r != null && r.value ? n.value(t, e) : n.value(t);
    return o(u.hour(), i.disabledHours) || o(u.minute(), i.disabledMinutes) || o(u.second(), i.disabledSeconds);
  });
  return function(e, t) {
    return e && (m.value(e, t || "start") || p.value(e, t || "start"));
  };
}
export {
  I as useIsDisabledDate
};
