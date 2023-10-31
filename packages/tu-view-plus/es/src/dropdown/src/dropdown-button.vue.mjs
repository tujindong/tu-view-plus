import { defineComponent as u, toRefs as C, openBlock as B, createElementBlock as P, normalizeClass as V, unref as e, createVNode as t, withCtx as i, mergeProps as z, renderSlot as p } from "vue";
import { dropdownButtonProps as y, dropdownButtonEmits as T } from "./dropdown-button.mjs";
import { useNamespace as k, useTrigger as D } from "@tu-view-plus/hooks";
import { TuButtonGroup as S, TuButton as l } from "../../button/index.mjs";
import { TuIcon as v } from "../../icon/index.mjs";
import { ArrowDown as $ } from "@tu-view-plus/icons-vue";
import E from "../index.mjs";
import "../style/dropdown.css";
const N = u({
  name: "TuDropdownButton"
}), H = /* @__PURE__ */ u({
  ...N,
  props: y,
  emits: T,
  setup(d, { emit: a }) {
    const m = d, n = a, c = k("dropdown-button"), { defaultPopupVisible: f, popupVisible: b } = C(m), { computedPopupVisible: s, handlePopupVisibleChange: g } = D({
      defaultPopupVisible: f,
      popupVisible: b,
      emit: n
    }), h = (o) => {
      n("click", o);
    }, w = (o, r) => {
      n("select", o, r);
    };
    return (o, r) => (B(), P("div", {
      class: V(e(c).b())
    }, [
      t(e(S), null, {
        default: i(() => [
          t(e(l), z(o.buttonProps, {
            size: o.size,
            type: o.type,
            disabled: o.disabled,
            onClick: h
          }), {
            default: i(() => [
              p(o.$slots, "default")
            ]),
            _: 3
          }, 16, ["size", "type", "disabled"]),
          t(e(E), {
            "popup-visible": e(s),
            trigger: o.trigger,
            position: o.position,
            "popup-container": o.popupContainer,
            "hide-on-select": o.hideOnSelect,
            onSelect: w,
            onPopupVisibleChange: e(g)
          }, {
            content: i(() => [
              p(o.$slots, "content")
            ]),
            default: i(() => [
              t(e(l), {
                size: o.size,
                type: o.type,
                disabled: o.disabled
              }, {
                icon: i(() => [
                  p(o.$slots, "icon", { popupVisible: e(s) }, () => [
                    t(e(v), null, {
                      default: i(() => [
                        t(e($))
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
  H as default
};
