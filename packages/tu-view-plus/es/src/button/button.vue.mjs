import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, unref, renderSlot } from "vue";
import "./style/index.css";
const __default__ = defineComponent({ name: "tu-button" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: {
    type: null
  },
  setup(__props) {
    const buttonProps = __props;
    const buttonStyle = computed(() => {
      return { [`tu-button--${buttonProps.type}`]: buttonProps.type };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: normalizeClass(["tu-button", unref(buttonStyle)])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
