import { toRefs as y, ref as w, watch as K, onMounted as M, computed as V } from "vue";
import { isUndefined as h } from "@tu-view-plus/utils";
function b(a, l) {
  const o = [], s = (p) => {
    for (let n = 0; n < p.length; n++) {
      const i = p[n];
      if (i.key === l)
        return !0;
      if (i.children) {
        if (o.push(i.key), s(i.children))
          return !0;
        o.pop();
      }
    }
    return !1;
  };
  return s(a), o;
}
function x(a, l) {
  return a.length !== l.length ? !1 : a.toString() === l.toString();
}
function D(a) {
  const {
    modelValue: l,
    defaultValue: o,
    autoOpen: s,
    autoOpenSelected: p,
    subMenuKeys: n,
    selectedKeys: i,
    menuData: m,
    accordion: c
  } = y(a), d = w(
    h(l.value) ? h(o.value) ? [] : o.value : l.value
  ), r = (e) => {
    d.value = e;
  };
  K(l, () => {
    h(l.value) && r([]);
  });
  let g = [];
  M(() => {
    g = [...n.value];
    let e = [];
    if (s.value && (e = c.value ? n.value.slice(0, 1) : [...n.value]), p.value) {
      const u = i.value.map(
        (t) => b(m.value, t)
      );
      u.length && (!s.value || c.value) && (e = c.value ? u[0] : [...new Set([].concat(...u))]);
    }
    e.length && r(e);
  });
  let O = !1;
  K(n, (e, u = []) => {
    if (O || !x(e, g)) {
      const t = f.value.filter(
        (v) => e.includes(v)
      );
      if (s.value) {
        const v = e.filter((S) => !u.includes(S));
        t.push(...v);
      }
      r(c.value ? t.slice(0, 1) : t);
    }
    O = !0;
  });
  const f = V(() => l.value || d.value);
  return {
    openKeys: f,
    localOpenKeys: d,
    setOpenKeys: r,
    open(e, u) {
      let t = [];
      return f.value.indexOf(e) > -1 ? c.value && u === 1 ? t = [] : t = f.value.filter((v) => v !== e) : c.value && u === 1 ? t = [e] : t = f.value.concat([e]), r(t), t;
    }
  };
}
export {
  D as useMenuOpenState
};
