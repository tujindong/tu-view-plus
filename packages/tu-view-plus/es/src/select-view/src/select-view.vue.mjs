import { defineComponent as z, toRefs as B, ref as D, computed as i, watch as E, createVNode as u, Fragment as N } from "vue";
import { useNamespace as j } from "@tu-view-plus/hooks";
import { Close as L, Loading as P, Search as _, ArrowDown as k } from "@tu-view-plus/icons-vue";
import { selectViewProps as y, selectViewEmits as A } from "./select-view.mjs";
import { TuInputLabel as M } from "../../input-label/index.mjs";
import { TuInputTag as q } from "../../input-tag/index.mjs";
import { TuIcon as d } from "../../icon/index.mjs";
import "../../form/index.mjs";
import "../style/select-view.css";
import { useFormSize as G, useFormDisabled as H } from "../../form/src/hooks/use-form-props.mjs";
const ee = /* @__PURE__ */ z({
  name: "TuSelectView",
  props: y,
  emits: A,
  setup(e, {
    emit: t,
    slots: n,
    expose: g
  }) {
    const a = j("select-view"), {
      opened: x
    } = B(e), m = D(), o = i(
      // @ts-ignore
      () => {
        var l;
        return (l = m.value) == null ? void 0 : l.inputRef;
      }
    ), C = i(() => e.modelValue.length === 0), S = i(() => e.allowSearch || e.allowCreate), p = i(() => e.allowClear && !e.disabled && !C.value), f = G(), s = H(), v = i(() => ({
      [a.b()]: !0,
      [a.m(e.multiple ? "multiple" : "single")]: !0,
      [a.is("opened")]: e.opened
    })), T = (l, c) => {
      t("remove", l, c);
    }, w = (l) => {
      t("focus", l);
    }, b = (l) => {
      t("blur", l);
    }, F = (l) => {
      t("clear", l);
    }, I = () => {
      o.value && o.value.focus();
    }, R = () => {
      o.value && o.value.blur();
    };
    return E(x, (l) => {
      !l && o.value && o.value.isSameNode(document.activeElement) && o.value.blur();
    }), g({
      focus: I,
      blur: R
    }), () => {
      var h;
      const l = () => {
        var r, V;
        return e.loading ? ((r = n["loading-icon"]) == null ? void 0 : r.call(n)) ?? u(d, {
          class: ["is-loading", a.e("icon"), a.em("icon", "loading")]
        }, {
          default: () => [u(P, null, null)]
        }) : e.allowSearch && e.opened ? ((V = n["search-icon"]) == null ? void 0 : V.call(n)) ?? u(d, {
          class: [a.e("icon"), a.em("icon", "search")]
        }, {
          default: () => [u(_, null, null)]
        }) : n["arrow-icon"] ? n["arrow-icon"]() : u(d, {
          class: [a.e("icon"), a.em("icon", "arrow")]
        }, {
          default: () => [u(k, null, null)]
        });
      }, c = () => u(N, null, [p.value && u(d, {
        class: [a.e("icon"), a.em("icon", "clear")],
        onMousedown: (r) => r.stopPropagation(),
        onClick: F
      }, {
        default: () => [u(L, null, null)]
      }), l()]);
      return e.multiple ? u(q, {
        ref: m,
        class: v.value,
        "model-value": e.modelValue,
        "input-value": e.inputValue,
        focused: e.opened,
        placeholder: e.placeholder,
        disabled: s.value,
        size: f.value,
        maxTagCount: e.maxTagCount,
        disabledInput: !e.allowSearch && !e.allowCreate,
        "retain-input-value": !0,
        "uninject-form-item-context": !0,
        onRemove: T,
        onFocus: w,
        onBlur: b
      }, {
        prefix: n.prefix,
        suffix: c,
        tag: n.label
      }) : u(M, {
        ref: m,
        class: v.value,
        "model-value": (h = e.modelValue) == null ? void 0 : h[0],
        "input-value": e.inputValue,
        focused: e.opened,
        placeholder: e.placeholder,
        disabled: s.value,
        size: f.value,
        "enabled-input": S.value,
        "uninject-form-item-context": !0,
        onFocus: w,
        onBlur: b
      }, {
        default: n.label,
        prefix: n.prefix,
        suffix: c
      });
    };
  }
});
export {
  ee as default
};
