import { toRefs as $, computed as l, reactive as v, nextTick as C } from "vue";
import { methods as i, pick as k, getSortedDayjsArray as N } from "@tu-view-plus/utils";
import { usePanelSpan as w } from "./use-panel-span.mjs";
import { useHeaderValue as y } from "./use-header-value.mjs";
function le(B) {
  const {
    startHeaderMode: F,
    endHeaderMode: L,
    mode: n,
    value: f,
    defaultValue: p,
    selectedValue: V,
    format: H,
    onChange: t
  } = $(B), d = l(() => ["date", "week"].includes(n.value)), c = l(() => d.value ? "M" : "y"), m = (e, a) => e.isSame(a, c.value), { span: S, superSpan: R } = w(
    v({
      mode: n
    })
  ), j = l(() => {
    var e;
    return (e = f.value) == null ? void 0 : e[0];
  }), A = l(() => {
    var e;
    return (e = f.value) == null ? void 0 : e[1];
  }), T = l(() => {
    var e;
    return (e = p.value) == null ? void 0 : e[0];
  }), W = l(() => {
    var e;
    return (e = p.value) == null ? void 0 : e[1];
  }), h = (e) => {
    t != null && t.value && t.value(e);
  }, {
    headerValue: s,
    setHeaderValue: O,
    headerOperations: Y,
    getDefaultLocalValue: b
  } = y(
    v({
      mode: F || n,
      value: j,
      defaultValue: T,
      selectedValue: void 0,
      format: H,
      onChange: (e) => {
        h([e, o.value]);
      }
    })
  ), {
    headerValue: o,
    setHeaderValue: x,
    headerOperations: q,
    getDefaultLocalValue: z
  } = y(
    v({
      mode: L || n,
      value: A,
      defaultValue: W,
      selectedValue: void 0,
      format: H,
      onChange: (e) => {
        h([s.value, e]);
      }
    })
  ), D = (e) => {
    const a = m(s.value, e[0]), u = m(o.value, e[1]);
    O(e[0], !1), x(e[1], !1), (!a || !u) && t != null && t.value && (t == null || t.value(e));
  };
  function M(e) {
    let [a, u] = N(e);
    const r = i.add(a, S.value, "M");
    return u.isBefore(r, c.value) && (u = r), [a, u];
  }
  function g() {
    var u, r;
    let e = (u = V.value) == null ? void 0 : u[0], a = (r = V.value) == null ? void 0 : r[1];
    return e && a && ([e, a] = N([e, a])), [e, a];
  }
  const [G, I] = g(), [J, K] = M([
    G || s.value,
    I || o.value
  ]);
  O(J, !1), x(K, !1);
  const Q = () => {
    const e = b(), a = z();
    C(() => {
      const [u, r] = g(), [Z, _] = M([
        u || e,
        r || a
      ]);
      D([Z, _]);
    });
  }, E = l(
    () => i.add(s.value, S.value, "M").isBefore(o.value, c.value)
  ), P = l(
    () => i.add(s.value, R.value, "M").isBefore(o.value, c.value)
  ), U = l(() => {
    const e = ["onSuperPrev"];
    return d.value && e.push("onPrev"), E.value && d && e.push("onNext"), P.value && e.push("onSuperNext"), k(Y.value, e);
  }), X = l(() => {
    const e = ["onSuperNext"];
    return d.value && e.push("onNext"), E.value && d.value && e.push("onPrev"), P.value && e.push("onSuperPrev"), k(q.value, e);
  });
  return {
    startHeaderValue: s,
    endHeaderValue: o,
    startHeaderOperations: U,
    endHeaderOperations: X,
    setHeaderValue: D,
    resetHeaderValue: Q
  };
}
export {
  le as useRangeHeaderValue
};
