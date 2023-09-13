import { defineComponent as p, toRefs as b, openBlock as g, createBlock as $, unref as s, withCtx as e, createVNode as n, normalizeClass as P, createSlots as r, renderSlot as i, mergeProps as h } from "vue";
import { dropdownSubmenuProps as w, dropdownSubmenuEmits as V } from "./dropdown-submenu.mjs";
import { ArrowRight as v } from "@tu-view-plus/icons-vue";
import { TuTrigger as C } from "../../trigger/index.mjs";
import { TuIcon as S } from "../../icon/index.mjs";
import T from "./dropdown-item.vue.mjs";
import _ from "./dropdown-panel.vue.mjs";
import { useNamespace as k, useTrigger as B } from "@tu-view-plus/hooks";
const D = p({
  name: "TuDropdownSubmenu"
}), y = /* @__PURE__ */ p({
  ...D,
  props: w,
  emits: V,
  setup(u, { emit: l }) {
    const a = u, f = k("dropdown-submenu"), { defaultPopupVisible: m, popupVisible: d } = b(a), { computedPopupVisible: t, handlePopupVisibleChange: c } = B({
      defaultPopupVisible: m,
      popupVisible: d,
      emit: l
    });
    return (o, N) => (g(), $(s(C), {
      "popup-visible": s(t),
      trigger: o.trigger,
      position: o.position,
      disabled: o.disabled,
      "popup-offset": 6,
      onPopupVisibleChange: s(c)
    }, {
      content: e(() => [
        n(_, {
          class: P(s(f).b())
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
            ])
          } : void 0
        ]), 1032, ["class"])
      ]),
      default: e(() => [
        n(T, h(o.optionProps, {
          active: s(t),
          "uninject-context": ""
        }), r({
          suffix: e(() => [
            i(o.$slots, "suffix", {}, () => [
              n(s(S), null, {
                default: e(() => [
                  n(s(v))
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
            ])
          } : void 0
        ]), 1040, ["active"])
      ]),
      _: 3
    }, 8, ["popup-visible", "trigger", "position", "disabled", "onPopupVisibleChange"]));
  }
});
export {
  y as default
};
