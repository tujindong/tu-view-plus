import { toRefs as P, ref as K, watchEffect as Q, watch as x, computed as A } from "vue";
import { isArray as U, isFunction as W, isObject as q } from "@tu-view-plus/utils";
function g(e) {
  return q(e);
}
function B(e) {
  return e != null && e !== "";
}
function w(e) {
  return g(e) ? e.value : e;
}
function X(e) {
  return g(e) ? e.label : void 0;
}
function D(e) {
  const c = w(e);
  return B(c);
}
function F(e) {
  return e.map(w).filter(B);
}
function _(e) {
  const {
    defaultValue: c,
    modelValue: o,
    key2TreeNode: C,
    multiple: V,
    treeCheckable: h,
    fallbackOption: u,
    fieldNames: L
  } = P(e);
  function z(t) {
    const l = (U(t) ? t : [t]).filter(D);
    return V != null && V.value || h != null && h.value ? l : l.slice(0, 1);
  }
  function a(t, l) {
    const r = [], R = t ? t.filter(D) : [];
    if (R.length) {
      const T = /* @__PURE__ */ new Map();
      l == null || l.forEach((n) => {
        T.set(n.value, n);
      }), R.forEach((n) => {
        var j;
        const v = w(n), f = T.get(v), d = C.value.get(v);
        let y = null;
        const J = ((j = L == null ? void 0 : L.value) == null ? void 0 : j.title) || "title";
        if (!d) {
          const p = W(u == null ? void 0 : u.value) ? u == null ? void 0 : u.value(v) : u == null ? void 0 : u.value;
          if (p === !1)
            return;
          q(p) && (y = p);
        }
        r.push({
          ...g(n) ? n : {},
          ...f || {},
          value: v,
          label: X(n) ?? (d == null ? void 0 : d.title) ?? (f == null ? void 0 : f.label) ?? (y == null ? void 0 : y[J]) ?? v
        });
      });
    }
    return r;
  }
  const M = K(), S = K();
  Q(() => {
    const t = (o == null ? void 0 : o.value) !== void 0, l = z((o == null ? void 0 : o.value) ?? []), r = F(l);
    S.value = t ? a(r, a(l)) : void 0, M.value = t ? r : void 0;
  });
  const E = z((c == null ? void 0 : c.value) ?? []), b = F(E), m = a(
    b,
    a(E)
  ), s = K(b || []), i = K(m);
  x(s, () => {
    i.value = a(s.value, m);
  }), x([M, S], ([t, l]) => {
    s.value = t || [], i.value = l || [];
  });
  const G = A(
    () => M.value ?? s.value
  ), H = A(
    () => S.value ?? i.value
  );
  return {
    selectedKeys: G,
    selectedValue: H,
    setLocalSelectedKeys(t) {
      s.value = t;
    },
    localSelectedKeys: s,
    localSelectedValue: i
  };
}
export {
  _ as useSelectedState
};
