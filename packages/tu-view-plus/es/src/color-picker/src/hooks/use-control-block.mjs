import { ref as c } from "vue";
const a = ({ value: d, onChange: r }) => {
  const s = c(!1), i = c(), f = c(), w = (e, n) => e < 0 ? 0 : e > n ? 1 : e / n, m = (e) => {
    if (!i.value)
      return;
    const { clientX: n, clientY: L } = e, o = i.value.getBoundingClientRect(), u = [
      w(n - o.x, o.width),
      w(L - o.y, o.height)
    ];
    (u[0] !== d[0] || u[1] !== d[1]) && (r == null || r(u));
  }, t = () => {
    s.value = !1, window.removeEventListener("mousemove", v), window.removeEventListener("mouseup", t), window.removeEventListener("contextmenu", t);
  }, l = (e) => {
    s.value = !0, m(e), window.addEventListener("mousemove", v), window.addEventListener("mouseup", t), window.addEventListener("contextmenu", t);
  };
  function v(e) {
    e.preventDefault(), e.buttons > 0 ? m(e) : t();
  }
  return {
    active: s,
    blockRef: i,
    handlerRef: f,
    onMouseDown: l
  };
};
export {
  a as useControlBlock
};
