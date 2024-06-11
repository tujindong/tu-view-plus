import { defineComponent as s, computed as d, createVNode as e } from "vue";
import { colorPickerControlBarProps as m } from "./color-picker-control-bar.mjs";
import { useNamespace as b } from "@tu-view-plus/hooks";
import { useControlBlock as f } from "./hooks/use-control-block.mjs";
import "../style/color-picker.css";
const P = /* @__PURE__ */ s({
  name: "TuColorPickerControlBar",
  props: m,
  setup(o) {
    const r = b("color-picker"), n = d(() => o.color.rgb), {
      blockRef: l,
      handlerRef: i,
      onMouseDown: t
    } = f({
      value: [o.x, 0],
      onChange: (u) => {
        var c;
        return (c = o.onChange) == null ? void 0 : c.call(o, u[0]);
      }
    }), a = () => e("div", {
      ref: i,
      class: r.e("control-bar-handler"),
      style: {
        left: `${o.x * 100}%`,
        color: o.colorString
      }
    }, null);
    return () => o.type === "alpha" ? e("div", {
      class: r.e("control-bar-bg")
    }, [e("div", {
      ref: l,
      class: [r.e("control-bar"), r.em("control-bar", "alpha")],
      style: {
        background: `linear-gradient(to right, rgba(0, 0, 0, 0), rgb(${n.value.r}, ${n.value.g}, ${n.value.b}))`
      },
      onMousedown: t
    }, [a()])]) : e("div", {
      ref: l,
      class: [r.e("control-bar"), r.em("control-bar", "hue")],
      onMousedown: t
    }, [a()]);
  }
});
export {
  P as default
};
