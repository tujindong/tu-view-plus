import { computed as n, isRef as r, provide as l, reactive as p, inject as u } from "vue";
import { LevelInjectionKey as i } from "../context.mjs";
function s(e) {
  const o = n(() => r(e) ? e.value : e);
  l(
    i,
    p({
      level: o
    })
  );
}
function L(e) {
  const { provideNextLevel: o } = e || {}, t = u(i), c = n(() => (t == null ? void 0 : t.level) || 1);
  if (o) {
    const v = n(() => c.value + 1);
    s(v);
  }
  return {
    level: c
  };
}
export {
  s as provideLevel,
  L as useLevel
};
