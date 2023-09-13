import { defineComponent as u, toRefs as w, openBlock as C, createElementBlock as B, normalizeClass as P, unref as e, createVNode as p, withCtx as t, mergeProps as V, renderSlot as i } from "vue";
import { dropdownButtonProps as z, dropdownButtonEmits as y } from "./dropdown-button.mjs";
import { useNamespace as T, useTrigger as k } from "@tu-view-plus/hooks";
import { TuButtonGroup as D, TuButton as l } from "../../button/index.mjs";
import { TuIcon as S } from "../../icon/index.mjs";
import { ArrowDown as v } from "@tu-view-plus/icons-vue";
import $ from "../index.mjs";
import "../style/dropdown.css";
const E = u({
  name: "TuDropdownButton"
}), F = /* @__PURE__ */ u({
  ...E,
  props: z,
  emits: y,
  setup(d, { emit: n }) {
    const a = d, m = T("dropdown-button"), { defaultPopupVisible: c, popupVisible: f } = w(a), { computedPopupVisible: s, handlePopupVisibleChange: b } = k({
      defaultPopupVisible: c,
      popupVisible: f,
      emit: n
    }), g = (o) => {
      n("click", o);
    }, h = (o, r) => {
      n("select", o, r);
    };
    return (o, r) => (C(), B("div", {
      class: P(e(m).b())
    }, [
      p(e(D), null, {
        default: t(() => [
          p(e(l), V(o.buttonProps, {
            size: o.size,
            type: o.type,
            disabled: o.disabled,
            onClick: g
          }), {
            default: t(() => [
              i(o.$slots, "default")
            ]),
            _: 3
          }, 16, ["size", "type", "disabled"]),
          p(e($), {
            "popup-visible": e(s),
            trigger: o.trigger,
            position: o.position,
            "popup-container": o.popupContainer,
            "hide-on-select": o.hideOnSelect,
            onSelect: h,
            onPopupVisibleChange: e(b)
          }, {
            content: t(() => [
              i(o.$slots, "content")
            ]),
            default: t(() => [
              p(e(l), {
                size: o.size,
                type: o.type,
                disabled: o.disabled
              }, {
                icon: t(() => [
                  i(o.$slots, "icon", { popupVisible: e(s) }, () => [
                    p(e(S), null, {
                      default: t(() => [
                        p(e(v))
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 3
              }, 8, ["size", "type", "disabled"])
            ]),
            _: 3
          }, 8, ["popup-visible", "trigger", "position", "popup-container", "hide-on-select", "onPopupVisibleChange"])
        ]),
        _: 3
      })
    ], 2));
  }
});
export {
  F as default
};
