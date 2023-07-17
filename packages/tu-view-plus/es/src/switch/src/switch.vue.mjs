import { defineComponent as C, shallowRef as E, computed as k, onMounted as K, openBlock as t, createElementBlock as l, normalizeClass as s, unref as i, withModifiers as L, createElementVNode as y, withKeys as M, createBlock as r, withCtx as v, resolveDynamicComponent as b, createCommentVNode as o, toDisplayString as w, normalizeStyle as R, createVNode as U } from "vue";
import { switchProps as j, switchEmits as q } from "./switch.mjs";
import { useNamespace as A } from "@tu-view-plus/hooks";
import { addUnit as F } from "@tu-view-plus/utils";
import { TuIcon as m } from "../../icon/index.mjs";
import G from "./use-switch.mjs";
import { Loading as H } from "@tu-view-plus/icons-vue";
import "../style/switch.css";
const J = ["id", "name", "true-value", "false-value", "disabled", "tabindex", "aria-checked", "aria-disabled"], O = ["aria-hidden"], Q = ["aria-hidden"], W = ["aria-hidden"], X = C({
  name: "TuSwitch"
}), te = /* @__PURE__ */ C({
  ...X,
  props: j,
  emits: q,
  setup(g, { expose: S, emit: V }) {
    const p = g, h = E(), a = A("switch"), {
      inputId: N,
      switchSize: I,
      switchDisabled: f,
      checked: n,
      focus: P,
      handleValueSwitch: u,
      handleChange: T
    } = G(p, V, h), z = k(() => ({
      [a.b()]: !0,
      [a.m(I.value)]: I.value,
      [a.m(p.type)]: p.type,
      [a.is("disabled")]: f.value,
      [a.is("checked")]: n.value
    })), B = k(() => ({
      [a.e("label")]: !0,
      [a.em("label", "left")]: !0,
      [a.is("active")]: !n.value
    })), D = k(() => ({
      [a.e("label")]: !0,
      [a.em("label", "right")]: !0,
      [a.is("active")]: n.value
    }));
    return K(() => {
      h.value.checked = n.value;
    }), S({
      focus: P,
      checked: n
    }), (e, c) => (t(), l("div", {
      class: s(i(z)),
      onClick: c[2] || (c[2] = L(
        //@ts-ignore
        (...d) => i(u) && i(u)(...d),
        ["prevent"]
      ))
    }, [
      y("input", {
        ref_key: "input",
        ref: h,
        type: "checkbox",
        role: "switch",
        id: i(N),
        name: e.name,
        class: s(i(a).e("input")),
        "true-value": e.activeValue,
        "false-value": e.inactiveValue,
        disabled: i(f),
        tabindex: e.tabindex,
        "aria-checked": i(n),
        "aria-disabled": i(f),
        onChange: c[0] || (c[0] = //@ts-ignore
        (...d) => i(T) && i(T)(...d)),
        onKeydown: c[1] || (c[1] = M(
          //@ts-ignore
          (...d) => i(u) && i(u)(...d),
          ["enter"]
        ))
      }, null, 42, J),
      !e.inlinePrompt && (e.inactiveIcon || e.inactiveText) ? (t(), l("span", {
        key: 0,
        class: s(i(B))
      }, [
        e.inactiveIcon ? (t(), r(i(m), { key: 0 }, {
          default: v(() => [
            (t(), r(b(e.inactiveIcon)))
          ]),
          _: 1
        })) : o("", !0),
        !e.inactiveIcon && e.inactiveText ? (t(), l("span", {
          key: 1,
          "aria-hidden": i(n)
        }, w(e.inactiveText), 9, O)) : o("", !0)
      ], 2)) : o("", !0),
      y("span", {
        ref: "core",
        class: s(i(a).e("core")),
        style: R({ width: i(F)(e.width) })
      }, [
        e.inlinePrompt ? (t(), l("div", {
          key: 0,
          class: s(i(a).e("inner"))
        }, [
          e.activeIcon || e.inactiveIcon ? (t(), r(i(m), {
            key: 0,
            class: s(i(a).em("inner", "icon"))
          }, {
            default: v(() => [
              (t(), r(b(i(n) ? e.activeIcon : e.inactiveIcon)))
            ]),
            _: 1
          }, 8, ["class"])) : e.activeText || e.inactiveText ? (t(), l("span", {
            key: 1,
            class: s(i(a).em("inner", "text")),
            "aria-hidden": !i(n)
          }, w(i(n) ? e.activeText : e.inactiveText), 11, Q)) : o("", !0)
        ], 2)) : o("", !0),
        y("div", {
          class: s(i(a).e("action"))
        }, [
          e.loading ? (t(), r(i(m), {
            key: 0,
            class: s(i(a).is("loading"))
          }, {
            default: v(() => [
              U(i(H))
            ]),
            _: 1
          }, 8, ["class"])) : o("", !0)
        ], 2)
      ], 6),
      !e.inlinePrompt && (e.activeIcon || e.activeText) ? (t(), l("span", {
        key: 1,
        class: s(i(D))
      }, [
        e.activeIcon ? (t(), r(i(m), { key: 0 }, {
          default: v(() => [
            (t(), r(b(e.activeIcon)))
          ]),
          _: 1
        })) : o("", !0),
        !e.activeIcon && e.activeText ? (t(), l("span", {
          key: 1,
          "aria-hidden": i(n)
        }, w(e.activeText), 9, W)) : o("", !0)
      ], 2)) : o("", !0)
    ], 2));
  }
});
export {
  te as default
};
