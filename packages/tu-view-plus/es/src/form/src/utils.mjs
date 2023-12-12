import { ref as s, computed as a } from "vue";
import { ensureArray as l, debugWarn as d } from "@tu-view-plus/utils";
const p = "TuForm";
function m() {
  const t = s([]), i = a(() => {
    if (!t.value.length)
      return "0";
    const e = Math.max(...t.value);
    return e ? `${e}px` : "";
  });
  function r(e) {
    const n = t.value.indexOf(e);
    return n === -1 && i.value === "0" && d(p, `unexpected width ${e}`), n;
  }
  function o(e, n) {
    if (e && n) {
      const c = r(n);
      t.value.splice(c, 1, e);
    } else
      e && t.value.push(e);
  }
  function u(e) {
    const n = r(e);
    n > -1 && t.value.splice(n, 1);
  }
  return {
    autoLabelWidth: i,
    registerLabelWidth: o,
    deregisterLabelWidth: u
  };
}
const x = (t, i) => {
  const r = l(i);
  return r.length > 0 ? t.filter((o) => o.prop && r.includes(o.prop)) : t;
};
export {
  x as filterFields,
  m as useFormLabelWidth
};
