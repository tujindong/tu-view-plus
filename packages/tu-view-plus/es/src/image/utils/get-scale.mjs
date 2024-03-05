const n = [
  25,
  33,
  50,
  67,
  75,
  80,
  90,
  100,
  110,
  125,
  150,
  175,
  200,
  250,
  300,
  400,
  500
].map((e) => +(e / 100).toFixed(2)), l = n[0], r = n[n.length - 1];
function s(e = 1, o = "zoomIn") {
  let t = n.indexOf(e);
  return t === -1 && (t = c(e)), o === "zoomIn" ? t === n.length - 1 ? e : n[t + 1] : t === 0 ? e : n[t - 1];
}
function f(e, o = 1.1, t = "zoomIn") {
  const a = t === "zoomIn" ? o : 1 / o, i = Number.parseFloat((e * a).toFixed(3));
  return Math.min(r, Math.max(l, i));
}
function c(e) {
  let o = n.length - 1;
  for (let t = 0; t < n.length; t++) {
    const a = n[t];
    if (e === a) {
      o = t;
      break;
    }
    if (e < a) {
      const i = n[t - 1];
      o = i === void 0 || Math.abs(i - e) <= Math.abs(a - e) ? t - 1 : t;
      break;
    }
  }
  return o;
}
export {
  s as default,
  f as getScaleByRate,
  r as maxScale,
  l as minScale
};
