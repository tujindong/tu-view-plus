function l(t) {
  return Set.prototype.add.bind(t);
}
function f(t) {
  return Set.prototype.delete.bind(t);
}
function y(t) {
  return t.disabled || t.disableCheckbox ? !1 : !!t.checkable;
}
function u(t) {
  var d;
  const r = [];
  return (d = t.children) == null || d.forEach((o) => {
    y(o) && r.push(o.key, ...u(o));
  }), r;
}
function S(t) {
  var a;
  const { node: r, checkedKeySet: d, indeterminateKeySet: o } = t;
  let s = r.parent;
  for (; s; ) {
    if (y(s)) {
      const c = s.key, n = ((a = s.children) == null ? void 0 : a.filter(y)) || [];
      let e = 0;
      const i = n.length;
      n.some(({ key: h }) => {
        if (d.has(h))
          e += 1;
        else if (o.has(h))
          return e += 0.5, !0;
        return !1;
      }), e && e !== i ? o.add(c) : o.delete(c), e && e === i ? d.add(c) : d.delete(c);
    }
    s = s.parent;
  }
}
function K(t) {
  const {
    node: r,
    checked: d,
    checkedKeys: o,
    indeterminateKeys: s,
    checkStrictly: a = !1
  } = t, { key: c } = r, n = new Set(o), e = new Set(s);
  if (d ? n.add(c) : n.delete(c), e.delete(c), !a) {
    const i = u(r);
    d ? i.forEach(l(n)) : i.forEach(f(n)), i.forEach(f(e)), S({ node: r, checkedKeySet: n, indeterminateKeySet: e });
  }
  return [[...n], [...e]];
}
function p(t) {
  const { initCheckedKeys: r, key2TreeNode: d, checkStrictly: o, onlyCheckLeaf: s } = t, a = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
  return o ? r.forEach(l(a)) : r.forEach((e) => {
    var k;
    const i = d.get(e);
    if (!i || c.has(e) || s && ((k = i.children) != null && k.length))
      return;
    const h = u(i);
    h.forEach(l(c)), h.forEach(f(n)), a.add(e), n.delete(e), S({ node: i, checkedKeySet: a, indeterminateKeySet: n });
  }), [[...a, ...c], [...n]];
}
export {
  K as getCheckedStateByCheck,
  p as getCheckedStateByInitKeys,
  y as isNodeCheckable
};
