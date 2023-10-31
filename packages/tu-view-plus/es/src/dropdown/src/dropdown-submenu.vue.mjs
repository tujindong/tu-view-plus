import { defineComponent as p, toRefs as g, openBlock as $, createBlock as P, unref as s, withCtx as e, createVNode as t, normalizeClass as h, createSlots as r, renderSlot as i, mergeProps as w } from "vue";
import { dropdownSubmenuProps as V, dropdownSubmenuEmits as v } from "./dropdown-submenu.mjs";
import { ArrowRight as C } from "@tu-view-plus/icons-vue";
import { TuTrigger as S } from "../../trigger/index.mjs";
import { TuIcon as T } from "../../icon/index.mjs";
import _ from "./dropdown-item.vue.mjs";
import k from "./dropdown-panel.vue.mjs";
import { useNamespace as y, useTrigger as B } from "@tu-view-plus/hooks";
const D = p({
  name: "TuDropdownSubmenu"
}), F = /* @__PURE__ */ p({
  ...D,
  props: V,
  emits: v,
  setup(u, { emit: l }) {
    const m = y("dropdown-submenu"), a = u, f = l, { defaultPopupVisible: d, popupVisible: c } = g(a), { computedPopupVisible: n, handlePopupVisibleChange: b } = B({
      defaultPopupVisible: d,
      popupVisible: c,
      emit: f
    });
    return (o, N) => ($(), P(s(S), {
      "popup-visible": s(n),
      trigger: o.trigger,
      position: o.position,
      disabled: o.disabled,
      "popup-offset": 6,
      onPopupVisibleChange: s(b)
    }, {
      content: e(() => [
        t(k, {
          class: h(s(m).b())
        }, r({
          default: e(() => [
            i(o.$slots, "content")
          ]),
          _: 2
        }, [
          o.$slots.footer ? {
            name: "footer",
            fn: e(() => [
              i(o.$slots, "footer")
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["class"])
      ]),
      default: e(() => [
        t(_, w(o.optionProps, {
          active: s(n),
          "uninject-context": ""
        }), r({
          suffix: e(() => [
            i(o.$slots, "suffix", {}, () => [
              t(s(T), null, {
                default: e(() => [
                  t(s(C))
                ]),
                _: 1
              })
            ])
          ]),
          default: e(() => [
            i(o.$slots, "default")
          ]),
          _: 2
        }, [
          o.$slots.icon ? {
            name: "icon",
            fn: e(() => [
              i(o.$slots, "icon")
            ]),
            key: "0"
          } : void 0
        ]), 1040, ["active"])
      ]),
      _: 3
    }, 8, ["popup-visible", "trigger", "position", "disabled", "onPopupVisibleChange"]));
  }
});
export {
  F as default
};
