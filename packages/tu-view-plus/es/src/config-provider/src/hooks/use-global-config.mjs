import { ref as d, getCurrentInstance as a, provide as g, computed as u, unref as m, inject as C } from "vue";
import { configProviderContextKey as v } from "../constants.mjs";
import { localeContextKey as p, namespaceContextKey as x, zIndexContextKey as b, SIZE_INJECTION_KEY as y } from "@tu-view-plus/hooks";
import { debugWarn as I, keysOf as f } from "@tu-view-plus/utils";
const c = d(), K = (t, e) => {
  const i = [.../* @__PURE__ */ new Set([...f(t), ...f(e)])], o = {};
  for (const n of i)
    o[n] = e[n] ?? t[n];
  return o;
};
function z(t, e = void 0) {
  const i = a() ? C(v, c) : c;
  return t ? u(() => {
    var o;
    return ((o = i.value) == null ? void 0 : o[t]) ?? e;
  }) : i;
}
const k = (t, e, i = !1) => {
  const o = !!a(), n = o ? z() : void 0, l = (e == null ? void 0 : e.provide) ?? (o ? g : void 0);
  if (!l) {
    I(
      "provideGlobalConfig",
      "provideGlobalConfig() can only be used inside setup()."
    );
    return;
  }
  const r = u(() => {
    const s = m(t);
    return n != null && n.value ? K(n.value, s) : s;
  });
  return l(v, r), l(
    p,
    u(() => r.value.locale)
  ), l(
    x,
    u(() => r.value.namespace)
  ), l(
    b,
    u(() => r.value.zIndex)
  ), l(y, {
    size: u(() => r.value.size || "")
  }), (i || !c.value) && (c.value = r.value), r;
};
export {
  k as provideGlobalConfig,
  z as useGlobalConfig
};
