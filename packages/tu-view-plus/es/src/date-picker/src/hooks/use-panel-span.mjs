import { toRefs as r, computed as n } from "vue";
function s(t) {
  const { mode: e } = r(t), o = n(
    () => ({ date: 1, week: 1, year: 10 * 12, quarter: 12, month: 12 })[e.value]
  ), a = n(
    () => ["year"].includes(e.value) ? 10 * 12 : 12
  );
  return {
    span: o,
    superSpan: a
  };
}
export {
  s as usePanelSpan
};
