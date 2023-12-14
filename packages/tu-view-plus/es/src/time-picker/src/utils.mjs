import V from "b-tween";
import { isUndefined as f, isArray as p, isDayjs as u, dayjs as w } from "@tu-view-plus/utils";
function y(r) {
  const t = ["H", "h", "m", "s", "a", "A"], n = [];
  let o = !1;
  return t.forEach((s) => {
    r.indexOf(s) !== -1 && (n.push(s), (s === "a" || s === "A") && (o = !0));
  }), {
    list: n,
    use12Hours: o
  };
}
const l = /* @__PURE__ */ new Map();
function I(r, t, n) {
  const o = l.get(r);
  f(o) || cancelAnimationFrame(o), n <= 0 && (r.scrollTop = t), l.set(
    r,
    requestAnimationFrame(() => {
      new V({
        from: { scrollTop: r.scrollTop },
        to: { scrollTop: t },
        duration: n,
        onUpdate: (c) => {
          r.scrollTop = c.scrollTop;
        }
      }).start();
    })
  );
}
function D(r, t) {
  const n = (o) => {
    if (p(o))
      return o.map((s) => n(s));
    if (!f(o))
      return o.format(t);
  };
  return n(r);
}
function L(r) {
  return f(r) ? !0 : p(r) ? r.length === 0 || r.length === 2 && u(r[0]) && u(r[1]) : !1;
}
function j(r, t) {
  return r ? typeof r == "string" && w(r, t).format(t) === r : !1;
}
function x(r, {
  disabledHours: t,
  disabledMinutes: n,
  disabledSeconds: o
}) {
  if (!r)
    return !1;
  const s = r.hour(), c = r.minute(), a = r.second(), m = (t == null ? void 0 : t()) || [], T = (n == null ? void 0 : n(s)) || [], g = (o == null ? void 0 : o(s, c)) || [], i = (e, h) => !f(e) && h.includes(e);
  return i(s, m) || i(c, T) || i(a, g);
}
export {
  y as getColumnsFromFormat,
  D as getFormattedValue,
  x as isDisabledTime,
  j as isValidInputValue,
  L as isValidRangeValue,
  I as scrollTo
};
