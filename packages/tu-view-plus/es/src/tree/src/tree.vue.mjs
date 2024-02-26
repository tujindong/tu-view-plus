import { defineComponent as ue, useSlots as at, toRefs as rt, computed as H, reactive as S, ref as P, provide as ct, openBlock as x, createElementBlock as oe, normalizeClass as st, createBlock as j, unref as dt, mergeProps as M, withCtx as lt, Fragment as ut, renderList as it } from "vue";
import { treeProps as vt, treeEmits as ft } from "./tree.mjs";
import { useNamespace as pt, usePickSlots as m, useMergeState as ae } from "@tu-view-plus/hooks";
import { isUndefined as E, isFunction as re, isArray as U } from "@tu-view-plus/utils";
import "../../form/index.mjs";
import { useCheckedState as ht } from "./hooks/use-checked-state.mjs";
import { TreeInjectionKey as gt } from "./context.mjs";
import { useTreeData as yt } from "./hooks/use-tree-data.mjs";
import { getCheckedStateByCheck as ce, isNodeCheckable as $ } from "./utils/check-utils.mjs";
import { isLeafNode as Kt, isNodeSelectable as se, isNodeExpandable as de } from "./utils/index.mjs";
import { TuVirtualList as mt } from "../../virtual-list/index.mjs";
import le from "./tree-node.vue.mjs";
import "../style/tree.css";
import { useFormSize as Nt } from "../../form/src/hooks/use-form-props.mjs";
const kt = ue({
  name: "TuTree"
}), Ft = /* @__PURE__ */ ue({
  ...kt,
  props: vt,
  emits: ft,
  setup(ie, { expose: ve, emit: fe }) {
    const q = ie, d = fe, p = at(), {
      data: pe,
      showLine: G,
      multiple: L,
      loadMore: h,
      checkStrictly: C,
      checkedKeys: he,
      defaultCheckedKeys: ge,
      selectedKeys: ye,
      defaultSelectedKeys: I,
      expandedKeys: Ke,
      defaultExpandedKeys: w,
      checkedStrategy: me,
      selectable: Ne,
      checkable: J,
      blockNode: ke,
      fieldNames: Se,
      defaultExpandAll: xe,
      filterTreeNode: g,
      draggable: Ee,
      allowDrop: T,
      defaultExpandSelected: Q,
      defaultExpandChecked: W,
      autoExpandParent: Ce,
      halfCheckedKeys: we,
      onlyCheckLeaf: Te,
      animation: De
    } = rt(q), D = pt("tree"), be = Nt(), Pe = H(() => ({
      [D.b()]: !0,
      [D.m(be.value)]: !0,
      [D.is("checkable")]: J.value,
      [D.is("show-line")]: G.value
    })), Le = m(p, "switcher-icon"), Ie = m(p, "loading-icon"), Be = m(p, "drag-icon"), _e = m(p, "icon"), Ae = m(p, "title"), Fe = m(p, "extra"), { treeData: Re, flattenTreeData: B, key2TreeNode: c } = yt(
      S({
        treeData: pe,
        selectable: Ne,
        showLine: G,
        blockNode: ke,
        checkable: J,
        fieldNames: Se,
        loadMore: h,
        draggable: Ee
      })
    ), { checkedKeys: y, indeterminateKeys: b, setCheckedState: _ } = ht(
      S({
        defaultCheckedKeys: ge,
        checkedKeys: he,
        checkStrictly: C,
        key2TreeNode: c,
        halfCheckedKeys: we,
        onlyCheckLeaf: Te
      })
    ), [N, A] = ae(
      (I == null ? void 0 : I.value) || [],
      S({
        value: ye
      })
    ), v = P([]), K = P(), F = P();
    function ze() {
      if (w != null && w.value) {
        const e = /* @__PURE__ */ new Set([]);
        return w.value.forEach((t) => {
          if (e.has(t))
            return;
          const n = c.value.get(t);
          n && [...Ce.value ? n.pathParentKeys : [], t].forEach(
            (o) => e.add(o)
          );
        }), [...e];
      }
      if (xe.value)
        return B.value.filter((e) => e.children && e.children.length).map((e) => e.key);
      if (Q.value || W.value) {
        const e = /* @__PURE__ */ new Set([]), t = (n) => {
          n.forEach((o) => {
            const a = c.value.get(o);
            a && (a.pathParentKeys || []).forEach((r) => e.add(r));
          });
        };
        return Q.value && t(N.value), W.value && t(y.value), [...e];
      }
      return [];
    }
    const [k, R] = ae(
      ze(),
      S({
        value: Ke
      })
    ), f = P([]), X = H(() => {
      const e = new Set(k.value), t = new Set(f.value);
      return B.value.filter((n) => {
        var s;
        if (!(!g || !g.value || (g == null ? void 0 : g.value(n.treeNodeData))))
          return !1;
        const a = E(n.parentKey), r = (s = n.pathParentKeys) == null ? void 0 : s.every(
          (l) => e.has(l) && !t.has(l)
        );
        return a || r;
      });
    });
    function Y(e, t = me.value) {
      let n = [...e];
      return t === "parent" ? n = e.filter((o) => {
        const a = c.value.get(o);
        return a && !(!E(a.parentKey) && e.includes(a.parentKey));
      }) : t === "child" && (n = e.filter((o) => {
        var a, r;
        return !((r = (a = c.value.get(o)) == null ? void 0 : a.children) != null && r.length);
      })), n;
    }
    function u(e) {
      return e.map((t) => {
        var n;
        return ((n = c.value.get(t)) == null ? void 0 : n.treeNodeData) || void 0;
      }).filter(Boolean);
    }
    function z(e) {
      const {
        targetKey: t,
        targetChecked: n,
        newCheckedKeys: o,
        newIndeterminateKeys: a,
        event: r
      } = e, s = t ? c.value.get(t) : void 0, l = Y(o);
      d("update:checkedKeys", l), d("update:halfCheckedKeys", a), d("check", l, {
        checked: n,
        node: s == null ? void 0 : s.treeNodeData,
        checkedNodes: u(l),
        halfCheckedKeys: a,
        halfCheckedNodes: u(a),
        e: r
      });
    }
    function O(e) {
      const { targetKey: t, targetSelected: n, newSelectedKeys: o, event: a } = e, r = t ? c.value.get(t) : void 0;
      d("update:selectedKeys", o), d("select", o, {
        selected: n,
        node: r == null ? void 0 : r.treeNodeData,
        selectedNodes: u(o),
        e: a
      });
    }
    function V(e) {
      const { targetKey: t, targetExpanded: n, newExpandedKeys: o, event: a } = e, r = t ? c.value.get(t) : void 0;
      d("expand", o, {
        expanded: n,
        node: r == null ? void 0 : r.treeNodeData,
        expandedNodes: u(o),
        e: a
      }), d("update:expandedKeys", o);
    }
    function Oe(e) {
      const [t, n] = _(
        e,
        [],
        !0
      );
      z({ newCheckedKeys: t, newIndeterminateKeys: n });
    }
    function Ve(e) {
      let t = e;
      !L.value && e.length > 1 && (t = [e[0]]), A(t), O({
        newSelectedKeys: t
      });
    }
    function He(e) {
      f.value = [], R(e), V({ newExpandedKeys: e });
    }
    function je(e, t, n) {
      if (!e.length)
        return;
      let o = [...y.value], a = [...b.value];
      e.forEach((r) => {
        const s = c.value.get(r);
        s && ([o, a] = ce({
          node: s,
          checked: t,
          checkedKeys: [...o],
          indeterminateKeys: [...a],
          checkStrictly: C.value
        }));
      }), _(o, a), z({
        targetKey: n,
        targetChecked: E(n) ? void 0 : t,
        newCheckedKeys: o,
        newIndeterminateKeys: a
      });
    }
    function Me(e, t, n) {
      if (!e.length)
        return;
      let o;
      if (L.value) {
        const a = new Set(N.value);
        e.forEach((r) => {
          t ? a.add(r) : a.delete(r);
        }), o = [...a];
      } else
        o = t ? [e[0]] : [];
      A(o), O({
        targetKey: n,
        targetSelected: E(n) ? void 0 : t,
        newSelectedKeys: o
      });
    }
    function Ue(e, t, n) {
      const o = new Set(k.value);
      e.forEach((r) => {
        t ? o.add(r) : o.delete(r), te(r);
      });
      const a = [...o];
      R(a), V({
        targetKey: n,
        targetExpanded: E(n) ? void 0 : t,
        newExpandedKeys: a
      });
    }
    function Z(e, t, n) {
      const o = c.value.get(t);
      if (!o)
        return;
      const [a, r] = ce({
        node: o,
        checked: e,
        checkedKeys: y.value,
        indeterminateKeys: b.value,
        checkStrictly: C.value
      });
      _(a, r), z({
        targetKey: t,
        targetChecked: e,
        newCheckedKeys: a,
        newIndeterminateKeys: r,
        event: n
      });
    }
    function $e(e, t) {
      if (!c.value.get(e))
        return;
      let o, a;
      if (L.value) {
        const r = new Set(N.value);
        a = !r.has(e), a ? r.add(e) : r.delete(e), o = [...r];
      } else
        a = !0, o = [e];
      A(o), O({
        targetKey: e,
        targetSelected: a,
        newSelectedKeys: o,
        event: t
      });
    }
    function ee(e, t, n) {
      if (f.value.includes(t) || !c.value.get(t))
        return;
      const a = new Set(k.value);
      e ? a.add(t) : a.delete(t);
      const r = [...a];
      R(r), De.value && f.value.push(t), V({
        targetKey: t,
        targetExpanded: e,
        newExpandedKeys: r,
        event: n
      });
    }
    function te(e) {
      const t = f.value.indexOf(e);
      f.value.splice(t, 1);
    }
    const qe = H(
      () => h != null && h.value ? async (e) => {
        if (!re(h.value))
          return;
        const t = c.value.get(e);
        if (!t)
          return;
        const { treeNodeData: n } = t;
        v.value = [.../* @__PURE__ */ new Set([...v.value, e])];
        try {
          await h.value(n), v.value = v.value.filter((o) => o !== e), ee(!0, e), y.value.includes(e) && Z(!0, e);
        } catch (o) {
          v.value = v.value.filter((a) => a !== e), console.error("[tree]load data error: ", o);
        }
      } : void 0
    ), i = S({
      treeProps: q,
      switcherIcon: Le,
      loadingIcon: Ie,
      dragIcon: Be,
      nodeIcon: _e,
      nodeTitle: Ae,
      nodeExtra: Fe,
      treeData: Re,
      flattenTreeData: B,
      key2TreeNode: c,
      checkedKeys: y,
      indeterminateKeys: b,
      selectedKeys: N,
      expandedKeys: k,
      loadingKeys: v,
      currentExpandKeys: f,
      onLoadMore: qe,
      filterTreeNode: g,
      onCheck: Z,
      onSelect: $e,
      onExpand: ee,
      onExpandEnd: te,
      allowDrop(e, t) {
        const n = c.value.get(e);
        return n && re(T == null ? void 0 : T.value) ? !!T.value({
          dropNode: n.treeNodeData,
          dropPosition: t
        }) : !0;
      },
      onDragStart(e, t) {
        const n = c.value.get(e);
        K.value = n, n && d("dragStart", t, n.treeNodeData);
      },
      onDragEnd(e, t) {
        const n = c.value.get(e);
        K.value = void 0, n && d("dragEnd", t, n.treeNodeData);
      },
      onDragOver(e, t) {
        const n = c.value.get(e);
        n && d("dragOver", t, n.treeNodeData);
      },
      onDragLeave(e, t) {
        const n = c.value.get(e);
        n && d("dragLeave", t, n.treeNodeData);
      },
      onDrop(e, t, n) {
        const o = c.value.get(e);
        K.value && o && !(o.key === K.value.key || o.pathParentKeys.includes(K.value.key || "")) && d("drop", {
          e: n,
          dragNode: K.value.treeNodeData,
          dropNode: o.treeNodeData,
          dropPosition: t
        });
      }
    });
    ct(gt, i);
    function Ge(e, t) {
      const { key2TreeNode: n, onCheck: o, checkedKeys: a } = i, r = !a.includes(e), s = n.get(e);
      s && $(s) && o(r, e, t);
    }
    function Je(e) {
      F.value && F.value.scrollTo(e);
    }
    function Qe() {
      return u(N.value);
    }
    function We(e = {}) {
      const { checkedStrategy: t, includeHalfChecked: n } = e, o = Y(y.value, t);
      return [
        ...u(o),
        ...n ? ne() : []
      ];
    }
    function ne() {
      return u(b.value);
    }
    function Xe() {
      return u(k.value);
    }
    function Ye(e = !0) {
      const { key2TreeNode: t } = i, n = e ? [...t.keys()].filter((o) => {
        const a = t.get(o);
        return a && $(a);
      }) : [];
      Oe(n);
    }
    function Ze(e, t = !0, n = !1) {
      const { key2TreeNode: o } = i, a = U(e), r = (a ? e : [e]).filter((s) => {
        const l = o.get(s);
        return l && $(l) && (C.value || !n || Kt(l));
      });
      je(r, t, a ? void 0 : e);
    }
    function et(e = !0) {
      const { key2TreeNode: t } = i, n = e ? [...t.keys()].filter((o) => {
        const a = t.get(o);
        return a && se(a);
      }) : [];
      Ve(n);
    }
    function tt(e, t = !0) {
      const { key2TreeNode: n } = i, o = U(e), a = (o ? e : [e]).filter((r) => {
        const s = n.get(r);
        return s && se(s);
      });
      Me(a, t, o ? void 0 : e);
    }
    function nt(e = !0) {
      const { key2TreeNode: t } = i, n = e ? [...t.keys()].filter((o) => {
        const a = t.get(o);
        return a && de(a);
      }) : [];
      He(n);
    }
    function ot(e, t = !0) {
      const { key2TreeNode: n } = i, o = U(e), a = (o ? e : [e]).filter((r) => {
        const s = n.get(r);
        return s && de(s);
      });
      Ue(a, t, o ? void 0 : e);
    }
    return ve({
      toggleCheck: Ge,
      scrollIntoView: Je,
      getSelectedNodes: Qe,
      getCheckedNodes: We,
      getHalfCheckedNodes: ne,
      getExpandedNodes: Xe,
      checkAll: Ye,
      checkNode: Ze,
      selectAll: et,
      selectNode: tt,
      expandAll: nt,
      expandNode: ot
    }), (e, t) => (x(), oe("div", {
      class: st(Pe.value)
    }, [
      e.virtualListProps ? (x(), j(dt(mt), M({
        key: 0,
        ref_key: "virtualListRef",
        ref: F
      }, e.virtualListProps, { data: X.value }), {
        item: lt(({ item: n }) => [
          (x(), j(le, M(n.treeNodeProps, {
            key: n.key
          }), null, 16))
        ]),
        _: 1
      }, 16, ["data"])) : (x(!0), oe(ut, { key: 1 }, it(X.value, (n) => (x(), j(le, M(n.treeNodeProps, {
        key: n.key
      }), null, 16))), 128))
    ], 2));
  }
});
export {
  Ft as default
};
