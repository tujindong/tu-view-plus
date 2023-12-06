import { defineComponent as F, toRefs as I, ref as R, computed as o, watch as z, createVNode as u, Fragment as B } from "vue";
import { useNamespace as D } from "@tu-view-plus/hooks";
import { Close as E, Loading as N, Search as j, ArrowDown as L } from "@tu-view-plus/icons-vue";
import { selectViewProps as P, selectViewEmits as _ } from "./select-view.mjs";
import { TuInputLabel as k } from "../../input-label/index.mjs";
import { TuInputTag as y } from "../../input-tag/index.mjs";
import { TuIcon as r } from "../../icon/index.mjs";
import "../../form/index.mjs";
import "../style/select-view.css";
import { useFormSize as A, useFormDisabled as M } from "../../form/src/hooks/use-form-props.mjs";
const Y = /* @__PURE__ */ F({
  name: "TuSelectView",
  props: P,
  emits: _,
  setup(e, {
    emit: i,
    slots: n
  }) {
    const a = D("select-view"), {
      opened: g
    } = I(e), m = R(), d = o(
      // @ts-ignore
      () => {
        var l;
        return (l = m.value) == null ? void 0 : l.inputRef;
      }
    ), x = o(() => e.modelValue.length === 0), C = o(() => e.allowSearch || e.allowCreate), S = o(() => e.allowClear && !e.disabled && !x.value), f = A(), s = M(), v = o(() => ({
      [a.b()]: !0,
      [a.m(e.multiple ? "multiple" : "single")]: !0,
      [a.is("opened")]: e.opened
    })), p = (l, t) => {
      i("remove", l, t);
    }, w = (l) => {
      i("focus", l);
    }, h = (l) => {
      i("blur", l);
    }, T = (l) => {
      i("clear", l);
    };
    return z(g, (l) => {
      !l && d.value && d.value.isSameNode(document.activeElement) && d.value.blur();
    }), () => {
      var b;
      const l = () => {
        var c, V;
        return e.loading ? ((c = n["loading-icon"]) == null ? void 0 : c.call(n)) ?? u(r, {
          class: [a.e("icon"), a.em("icon", "loading")]
        }, {
          default: () => [u(N, null, null)]
        }) : e.allowSearch && e.opened ? ((V = n["search-icon"]) == null ? void 0 : V.call(n)) ?? u(r, {
          class: [a.e("icon"), a.em("icon", "search")]
        }, {
          default: () => [u(j, null, null)]
        }) : n["arrow-icon"] ? n["arrow-icon"]() : u(r, {
          class: [a.e("icon"), a.em("icon", "arrow")]
        }, {
          default: () => [u(L, null, null)]
        });
      }, t = () => u(B, null, [S.value && u(r, {
        class: [a.e("icon"), a.em("icon", "clear")],
        onMousedown: (c) => c.stopPropagation(),
        onClick: T
      }, {
        default: () => [u(E, null, null)]
      }), l()]);
      return e.multiple ? u(y, {
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
        onRemove: p,
        onFocus: w,
        onBlur: h
      }, {
        prefix: n.prefix,
        suffix: t,
        tag: n.label
      }) : u(k, {
        ref: m,
        class: v.value,
        "model-value": (b = e.modelValue) == null ? void 0 : b[0],
        "input-value": e.inputValue,
        focused: e.opened,
        placeholder: e.placeholder,
        disabled: s.value,
        size: f.value,
        "enabled-input": C.value,
        "uninject-form-item-context": !0,
        onFocus: w,
        onBlur: h
      }, {
        default: n.label,
        prefix: n.prefix,
        suffix: t
      });
    };
  }
});
export {
  Y as default
};
