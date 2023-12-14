import { toRefs as f, computed as o } from "vue";
import { getColumnsFromFormat as n } from "../utils.mjs";
function g(r) {
  const {
    format: e,
    use12Hours: t,
    defaultFormat: u
  } = f(r), m = o(() => {
    let s = (e == null ? void 0 : e.value) || (u == null ? void 0 : u.value);
    return (!s || !n(s).list.length) && (s = t != null && t.value ? "hh:mm:ss a" : "HH:mm:ss"), s;
  }), l = o(() => n(m.value)), a = o(() => l.value.list), c = o(() => l.value.use12Hours), i = o(
    () => !!(t != null && t.value || c.value)
  );
  return {
    columns: a,
    use12Hours: i,
    format: m
  };
}
export {
  g as useTimeFormat
};
