import "@tu-view-plus/utils";
function r(e, a, m) {
  const t = a || e;
  return (m || e).set("year", t.year()).set("month", t.month()).set("date", t.date());
}
export {
  r as mergeValueWithTime
};
