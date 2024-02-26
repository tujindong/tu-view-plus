import { defineComponent as te, computed as r, toRefs as ie, ref as ue, reactive as H, openBlock as s, createElementBlock as h, normalizeClass as v, unref as o, createElementVNode as I, Fragment as de, renderList as ce, createVNode as g, createSlots as ve, withCtx as f, renderSlot as b, createBlock as d, createCommentVNode as D, normalizeProps as J, guardReactiveProps as fe, mergeProps as N, createTextVNode as ge, toDisplayString as pe } from "vue";
import { treeBaseNodeProps as me } from "./tree-base-node.mjs";
import ke from "./tree-node-switcher.vue.mjs";
import { TuCheckbox as ye } from "../../checkbox/index.mjs";
import { TuIcon as p } from "../../icon/index.mjs";
import { useDraggable as he } from "./hooks/use-draggable.mjs";
import { useNodeKey as be } from "./hooks/use-node-key.mjs";
import { useTreeContext as De } from "./hooks/use-tree-context.mjs";
import { toArray as Ne, isFunction as Te } from "@tu-view-plus/utils";
import { useNamespace as Pe } from "@tu-view-plus/hooks";
import { RenderFunction as m } from "@tu-view-plus/constants";
import { Rank as we } from "@tu-view-plus/icons-vue";
const Ie = ["data-level", "data-key"], $e = ["draggable"], Me = /* @__PURE__ */ te({
  __name: "tree-base-node",
  props: me,
  setup(Q) {
    const U = Q, l = Pe("tree"), t = be(), n = De(), $ = r(() => {
      var e;
      return (e = n.key2TreeNode) == null ? void 0 : e.get(t.value);
    }), k = r(() => $.value.treeNodeData), W = r(() => $.value.children), X = r(() => {
      var e;
      return (e = n == null ? void 0 : n.treeProps) == null ? void 0 : e.size;
    }), Y = r(() => {
      var a;
      const e = (a = n.treeProps) == null ? void 0 : a.actionOnNodeClick;
      return e ? Ne(e) : [];
    }), { isLeaf: S, isTail: Z, selectable: K, disabled: T, disableCheckbox: O, draggable: c } = ie(U), _ = r(() => {
      var e;
      return {
        [l.e("node")]: !0,
        [l.is("selected")]: A.value,
        [l.is("leaf")]: S.value,
        [l.is("tail")]: Z.value,
        [l.is("expanded")]: w.value,
        [l.is("disabled-selectable")]: !K.value && !((e = n.treeProps) != null && e.disableSelectActionOnly),
        [l.is("disabled")]: T.value
      };
    }), C = ue(), { isDragOver: E, isDragging: B, isAllowDrop: P, dropPosition: L, setDragStatus: y } = he(
      H({
        key: t,
        refTitle: C
      })
    ), x = r(() => ({
      [l.e("title")]: !0,
      [l.em("title", "draggable")]: c.value,
      [l.em("title", "gap-top")]: E.value && P.value && L.value < 0,
      [l.em("title", "gap-bottom")]: E.value && P.value && L.value > 0,
      [l.em("title", "high-light")]: !B.value && E.value && P.value && L.value === 0,
      [l.is("dragging")]: B.value,
      [l.is("block")]: $.value.blockNode
    })), R = r(() => {
      var e, a;
      return (a = (e = n.checkedKeys) == null ? void 0 : e.includes) == null ? void 0 : a.call(e, t.value);
    }), V = r(
      () => {
        var e, a;
        return (a = (e = n.indeterminateKeys) == null ? void 0 : e.includes) == null ? void 0 : a.call(e, t.value);
      }
    ), A = r(
      () => {
        var e, a;
        return (a = (e = n.selectedKeys) == null ? void 0 : e.includes) == null ? void 0 : a.call(e, t.value);
      }
    ), w = r(
      () => {
        var e, a;
        return (a = (e = n.expandedKeys) == null ? void 0 : e.includes) == null ? void 0 : a.call(e, t.value);
      }
    ), F = r(() => {
      var e, a;
      return (a = (e = n.loadingKeys) == null ? void 0 : e.includes) == null ? void 0 : a.call(e, t.value);
    }), M = r(() => n.dragIcon), z = r(() => n.nodeIcon), i = H({
      loading: F,
      checked: R,
      selected: A,
      indeterminate: V,
      expanded: w,
      isLeaf: S
    }), j = r(
      () => n.nodeTitle ? () => {
        var e;
        return (e = n.nodeTitle) == null ? void 0 : e.call(n, k.value, i);
      } : void 0
    ), q = r(
      () => n.nodeExtra ? () => {
        var e;
        return (e = n.nodeExtra) == null ? void 0 : e.call(n, k.value, i);
      } : void 0
    );
    function G(e) {
      var a, u;
      S.value || (!((a = W.value) != null && a.length) && Te(n.onLoadMore) ? n.onLoadMore(t.value) : (u = n == null ? void 0 : n.onExpand) == null || u.call(n, !w.value, t.value, e));
    }
    function ee(e, a) {
      var u;
      O.value || T.value || (u = n.onCheck) == null || u.call(n, e, t.value, a);
    }
    function ne(e) {
      var a;
      Y.value.includes("expand") && G(e), !(!K.value || T.value) && ((a = n.onSelect) == null || a.call(n, t.value, e));
    }
    function ae(e) {
      var a;
      if (c.value) {
        e.stopPropagation(), y("dragStart", e);
        try {
          (a = e.dataTransfer) == null || a.setData("text/plain", "");
        } catch {
        }
      }
    }
    function oe(e) {
      c.value && (e.stopPropagation(), y("dragEnd", e));
    }
    function le(e) {
      c && (e.stopPropagation(), e.preventDefault(), y("dragOver", e));
    }
    function re(e) {
      c.value && (e.stopPropagation(), y("dragLeave", e));
    }
    function se(e) {
      !c.value || !P.value || (e.stopPropagation(), e.preventDefault(), y("drop", e));
    }
    return (e, a) => (s(), h("div", {
      class: v(_.value),
      "data-level": e.level,
      "data-key": o(t)
    }, [
      I("span", {
        class: v(o(l).e("indent"))
      }, [
        (s(!0), h(de, null, ce(e.level, (u) => (s(), h("span", {
          key: u,
          class: v([
            o(l).e("indent-block"),
            o(l).is("lineless", e.lineless[u - 1])
          ])
        }, null, 2))), 128))
      ], 2),
      I("span", {
        class: v([o(l).e("switcher"), o(l).is("expanded", w.value)])
      }, [
        g(ke, {
          loading: F.value,
          "show-line": e.showLine,
          "tree-node-data": k.value,
          icons: {
            switcherIcon: e.switcherIcon,
            loadingIcon: e.loadingIcon
          },
          "node-status": i,
          onClick: G
        }, ve({ _: 2 }, [
          e.$slots["switcher-icon"] ? {
            name: "switcher-icon",
            fn: f(() => [
              g(o(p), null, {
                default: f(() => [
                  b(e.$slots, "switcher-icon")
                ]),
                _: 3
              })
            ]),
            key: "0"
          } : void 0,
          e.$slots["loading-icon"] ? {
            name: "loading-icon",
            fn: f(() => [
              g(o(p), null, {
                default: f(() => [
                  b(e.$slots, "loading-icon")
                ]),
                _: 3
              })
            ]),
            key: "1"
          } : void 0
        ]), 1032, ["loading", "show-line", "tree-node-data", "icons", "node-status"])
      ], 2),
      e.checkable ? (s(), d(o(ye), {
        key: 0,
        size: X.value,
        disabled: o(O) || o(T),
        "model-value": R.value,
        indeterminate: V.value,
        onChange: ee
      }, null, 8, ["size", "disabled", "model-value", "indeterminate"])) : D("", !0),
      I("span", {
        ref_key: "refTitle",
        ref: C,
        class: v(x.value),
        draggable: o(c),
        onDragstart: ae,
        onDragend: oe,
        onDragover: le,
        onDragleave: re,
        onDrop: se,
        onClick: ne
      }, [
        e.$slots.icon || e.icon || z.value ? (s(), h("span", {
          key: 0,
          class: v(o(l).e("custom-icon"))
        }, [
          e.$slots.icon ? (s(), d(o(p), { key: 0 }, {
            default: f(() => [
              b(e.$slots, "icon", J(fe(i)))
            ]),
            _: 3
          })) : e.icon ? (s(), d(o(p), { key: 1 }, {
            default: f(() => [
              g(o(m), N(i, { "render-func": e.icon }), null, 16, ["render-func"])
            ]),
            _: 1
          })) : z.value ? (s(), d(o(p), { key: 2 }, {
            default: f(() => [
              g(o(m), N(i, {
                "render-func": z.value,
                node: k.value
              }), null, 16, ["render-func", "node"])
            ]),
            _: 1
          })) : D("", !0)
        ], 2)) : D("", !0),
        I("span", {
          class: v(o(l).e("title-text"))
        }, [
          j.value ? (s(), d(o(m), {
            key: 0,
            "render-func": j.value
          }, null, 8, ["render-func"])) : b(e.$slots, "title", { key: 1 }, () => [
            ge(pe(e.title), 1)
          ]),
          o(c) ? (s(), h("span", {
            key: 2,
            class: v(o(l).e("drag-icon"))
          }, [
            e.$slots["drag-icon"] ? b(e.$slots, "drag-icon", J(N({ key: 0 }, i))) : e.dragIcon ? (s(), d(o(m), N({
              key: 1,
              "render-func": e.dragIcon
            }, i), null, 16, ["render-func"])) : M.value ? (s(), d(o(m), N({
              key: 2,
              "render-func": M.value,
              node: k.value
            }, i), null, 16, ["render-func", "node"])) : (s(), d(o(p), { key: 3 }, {
              default: f(() => [
                g(o(we))
              ]),
              _: 1
            }))
          ], 2)) : D("", !0)
        ], 2)
      ], 42, $e),
      q.value ? (s(), d(o(m), {
        key: 1,
        "render-func": q.value
      }, null, 8, ["render-func"])) : D("", !0)
    ], 10, Ie));
  }
});
export {
  Me as default
};
