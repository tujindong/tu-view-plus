import { isFirefox as c, isNumber as b } from "@tu-view-plus/utils";
let t;
const m = `
  height:0 !important;
  visibility:hidden !important;
  ${c() ? "" : "overflow:hidden !important;"}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`, u = [
  "letter-spacing",
  "line-height",
  "padding-top",
  "padding-bottom",
  "font-family",
  "font-weight",
  "font-size",
  "text-rendering",
  "text-transform",
  "width",
  "text-indent",
  "padding-left",
  "padding-right",
  "border-width",
  "box-sizing"
];
function x(n) {
  const e = window.getComputedStyle(n), l = e.getPropertyValue("box-sizing"), r = Number.parseFloat(e.getPropertyValue("padding-bottom")) + Number.parseFloat(e.getPropertyValue("padding-top")), a = Number.parseFloat(e.getPropertyValue("border-bottom-width")) + Number.parseFloat(e.getPropertyValue("border-top-width"));
  return { contextStyle: u.map(
    (p) => `${p}:${e.getPropertyValue(p)}`
  ).join(";"), paddingSize: r, borderSize: a, boxSizing: l };
}
function y(n, e = 1, l) {
  var s;
  t || (t = document.createElement("textarea"), document.body.appendChild(t));
  const { paddingSize: r, borderSize: a, boxSizing: d, contextStyle: p } = x(n);
  t.setAttribute("style", `${p};${m}`), t.value = n.value || n.placeholder || "";
  let i = t.scrollHeight;
  const g = {};
  d === "border-box" ? i = i + a : d === "content-box" && (i = i - r), t.value = "";
  const h = t.scrollHeight - r;
  if (b(e)) {
    let o = h * e;
    d === "border-box" && (o = o + r + a), i = Math.max(o, i), g.minHeight = `${o}px`;
  }
  if (b(l)) {
    let o = h * l;
    d === "border-box" && (o = o + r + a), i = Math.min(o, i);
  }
  return g.height = `${i}px`, (s = t.parentNode) == null || s.removeChild(t), t = void 0, g;
}
export {
  y as calcTextareaHeight
};
