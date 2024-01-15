import { defineComponent as f, openBlock as r, createElementBlock as n, normalizeClass as s, unref as e, renderSlot as l, createCommentVNode as i, createVNode as b, withCtx as m, createTextVNode as d, toDisplayString as p, createBlock as w } from "vue";
import { footerProps as B, footerEmits as h } from "./footer.mjs";
import { useNamespace as T, useLocale as v } from "@tu-view-plus/hooks";
import { TuButton as u } from "../../../button/index.mjs";
const N = f({
  name: "TuFooter"
}), P = /* @__PURE__ */ f({
  ...N,
  props: B,
  emits: h,
  setup(_, { emit: k }) {
    const a = k, o = T("picker"), { t: c } = v(), y = () => {
      a("today-btn-click");
    }, C = () => {
      a("confirm-btn-click");
    };
    return (t, $) => (r(), n("div", {
      class: s(e(o).e("dropdown-footer"))
    }, [
      t.$slots.extra ? (r(), n("div", {
        key: 0,
        class: s(e(o).e("extra-wrap"))
      }, [
        l(t.$slots, "extra")
      ], 2)) : i("", !0),
      t.showTodayBtn ? (r(), n("div", {
        key: 1,
        class: s(e(o).e("now-wrap"))
      }, [
        b(e(u), {
          type: "text",
          size: "mini",
          onClick: y
        }, {
          default: m(() => [
            d(p(e(c)("tu.datepicker.today")), 1)
          ]),
          _: 1
        })
      ], 2)) : i("", !0),
      t.$slots.btn || t.showConfirmBtn ? (r(), n("div", {
        key: 2,
        class: s(e(o).e("button-wrap"))
      }, [
        l(t.$slots, "button"),
        t.showConfirmBtn ? (r(), w(e(u), {
          key: 0,
          type: "primary",
          size: "mini",
          class: s(e(o).e("button-confirm")),
          disabled: t.confirmBtnDisabled,
          onClick: C
        }, {
          default: m(() => [
            d(p(e(c)("tu.datepicker.confirm")), 1)
          ]),
          _: 1
        }, 8, ["class", "disabled"])) : i("", !0)
      ], 2)) : i("", !0)
    ], 2));
  }
});
export {
  P as default
};
