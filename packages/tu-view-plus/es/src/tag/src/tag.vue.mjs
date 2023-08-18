import { defineComponent as z, computed as y, openBlock as c, createElementBlock as S, normalizeClass as l, unref as o, normalizeStyle as g, createBlock as a, withCtx as n, renderSlot as r, createCommentVNode as i, createElementVNode as m, withModifiers as b, createVNode as $, Transition as _ } from "vue";
import { tagProps as B, tagEmits as E } from "./tag.mjs";
import { useNamespace as V, defaultNamespace as v } from "@tu-view-plus/hooks";
import { Close as T } from "@tu-view-plus/icons-vue";
import "../../form/index.mjs";
import { TuIcon as f } from "../../icon/index.mjs";
import "../style/tag.css";
import { useFormSize as w } from "../../form/src/hooks/use-form-props.mjs";
const F = z({
  name: "TuTag"
}), J = /* @__PURE__ */ z({
  ...F,
  props: B,
  emits: E,
  setup(N, { emit: u }) {
    const s = N, t = V("tag"), p = w(), d = y(() => ({
      [t.b()]: !0,
      [t.m(s.effect)]: s.effect,
      [t.m(p.value)]: p.value,
      [t.is("round")]: s.round,
      [t.is("hit")]: s.hit,
      [t.is("closable")]: s.closable
    })), k = y(() => {
      const e = {};
      return (s.effect === "light" || s.effect === "neumorphic" || s.effect === "plain") && (e.color = s.color), s.effect === "dark" && (e.background = s.color), s.effect === "light" && (e["--color"] = s.color), s.effect !== "neumorphic" && (e.borderColor = s.color), e;
    }), C = (e) => {
      u("close", e);
    }, h = (e) => {
      u("click", e);
    };
    return (e, I) => e.disableTransitions ? (c(), S("span", {
      key: 0,
      class: l(o(d)),
      style: g(o(k)),
      onClick: h
    }, [
      e.$slots.icon ? (c(), a(o(f), {
        key: 0,
        class: l(o(t).e("icon"))
      }, {
        default: n(() => [
          r(e.$slots, "icon")
        ]),
        _: 3
      }, 8, ["class"])) : i("", !0),
      m("span", {
        class: l(o(t).e("content"))
      }, [
        r(e.$slots, "default")
      ], 2),
      e.closable ? (c(), a(o(f), {
        key: 1,
        onClick: b(C, ["stop"])
      }, {
        default: n(() => [
          $(o(T))
        ]),
        _: 1
      }, 8, ["onClick"])) : i("", !0)
    ], 6)) : (c(), a(_, {
      key: 1,
      name: `${o(v)}-zoom-in-center`,
      appear: ""
    }, {
      default: n(() => [
        m("span", {
          class: l(o(d)),
          style: g(o(k)),
          onClick: h
        }, [
          e.$slots.icon ? (c(), a(o(f), {
            key: 0,
            class: l(o(t).e("icon"))
          }, {
            default: n(() => [
              r(e.$slots, "icon")
            ]),
            _: 3
          }, 8, ["class"])) : i("", !0),
          m("span", {
            class: l(o(t).e("content"))
          }, [
            r(e.$slots, "default")
          ], 2),
          e.closable ? (c(), a(o(f), {
            key: 1,
            class: l(o(t).e("close")),
            onClick: b(C, ["stop"])
          }, {
            default: n(() => [
              $(o(T))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : i("", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
export {
  J as default
};
