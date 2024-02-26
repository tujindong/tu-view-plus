import { isBoolean as a } from "@tu-view-plus/utils";
function c(e) {
  const r = [];
  function t(n) {
    n && n.forEach((i) => {
      r.push(i), t(i.children);
    });
  }
  return t(e), r;
}
function o(e) {
  const r = /* @__PURE__ */ new Map();
  return e.forEach((t) => {
    r.set(t.key, t);
  }), r;
}
function u(e) {
  return e.selectable && !e.disabled;
}
function s(e) {
  return !e.isLeaf && e.children;
}
function l(e) {
  return a(e.isLeaf) ? e.isLeaf : !e.children;
}
export {
  c as getFlattenTreeData,
  o as getKey2TreeNode,
  l as isLeafNode,
  s as isNodeExpandable,
  u as isNodeSelectable
};
