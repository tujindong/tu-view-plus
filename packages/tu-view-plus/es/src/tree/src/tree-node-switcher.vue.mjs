import { defineComponent as I, toRefs as h, createVNode as n, createTextVNode as p, isVNode as w } from "vue";
import { treeNodeSwitcherProps as S } from "./tree-node-switcher.mjs";
import { RenderFunction as N } from "@tu-view-plus/constants";
import { usePickSlots as g, useNamespace as k } from "@tu-view-plus/hooks";
import { Loading as L, Remove as T, CirclePlus as C, CaretBottom as b, Document as j } from "@tu-view-plus/icons-vue";
import "@tu-view-plus/utils";
import { useTreeContext as P } from "./hooks/use-tree-context.mjs";
import { TuIcon as s } from "../../icon/index.mjs";
function R(l) {
  return typeof l == "function" || Object.prototype.toString.call(l) === "[object Object]" && !w(l);
}
const H = /* @__PURE__ */ I({
  name: "TuTreeNodeSwitcher",
  components: {
    RenderFunction: N
  },
  props: S,
  emits: ["click"],
  setup(l, {
    slots: a,
    emit: d
  }) {
    const {
      icons: c,
      nodeStatus: r,
      treeNodeData: u
    } = h(l), t = P(), f = g(a, "switcher-icon"), m = g(a, "loading-icon");
    return {
      getSwitcherIcon: () => {
        var i, o;
        const e = ((i = c == null ? void 0 : c.value) == null ? void 0 : i.switcherIcon) ?? f.value;
        return e ? e(r.value) : (o = t.switcherIcon) == null ? void 0 : o.call(t, u.value, r.value);
      },
      getLoadingIcon: () => {
        var i, o;
        const e = ((i = c == null ? void 0 : c.value) == null ? void 0 : i.loadingIcon) ?? m.value;
        return e ? e(r.value) : (o = t.loadingIcon) == null ? void 0 : o.call(t, u.value, r.value);
      },
      onClick(e) {
        d("click", e);
      }
    };
  },
  render() {
    const {
      getSwitcherIcon: l,
      getLoadingIcon: a,
      onClick: d,
      nodeStatus: c = {},
      loading: r,
      showLine: u
    } = this, t = k("tree"), {
      expanded: f,
      isLeaf: m
    } = c;
    if (r)
      return a() ?? n(s, {
        class: "is-loading"
      }, {
        default: () => [n(L, null, null)]
      });
    let e = null, i = !1;
    if (m)
      u && (e = l() ?? n(s, null, {
        default: () => [n(j, null, null)]
      }));
    else {
      const v = u ? f ? n(T, null, null) : n(C, null, null) : n(b, null, null);
      e = l() ?? n(s, null, {
        default: () => [p(" "), v, p(" ")]
      }), i = !u;
    }
    if (!e)
      return null;
    const o = n("div", {
      class: t.e("switcher-icon"),
      onClick: d
    }, [e]);
    return i ? n(s, {
      class: t.e("icon-hover")
    }, R(o) ? o : {
      default: () => [o]
    }) : o;
  }
});
export {
  H as default
};
