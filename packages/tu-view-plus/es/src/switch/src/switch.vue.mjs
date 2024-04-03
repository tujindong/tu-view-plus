import { defineComponent as C, shallowRef as K, computed as k, onMounted as L, openBlock as t, createElementBlock as l, normalizeClass as s, withModifiers as M, unref as i, createElementVNode as y, withKeys as R, createBlock as r, withCtx as m, resolveDynamicComponent as b, createCommentVNode as o, toDisplayString as w, normalizeStyle as U, createVNode as j } from "vue";
import { switchProps as q, switchEmits as A } from "./switch.mjs";
import { useNamespace as F } from "@tu-view-plus/hooks";
import { addUnit as G } from "@tu-view-plus/utils";
import { TuIcon as p } from "../../icon/index.mjs";
import H from "./use-switch.mjs";
import { Loading as J } from "@tu-view-plus/icons-vue";
import "../style/switch.css";
const O = ["id", "name", "true-value", "false-value", "disabled", "tabindex", "aria-checked", "aria-disabled"], Q = ["aria-hidden"], W = ["aria-hidden"], X = ["aria-hidden"], Y = C({
  name: "TuSwitch"
}), ne = /* @__PURE__ */ C({
  ...Y,
  props: q,
  emits: A,
  setup(g, { expose: S, emit: V }) {
    const h = K(), d = g, N = V, a = F("switch"), {
      inputId: P,
      switchSize: I,
      switchDisabled: f,
      checked: n,
      focus: z,
      handleValueSwitch: v,
      handleChange: T
    } = H(d, N, h), B = k(() => ({
      [a.b()]: !0,
      [a.m(I.value)]: I.value,
      [a.m(d.type)]: d.type,
      [a.m(d.effect)]: d.effect,
      [a.is("disabled")]: f.value,
      [a.is("checked")]: n.value
    })), D = k(() => ({
      [a.e("label")]: !0,
      [a.em("label", "left")]: !0,
      [a.is("active")]: !n.value
    })), E = k(() => ({
      [a.e("label")]: !0,
      [a.em("label", "right")]: !0,
      [a.is("active")]: n.value
    }));
    return L(() => {
      h.value.checked = n.value;
    }), S({
      focus: z,
      checked: n
    }), (e, c) => (t(), l("div", {
      class: s(B.value),
      onClick: c[2] || (c[2] = M(
        //@ts-ignore
        (...u) => i(v) && i(v)(...u),
        ["prevent"]
      ))
    }, [
      y("input", {
        ref_key: "input",
        ref: h,
        type: "checkbox",
        role: "switch",
        id: i(P),
        name: e.name,
        class: s(i(a).e("input")),
        "true-value": e.activeValue,
        "false-value": e.inactiveValue,
        disabled: i(f),
        tabindex: e.tabindex,
        "aria-checked": i(n),
        "aria-disabled": i(f),
        onChange: c[0] || (c[0] = //@ts-ignore
        (...u) => i(T) && i(T)(...u)),
        onKeydown: c[1] || (c[1] = R(
          //@ts-ignore
          (...u) => i(v) && i(v)(...u),
          ["enter"]
        ))
      }, null, 42, O),
      !e.inlinePrompt && (e.inactiveIcon || e.inactiveText) ? (t(), l("span", {
        key: 0,
        class: s(D.value)
      }, [
        e.inactiveIcon ? (t(), r(i(p), { key: 0 }, {
          default: m(() => [
            (t(), r(b(e.inactiveIcon)))
          ]),
          _: 1
        })) : o("", !0),
        !e.inactiveIcon && e.inactiveText ? (t(), l("span", {
          key: 1,
          "aria-hidden": i(n)
        }, w(e.inactiveText), 9, Q)) : o("", !0)
      ], 2)) : o("", !0),
      y("span", {
        ref: "core",
        class: s(i(a).e("core")),
        style: U({ width: i(G)(e.width) })
      }, [
        e.inlinePrompt ? (t(), l("div", {
          key: 0,
          class: s(i(a).e("inner"))
        }, [
          e.activeIcon || e.inactiveIcon ? (t(), r(i(p), {
            key: 0,
            class: s(i(a).em("inner", "icon"))
          }, {
            default: m(() => [
              (t(), r(b(i(n) ? e.activeIcon : e.inactiveIcon)))
            ]),
            _: 1
          }, 8, ["class"])) : e.activeText || e.inactiveText ? (t(), l("span", {
            key: 1,
            class: s(i(a).em("inner", "text")),
            "aria-hidden": !i(n)
          }, w(i(n) ? e.activeText : e.inactiveText), 11, W)) : o("", !0)
        ], 2)) : o("", !0),
        y("div", {
          class: s(i(a).e("action"))
        }, [
          e.loading ? (t(), r(i(p), {
            key: 0,
            class: s(i(a).is("loading"))
          }, {
            default: m(() => [
              j(i(J))
            ]),
            _: 1
          }, 8, ["class"])) : o("", !0)
        ], 2)
      ], 6),
      !e.inlinePrompt && (e.activeIcon || e.activeText) ? (t(), l("span", {
        key: 1,
        class: s(E.value)
      }, [
        e.activeIcon ? (t(), r(i(p), { key: 0 }, {
          default: m(() => [
            (t(), r(b(e.activeIcon)))
          ]),
          _: 1
        })) : o("", !0),
        !e.activeIcon && e.activeText ? (t(), l("span", {
          key: 1,
          "aria-hidden": i(n)
        }, w(e.activeText), 9, X)) : o("", !0)
      ], 2)) : o("", !0)
    ], 2));
  }
});
export {
  ne as default
};
