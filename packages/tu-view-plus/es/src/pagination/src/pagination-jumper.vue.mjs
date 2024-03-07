import { defineComponent as c, ref as C, computed as b, watch as h, openBlock as t, createElementBlock as r, normalizeClass as o, unref as s, renderSlot as i, createTextVNode as y, toDisplayString as u, createCommentVNode as l, createVNode as z, Fragment as T, createElementVNode as d, nextTick as E } from "vue";
import { paginationJumperProps as J, paginationJumperEmits as P } from "./pagination-jumper.mjs";
import { useNamespace as $, useLocale as B } from "@tu-view-plus/hooks";
import { TuInputNumber as S } from "../../input-number/index.mjs";
import "../style/pagination.css";
const w = c({
  name: "TuPaginationJumper"
}), q = /* @__PURE__ */ c({
  ...w,
  props: J,
  emits: P,
  setup(g, { emit: f }) {
    const n = g, j = f, a = $("pagination"), { t: v } = B(), p = C(n.simple ? n.current : void 0), V = b(() => ({
      [a.e("jumper")]: !0,
      [a.is("simple")]: n.simple
    }));
    h(
      () => n.current,
      (e) => {
        n.simple && e !== p.value && (p.value = e);
      }
    );
    const k = (e) => {
      j("change", p.value), E(() => {
        n.simple || (p.value = void 0);
      });
    };
    return (e, m) => (t(), r("span", {
      class: o(V.value)
    }, [
      e.simple ? l("", !0) : (t(), r("span", {
        key: 0,
        class: o(s(a).e("jumper-prepend"))
      }, [
        i(e.$slots, "jumper-prepend", {}, () => [
          y(u(s(v)("tu.pagination.goto")), 1)
        ])
      ], 2)),
      z(s(S), {
        modelValue: p.value,
        "onUpdate:modelValue": m[0] || (m[0] = (N) => p.value = N),
        class: o(s(a).e("jumper-input")),
        min: 1,
        max: e.pages,
        size: e.size,
        disabled: e.disabled,
        controls: !1,
        onChange: k
      }, null, 8, ["modelValue", "class", "max", "size", "disabled"]),
      e.$slots["jumper-append"] ? (t(), r("span", {
        key: 1,
        class: o(s(a).e("jumper-append"))
      }, [
        i(e.$slots, "jumper-append")
      ], 2)) : l("", !0),
      e.simple ? (t(), r(T, { key: 2 }, [
        d("span", {
          class: o(s(a).e("jumper-separator"))
        }, "/", 2),
        d("span", {
          class: o(s(a).e("jumper-total-page"))
        }, u(e.pages), 3)
      ], 64)) : l("", !0)
    ], 2));
  }
});
export {
  q as default
};
