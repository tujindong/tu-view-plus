import { isDayjs as e, isUndefined as r, isArray as a } from "@tu-view-plus/utils";
function d(n) {
  return [...Array(n)];
}
function f(n) {
  if (!r(n))
    return a(n) ? n : [n, void 0];
}
function s(n) {
  return !!n && e(n[0]) && e(n[1]);
}
function V(n) {
  return r(n) || n.length === 0 || s(n);
}
function u(n, i, o) {
  const t = i || n;
  return (o || n).set("year", t.year()).set("month", t.month()).set("date", t.date());
}
export {
  s as isCompleteRangeValue,
  V as isValidRangeValue,
  u as mergeValueWithTime,
  d as newArray,
  f as normalizeRangeValue
};
