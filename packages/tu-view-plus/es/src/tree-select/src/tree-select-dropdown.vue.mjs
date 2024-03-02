import { defineComponent as w, toRefs as h, ref as S, computed as T, createVNode as p, mergeProps as g } from "vue";
import { treeSelectDropdownProps as k, treeSelectDropdownEmits as C } from "./tree-select-dropdown.mjs";
import { useNamespace as b } from "@tu-view-plus/hooks";
import { TuTree as y } from "../../tree/index.mjs";
import { TuScrollbar as P } from "../../scrollbar/index.mjs";
import "../style/tree-select.css";
const A = /* @__PURE__ */ w({
  name: "TuTabs",
  props: k,
  emits: C,
  setup(s, {
    emit: c,
    slots: K
  }) {
    const {
      showCheckable: t,
      selectedKeys: l,
      treeProps: u,
      size: m
    } = h(s), r = b("tree-select"), n = S(), d = T(() => ({
      ...u.value,
      disableSelectActionOnly: !0,
      checkedKeys: t.value ? l.value : [],
      selectedKeys: t.value ? [] : l.value
    })), i = (e, v) => {
      var o, a;
      t.value ? (a = (o = n.value) == null ? void 0 : o.toggleCheck) == null || a.call(o, e[0], v) : c("change", e);
    }, f = (e) => {
      c("change", e);
    };
    return () => p(P, {
      "wrap-class": [r.e("dropdown-wrap"), r.em("dropdown-wrap", m.value)],
      "view-class": r.e("dropdown-list")
    }, {
      default: () => [p(y, g({
        ref: n,
        onSelect: i,
        onCheck: f
      }, d.value), s.treeSlots)]
    });
  }
});
export {
  A as default
};
