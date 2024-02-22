import { omit as h, isUndefined as b, isFunction as f } from "@tu-view-plus/utils";
const g = (() => {
  let c = 0;
  return () => (c += 1, `__tu_tree${c}`);
})();
function k(c, t) {
  return !!(b(c) ? t : c);
}
function y(c, t) {
  const n = { ...c };
  return t && Object.keys(t).forEach((e) => {
    const i = t[e];
    i !== e && (n[e] = c[i], delete n[i]);
  }), n;
}
function u({
  subEnable: c,
  superEnable: t,
  isLeaf: n,
  treeNodeData: a,
  level: e
}) {
  return b(c) ? f(t) ? t(a, { isLeaf: n, level: e }) : t ?? !1 : c;
}
function N(c) {
  var d;
  const { treeNodeData: t, parentNode: n, isTail: a = !0, treeProps: e } = c, { fieldNames: i } = e || {}, l = y(t, i), o = e.loadMore ? !!l.isLeaf : !((d = l.children) != null && d.length), r = n ? n.level + 1 : 0, s = {
    ...h(l, ["children"]),
    key: l.key ?? g(),
    selectable: u({
      subEnable: l.selectable,
      superEnable: e == null ? void 0 : e.selectable,
      isLeaf: o,
      level: r,
      treeNodeData: t
    }),
    disabled: !!l.disabled,
    disableCheckbox: !!l.disableCheckbox,
    checkable: u({
      subEnable: l.checkable,
      superEnable: e == null ? void 0 : e.checkable,
      isLeaf: o,
      level: r,
      treeNodeData: t
    }),
    isLeaf: o,
    isTail: a,
    blockNode: !!(e != null && e.blockNode),
    showLine: !!(e != null && e.showLine),
    level: r,
    // showLine 模式下是否显示缩进线。
    // 如果父节点是其所在层级的最后一个节点，那么所有的子节点（包括孙子节点等）在父节点所在层级的缩进格都不显示缩进线。
    lineless: n ? [...n.lineless, n.isTail] : [],
    draggable: k(l.draggable, e == null ? void 0 : e.draggable)
  };
  return {
    ...s,
    treeNodeProps: s,
    treeNodeData: t,
    parent: n,
    parentKey: n == null ? void 0 : n.key,
    pathParentKeys: n ? [...n.pathParentKeys, n.key] : []
  };
}
function E(c, t) {
  function n(a, e) {
    if (!a)
      return;
    const { fieldNames: i } = t, l = [];
    return a.forEach((o, r) => {
      const s = N({
        treeNodeData: o,
        treeProps: t,
        parentNode: e,
        isTail: r === a.length - 1
      });
      s.children = n(
        o[(i == null ? void 0 : i.children) || "children"],
        s
      ), l.push(s);
    }), l;
  }
  return n(c);
}
export {
  g as generateKey,
  E as generateTreeData
};
