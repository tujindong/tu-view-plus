import { defineComponent as H, useSlots as Be, toRefs as Fe, computed as L, reactive as g, ref as N, provide as Re, openBlock as K, createElementBlock as M, normalizeClass as ze, createBlock as b, unref as Oe, mergeProps as T, withCtx as Ve, Fragment as je, renderList as Ae } from "vue";
import { treeProps as Me, treeEmits as Ue } from "./tree.mjs";
import { useNamespace as $e, usePickSlots as m, useMergeState as U } from "@tu-view-plus/hooks";
import { isUndefined as $, isFunction as q } from "@tu-view-plus/utils";
import "../../form/index.mjs";
import { useCheckedState as qe } from "./hooks/use-checked-state.mjs";
import { TreeInjectionKey as Ge } from "./context.mjs";
import { useTreeData as He } from "./hooks/use-tree-data.mjs";
import { getCheckedStateByCheck as Je } from "./utils/check-utils.mjs";
import { TuVirtualList as Qe } from "../../virtual-list/index.mjs";
import G from "./tree-node.vue.mjs";
import "../style/tree.css";
import { useFormSize as We } from "../../form/src/hooks/use-form-props.mjs";
const Xe = H({
  name: "TuTree"
}), it = /* @__PURE__ */ H({
  ...Xe,
  props: Me,
  emits: Ue,
  setup(J, { emit: Q }) {
    const I = J, d = Q, l = Be(), {
      data: W,
      showLine: _,
      multiple: X,
      loadMore: u,
      checkStrictly: B,
      checkedKeys: Y,
      defaultCheckedKeys: Z,
      selectedKeys: ee,
      defaultSelectedKeys: D,
      expandedKeys: te,
      defaultExpandedKeys: y,
      checkedStrategy: ae,
      selectable: ne,
      checkable: F,
      blockNode: re,
      fieldNames: oe,
      defaultExpandAll: se,
      filterTreeNode: i,
      draggable: de,
      allowDrop: S,
      defaultExpandSelected: R,
      defaultExpandChecked: z,
      autoExpandParent: ce,
      halfCheckedKeys: le,
      onlyCheckLeaf: ue,
      animation: ie
    } = Fe(I), x = $e("tree"), ve = We(), pe = L(() => ({
      [x.b()]: !0,
      [x.m(ve.value)]: !0,
      [x.is("checkable")]: F.value,
      [x.is("show-line")]: _.value
    })), fe = m(l, "switcher-icon"), he = m(l, "loading-icon"), me = m(l, "drag-icon"), ge = m(l, "icon"), Ke = m(l, "title"), ye = m(l, "extra"), { treeData: Se, flattenTreeData: C, key2TreeNode: s } = He(
      g({
        treeData: W,
        selectable: ne,
        showLine: _,
        blockNode: re,
        checkable: F,
        fieldNames: oe,
        loadMore: u,
        draggable: de
      })
    ), { checkedKeys: E, indeterminateKeys: O, setCheckedState: xe } = qe(
      g({
        defaultCheckedKeys: Z,
        checkedKeys: Y,
        checkStrictly: B,
        key2TreeNode: s,
        halfCheckedKeys: le,
        onlyCheckLeaf: ue
      })
    ), [w, Ee] = U(
      (D == null ? void 0 : D.value) || [],
      g({
        value: ee
      })
    ), c = N([]), v = N(), ke = N();
    function Ne() {
      if (y != null && y.value) {
        const e = /* @__PURE__ */ new Set([]);
        return y.value.forEach((t) => {
          if (e.has(t))
            return;
          const a = s.value.get(t);
          a && [...ce.value ? a.pathParentKeys : [], t].forEach(
            (n) => e.add(n)
          );
        }), [...e];
      }
      if (se.value)
        return C.value.filter((e) => e.children && e.children.length).map((e) => e.key);
      if (R.value || z.value) {
        const e = /* @__PURE__ */ new Set([]), t = (a) => {
          a.forEach((n) => {
            const r = s.value.get(n);
            r && (r.pathParentKeys || []).forEach((o) => e.add(o));
          });
        };
        return R.value && t(w.value), z.value && t(E.value), [...e];
      }
      return [];
    }
    const [P, De] = U(
      Ne(),
      g({
        value: te
      })
    ), p = N([]), V = L(() => {
      const e = new Set(P.value), t = new Set(p.value);
      return C.value.filter((a) => {
        var f;
        if (!(!i || !i.value || (i == null ? void 0 : i.value(a.treeNodeData))))
          return !1;
        const r = $(a.parentKey), o = (f = a.pathParentKeys) == null ? void 0 : f.every(
          (h) => e.has(h) && !t.has(h)
        );
        return r || o;
      });
    });
    function Ce(e, t = ae.value) {
      let a = [...e];
      return t === "parent" ? a = e.filter((n) => {
        const r = s.value.get(n);
        return r && !(!$(r.parentKey) && e.includes(r.parentKey));
      }) : t === "child" && (a = e.filter((n) => {
        var r, o;
        return !((o = (r = s.value.get(n)) == null ? void 0 : r.children) != null && o.length);
      })), a;
    }
    function k(e) {
      return e.map((t) => {
        var a;
        return ((a = s.value.get(t)) == null ? void 0 : a.treeNodeData) || void 0;
      }).filter(Boolean);
    }
    function we(e) {
      const {
        targetKey: t,
        targetChecked: a,
        newCheckedKeys: n,
        newIndeterminateKeys: r,
        event: o
      } = e, f = t ? s.value.get(t) : void 0, h = Ce(n);
      d("update:checkedKeys", h), d("update:halfCheckedKeys", r), d("check", h, {
        checked: a,
        node: f == null ? void 0 : f.treeNodeData,
        checkedNodes: k(h),
        halfCheckedKeys: r,
        halfCheckedNodes: k(r),
        e: o
      });
    }
    function Pe(e) {
      const { targetKey: t, targetSelected: a, newSelectedKeys: n, event: r } = e, o = t ? s.value.get(t) : void 0;
      d("update:selectedKeys", n), d("select", n, {
        selected: a,
        node: o == null ? void 0 : o.treeNodeData,
        selectedNodes: k(n),
        e: r
      });
    }
    function Le(e) {
      const { targetKey: t, targetExpanded: a, newExpandedKeys: n, event: r } = e, o = t ? s.value.get(t) : void 0;
      d("expand", n, {
        expanded: a,
        node: o == null ? void 0 : o.treeNodeData,
        expandedNodes: k(n),
        e: r
      }), d("update:expandedKeys", n);
    }
    function j(e, t, a) {
      const n = s.value.get(t);
      if (!n)
        return;
      const [r, o] = Je({
        node: n,
        checked: e,
        checkedKeys: E.value,
        indeterminateKeys: O.value,
        checkStrictly: B.value
      });
      xe(r, o), we({
        targetKey: t,
        targetChecked: e,
        newCheckedKeys: r,
        newIndeterminateKeys: o,
        event: a
      });
    }
    function be(e, t) {
      if (!s.value.get(e))
        return;
      let n, r;
      if (X.value) {
        const o = new Set(w.value);
        r = !o.has(e), r ? o.add(e) : o.delete(e), n = [...o];
      } else
        r = !0, n = [e];
      Ee(n), Pe({
        targetKey: e,
        targetSelected: r,
        newSelectedKeys: n,
        event: t
      });
    }
    function A(e, t, a) {
      if (p.value.includes(t) || !s.value.get(t))
        return;
      const r = new Set(P.value);
      e ? r.add(t) : r.delete(t);
      const o = [...r];
      De(o), ie.value && p.value.push(t), Le({
        targetKey: t,
        targetExpanded: e,
        newExpandedKeys: o,
        event: a
      });
    }
    function Te(e) {
      const t = p.value.indexOf(e);
      p.value.splice(t, 1);
    }
    const Ie = L(
      () => u != null && u.value ? async (e) => {
        if (!q(u.value))
          return;
        const t = s.value.get(e);
        if (!t)
          return;
        const { treeNodeData: a } = t;
        c.value = [.../* @__PURE__ */ new Set([...c.value, e])];
        try {
          await u.value(a), c.value = c.value.filter((n) => n !== e), A(!0, e), E.value.includes(e) && j(!0, e);
        } catch (n) {
          c.value = c.value.filter((r) => r !== e), console.error("[tree]load data error: ", n);
        }
      } : void 0
    ), _e = g({
      treeProps: I,
      switcherIcon: fe,
      loadingIcon: he,
      dragIcon: me,
      nodeIcon: ge,
      nodeTitle: Ke,
      nodeExtra: ye,
      treeData: Se,
      flattenTreeData: C,
      key2TreeNode: s,
      checkedKeys: E,
      indeterminateKeys: O,
      selectedKeys: w,
      expandedKeys: P,
      loadingKeys: c,
      currentExpandKeys: p,
      onLoadMore: Ie,
      filterTreeNode: i,
      onCheck: j,
      onSelect: be,
      onExpand: A,
      onExpandEnd: Te,
      allowDrop(e, t) {
        const a = s.value.get(e);
        return a && q(S == null ? void 0 : S.value) ? !!S.value({
          dropNode: a.treeNodeData,
          dropPosition: t
        }) : !0;
      },
      onDragStart(e, t) {
        const a = s.value.get(e);
        v.value = a, a && d("dragStart", t, a.treeNodeData);
      },
      onDragEnd(e, t) {
        const a = s.value.get(e);
        v.value = void 0, a && d("dragEnd", t, a.treeNodeData);
      },
      onDragOver(e, t) {
        const a = s.value.get(e);
        a && d("dragOver", t, a.treeNodeData);
      },
      onDragLeave(e, t) {
        const a = s.value.get(e);
        a && d("dragLeave", t, a.treeNodeData);
      },
      onDrop(e, t, a) {
        const n = s.value.get(e);
        v.value && n && !(n.key === v.value.key || n.pathParentKeys.includes(v.value.key || "")) && d("drop", {
          e: a,
          dragNode: v.value.treeNodeData,
          dropNode: n.treeNodeData,
          dropPosition: t
        });
      }
    });
    return Re(Ge, _e), (e, t) => (K(), M("div", {
      class: ze(pe.value)
    }, [
      e.virtualListProps ? (K(), b(Oe(Qe), T({
        key: 0,
        ref_key: "virtualListRef",
        ref: ke
      }, e.virtualListProps, { data: V.value }), {
        item: Ve(({ item: a }) => [
          (K(), b(G, T(a.treeNodeProps, {
            key: a.key
          }), null, 16))
        ]),
        _: 1
      }, 16, ["data"])) : (K(!0), M(je, { key: 1 }, Ae(V.value, (a) => (K(), b(G, T(a.treeNodeProps, {
        key: a.key
      }), null, 16))), 128))
    ], 2));
  }
});
export {
  it as default
};
