import { shallowReactive as c } from "vue";
const r = c([]), i = (e) => {
  const t = r.findIndex((o) => o.id === e), s = r[t];
  let n;
  return t > 0 && (n = r[t - 1]), { current: s, prev: n };
}, f = (e) => {
  const { prev: t } = i(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, a = (e, t) => r.findIndex((n) => n.id === e) > 0 ? 20 : t;
export {
  i as getInstance,
  f as getLastOffset,
  a as getOffsetOrSpace,
  r as instances
};
