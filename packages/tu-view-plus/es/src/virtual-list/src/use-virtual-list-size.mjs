import { ref as z, computed as r, onMounted as O } from "vue";
const B = ({
  dataKeys: h,
  contentRef: P,
  fixedSize: x,
  estimatedSize: i,
  buffer: g
}) => {
  const p = z(0), n = /* @__PURE__ */ new Map(), l = r(() => h.value.length), a = z(0), d = r(() => {
    const e = a.value + g.value * 3;
    return e > l.value ? l.value : e;
  }), v = r(() => {
    const e = l.value - g.value * 3;
    return e < 0 ? 0 : e;
  }), M = (e) => {
    e < 0 ? a.value = 0 : e > v.value ? a.value = v.value : a.value = e;
  }, c = z(x.value), s = r(() => i.value !== 30 ? i.value : p.value || i.value), V = (e, t) => {
    n.set(e, t);
  }, I = (e) => {
    if (c.value)
      return s.value;
    const t = h.value[e];
    return n.get(t) ?? s.value;
  }, w = (e) => n.has(e), R = (e) => c.value ? s.value * e : S(0, e), S = (e, t) => {
    let u = 0;
    for (let o = e; o < t; o++)
      u += I(o);
    return u;
  }, m = r(() => c.value ? s.value * a.value : S(0, a.value)), y = (e) => {
    const t = e >= m.value;
    let u = Math.abs(e - m.value);
    const o = t ? a.value : a.value - 1;
    let f = 0;
    for (; u > 0; )
      u -= I(o + f), t ? f++ : f--;
    return f;
  }, A = (e) => {
    const t = y(e), u = a.value + t - g.value;
    return u < 0 ? 0 : u > v.value ? v.value : u;
  }, F = r(() => c.value ? s.value * (l.value - d.value) : S(d.value, l.value));
  return O(() => {
    const e = Array.from(n.values()).reduce(
      (t, u) => t + u,
      0
    );
    e > 0 && (p.value = e / n.size);
  }), {
    frontPadding: m,
    behindPadding: F,
    start: a,
    end: d,
    getStartByScroll: A,
    setItemSize: V,
    hasItemSize: w,
    setStart: M,
    getScrollOffset: R
  };
};
export {
  B as useVirtualListSize
};
