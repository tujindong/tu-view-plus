import { defineComponent as I, toRefs as R, ref as j, computed as o, watch as z, createVNode as u, Fragment as N, isVNode as _ } from "vue";
import { useNamespace as y } from "@tu-view-plus/hooks";
import { Close as B, Loading as D, Search as E, ArrowDown as L } from "@tu-view-plus/icons-vue";
import { selectViewProps as O, selectViewEmits as P } from "./select-view.mjs";
import { TuInputLabel as k } from "../../input-label/index.mjs";
import { TuInputTag as A } from "../../input-tag/index.mjs";
import { TuIcon as V } from "../../icon/index.mjs";
import "../../form/index.mjs";
import "../style/select-view.css";
import { useFormSize as M, useFormDisabled as q } from "../../form/src/hooks/use-form-props.mjs";
function G(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !_(e);
}
const ee = /* @__PURE__ */ I({
  name: "TuSelectView",
  props: O,
  emits: P,
  setup(e, {
    emit: i,
    slots: n
  }) {
    const a = y("select-view"), {
      opened: g
    } = R(e), d = j(), m = o(
      // @ts-ignore
      () => {
        var l;
        return (l = d.value) == null ? void 0 : l.inputRef;
      }
    ), x = o(() => e.modelValue.length === 0), S = o(() => e.allowSearch || e.clearable), p = o(() => e.clearable && !e.disabled && !x.value), f = M(), s = q(), v = o(() => ({
      [a.b()]: !0,
      [a.m(e.multiple ? "multiple" : "single")]: !0,
      [a.is("opened")]: e.opened
    })), C = o(() => ({
      [a.e("icon")]: !0,
      [a.em("icon", "clear")]: !0
    })), T = (l, c) => {
      i("remove", l, c);
    }, b = (l) => {
      i("focus", l);
    }, w = (l) => {
      i("blur", l);
    }, F = (l) => {
      i("clear", l);
    };
    return z(g, (l) => {
      !l && m.value && m.value.isSameNode(document.activeElement) && m.value.blur();
    }), () => {
      var h;
      const l = () => {
        var t, r;
        return e.loading ? ((t = n["loading-icon"]) == null ? void 0 : t.call(n)) ?? u(D, null, null) : e.allowSearch && e.opened ? ((r = n["search-icon"]) == null ? void 0 : r.call(n)) ?? u(E, null, null) : n["arrow-icon"] ? n["arrow-icon"]() : u(L, null, null);
      }, c = () => {
        let t;
        return u(N, null, [p.value && u(V, {
          class: C.value,
          onClick: F,
          onMousedown: (r) => r.stopPropagation()
        }, {
          default: () => [u(B, null, null)]
        }), u(V, {
          class: a.e("icon")
        }, G(t = l()) ? t : {
          default: () => [t]
        })]);
      };
      return e.multiple ? u(A, {
        ref: d,
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
        onFocus: b,
        onBlur: w
      }, {
        prefix: n.prefix,
        suffix: c,
        tag: n.label
      }) : u(k, {
        ref: d,
        class: v.value,
        "model-value": (h = e.modelValue) == null ? void 0 : h[0],
        "input-value": e.inputValue,
        focused: e.opened,
        placeholder: e.placeholder,
        disabled: s.value,
        size: f.value,
        "enabled-input": S.value,
        "uninject-form-item-context": !0,
        onFocus: b,
        onBlur: w
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
