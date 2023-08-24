import { defineComponent as s, getCurrentInstance as a, ref as p, onMounted as d, onBeforeUnmount as g, cloneVNode as h } from "vue";
import { getFirstComponent as I } from "@tu-view-plus/utils";
import { virtualListItemProps as v } from "./virtual-list-item.mjs";
const y = /* @__PURE__ */ s({
  name: "TuVirtualListItem",
  props: v,
  setup(f, {
    slots: n
  }) {
    var i;
    const c = (i = a()) == null ? void 0 : i.vnode.key, o = p(), r = () => {
      var m, u;
      const t = ((m = o.value) == null ? void 0 : m.$el) ?? o.value, e = ((u = t == null ? void 0 : t.getBoundingClientRect) == null ? void 0 : u.call(t).height) ?? (t == null ? void 0 : t.offsetHeight);
      e && f.setItemSize(c, e);
    };
    return d(() => r()), g(() => r()), () => {
      var e;
      const t = I((e = n.default) == null ? void 0 : e.call(n));
      return t ? h(t, {
        ref: o
      }, !0) : null;
    };
  }
});
export {
  y as default
};
