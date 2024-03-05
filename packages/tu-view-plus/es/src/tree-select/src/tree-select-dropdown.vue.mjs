import { defineComponent as S, toRefs as g, ref as y, computed as i, createVNode as m, mergeProps as P } from "vue";
import { treeSelectDropdownProps as T, treeSelectDropdownEmits as k } from "./tree-select-dropdown.mjs";
import { useNamespace as C } from "@tu-view-plus/hooks";
import { addUnit as b } from "@tu-view-plus/utils";
import { TuTree as K } from "../../tree/index.mjs";
import { TuScrollbar as L } from "../../scrollbar/index.mjs";
import "../style/tree-select.css";
const A = /* @__PURE__ */ S({
  name: "TuTabs",
  props: T,
  emits: k,
  setup(a, {
    emit: c
  }) {
    const {
      showCheckable: l,
      selectedKeys: n,
      treeProps: d,
      size: v
    } = g(a), t = C("tree-select"), p = y(), r = i(() => ({
      ...d.value,
      disableSelectActionOnly: !0,
      checkedKeys: l.value ? n.value : [],
      selectedKeys: l.value ? [] : n.value
    })), f = i(() => {
      var o;
      const e = {};
      return (o = r.value.virtualListProps) != null && o.height && (e.maxHeight = b(r.value.virtualListProps.height)), e;
    }), h = (e, o) => {
      var s, u;
      l.value ? (u = (s = p.value) == null ? void 0 : s.toggleCheck) == null || u.call(s, e[0], o) : c("change", e);
    }, w = (e) => {
      c("change", e);
    };
    return () => m(L, {
      "wrap-class": [t.e("dropdown-wrap"), t.em("dropdown-wrap", v.value), t.is("virtual-list", r.value.hasOwnProperty("virtualListProps"))],
      "wrap-style": f.value,
      "view-class": t.e("dropdown-list")
    }, {
      default: () => [m(K, P({
        ref: p,
        onSelect: h,
        onCheck: w
      }, r.value), a.treeSlots)]
    });
  }
});
export {
  A as default
};
