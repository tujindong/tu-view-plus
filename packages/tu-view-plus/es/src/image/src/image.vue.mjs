import C from "./image.vue2.mjs";
import { resolveComponent as l, openBlock as a, createElementBlock as p, normalizeClass as o, normalizeStyle as L, createElementVNode as s, mergeProps as I, renderSlot as t, createVNode as d, withCtx as m, toDisplayString as v, createCommentVNode as n, createBlock as u, createSlots as $ } from "vue";
import P from "../../../_virtual/_plugin-vue_export-helper.mjs";
const S = ["title", "alt"];
function E(e, r, b, z, B, V) {
  const y = l("Picture"), g = l("TuIcon"), f = l("Loading"), k = l("ImageFooter"), w = l("ImagePreview");
  return a(), p("div", {
    class: o(e.wrapperClasses),
    style: L(e.wrapperStyles)
  }, [
    s("img", I({ ref: "refImg" }, e.imgProps, {
      class: e.nsImage.e("img"),
      style: { ...e.sizeStyle, ...e.fitStyle },
      title: e.title,
      alt: e.alt,
      onLoad: r[0] || (r[0] = (...i) => e.onImgLoaded && e.onImgLoaded(...i)),
      onError: r[1] || (r[1] = (...i) => e.onImgLoadError && e.onImgLoadError(...i)),
      onClick: r[2] || (r[2] = (...i) => e.onImgClick && e.onImgClick(...i))
    }), null, 16, S),
    e.isLoaded ? n("", !0) : (a(), p("div", {
      key: 0,
      class: o(e.nsImage.e("overlay"))
    }, [
      e.isError ? t(e.$slots, "error", { key: 0 }, () => [
        s("div", {
          class: o(e.nsImage.m("error"))
        }, [
          s("div", {
            class: o(e.nsImage.e("error-icon"))
          }, [
            t(e.$slots, "error-icon", {}, () => [
              d(g, { size: "60" }, {
                default: m(() => [
                  d(y)
                ]),
                _: 1
              })
            ])
          ], 2),
          e.alt || e.description ? (a(), p("div", {
            key: 0,
            class: o(e.nsImage.e("error-alt"))
          }, v(e.alt || e.description), 3)) : n("", !0)
        ], 2)
      ]) : n("", !0),
      e.isLoading && (e.showLoader || e.$slots.loader) ? t(e.$slots, "loader", { key: 1 }, () => [
        s("div", {
          class: o(e.nsImage.e("loader"))
        }, [
          s("div", {
            class: o(e.nsImage.e("loader-spin"))
          }, [
            d(g, null, {
              default: m(() => [
                d(f)
              ]),
              _: 1
            }),
            s("div", {
              class: o(e.nsImage.e("loader-spin-text"))
            }, v(e.t("tu.image.loading")), 3)
          ], 2)
        ], 2)
      ]) : n("", !0)
    ], 2)),
    e.showFooter ? (a(), u(k, {
      key: 1,
      class: o(e.footerClass),
      "prefix-cls": e.nsImage,
      title: e.title,
      description: e.description
    }, $({ _: 2 }, [
      e.$slots.extra ? {
        name: "extra",
        fn: m(() => [
          t(e.$slots, "extra")
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["class", "prefix-cls", "title", "description"])) : n("", !0),
    e.isLoaded && e.mergePreview ? (a(), u(w, I({ key: 2 }, e.previewProps, {
      src: e.src,
      visible: e.mergedPreviewVisible,
      "render-to-body": e.renderToBody,
      onClose: e.onPreviewClose
    }), {
      actions: m(() => [
        t(e.$slots, "preview-actions")
      ]),
      _: 3
    }, 16, ["src", "visible", "render-to-body", "onClose"])) : n("", !0)
  ], 6);
}
const D = /* @__PURE__ */ P(C, [["render", E]]);
export {
  D as default
};
