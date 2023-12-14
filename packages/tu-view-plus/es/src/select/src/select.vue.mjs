import { defineComponent as be, toRefs as pe, ref as v, computed as c, watch as z, nextTick as we, watchEffect as Ve, createVNode as f, mergeProps as x, isVNode as ye } from "vue";
import { selectProps as Oe, selectEmits as Se } from "./select.mjs";
import { useNamespace as Ce, useTrigger as Fe } from "@tu-view-plus/hooks";
import { isObject as P, isUndefined as M, isEmptyObject as ke, isArray as Ee, isNumber as _e, isString as xe, isBoolean as Pe, isFunction as C, debounce as De, isNull as Le } from "@tu-view-plus/utils";
import { useSelect as Te } from "./use-select.mjs";
import "../../form/index.mjs";
import { getKeyFromValue as H, isGroupOptionInfo as Re, isValidOption as Ae, hasEmptyStringKey as Ke } from "./utils.mjs";
import { TuTrigger as Be } from "../../trigger/index.mjs";
import Ne from "./select-dropdown.vue.mjs";
import je from "./select-group.vue.mjs";
import $e from "./select-option.vue.mjs";
import { TuVirtualList as ze } from "../../virtual-list/index.mjs";
import { TuSelectView as Me } from "../../select-view/index.mjs";
import "../style/select.css";
import { useFormDisabled as He, useFormSize as Ue } from "../../form/src/hooks/use-form-props.mjs";
function Ge(l) {
  return typeof l == "function" || Object.prototype.toString.call(l) === "[object Object]" && !ye(l);
}
const We = {
  value: "value",
  label: "label",
  disabled: "disabled",
  tagProps: "tagProps",
  render: "render"
}, ra = /* @__PURE__ */ be({
  name: "TuSelect",
  props: Oe,
  emits: Se,
  inheritAttrs: !1,
  setup(l, {
    slots: u,
    emit: o,
    attrs: U
  }) {
    const {
      options: G,
      filterOption: V,
      valueKey: m,
      multiple: D,
      popupVisible: W,
      showExtraOptions: q,
      modelValue: J,
      fieldNames: y,
      loading: Q,
      defaultActiveFirstOption: X
    } = pe(l), L = Ce("select"), T = v(), R = v({}), A = v(), F = v(l.defaultValue), g = v([]), K = v(), B = v(""), N = He(), k = Ue(), Y = c(() => ({
      [L.b()]: !0,
      [L.m(k.value)]: !0
    })), E = c(() => P(l.allowSearch) && !!l.allowSearch.retainInputValue), j = c(() => ({
      ...We,
      ...y == null ? void 0 : y.value
    })), Z = c(() => l.virtualListProps ? "div" : "li"), s = c(() => l.inputValue ?? B.value), d = c(() => _.value.map((e) => e.key)), I = c(() => g.value.map((e) => {
      var t;
      let n = ae(e.value);
      const a = (t = K.value) == null ? void 0 : t[e.key];
      return !M(a) && !ke(a) && (n = {
        ...n,
        ...a
      }), n;
    })), _ = c(() => {
      const e = l.modelValue ?? F.value;
      return (Ee(e) ? e : e || _e(e) || xe(e) || Pe(e) ? [e] : []).map((a) => ({
        value: a,
        key: H(a, l.valueKey)
      }));
    }), ee = c(() => {
      const e = [];
      for (const n of _.value) {
        const a = i.get(n.key);
        a && e.push({
          ...a,
          value: n.key,
          label: (a == null ? void 0 : a.label) ?? String(P(n.value) ? n.value[m == null ? void 0 : m.value] : n.value),
          closable: !(a != null && a.disabled)
        });
      }
      return e;
    }), ae = (e) => C(l.fallbackOption) ? l.fallbackOption(e) : {
      [j.value.value]: e,
      [j.value.label]: String(P(e) ? e[m == null ? void 0 : m.value] : e)
    }, le = (e) => {
      var n;
      return l.multiple ? e.map((a) => {
        var t;
        return ((t = i.get(a)) == null ? void 0 : t.value) ?? "";
      }) : ((n = i.get(e[0])) == null ? void 0 : n.value) ?? (Ke(i) ? void 0 : "");
    }, te = (e) => {
      const n = {};
      return e.forEach((a) => {
        n[a] = i.get(a);
      }), n;
    }, ne = (e) => {
      K.value = te(e);
    }, h = (e) => {
      const n = le(e);
      F.value = n, o("update:modelValue", n), o("change", n), ne(e);
    }, b = (e) => {
      B.value = e, o("update:inputValue", e), o("inputValueChange", e);
    }, ue = () => {
      const e = [], n = [];
      if (l.allowCreate || l.fallbackOption) {
        for (const a of _.value)
          if (!n.includes(a.key) && a.value !== "") {
            const t = i.get(a.key);
            (!t || t.origin === "extraOptions") && (e.push(a), n.push(a.key));
          }
      }
      if (l.allowCreate && s.value) {
        const a = H(s.value);
        if (!n.includes(a)) {
          const t = i.get(a);
          (!t || t.origin === "extraOptions") && e.push({
            value: s.value,
            key: a
          });
        }
      }
      return e;
    }, ie = (e) => {
      if (C(u.option)) {
        const n = u.option;
        return () => n({
          data: e.raw
        });
      }
      return C(e.render) ? e.render : () => e.label;
    }, oe = (e, n) => {
      if (l.multiple) {
        if (d.value.includes(e)) {
          const a = d.value.filter((t) => t !== e);
          h(a);
        } else if (ge.value.includes(e))
          if (l.limit > 0 && d.value.length >= l.limit) {
            const a = i.get(e);
            o("exceedLimit", a == null ? void 0 : a.value, n);
          } else {
            const a = d.value.concat(e);
            h(a);
          }
        E.value || b("");
      } else {
        if (e !== d.value[0] && h([e]), E.value) {
          const a = i.get(e);
          a && b(a.label);
        }
        O(!1);
      }
    }, re = De((e) => {
      o("search", e);
    }, l.searchDelay), ce = (e) => {
      e !== s.value && (p.value || O(!0), b(e), l.allowSearch && re(e));
    }, se = (e) => {
      const n = i.get(e), a = d.value.filter((t) => t !== e);
      h(a), o("remove", n == null ? void 0 : n.value);
    }, de = (e) => {
      e == null || e.stopPropagation();
      const n = d.value.filter((a) => {
        var t;
        return (t = i.get(a)) == null ? void 0 : t.disabled;
      });
      h(n), b(""), o("clear", e);
    }, me = (e) => {
      o("dropdownScroll", e);
    }, ve = (e) => {
      o("dropdownReachBottom", e);
    }, {
      computedPopupVisible: p,
      handlePopupVisibleChange: O
    } = Fe({
      popupVisible: W,
      emit: o
    }), {
      validOptions: $,
      optionInfoMap: i,
      validOptionInfos: fe,
      enabledOptionKeys: ge,
      handleKeyDown: he
    } = Te({
      selectSize: k,
      multiple: D,
      options: G,
      extraOptions: I,
      inputValue: s,
      filterOption: V,
      showExtraOptions: q,
      component: Z,
      valueKey: m,
      fieldNames: y,
      loading: Q,
      popupVisible: p,
      valueKeys: d,
      dropdownRef: T,
      optionRefs: R,
      virtualListRef: A,
      defaultActiveFirstOption: X,
      onSelect: oe,
      onPopupVisibleChange: O
    });
    return z(J, (e) => {
      (M(e) || Le(e)) && (F.value = D.value ? [] : e);
    }), z(p, (e) => {
      !e && !E.value && s.value && b("");
    }), we(() => {
      Ve(() => {
        var n;
        const e = ue();
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
        data: t
      }) => {
        var r, S;
        if ((u.label || C(l.formatLabel)) && t) {
          const w = i.get(t.value);
          if (w != null && w.raw)
            return ((r = u.label) == null ? void 0 : r.call(u, {
              data: w.raw
            })) ?? ((S = l.formatLabel) == null ? void 0 : S.call(l, w.raw));
        }
        return (t == null ? void 0 : t.label) ?? "";
      }, n = (t) => {
        if (Re(t)) {
          let r;
          return f(je, {
            key: t.key,
            label: t.label
          }, Ge(r = t.options.map((S) => n(S))) ? r : {
            default: () => [r]
          });
        }
        return Ae(t, {
          inputValue: s.value,
          filterOption: V == null ? void 0 : V.value
        }) ? f($e, {
          ref: (r) => {
            r != null && r.$el && (R.value[t.key] = r.$el);
          },
          key: t.key,
          value: t.value,
          label: t.label,
          disabled: t.disabled,
          internal: !0
        }, {
          default: ie(t)
        }) : null;
      }, a = () => f(Ne, {
        ref: T,
        loading: l.loading,
        empty: fe.value.length === 0,
        virtualList: !!l.virtualListProps,
        scrollbar: l.scrollbar,
        showHeaderOnEmpty: l.showHeaderOnEmpty,
        showFooterOnEmpty: l.showFooterOnEmpty,
        onScroll: me,
        onReachBottom: ve
      }, {
        default: () => {
          var t;
          return [...((t = u.default) == null ? void 0 : t.call(u)) ?? [], ...$.value.map(n)];
        },
        "virtual-list": () => f(ze, x(l.virtualListProps, {
          ref: A,
          data: $.value
        }), {
          item: ({
            item: t
          }) => n(t)
        }),
        empty: u.empty,
        header: u.header,
        footer: u.footer
      });
      return f(Be, x({
        trigger: "click",
        position: "bl",
        popupOffset: 8,
        animationName: "slide-dynamic-origin",
        hideEmpty: !0,
        preventFocus: !0,
        autoFitPopupWidth: !0,
        autoFitTransformOrigin: !0,
        disabled: N.value,
        popupVisible: p.value,
        unmountOnClose: l.unmountOnClose,
        clickToClose: !(l.allowSearch || l.allowCreate),
        popupContainer: l.popupContainer,
        onPopupVisibleChange: O
      }, l.triggerProps), {
        default: () => {
          var t;
          return [((t = u.trigger) == null ? void 0 : t.call(u)) ?? f(Me, x({
            class: Y.value,
            modelValue: ee.value,
            inputValue: s.value,
            multiple: l.multiple,
            disabled: N.value,
            loading: l.loading,
            allowClear: l.allowClear,
            allowCreate: l.allowCreate,
            allowSearch: !!l.allowSearch,
            opened: p.value,
            maxTagCount: l.maxTagCount,
            placeholder: l.placeholder,
            bordered: l.bordered,
            size: k.value,
            onInputValueChange: ce,
            onRemove: se,
            onClear: de,
            onKeydown: he
          }, U), {
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
  ra as default
};
