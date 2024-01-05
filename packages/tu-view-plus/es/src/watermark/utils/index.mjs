function i(e) {
  return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
function c(e) {
  return Object.entries(e).map(([a, o]) => `${i(a)}:${o}`).join(";");
}
function g(e) {
  const a = e.getContext("2d");
  if (!a)
    return;
  const o = a.getImageData(0, 0, e.width, e.height), { data: n } = o;
  for (let t = 0; t < n.length; t += 4) {
    const r = (n[t] + n[t + 1] + n[t + 2]) / 3;
    n[t] = r, n[t + 1] = r, n[t + 2] = r;
  }
  a.putImageData(o, 0, 0);
}
export {
  i as camelToKebab,
  g as canvasToGray,
  c as styleToString
};
