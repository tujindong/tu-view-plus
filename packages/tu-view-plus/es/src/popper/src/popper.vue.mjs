import { defineComponent as r, ref as e, computed as _, provide as d, renderSlot as l } from "vue";
import { POPPER_INJECTION_KEY as u } from "./constants.mjs";
import { popperProps as P } from "./popper.mjs";
import "../style/popper.css";
const R = r({
  name: "TuPopper",
  inheritAttrs: !1
}), x = /* @__PURE__ */ r({
  ...R,
  props: P,
  setup(t, { expose: p }) {
    const n = t, s = e(), c = e(), f = e(), i = e(), m = _(() => n.role), o = {
      /**
       * @zh 触发元素
       * @en trigger element
       */
      triggerRef: s,
      /**
       * @zh popperjs 实例
       * @en popperjs instance
       */
      popperInstanceRef: c,
      /**
       * @zh popper 内容元素
       * @en popper content element
       */
      contentRef: f,
      /**
       * @zh popper 参考元素
       * @en popper reference element
       */
      referenceRef: i,
      /**
       * @zh role用于定义aria属性方式
       * @en role determines how aria attributes are distributed
       */
      role: m
    };
    return p(o), d(u, o), (a, E) => l(a.$slots, "default");
  }
});
export {
  x as default
};
