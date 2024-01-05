import "@tu-view-plus/utils";
function i(t) {
  return [...Array(t)];
}
function m(t, r, n) {
  const e = r || t;
  return (n || t).set("year", e.year()).set("month", e.month()).set("date", e.date());
}
export {
  m as mergeValueWithTime,
  i as newArray
};
