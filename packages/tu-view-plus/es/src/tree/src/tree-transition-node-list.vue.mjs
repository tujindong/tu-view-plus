import { defineComponent as v, toRefs as K, computed as d, openBlock as l, createBlock as m, withCtx as N, createElementBlock as f, normalizeClass as P, unref as k, Fragment as E, renderList as g, mergeProps as w, createCommentVNode as B } from "vue";
import { treeTransitionNodeListProps as L } from "./tree-transition-node-list.mjs";
import { useNamespace as C } from "@tu-view-plus/hooks";
import "@tu-view-plus/utils";
import { useTreeContext as D } from "./hooks/use-tree-context.mjs";
import S from "./tree-expand-transition.vue.mjs";
import $ from "./tree-base-node.vue.mjs";
const b = v({
  name: "TuTreeTransitionNodeList"
}), A = /* @__PURE__ */ v({
  ...b,
  props: L,
  setup(y) {
    const _ = y, x = C("tree"), t = D(), { nodeKey: a } = K(_), c = d(
      () => {
        var e, n;
        return (n = (e = t.expandedKeys) == null ? void 0 : e.includes) == null ? void 0 : n.call(e, a.value);
      }
    ), p = d(() => {
      var s;
      const e = new Set(t.expandedKeys || []), n = (s = t.flattenTreeData) == null ? void 0 : s.filter((r) => {
        var i, o;
        return (i = r.pathParentKeys) != null && i.includes(a.value) ? !t.filterTreeNode || ((o = t.filterTreeNode) == null ? void 0 : o.call(t, r.treeNodeData)) : !1;
      });
      return n == null ? void 0 : n.filter((r) => {
        var o;
        if (c.value)
          return (o = r.pathParentKeys) == null ? void 0 : o.every((u) => e.has(u));
        const i = r.pathParentKeys.indexOf(a.value);
        return r.pathParentKeys.slice(i + 1).every((u) => e.has(u));
      });
    }), T = d(
      () => {
        var e, n;
        return ((e = t.currentExpandKeys) == null ? void 0 : e.includes(a.value)) && ((n = p.value) == null ? void 0 : n.length);
      }
    );
    function h() {
      var e;
      (e = t.onExpandEnd) == null || e.call(t, a.value);
    }
    return (e, n) => (l(), m(S, {
      expanded: c.value,
      onEnd: h
    }, {
      default: N(() => [
        T.value ? (l(), f("div", {
          key: 0,
          class: P(k(x).e("node-list"))
        }, [
          (l(!0), f(E, null, g(p.value, (s) => (l(), m($, w({
            key: s.key
          }, s.treeNodeProps), null, 16))), 128))
        ], 2)) : B("", !0)
      ]),
      _: 1
    }, 8, ["expanded"]));
  }
});
export {
  A as default
};
