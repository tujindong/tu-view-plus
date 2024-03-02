import { defineComponent as G, useSlots as Se, toRefs as ke, ref as j, reactive as b, computed as s, openBlock as S, createBlock as A, unref as l, mergeProps as H, withCtx as k, createElementVNode as ge, normalizeClass as g, normalizeStyle as ye, createElementBlock as U, renderSlot as i, createCommentVNode as q, createVNode as I, withModifiers as Ve, createSlots as we, normalizeProps as Ce, guardReactiveProps as Te, nextTick as Ne } from "vue";
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
const We = G({
  name: "TuTreeSelect",
  inheritAttrs: !1
}), ml = /* @__PURE__ */ G({
  ...We,
  props: $e,
  emits: ze,
  setup(J, { emit: Q }) {
    const y = J, n = Q, K = Se(), {
      defaultValue: W,
      modelValue: X,
      multiple: V,
      popupVisible: Y,
      defaultPopupVisible: Z,
      treeCheckable: u,
      treeCheckStrictly: w,
      data: M,
      fieldNames: d,
      disabled: Xe,
      labelInValue: _,
      filterTreeNode: x,
      disableFilter: ee,
      dropdownStyle: C,
      treeProps: p,
      fallbackOption: le,
      selectable: c,
      dropdownClassName: T
    } = ke(y), m = j(), a = j(""), r = Be("tree-select"), D = Je(), f = Qe(), [N, oe] = Ee(
      Z.value,
      b({
        value: Y
      })
    ), $ = (e, o) => c.value === "leaf" ? o.isLeaf : Ke(c.value) ? c.value(e, o) : c.value ?? !1, O = s(
      () => u.value ? $ : !1
    ), { flattenTreeData: R, key2TreeNode: z } = Le(
      b({
        treeData: M,
        fieldNames: d,
        selectable: $,
        checkable: O
      })
    ), { isEmptyFilterResult: ae, filterTreeNode: te } = Me(
      b({
        searchValue: a,
        flattenTreeData: R,
        filterMethod: x,
        disableFilter: ee,
        fieldNames: d
      })
    ), {
      selectedKeys: B,
      selectedValue: E,
      setLocalSelectedKeys: re,
      localSelectedKeys: se,
      localSelectedValue: ie
    } = De(
      b({
        defaultValue: W,
        modelValue: X,
        key2TreeNode: z,
        multiple: V,
        treeCheckable: u,
        treeCheckStrictly: w,
        fallbackOption: le,
        fieldNames: d
      })
    ), v = s(() => V.value || u.value), ne = s(() => Pe(E.value) ? [] : v.value && !f.value ? E.value.map((e) => {
      const o = z.value.get(e.value);
      return {
        ...e,
        closable: !o || L(o)
      };
    }) : E.value), ue = s(() => [
      r.e("dropdown"),
      {
        [r.em("dropdown", "has-header")]: !!K.header,
        [r.em("dropdown", "has-footer")]: !!K.footer
      },
      T == null ? void 0 : T.value
    ]), ce = s(() => {
      var e;
      return [
        (C == null ? void 0 : C.value) || {},
        (e = p == null ? void 0 : p.value) != null && e.virtualListProps ? { "max-height": "unset" } : {}
      ];
    }), P = s(
      () => !R.value.length || ae.value
    ), de = s(
      () => Fe(y.allowSearch) && !!y.allowSearch.retainInputValue
    ), L = (e) => u.value ? Oe(e) : je(e), F = (e) => {
      e !== N.value && (oe(e), n("popup-visible-change", e), n("update:popupVisible", e)), e || m.value && m.value.blur && m.value.blur();
    }, h = (e) => {
      re(e), Ne(() => {
        const o = (_.value ? ie.value : se.value) || [], t = v.value ? o : o[0];
        n("update:modelValue", t), n("change", t);
      });
    }, pe = (e) => {
      e !== a.value && (F(!0), a.value = e, n("search", e));
    }, me = () => {
      h([]), n("clear");
    }, fe = (e) => {
      if (f.value)
        return;
      const o = z.value.get(e);
      if (u.value && o) {
        if (L(o)) {
          const [t] = Re({
            node: o,
            checked: !1,
            checkedKeys: B.value,
            indeterminateKeys: [],
            checkStrictly: w.value
          });
          h(t);
        }
      } else {
        const t = B.value.filter((be) => be !== e);
        h(t);
      }
    }, ve = () => {
      !de.value && a.value && (a.value = "");
    }, he = (e) => {
      h(e), a.value = "", v.value || F(!1);
    };
    return (e, o) => (S(), A(l(Ae), H(e.triggerProps, {
      "auto-fit-transform-origin": "",
      "auto-fit-popup-min-width": "",
      trigger: "click",
      position: "bl",
      "animation-name": "slide-dynamic-origin",
      class: l(r).b(),
      "popup-offset": 10,
      "prevent-focus": !0,
      disabled: l(f),
      "popup-visible": l(N),
      "popup-container": e.popupContainer,
      "click-to-close": !e.allowSearch,
      onPopupVisibleChange: F
    }), {
      content: k(() => [
        ge("div", {
          class: g(ue.value),
          style: ye(ce.value)
        }, [
          e.$slots.header && (!P.value || e.showHeaderOnEmpty) ? (S(), U("div", {
            key: 0,
            class: g(l(r).em("dropdown", "header"))
          }, [
            i(e.$slots, "header")
          ], 2)) : q("", !0),
          e.loading ? i(e.$slots, "loader", { key: 1 }, () => [
            I(l(He), {
              dot: "",
              loading: "",
              class: g(l(r).e("dropdown-loading"))
            }, null, 8, ["class"])
          ]) : P.value ? i(e.$slots, "empty", { key: 2 }, () => [
            I(l(Ue))
          ]) : (S(), A(Ge, {
            key: 3,
            "selected-keys": l(B),
            "show-checkable": l(u),
            scrollbar: e.scrollbar,
            size: l(D),
            "tree-props": {
              actionOnNodeClick: l(c) === "leaf" ? "expand" : void 0,
              blockNode: !0,
              data: l(M),
              checkStrictly: l(w),
              checkedStrategy: e.treeCheckedStrategy,
              fieldNames: l(d),
              multiple: l(V),
              loadMore: e.loadMore,
              filterTreeNode: l(te),
              size: e.size,
              checkable: O.value,
              selectable: $,
              searchValue: a.value,
              ...l(p)
            },
            "tree-slots": l(Ie)(e.$slots, "tree"),
            onChange: he
          }, null, 8, ["selected-keys", "show-checkable", "scrollbar", "size", "tree-props", "tree-slots"])),
          e.$slots.footer && (!P.value || e.showFooterOnEmpty) ? (S(), U("div", {
            key: 4,
            class: g(l(r).em("dropdown", "footer"))
          }, [
            i(e.$slots, "footer")
          ], 2)) : q("", !0)
        ], 6)
      ]),
      default: k(() => [
        i(e.$slots, "trigger", {}, () => [
          I(l(qe), H({
            ref_key: "refSelectView",
            ref: m,
            "model-value": ne.value,
            "input-value": a.value,
            "allow-search": !!e.allowSearch,
            "allow-clear": e.allowClear,
            loading: e.loading,
            size: l(D),
            "max-tag-count": e.maxTagCount,
            disabled: l(f),
            opened: l(N),
            error: e.error,
            bordered: e.border,
            placeholder: e.placeholder,
            multiple: v.value
          }, e.$attrs, {
            onInputValueChange: pe,
            onClear: Ve(me, ["stop"]),
            onRemove: fe,
            onBlur: ve
          }), we({ _: 2 }, [
            e.$slots.prefix ? {
              name: "prefix",
              fn: k(() => [
                i(e.$slots, "prefix")
              ]),
              key: "0"
            } : void 0,
            e.$slots.label ? {
              name: "label",
              fn: k((t) => [
                i(e.$slots, "label", Ce(Te(t)))
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
