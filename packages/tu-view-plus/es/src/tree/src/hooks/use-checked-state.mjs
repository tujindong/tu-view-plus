import { toRefs as p, ref as l, watchEffect as C, computed as f } from "vue";
import { getCheckedStateByInitKeys as S } from "../utils/check-utils.mjs";
function B(h) {
  const {
    defaultCheckedKeys: u,
    checkedKeys: c,
    key2TreeNode: k,
    checkStrictly: s,
    halfCheckedKeys: r,
    onlyCheckLeaf: m
  } = p(h), v = l(!1), t = l([]), a = l([]), n = l(), o = l(), d = (e) => S({
    initCheckedKeys: e,
    key2TreeNode: k.value,
    checkStrictly: s.value,
    onlyCheckLeaf: m.value
  }), y = (e) => {
    const i = d(e);
    [t.value, a.value] = i;
  };
  return y(c.value || (u == null ? void 0 : u.value) || []), C(() => {
    c.value ? [n.value, o.value] = d(c.value) : v.value && (n.value = void 0, o.value = void 0, t.value = [], a.value = []), v.value || (v.value = !0);
  }), {
    checkedKeys: f(
      () => n.value || t.value
    ),
    indeterminateKeys: f(() => s.value && r.value ? r.value : o.value || a.value),
    setCheckedState(e, i, K = !1) {
      return K ? y(e) : (t.value = e, a.value = i), [t.value, a.value];
    }
  };
}
export {
  B as useCheckedState
};
