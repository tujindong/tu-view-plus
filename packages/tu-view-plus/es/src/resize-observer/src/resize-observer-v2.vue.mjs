import { defineComponent as m, ref as a, computed as l, watch as v, onMounted as d, onUnmounted as p, cloneVNode as z } from "vue";
import b from "resize-observer-polyfill";
import { isComponentInstance as O, getFirstComponent as R } from "@tu-view-plus/utils";
const V = /* @__PURE__ */ m({
  name: "TuResizeObserverV2",
  emits: [
    /**
     * @zh resize 事件
     * @property {ResizeObserverEntry} entry 触发 resize 的 dom 元素
     */
    "resize"
  ],
  setup(C, {
    emit: f,
    slots: o
  }) {
    let n;
    const r = a(), i = l(() => O(r.value) ? r.value.$el : r.value), s = (e) => {
      e && (n = new b((t) => {
        const c = t[0];
        f("resize", c);
      }), n.observe(e));
    }, u = () => {
      n && (n.disconnect(), n = null);
    };
    return v(i, (e) => {
      n && u(), e && s(e);
    }), d(() => {
      i.value && s(i.value);
    }), p(() => {
      u();
    }), () => {
      var t;
      const e = R(((t = o.default) == null ? void 0 : t.call(o)) ?? []);
      return e ? z(e, {
        ref: r
      }, !0) : null;
    };
  }
});
export {
  V as default
};
