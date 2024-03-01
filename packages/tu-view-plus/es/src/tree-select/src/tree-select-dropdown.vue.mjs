import { defineComponent as v, toRefs as h, ref as S, computed as w, createVNode as p, mergeProps as T } from "vue";
import { treeSelectDropdownProps as g, treeSelectDropdownEmits as k } from "./tree-select-dropdown.mjs";
import { useNamespace as C } from "@tu-view-plus/hooks";
import { TuTree as b } from "../../tree/index.mjs";
import { TuScrollbar as y } from "../../scrollbar/index.mjs";
import "../style/tree-select.css";
const A = /* @__PURE__ */ v({
  name: "TuTabs",
  props: g,
  emits: k,
  setup(r, {
    emit: s,
    slots: P
  }) {
    const {
      showCheckable: t,
      selectedKeys: c,
      treeProps: u
    } = h(r), l = C("tree-select"), n = S(), m = w(() => ({
      ...u.value,
      disableSelectActionOnly: !0,
      checkedKeys: t.value ? c.value : [],
      selectedKeys: t.value ? [] : c.value
    })), d = (e, i) => {
      var o, a;
      t.value ? (a = (o = n.value) == null ? void 0 : o.toggleCheck) == null || a.call(o, e[0], i) : s("change", e);
    }, f = (e) => {
      s("change", e);
    };
    return () => p(y, {
      "wrap-class": l.e("dropdown-wrap"),
      "view-class": l.e("dropdown-list")
    }, {
      default: () => [p(b, T({
        ref: n,
        onSelect: d,
        onCheck: f
      }, m.value), r.treeSlots)]
    });
  }
});
export {
  A as default
};
