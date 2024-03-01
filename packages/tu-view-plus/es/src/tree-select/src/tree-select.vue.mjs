import { defineComponent as q, useSlots as Se, toRefs as ke, ref as L, reactive as b, computed as r, openBlock as S, createBlock as j, unref as l, mergeProps as A, withCtx as k, createElementVNode as ge, normalizeClass as F, normalizeStyle as ye, createElementBlock as H, renderSlot as s, createCommentVNode as U, createVNode as I, withModifiers as Ve, createSlots as we, normalizeProps as Ce, guardReactiveProps as Te, nextTick as Ne } from "vue";
import { treeSelectProps as $e, treeSelectEmits as ze } from "./tree-select.mjs";
import { useNamespace as Be, useMergeState as Ee } from "@tu-view-plus/hooks";
import { isUndefined as Pe, isObject as Fe, pickSubCompSlots as Ie, isFunction as Ke } from "@tu-view-plus/utils";
import "../../form/index.mjs";
import { useFilterTreeNode as Me } from "./hooks/use-filter-tree-node.mjs";
import { useSelectedState as De } from "./hooks/use-selected-state.mjs";
import { isNodeCheckable as Oe, getCheckedStateByCheck as Re } from "../../tree/src/utils/check-utils.mjs";
import { useTreeData as Le } from "../../tree/src/hooks/use-tree-data.mjs";
import { isNodeSelectable as je } from "../../tree/src/utils/index.mjs";
import { TuTrigger as Ae } from "../../trigger/index.mjs";
import { TuSpin as He } from "../../spin/index.mjs";
import { TuEmpty as Ue } from "../../empty/index.mjs";
import { TuSelectView as qe } from "../../select-view/index.mjs";
import Ge from "./tree-select-dropdown.vue.mjs";
import "../style/tree-select.css";
import { useFormSize as Je, useFormDisabled as Qe } from "../../form/src/hooks/use-form-props.mjs";
const We = q({
  name: "TuTreeSelect",
  inheritAttrs: !1
}), ml = /* @__PURE__ */ q({
  ...We,
  props: $e,
  emits: ze,
  setup(G, { emit: J }) {
    const g = G, i = J, K = Se(), {
      defaultValue: Q,
      modelValue: W,
      multiple: y,
      popupVisible: X,
      defaultPopupVisible: Y,
      treeCheckable: n,
      treeCheckStrictly: V,
      data: M,
      fieldNames: p,
      disabled: Xe,
      labelInValue: Z,
      filterTreeNode: _,
      disableFilter: x,
      dropdownStyle: w,
      treeProps: d,
      fallbackOption: ee,
      selectable: c,
      dropdownClassName: C
    } = ke(g), m = L(), a = L(""), u = Be("tree-select"), le = Je(), f = Qe(), [T, oe] = Ee(
      Y.value,
      b({
        value: X
      })
    ), N = (e, o) => c.value === "leaf" ? o.isLeaf : Ke(c.value) ? c.value(e, o) : c.value ?? !1, D = r(
      () => n.value ? N : !1
    ), { flattenTreeData: O, key2TreeNode: $ } = Le(
      b({
        treeData: M,
        fieldNames: p,
        selectable: N,
        checkable: D
      })
    ), { isEmptyFilterResult: ae, filterTreeNode: te } = Me(
      b({
        searchValue: a,
        flattenTreeData: O,
        filterMethod: _,
        disableFilter: x,
        fieldNames: p
      })
    ), {
      selectedKeys: z,
      selectedValue: B,
      setLocalSelectedKeys: re,
      localSelectedKeys: se,
      localSelectedValue: ie
    } = De(
      b({
        defaultValue: Q,
        modelValue: W,
        key2TreeNode: $,
        multiple: y,
        treeCheckable: n,
        treeCheckStrictly: V,
        fallbackOption: ee,
        fieldNames: p
      })
    ), v = r(() => y.value || n.value), ne = r(() => Pe(B.value) ? [] : v.value && !f.value ? B.value.map((e) => {
      const o = $.value.get(e.value);
      return {
        ...e,
        closable: !o || R(o)
      };
    }) : B.value), ue = r(() => [
      u.e("dropdown"),
      {
        [u.em("dropdown", "has-header")]: !!K.header,
        [u.em("dropdown", "has-footer")]: !!K.footer
      },
      C == null ? void 0 : C.value
    ]), ce = r(() => {
      var e;
      return [
        (w == null ? void 0 : w.value) || {},
        (e = d == null ? void 0 : d.value) != null && e.virtualListProps ? { "max-height": "unset" } : {}
      ];
    }), E = r(
      () => !O.value.length || ae.value
    ), pe = r(
      () => Fe(g.allowSearch) && !!g.allowSearch.retainInputValue
    ), R = (e) => n.value ? Oe(e) : je(e), P = (e) => {
      e !== T.value && (oe(e), i("popup-visible-change", e), i("update:popupVisible", e)), e || m.value && m.value.blur && m.value.blur();
    }, h = (e) => {
      re(e), Ne(() => {
        const o = (Z.value ? ie.value : se.value) || [], t = v.value ? o : o[0];
        i("update:modelValue", t), i("change", t);
      });
    }, de = (e) => {
      e !== a.value && (P(!0), a.value = e, i("search", e));
    }, me = () => {
      h([]), i("clear");
    }, fe = (e) => {
      if (f.value)
        return;
      const o = $.value.get(e);
      if (n.value && o) {
        if (R(o)) {
          const [t] = Re({
            node: o,
            checked: !1,
            checkedKeys: z.value,
            indeterminateKeys: [],
            checkStrictly: V.value
          });
          h(t);
        }
      } else {
        const t = z.value.filter((be) => be !== e);
        h(t);
      }
    }, ve = () => {
      !pe.value && a.value && (a.value = "");
    }, he = (e) => {
      h(e), a.value = "", v.value || P(!1);
    };
    return (e, o) => (S(), j(l(Ae), A(e.triggerProps, {
      "auto-fit-transform-origin": "",
      "auto-fit-popup-min-width": "",
      trigger: "click",
      position: "bl",
      "animation-name": "slide-dynamic-origin",
      class: l(u).b(),
      "popup-offset": 10,
      "prevent-focus": !0,
      disabled: l(f),
      "popup-visible": l(T),
      "popup-container": e.popupContainer,
      "click-to-close": !e.allowSearch,
      onPopupVisibleChange: P
    }), {
      content: k(() => [
        ge("div", {
          class: F(ue.value),
          style: ye(ce.value)
        }, [
          e.$slots.header && (!E.value || e.showHeaderOnEmpty) ? (S(), H("div", {
            key: 0,
            class: F(l(u).em("dropdown", "header"))
          }, [
            s(e.$slots, "header")
          ], 2)) : U("", !0),
          e.loading ? s(e.$slots, "loader", { key: 1 }, () => [
            I(l(He), { dot: "" })
          ]) : E.value ? s(e.$slots, "empty", { key: 2 }, () => [
            I(l(Ue))
          ]) : (S(), j(Ge, {
            key: 3,
            "selected-keys": l(z),
            "show-checkable": l(n),
            scrollbar: e.scrollbar,
            "tree-props": {
              actionOnNodeClick: l(c) === "leaf" ? "expand" : void 0,
              blockNode: !0,
              ...l(d),
              data: l(M),
              checkStrictly: l(V),
              checkedStrategy: e.treeCheckedStrategy,
              fieldNames: l(p),
              multiple: l(y),
              loadMore: e.loadMore,
              filterTreeNode: l(te),
              size: e.size,
              checkable: D.value,
              selectable: N,
              searchValue: a.value
            },
            "tree-slots": l(Ie)(e.$slots, "tree"),
            onChange: he
          }, null, 8, ["selected-keys", "show-checkable", "scrollbar", "tree-props", "tree-slots"])),
          e.$slots.footer && (!E.value || e.showFooterOnEmpty) ? (S(), H("div", {
            key: 4,
            class: F(l(u).em("dropdown", "footer"))
          }, [
            s(e.$slots, "footer")
          ], 2)) : U("", !0)
        ], 6)
      ]),
      default: k(() => [
        s(e.$slots, "trigger", {}, () => [
          I(l(qe), A({
            ref_key: "refSelectView",
            ref: m,
            "model-value": ne.value,
            "input-value": a.value,
            "allow-search": !!e.allowSearch,
            "allow-clear": e.allowClear,
            loading: e.loading,
            size: l(le),
            "max-tag-count": e.maxTagCount,
            disabled: l(f),
            opened: l(T),
            error: e.error,
            bordered: e.border,
            placeholder: e.placeholder,
            multiple: v.value
          }, e.$attrs, {
            onInputValueChange: de,
            onClear: Ve(me, ["stop"]),
            onRemove: fe,
            onBlur: ve
          }), we({ _: 2 }, [
            e.$slots.prefix ? {
              name: "prefix",
              fn: k(() => [
                s(e.$slots, "prefix")
              ]),
              key: "0"
            } : void 0,
            e.$slots.label ? {
              name: "label",
              fn: k((t) => [
                s(e.$slots, "label", Ce(Te(t)))
              ]),
              key: "1"
            } : void 0
          ]), 1040, ["model-value", "input-value", "allow-search", "allow-clear", "loading", "size", "max-tag-count", "disabled", "opened", "error", "bordered", "placeholder", "multiple"])
        ])
      ]),
      _: 3
    }, 16, ["class", "disabled", "popup-visible", "popup-container", "click-to-close"]));
  }
});
export {
  ml as default
};
