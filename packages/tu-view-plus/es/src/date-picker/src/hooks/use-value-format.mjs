import { toRefs as u } from "vue";
function r(t, e) {
  return e === "timestamp" ? t.toDate().getTime() : e === "Date" ? t.toDate() : t.format(e);
}
function i(t) {
  const { format: e } = u(t);
  return (n) => r(n, e.value);
}
function a(t, e) {
  return t.map((n) => n ? r(n, e) : void 0);
}
export {
  a as getReturnRangeValue,
  r as getReturnValue,
  i as useReturnValue
};
