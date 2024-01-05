import { toRefs as l, computed as n } from "vue";
import { isFunction as M } from "@tu-view-plus/utils";
function D(a = "date", e = !1) {
  switch (a) {
    case "date":
      return e ? "YYYY-MM-DD HH:mm:ss" : "YYYY-MM-DD";
    case "month":
      return "YYYY-MM";
    case "year":
      return "YYYY";
    case "week":
      return "gggg-wo";
    case "quarter":
      return "YYYY-[Q]Q";
    default:
      return "YYYY-MM-DD";
  }
}
function f(a = "date", e = !1) {
  switch (a) {
    case "date":
      return e ? "YYYY-MM-DD HH:mm:ss" : "YYYY-MM-DD";
    case "month":
      return "YYYY-MM";
    case "year":
      return "YYYY";
    case "week":
      return "YYYY-MM-DD";
    case "quarter":
      return "YYYY-MM";
    default:
      return "YYYY-MM-DD";
  }
}
function m(a) {
  const {
    format: e,
    mode: Y,
    showTime: t,
    valueFormat: u
  } = l(a), s = n(
    () => !M(e == null ? void 0 : e.value) && (e == null ? void 0 : e.value) || D(Y == null ? void 0 : Y.value, t == null ? void 0 : t.value)
  ), r = n(
    () => (u == null ? void 0 : u.value) || f(Y == null ? void 0 : Y.value, t == null ? void 0 : t.value)
  ), c = n(
    () => ["timestamp", "Date"].includes(r.value) ? s.value : r.value
  );
  return {
    format: s,
    valueFormat: r,
    parseValueFormat: c
  };
}
export {
  D as getDefaultFormat,
  f as getDefaultValueFormat,
  m as useFormat
};
