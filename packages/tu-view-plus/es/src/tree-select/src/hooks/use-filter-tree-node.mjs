import { toRefs as E, computed as n, ref as K, watchEffect as T } from "vue";
import { debounce as g, isUndefined as w } from "@tu-view-plus/utils";
function M(d) {
  const {
    searchValue: f,
    flattenTreeData: i,
    filterMethod: l,
    disableFilter: e,
    fieldNames: y
  } = E(d), c = n(
    () => {
      var t;
      return ((t = y.value) == null ? void 0 : t.key) || "key";
    }
  ), h = (t, o) => {
    const a = o[c.value];
    return !w(a) && String(a).indexOf(t) > -1;
  }, k = n(
    () => (l == null ? void 0 : l.value) || h
  ), u = K(), v = n(() => !!f.value), m = n(
    () => !(e != null && e.value) && v.value && u.value && u.value.size === 0
  ), p = n(
    () => e != null && e.value ? void 0 : (t) => {
      var a;
      if (!v.value)
        return !0;
      const o = t[c.value];
      return ((a = u.value) == null ? void 0 : a.has(o || "")) ?? !1;
    }
  ), N = g(
    (t, o) => {
      const a = t.filter(
        (r) => k.value(o, r.treeNodeData)
      ), s = /* @__PURE__ */ new Set();
      a.forEach((r) => {
        s.add(r.key), r.pathParentKeys.forEach((S) => {
          s.add(S);
        });
      }), u.value = s;
    },
    100
  );
  return T(() => {
    e != null && e.value ? u.value = void 0 : N(i.value, f.value);
  }), {
    isEmptyFilterResult: m,
    filterTreeNode: p
  };
}
export {
  M as useFilterTreeNode
};
