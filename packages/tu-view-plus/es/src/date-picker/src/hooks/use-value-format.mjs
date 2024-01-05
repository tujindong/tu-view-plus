import { toRefs as u } from "vue";
function n(t, e) {
  return e === "timestamp" ? t.toDate().getTime() : e === "Date" ? t.toDate() : t.format(e);
}
function i(t) {
  const { format: e } = u(t);
  return (r) => n(r, e.value);
}
export {
  n as getReturnValue,
  i as useReturnValue
};
