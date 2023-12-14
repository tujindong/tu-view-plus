import { toRefs as S, computed as l, watch as o } from "vue";
import { useState as n } from "@tu-view-plus/hooks";
import { getDayjsValue as p, isUndefined as t, isArray as h } from "@tu-view-plus/utils";
function z(g) {
  const { modelValue: y, defaultValue: D, format: r, isRange: c } = S(g);
  function s() {
    return c.value ? [] : void 0;
  }
  function v(e) {
    if (!t(e))
      return c.value ? h(e) ? e : [e, void 0] : e;
  }
  const u = l(() => {
    const e = v(y.value);
    return p(e, r.value);
  }), i = l(() => {
    const e = v(D.value);
    return p(e, r.value);
  }), [L, V] = n(
    t(u.value) ? t(i.value) ? s() : i.value : u.value
  );
  o(u, () => {
    t(u.value) && V(s());
  });
  const a = l(
    () => u.value || L.value
  ), [f, d] = n(a.value);
  o([a], () => {
    d(a.value);
  });
  const [R, m] = n();
  return o([f], () => {
    m(void 0);
  }), {
    computedValue: a,
    panelValue: f,
    inputValue: R,
    setValue: V,
    setPanelValue: d,
    setInputValue: m
  };
}
export {
  z as useTimeState
};
