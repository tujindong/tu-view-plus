import { defineComponent as A, useSlots as Q, useAttrs as Y, toRefs as Z, inject as ee, ref as i, computed as d, watch as te, onMounted as ae, openBlock as y, createElementBlock as k, normalizeClass as m, normalizeStyle as F, createVNode as v, unref as t, withCtx as $, createElementVNode as x, Fragment as re, renderSlot as z, createCommentVNode as I, nextTick as oe } from "vue";
import { avatarProps as se, avatarEmits as le } from "./avatar.mjs";
import { avatarGroupInjectionKey as ie } from "./constants.mjs";
import { useNamespace as ne, useIndex as ue, defaultNamespace as ce } from "@tu-view-plus/hooks";
import { PictureRounded as de, Loading as me } from "@tu-view-plus/icons-vue";
import { isNumber as ve, addUnit as f } from "@tu-view-plus/utils";
import { TuIcon as L } from "../../icon/index.mjs";
import { TuResizeObserver as fe } from "../../resize-observer/index.mjs";
import "../style/avatar.css";
const ge = ["src"], pe = A({
  name: "TuAvatar"
}), Ee = /* @__PURE__ */ A({
  ...pe,
  props: se,
  emits: le,
  setup(W, { emit: P }) {
    const o = W, T = P, V = Q(), j = Y(), a = ne("avatar"), { shape: w, size: n, autoFixFontSize: B, triggerType: N, triggerIconStyle: C } = Z(o), r = ee(ie, void 0), g = i(), u = i(), p = i(!1), h = i(!1), R = i(!0), U = i(!1), G = d(() => ({
      [a.b()]: !0,
      [a.m(o.effect)]: o.effect,
      [a.is("shape")]: w.value == "circle",
      [a.is("trigger-icon")]: V["trigger-icon"]
    })), M = d(() => ({
      [a.e("image")]: p.value || o.imageUrl,
      [a.e("text")]: !(p.value || o.imageUrl)
    })), H = d(() => ({
      [a.e(`trigger-icon-${N.value}`)]: !0,
      [a.is("shape")]: w.value == "circle"
    })), S = r ? ue({
      itemRef: g,
      selector: `.${ce}-avatar`
    }).computedIndex : i(-1), K = d(() => {
      const e = ve(c.value) ? {
        width: f(c.value),
        height: f(c.value),
        fontSize: f(c.value / 2)
      } : {};
      return r && (e.zIndex = r.zIndexAscend ? S.value + 1 : r.total - S.value, e.marginLeft = S.value !== 0 ? `-${(c.value ?? 40) / 4}px` : "0"), e;
    }), O = (({
      triggerType: e,
      inlineStyle: s = {},
      triggerIconStyle: l = {}
    }) => {
      let b = {};
      return e === "button" && (!l || l && !l.color) && s && s.backgroundColor && (b = { color: s.backgroundColor }), {
        ...l,
        ...b
      };
    })({
      triggerIconStyle: C == null ? void 0 : C.value,
      inlineStyle: j.style,
      triggerType: N.value
    }), c = d(() => (r == null ? void 0 : r.size) ?? (n == null ? void 0 : n.value)), _ = d(
      () => (r == null ? void 0 : r.autoFixFontSize) ?? B.value
    ), E = () => {
      !p.value && !o.imageUrl && oe(() => {
        if (!u.value || !g.value)
          return;
        const e = u.value.clientWidth, s = c.value ?? g.value.offsetWidth, l = s / (e + 8);
        s && l < 1 && (u.value.style.transform = `scale(${l}) translateX(-50%)`), R.value = !0;
      });
    }, X = (e) => {
      T("click", e);
    }, q = () => {
      _.value && E();
    }, D = () => {
      U.value = !0, T("load");
    }, J = () => {
      h.value = !0, T("error");
    };
    return te(n, () => {
      _.value && E();
    }), ae(() => {
      var e;
      (e = u.value) != null && e.firstElementChild && ["IMG", "PICTURE"].includes(u.value.firstElementChild.tagName) && (p.value = !0), _.value && E();
    }), (e, s) => (y(), k("div", {
      ref_key: "itemRef",
      ref: g,
      class: m(G.value),
      style: F(K.value),
      onClick: X
    }, [
      v(t(fe), { onResize: q }, {
        default: $(() => [
          x("span", {
            ref_key: "wrapperRef",
            ref: u,
            class: m(M.value)
          }, [
            o.imageUrl ? (y(), k(re, { key: 0 }, [
              h.value ? z(e.$slots, "error", { key: 0 }, () => [
                x("div", {
                  class: m(t(a).e("image-icon"))
                }, [
                  v(t(L), { size: 20 }, {
                    default: $(() => [
                      v(t(de))
                    ]),
                    _: 1
                  })
                ], 2)
              ]) : I("", !0),
              !(h.value || !R.value) && !U.value ? z(e.$slots, "default", { key: 1 }, () => [
                x("div", {
                  class: m(t(a).e("image-icon"))
                }, [
                  v(t(L), { size: 20 }, {
                    default: $(() => [
                      v(t(me))
                    ]),
                    _: 1
                  })
                ], 2)
              ]) : I("", !0),
              h.value || !R.value ? I("", !0) : (y(), k("img", {
                key: 2,
                alt: "avatar",
                src: o.imageUrl,
                style: F({
                  width: t(f)(t(n)),
                  height: t(f)(t(n))
                }),
                onLoad: D,
                onError: J
              }, null, 44, ge))
            ], 64)) : z(e.$slots, "default", { key: 1 })
          ], 2)
        ]),
        _: 3
      }),
      e.$slots["trigger-icon"] ? (y(), k("div", {
        key: 0,
        class: m(H.value),
        style: F(t(O))
      }, [
        z(e.$slots, "trigger-icon")
      ], 6)) : I("", !0)
    ], 6));
  }
});
export {
  Ee as default
};
