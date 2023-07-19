import { ref as g, getCurrentInstance as v, provide as p, computed as o, unref as a, inject as x } from "vue";
import { configProviderContextKey as d } from "../constants.mjs";
import { localeContextKey as C, namespaceContextKey as I, zIndexContextKey as b, SIZE_INJECTION_KEY as z, useNamespace as y, defaultNamespace as G, useLocale as K, useZIndex as N, defaultInitialZIndex as S } from "@tu-view-plus/hooks";
import { debugWarn as E, keysOf as f } from "@tu-view-plus/utils";
const c = g(), Z = (l, t) => {
  const n = [.../* @__PURE__ */ new Set([...f(l), ...f(t)])], s = {};
  for (const i of n)
    s[i] = t[i] ?? l[i];
  return s;
};
function m(l, t = void 0) {
  const n = v() ? x(d, c) : c;
  return l ? o(() => {
    var s;
    return ((s = n.value) == null ? void 0 : s[l]) ?? t;
  }) : n;
}
const j = (l, t, n = !1) => {
  const s = !!v(), i = s ? m() : void 0, u = (t == null ? void 0 : t.provide) ?? (s ? p : void 0);
  if (!u) {
    E(
      "provideGlobalConfig",
      "provideGlobalConfig() can only be used inside setup()."
    );
    return;
  }
  const r = o(() => {
    const e = a(l);
    return i != null && i.value ? Z(i.value, e) : e;
  });
  return u(d, r), u(
    C,
    o(() => r.value.locale)
  ), u(
    I,
    o(() => r.value.namespace)
  ), u(
    b,
    o(() => r.value.zIndex)
  ), u(z, {
    size: o(() => r.value.size || "")
  }), (n || !c.value) && (c.value = r.value), r;
};
function F(l, t) {
  const n = m(), s = y(
    l,
    o(() => {
      var e;
      return ((e = n.value) == null ? void 0 : e.namespace) || G;
    })
  ), i = K(o(() => {
    var e;
    return (e = n.value) == null ? void 0 : e.locale;
  })), u = N(
    o(() => {
      var e;
      return ((e = n.value) == null ? void 0 : e.zIndex) || S;
    })
  ), r = o(
    () => {
      var e;
      return a(t) || ((e = n.value) == null ? void 0 : e.size) || "medium";
    }
  );
  return j(o(() => a(n) || {})), {
    ns: s,
    locale: i,
    zIndex: u,
    size: r
  };
}
export {
  j as provideGlobalConfig,
  F as useGlobalComponentSettings,
  m as useGlobalConfig
};
