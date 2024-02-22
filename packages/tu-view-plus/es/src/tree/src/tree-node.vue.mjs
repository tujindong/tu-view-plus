import { defineComponent as n, createVNode as r, Fragment as s, mergeProps as a } from "vue";
import "@tu-view-plus/utils";
import { useNodeKey as p } from "./hooks/use-node-key.mjs";
import { treeBaseNodeProps as i } from "./tree-base-node.mjs";
import f from "./tree-base-node.vue.mjs";
import u from "./tree-transition-node-list.vue.mjs";
const k = /* @__PURE__ */ n({
  name: "TuTreeNode",
  inheritAttrs: !1,
  props: i,
  setup(o, {
    slots: t,
    attrs: m
  }) {
    const e = p();
    return () => r(s, null, [r(f, a(o, m, {
      key: e.value
    }), t), r(u, {
      key: e.value,
      nodeKey: e.value
    }, null)]);
  }
});
export {
  k as default
};
