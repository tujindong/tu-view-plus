import { defineComponent as i, computed as n, createVNode as a } from "vue";
import { colorPickerPaletteProps as f } from "./color-picker-palette.mjs";
import { useNamespace as v } from "@tu-view-plus/hooks";
import { useControlBlock as d } from "./hooks/use-control-block.mjs";
import { hsvToRgb as h } from "@tu-view-plus/utils";
import "../style/color-picker.css";
const $ = /* @__PURE__ */ i({
  name: "TuColorPickerPalette",
  props: f,
  setup(r) {
    const t = v("color-picker"), o = n(() => r.color.hsv), {
      blockRef: s,
      handlerRef: c,
      onMouseDown: u
    } = d({
      value: [o.value.s, 1 - o.value.v],
      onChange: (e) => {
        var l;
        return (l = r.onChange) == null ? void 0 : l.call(r, e[0], 1 - e[1]);
      }
    }), m = n(() => {
      const e = h(o.value.h, 1, 1);
      return `rgb(${e.r}, ${e.g}, ${e.b})`;
    });
    return () => a("div", {
      ref: s,
      class: t.e("palette"),
      style: {
        backgroundColor: m.value
      },
      onMousedown: u
    }, [a("div", {
      ref: c,
      class: t.e("handler"),
      style: {
        top: `${(1 - o.value.v) * 100}%`,
        left: `${o.value.s * 100}%`
      }
    }, null)]);
  }
});
export {
  $ as default
};
