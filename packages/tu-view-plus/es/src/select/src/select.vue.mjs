import { defineComponent as pe, toRefs as we, ref as v, computed as c, watch as M, nextTick as Ve, watchEffect as ye, createVNode as f, mergeProps as P, isVNode as Oe } from "vue";
import { selectProps as Se, selectEmits as Ce } from "./select.mjs";
import { useNamespace as Fe, useTrigger as ke } from "@tu-view-plus/hooks";
import { isObject as D, isUndefined as H, isEmptyObject as Ee, isArray as _e, isNumber as xe, isString as Pe, isBoolean as De, isFunction as C, debounce as Le, isNull as Te, debugWarn as Re } from "@tu-view-plus/utils";
import { useSelect as Ae } from "./use-select.mjs";
import "../../form/index.mjs";
import { getKeyFromValue as U, isGroupOptionInfo as Ke, isValidOption as Be, hasEmptyStringKey as Ne } from "./utils.mjs";
import { TuTrigger as je } from "../../trigger/index.mjs";
import $e from "./select-dropdown.vue.mjs";
import ze from "./select-group.vue.mjs";
import Me from "./select-option.vue.mjs";
import { TuVirtualList as He } from "../../virtual-list/index.mjs";
import { TuSelectView as Ue } from "../../select-view/index.mjs";
import "../style/select.css";
import { useFormItem as We } from "../../form/src/hooks/use-form-item.mjs";
import { useFormDisabled as Ge, useFormSize as qe } from "../../form/src/hooks/use-form-props.mjs";
function Je(t) {
  return typeof t == "function" || Object.prototype.toString.call(t) === "[object Object]" && !Oe(t);
}
const Qe = {
  value: "value",
  label: "label",
  disabled: "disabled",
  tagProps: "tagProps",
  render: "render"
}, ma = /* @__PURE__ */ pe({
  name: "TuSelect",
  props: Se,
  emits: Ce,
  inheritAttrs: !1,
  setup(t, {
    slots: u,
    emit: o,
    attrs: W
  }) {
    const {
      options: G,
      filterOption: V,
      valueKey: m,
      multiple: L,
      popupVisible: q,
      showExtraOptions: J,
      modelValue: Q,
      fieldNames: y,
      loading: X,
      defaultActiveFirstOption: Y
    } = we(t), T = Fe("select"), {
      formItem: F
    } = We(), R = v(), A = v({}), K = v(), k = v(t.defaultValue), g = v([]), B = v(), N = v(""), j = Ge(), E = qe(), Z = c(() => ({
      [T.b()]: !0,
      [T.m(E.value)]: !0
    })), _ = c(() => D(t.allowSearch) && !!t.allowSearch.retainInputValue), $ = c(() => ({
      ...Qe,
      ...y == null ? void 0 : y.value
    })), I = c(() => t.virtualListProps ? "div" : "li"), s = c(() => t.inputValue ?? N.value), d = c(() => x.value.map((e) => e.key)), ee = c(() => g.value.map((e) => {
      var l;
      let n = te(e.value);
      const a = (l = B.value) == null ? void 0 : l[e.key];
      return !H(a) && !Ee(a) && (n = {
        ...n,
        ...a
      }), n;
    })), x = c(() => {
      const e = t.modelValue ?? k.value;
      return (_e(e) ? e : e || xe(e) || Pe(e) || De(e) ? [e] : []).map((a) => ({
        value: a,
        key: U(a, t.valueKey)
      }));
    }), ae = c(() => {
      const e = [];
      for (const n of x.value) {
        const a = i.get(n.key);
        a && e.push({
          ...a,
          value: n.key,
          label: (a == null ? void 0 : a.label) ?? String(D(n.value) ? n.value[m == null ? void 0 : m.value] : n.value),
          closable: !(a != null && a.disabled)
        });
      }
      return e;
    }), te = (e) => C(t.fallbackOption) ? t.fallbackOption(e) : {
      [$.value.value]: e,
      [$.value.label]: String(D(e) ? e[m == null ? void 0 : m.value] : e)
    }, le = (e) => {
      var n;
      return t.multiple ? e.map((a) => {
        var l;
        return ((l = i.get(a)) == null ? void 0 : l.value) ?? "";
      }) : ((n = i.get(e[0])) == null ? void 0 : n.value) ?? (Ne(i) ? void 0 : "");
    }, ne = (e) => {
      const n = {};
      return e.forEach((a) => {
        n[a] = i.get(a);
      }), n;
    }, ue = (e) => {
      B.value = ne(e);
    }, h = (e) => {
      const n = le(e);
      k.value = n, o("update:modelValue", n), o("change", n), F == null || F.validate("change").catch((a) => Re(a)), ue(e);
    }, b = (e) => {
      N.value = e, o("update:inputValue", e), o("inputValueChange", e);
    }, ie = () => {
      const e = [], n = [];
      if (t.allowCreate || t.fallbackOption) {
        for (const a of x.value)
          if (!n.includes(a.key) && a.value !== "") {
            const l = i.get(a.key);
            (!l || l.origin === "extraOptions") && (e.push(a), n.push(a.key));
          }
      }
      if (t.allowCreate && s.value) {
        const a = U(s.value);
        if (!n.includes(a)) {
          const l = i.get(a);
          (!l || l.origin === "extraOptions") && e.push({
            value: s.value,
            key: a
          });
        }
      }
      return e;
    }, oe = (e) => {
      if (C(u.option)) {
        const n = u.option;
        return () => n({
          data: e.raw
        });
      }
      return C(e.render) ? e.render : () => e.label;
    }, re = (e, n) => {
      if (t.multiple) {
        if (d.value.includes(e)) {
          const a = d.value.filter((l) => l !== e);
          h(a);
        } else if (he.value.includes(e))
          if (t.limit > 0 && d.value.length >= t.limit) {
            const a = i.get(e);
            o("exceedLimit", a == null ? void 0 : a.value, n);
          } else {
            const a = d.value.concat(e);
            h(a);
          }
        _.value || b("");
      } else {
        if (e !== d.value[0] && h([e]), _.value) {
          const a = i.get(e);
          a && b(a.label);
        }
        O(!1);
      }
    }, ce = Le((e) => {
      o("search", e);
    }, t.searchDelay), se = (e) => {
      e !== s.value && (p.value || O(!0), b(e), t.allowSearch && ce(e));
    }, de = (e) => {
      const n = i.get(e), a = d.value.filter((l) => l !== e);
      h(a), o("remove", n == null ? void 0 : n.value);
    }, me = (e) => {
      e == null || e.stopPropagation();
      const n = d.value.filter((a) => {
        var l;
        return (l = i.get(a)) == null ? void 0 : l.disabled;
      });
      h(n), b(""), o("clear", e);
    }, ve = (e) => {
      o("dropdownScroll", e);
    }, fe = (e) => {
      o("dropdownReachBottom", e);
    }, {
      computedPopupVisible: p,
      handlePopupVisibleChange: O
    } = ke({
      popupVisible: q,
      emit: o
    }), {
      validOptions: z,
      optionInfoMap: i,
      validOptionInfos: ge,
      enabledOptionKeys: he,
      handleKeyDown: be
    } = Ae({
      selectSize: E,
      multiple: L,
      options: G,
      extraOptions: ee,
      inputValue: s,
      filterOption: V,
      showExtraOptions: J,
      component: I,
      valueKey: m,
      fieldNames: y,
      loading: X,
      popupVisible: p,
      valueKeys: d,
      dropdownRef: R,
      optionRefs: A,
      virtualListRef: K,
      defaultActiveFirstOption: Y,
      onSelect: re,
      onPopupVisibleChange: O
    });
    return M(Q, (e) => {
      (H(e) || Te(e)) && (k.value = L.value ? [] : e);
    }), M(p, (e) => {
      !e && !_.value && s.value && b("");
    }), Ve(() => {
      ye(() => {
        var n;
        const e = ie();
        if (e.length !== g.value.length)
          g.value = e;
        else if (e.length > 0) {
          for (let a = 0; a < e.length; a++)
            if (e[a].key !== ((n = g.value[a]) == null ? void 0 : n.key)) {
              g.value = e;
              break;
            }
        }
      });
    }), () => {
      const e = ({
        data: l
      }) => {
        var r, S;
        if ((u.label || C(t.formatLabel)) && l) {
          const w = i.get(l.value);
          if (w != null && w.raw)
            return ((r = u.label) == null ? void 0 : r.call(u, {
              data: w.raw
            })) ?? ((S = t.formatLabel) == null ? void 0 : S.call(t, w.raw));
        }
        return (l == null ? void 0 : l.label) ?? "";
      }, n = (l) => {
        if (Ke(l)) {
          let r;
          return f(ze, {
            key: l.key,
            label: l.label
          }, Je(r = l.options.map((S) => n(S))) ? r : {
            default: () => [r]
          });
        }
        return Be(l, {
          inputValue: s.value,
          filterOption: V == null ? void 0 : V.value
        }) ? f(Me, {
          ref: (r) => {
            r != null && r.$el && (A.value[l.key] = r.$el);
          },
          key: l.key,
          value: l.value,
          label: l.label,
          disabled: l.disabled,
          internal: !0
        }, {
          default: oe(l)
        }) : null;
      }, a = () => f($e, {
        ref: R,
        loading: t.loading,
        empty: ge.value.length === 0,
        virtualList: !!t.virtualListProps,
        scrollbar: t.scrollbar,
        showHeaderOnEmpty: t.showHeaderOnEmpty,
        showFooterOnEmpty: t.showFooterOnEmpty,
        onScroll: ve,
        onReachBottom: fe
      }, {
        default: () => {
          var l;
          return [...((l = u.default) == null ? void 0 : l.call(u)) ?? [], ...z.value.map(n)];
        },
        "virtual-list": () => f(He, P(t.virtualListProps, {
          ref: K,
          data: z.value
        }), {
          item: ({
            item: l
          }) => n(l)
        }),
        empty: u.empty,
        header: u.header,
        footer: u.footer
      });
      return f(je, P({
        trigger: "click",
        position: "bl",
        popupOffset: 8,
        animationName: "slide-dynamic-origin",
        hideEmpty: !0,
        preventFocus: !0,
        autoFitPopupWidth: !0,
        autoFitTransformOrigin: !0,
        disabled: j.value,
        popupVisible: p.value,
        unmountOnClose: t.unmountOnClose,
        clickToClose: !(t.allowSearch || t.allowCreate),
        popupContainer: t.popupContainer,
        onPopupVisibleChange: O
      }, t.triggerProps), {
        default: () => {
          var l;
          return [((l = u.trigger) == null ? void 0 : l.call(u)) ?? f(Ue, P({
            class: Z.value,
            modelValue: ae.value,
            inputValue: s.value,
            multiple: t.multiple,
            disabled: j.value,
            loading: t.loading,
            allowClear: t.allowClear,
            allowCreate: t.allowCreate,
            allowSearch: !!t.allowSearch,
            opened: p.value,
            maxTagCount: t.maxTagCount,
            placeholder: t.placeholder,
            bordered: t.bordered,
            size: E.value,
            onInputValueChange: se,
            onRemove: de,
            onClear: me,
            onKeydown: be
          }, W), {
            label: e,
            prefix: u.prefix,
            "arrow-icon": u["arrow-icon"],
            "loading-icon": u["loading-icon"],
            "search-icon": u["search-icon"]
          })];
        },
        content: a
      });
    };
  }
});
export {
  ma as default
};
