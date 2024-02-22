import { toRefs as p, ref as D, watchEffect as T, computed as n } from "vue";
import { getFlattenTreeData as i, getKey2TreeNode as d } from "../utils/index.mjs";
import { generateTreeData as g } from "../utils/tree-data.mjs";
function k(c) {
  const {
    treeData: s,
    fieldNames: e,
    selectable: a,
    showLine: t,
    blockNode: r,
    checkable: o,
    loadMore: l,
    draggable: u
  } = p(c), f = D([]);
  T(() => {
    f.value = g(s.value || [], {
      selectable: (a == null ? void 0 : a.value) ?? !1,
      showLine: !!(t != null && t.value),
      blockNode: !!(r != null && r.value),
      checkable: (o == null ? void 0 : o.value) ?? !1,
      fieldNames: e == null ? void 0 : e.value,
      loadMore: !!(l != null && l.value),
      draggable: !!(u != null && u.value)
    });
  });
  const v = n(() => i(f.value)), m = n(() => d(v.value));
  return { treeData: f, flattenTreeData: v, key2TreeNode: m };
}
export {
  k as useTreeData
};
