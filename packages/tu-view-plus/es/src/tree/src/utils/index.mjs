import "@tu-view-plus/utils";
function c(r) {
  const e = [];
  function t(n) {
    n && n.forEach((a) => {
      e.push(a), t(a.children);
    });
  }
  return t(r), e;
}
function f(r) {
  const e = /* @__PURE__ */ new Map();
  return r.forEach((t) => {
    e.set(t.key, t);
  }), e;
}
export {
  c as getFlattenTreeData,
  f as getKey2TreeNode
};
