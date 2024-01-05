import { toRefs as j, computed as r, reactive as k, ref as B, watch as O } from "vue";
import { getDayjsValue as L, getNow as N, methods as n } from "@tu-view-plus/utils";
import { usePanelSpan as R } from "./use-panel-span.mjs";
function z(P) {
  const { mode: s, value: c, defaultValue: i, selectedValue: u, format: S, onChange: l } = j(P), f = r(() => (s == null ? void 0 : s.value) || "date"), { span: p, superSpan: d } = R(
    k({
      mode: f
    })
  ), b = (e, o) => {
    const v = f.value === "date" || f.value === "week" ? "M" : "y";
    return e.isSame(o, v);
  }, h = r(
    () => L(c == null ? void 0 : c.value, S.value)
  ), M = r(
    () => L(i == null ? void 0 : i.value, S.value)
  ), x = B(M.value || N()), t = r(() => h.value || x.value), m = (e) => {
    e && (x.value = e);
  }, a = (e, o = !0) => {
    var v;
    e && (o && !b(t.value, e) && ((v = l == null ? void 0 : l.value) == null || v.call(l, e)), m(e));
  };
  u != null && u.value && m(u.value), O(
    () => u == null ? void 0 : u.value,
    (e) => {
      a(e);
    }
  );
  function D() {
    return (u == null ? void 0 : u.value) || M.value || N();
  }
  function y(e = !0) {
    const o = D();
    e ? a(o) : m(o);
  }
  const H = r(() => p.value !== d.value), g = r(() => ({
    onSuperPrev: () => {
      a(n.subtract(t.value, d.value, "M"));
    },
    onPrev: H.value ? () => {
      a(n.subtract(t.value, p.value, "M"));
    } : void 0,
    onNext: H.value ? () => {
      a(n.add(t.value, p.value, "M"));
    } : void 0,
    onSuperNext: () => {
      a(n.add(t.value, d.value, "M"));
    }
  }));
  return {
    headerValue: t,
    setHeaderValue: a,
    headerOperations: g,
    resetHeaderValue: y,
    getDefaultLocalValue: D
  };
}
export {
  z as useHeaderValue
};
