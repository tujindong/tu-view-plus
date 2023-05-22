"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
require("./style/index.css");
const __default__ = vue.defineComponent({ name: "tu-button" });
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: {
    type: null
  },
  setup(__props) {
    const buttonProps = __props;
    const buttonStyle = vue.computed(() => {
      return { [`tu-button--${buttonProps.type}`]: buttonProps.type };
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("button", {
        class: vue.normalizeClass(["tu-button", vue.unref(buttonStyle)])
      }, [
        vue.renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
exports.default = _sfc_main;
