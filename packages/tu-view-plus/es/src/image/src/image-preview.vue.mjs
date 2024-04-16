import { defineComponent as U, toRefs as he, ref as y, reactive as E, computed as S, watch as be, h as p, onBeforeUnmount as Re, openBlock as c, createBlock as B, Teleport as Ce, unref as o, createElementVNode as D, normalizeClass as u, normalizeStyle as V, createVNode as v, Transition as Y, withCtx as h, withDirectives as Te, vShow as Ee, createElementBlock as b, withModifiers as Pe, createCommentVNode as f, toDisplayString as ze, renderSlot as _e, normalizeProps as Ie, mergeProps as Le, nextTick as Oe } from "vue";
import { imagePreviewProps as Ae, imagePreviewEmits as xe } from "./image-preview.mjs";
import { useLocale as Be, useNamespace as De, useMergeState as Ve, usePopupContainer as $e, usePopupManager as Ne, usePopupOverflowHidden as Ke } from "@tu-view-plus/hooks";
import We from "../hooks/use-image-load-status.mjs";
import Me from "../hooks/use-image-drag.mjs";
import { throttleByRaf as Fe, on as Ge, KEYBOARD_KEY as g, off as He } from "@tu-view-plus/utils";
import Ye, { getScaleByRate as Ze, maxScale as Ue, minScale as Xe } from "../utils/get-scale.mjs";
import { TuIcon as Z } from "../../icon/index.mjs";
import { FullScreen as je, RefreshRight as qe, RefreshLeft as Je, ZoomIn as Qe, ZoomOut as eo, Refresh as oo, Loading as to, Close as ao } from "@tu-view-plus/icons-vue";
import no from "./image-preview-toolbar.vue.mjs";
import lo from "./image-preview-arrow.vue.mjs";
const so = ["src"], io = U({
  name: "TuImagePreview"
}), ho = /* @__PURE__ */ U({
  ...io,
  props: Ae,
  emits: xe,
  setup(X, { emit: j }) {
    const l = X, $ = j, { t: m } = Be(), s = De("image"), {
      src: P,
      popupContainer: q,
      visible: J,
      defaultVisible: Q,
      maskClosable: ee,
      actionsLayout: z,
      defaultScale: N,
      zoomRate: oe
    } = he(l), i = y(), _ = y(), [r, te] = Ve(
      Q.value,
      E({ value: J })
    ), ae = S(() => ({
      [s.e("preview")]: !0,
      [s.em("preview", "hide")]: !r.value
    })), ne = S(() => ({
      [s.e("preview-img")]: !0,
      [s.em("preview-img", "moving")]: ue.value
    })), k = $e(
      document.body,
      E({ popupContainer: q })
    ), le = S(() => k.value === document.body), { zIndex: se } = Ne("dialog", { visible: r }), ie = S(() => ({ ...le.value ? { zIndex: se.value, position: "fixed" } : { zIndex: "inherit", position: "absolute" } })), { isLoading: re, isLoaded: ce, setLoadStatus: I } = We(), d = y(0), a = y(N.value), { translate: K, moving: ue, resetTranslate: me } = Me(
      E({
        wrapperEl: i,
        imageEl: _,
        visible: r,
        scale: a
      })
    ), R = y(!1);
    let L = null;
    const de = () => {
      !R.value && (R.value = !0), L && clearTimeout(L), L = setTimeout(() => {
        R.value = !1;
      }, 1e3);
    };
    Ke(E({ container: k, hidden: r }));
    const pe = () => {
      d.value = 0, a.value = N.value, me();
    }, O = (e) => z.value.includes(e), W = (e) => {
      switch (e.stopPropagation(), e.preventDefault(), e.key) {
        case g.ESC:
          l.escToClose && A();
          break;
        case g.ARROW_LEFT:
          l.groupArrowProps.onPrev && l.groupArrowProps.onPrev();
          break;
        case g.ARROW_RIGHT:
          l.groupArrowProps.onNext && l.groupArrowProps.onNext();
          break;
        case g.ARROW_UP:
          O("zoomIn") && T("zoomIn");
          break;
        case g.ARROW_DOWN:
          O("zoomOut") && T("zoomOut");
          break;
        case g.SPACE:
          O("originalSize") && w(1);
          break;
      }
    }, M = Fe((e) => {
      if (e.stopPropagation(), e.preventDefault(), !l.wheelZoom)
        return;
      const n = (e.deltaY || e.deltaX) > 0 ? "zoomOut" : "zoomIn", x = Ze(a.value, oe.value, n);
      w(x);
    });
    let C = !1;
    const ve = () => {
      Oe(() => {
        var e;
        (e = i == null ? void 0 : i.value) == null || e.focus();
      }), l.keyboard && !C && (C = !0, Ge(k.value, "keydown", W));
    }, F = () => {
      C && (C = !1, He(k.value, "keydown", W));
    };
    be([P, r], () => {
      r.value ? (pe(), I("loading"), ve()) : F();
    });
    const A = () => {
      r.value && ($("close"), $("update:visible", !1), te(!1));
    }, fe = () => {
      A();
    }, G = (e) => {
      var t;
      (t = i == null ? void 0 : i.value) == null || t.focus(), ee.value && e.target === e.currentTarget && A();
    }, w = (e) => {
      a.value !== e && (a.value = e, de());
    }, ge = () => {
      const e = i.value.getBoundingClientRect(), t = _.value.getBoundingClientRect(), n = e.height / (t.height / a.value), x = e.width / (t.width / a.value), Se = Math.max(n, x);
      w(Se);
    }, H = (e) => {
      const n = e === "clockwise" ? (d.value + 90) % 360 : d.value === 0 ? 360 - 90 : d.value - 90;
      d.value = n;
    }, T = (e) => {
      const t = Ye(a.value, e);
      w(t);
    }, ke = () => {
      I("loaded");
    }, we = () => {
      I("error");
    }, ye = S(() => [
      /** 满屏 */
      {
        key: "fullScreen",
        name: m("tu.image.fullScreen"),
        content: () => p(je),
        onClick: () => ge()
      },
      /** 顺时针旋转 */
      {
        key: "rotateRight",
        name: m("tu.image.rotateRight"),
        content: () => p(qe),
        onClick: () => H("clockwise")
      },
      /** 逆时针旋转 */
      {
        key: "rotateLeft",
        name: m("tu.image.rotateLeft"),
        content: () => p(Je),
        onClick: () => H("counterclockwise")
      },
      /** 放大 */
      {
        key: "zoomIn",
        name: m("tu.image.zoomIn"),
        content: () => p(Qe),
        onClick: () => T("zoomIn"),
        disabled: a.value === Ue
      },
      /** 缩小 */
      {
        key: "zoomOut",
        name: m("tu.image.zoomOut"),
        content: () => p(eo),
        onClick: () => T("zoomOut"),
        disabled: a.value === Xe
      },
      /** 缩放到100% */
      {
        key: "originalSize",
        name: m("tu.image.originalSize"),
        content: () => p(oo),
        onClick: () => w(1)
      }
    ]);
    return Re(() => {
      F();
    }), (e, t) => (c(), B(Ce, {
      to: o(k),
      disabled: !l.renderToBody
    }, [
      D("div", {
        class: u(ae.value),
        style: V(ie.value)
      }, [
        v(Y, {
          name: "image-fade",
          onBeforeEnter: t[0] || (t[0] = (n) => n.parentElement && (n.parentElement.style.display = "block")),
          onAfterLeave: t[1] || (t[1] = (n) => n.parentElement && (n.parentElement.style.display = ""))
        }, {
          default: h(() => [
            Te(D("div", {
              class: u(o(s).e("preview-mask"))
            }, null, 2), [
              [Ee, o(r)]
            ])
          ]),
          _: 1
        }),
        o(r) ? (c(), b("div", {
          key: 0,
          ref_key: "refWrapper",
          ref: i,
          tabindex: "0",
          class: u(o(s).e("preview-wrapper")),
          onClick: G,
          onWheel: t[2] || (t[2] = Pe(
            //@ts-ignore
            (...n) => o(M) && o(M)(...n),
            ["prevent", "stop"]
          ))
        }, [
          D("div", {
            class: u(o(s).e("preview-img-container")),
            style: V({ transform: `scale(${a.value},${a.value})` }),
            onClick: G
          }, [
            (c(), b("img", {
              ref_key: "refImage",
              ref: _,
              key: o(P),
              src: o(P),
              class: u(ne.value),
              style: V({
                transform: `translate(${o(K)[0]}px, ${o(K)[1]}px) rotate(${d.value}deg)`
              }),
              onLoad: ke,
              onError: we
            }, null, 46, so))
          ], 6),
          o(re) ? (c(), b("div", {
            key: 0,
            class: u(o(s).e("preview-loading"))
          }, [
            v(o(Z), null, {
              default: h(() => [
                v(o(to))
              ]),
              _: 1
            })
          ], 2)) : f("", !0),
          v(Y, { name: "image-fade" }, {
            default: h(() => [
              R.value ? (c(), b("div", {
                key: 0,
                class: u(o(s).e("preview-scale-value"))
              }, ze((a.value * 100).toFixed(0)) + "% ", 3)) : f("", !0)
            ]),
            _: 1
          }),
          o(ce) && o(z).length ? (c(), B(no, {
            key: 1,
            actions: ye.value,
            "actions-layout": o(z)
          }, {
            default: h(() => [
              _e(e.$slots, "actions")
            ]),
            _: 3
          }, 8, ["actions", "actions-layout"])) : f("", !0),
          e.closable ? (c(), b("div", {
            key: 2,
            class: u(o(s).e("preview-close-btn")),
            onClick: fe
          }, [
            v(o(Z), null, {
              default: h(() => [
                v(o(ao))
              ]),
              _: 1
            })
          ], 2)) : f("", !0),
          l.inGroup ? (c(), B(lo, Ie(Le({ key: 3 }, l.groupArrowProps)), null, 16)) : f("", !0)
        ], 34)) : f("", !0)
      ], 6)
    ], 8, ["to", "disabled"]));
  }
});
export {
  ho as default
};
