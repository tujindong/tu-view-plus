import { defineComponent as T, computed as g, openBlock as a, createElementBlock as S, normalizeClass as l, normalizeStyle as h, createBlock as c, unref as s, withCtx as n, renderSlot as r, createCommentVNode as i, createElementVNode as m, withModifiers as b, createVNode as $, Transition as _ } from "vue";
import { tagProps as B, tagEmits as E } from "./tag.mjs";
import { useNamespace as V, defaultNamespace as w } from "@tu-view-plus/hooks";
import { Close as v } from "@tu-view-plus/icons-vue";
import "../../form/index.mjs";
import { TuIcon as f } from "../../icon/index.mjs";
import "../style/tag.css";
import { useFormSize as F } from "../../form/src/hooks/use-form-props.mjs";
const I = T({
  name: "TuTag"
}), K = /* @__PURE__ */ T({
  ...I,
  props: B,
  emits: E,
  setup(z, { emit: N }) {
    const o = z, u = N, t = V("tag"), p = F(), d = g(() => ({
      [t.b()]: !0,
      [t.m(o.effect)]: o.effect,
      [t.m(p.value)]: p.value,
      [t.is("round")]: o.round,
      [t.is("hit")]: o.hit,
      [t.is("closable")]: o.closable
    })), k = g(() => {
      const e = {};
      return (o.effect === "light" || o.effect === "outset" || o.effect === "inset" || o.effect === "plain") && (e.color = o.color), o.effect === "dark" && (e.background = o.color), o.effect === "light" && (e["--color"] = o.color), o.effect === "outset" || o.effect === "inset" || (e.borderColor = o.color), e;
    }), C = (e) => {
      u("close", e);
    }, y = (e) => {
      u("click", e);
    };
    return (e, M) => e.disableTransitions ? (a(), S("span", {
      key: 0,
      class: l(d.value),
      style: h(k.value),
      onClick: y
    }, [
      e.$slots.icon ? (a(), c(s(f), {
        key: 0,
        class: l(s(t).e("icon"))
      }, {
        default: n(() => [
          r(e.$slots, "icon")
        ]),
        _: 3
      }, 8, ["class"])) : i("", !0),
      m("span", {
        class: l(s(t).e("content"))
      }, [
        r(e.$slots, "default")
      ], 2),
      e.closable ? (a(), c(s(f), {
        key: 1,
        class: l(s(t).e("close")),
        onClick: b(C, ["stop"])
      }, {
        default: n(() => [
          $(s(v))
        ]),
        _: 1
      }, 8, ["class"])) : i("", !0)
    ], 6)) : (a(), c(_, {
      key: 1,
      name: `${s(w)}-zoom-in-center`,
      appear: ""
    }, {
      default: n(() => [
        m("span", {
          class: l(d.value),
          style: h(k.value),
          onClick: y
        }, [
          e.$slots.icon ? (a(), c(s(f), {
            key: 0,
            class: l(s(t).e("icon"))
          }, {
            default: n(() => [
              r(e.$slots, "icon")
            ]),
            _: 3
          }, 8, ["class"])) : i("", !0),
          m("span", {
            class: l(s(t).e("content"))
          }, [
            r(e.$slots, "default")
          ], 2),
          e.closable ? (a(), c(s(f), {
            key: 1,
            class: l(s(t).e("close")),
            onClick: b(C, ["stop"])
          }, {
            default: n(() => [
              $(s(v))
            ]),
            _: 1
          }, 8, ["class"])) : i("", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
export {
  K as default
};
