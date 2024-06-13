import { defineComponent as d, computed as s, ref as c, createVNode as u } from "vue";
import { colorPickerPaletteProps as h } from "./color-picker-palette.mjs";
import { useNamespace as C } from "@tu-view-plus/hooks";
import { useControlBlock as b } from "./hooks/use-control-block.mjs";
import { hsvToRgb as g } from "@tu-view-plus/utils";
import "../style/color-picker.css";
const y = /* @__PURE__ */ d({
  name: "TuColorPickerPalette",
  props: h,
  setup(o) {
    const t = C("color-picker"), r = s(() => o.color.hsv), l = c(1 - r.value.v), n = c(r.value.s), {
      blockRef: f,
      handlerRef: i,
      onMouseDown: m
    } = b({
      value: [r.value.s, 1 - r.value.v],
      onChange: (e) => {
        var a;
        o.disabled || (l.value = e[1], n.value = e[0]), (a = o.onChange) == null || a.call(o, e[0], 1 - e[1]);
      }
    }), v = s(() => {
      const e = g(r.value.h, 1, 1);
      return `rgb(${e.r}, ${e.g}, ${e.b})`;
    });
    return () => u("div", {
      ref: f,
      class: t.e("palette"),
      style: {
        backgroundColor: v.value
      },
      onMousedown: m
    }, [u("div", {
      ref: i,
      class: t.e("handler"),
      style: {
        top: `${l.value * 100}%`,
        left: `${n.value * 100}%`
      }
    }, null)]);
  }
});
export {
  y as default
};
