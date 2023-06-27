import { defineComponent as u, watch as a, onBeforeUnmount as p } from "vue";
import d from "resize-observer-polyfill";
import { useFirstElement as v } from "@tu-view-plus/hooks";
const R = /* @__PURE__ */ u({
  name: "TuResizeObserver",
  props: {
    watchOnUpdated: Boolean
  },
  emits: [
    /**
     * @zh resize 事件
     * @property {ResizeObserverEntry} entry 触发 resize 的 dom 元素
     */
    "resize"
  ],
  setup(z, {
    emit: s,
    slots: n
  }) {
    const {
      children: t,
      firstElement: o
    } = v();
    let r;
    const f = (e) => {
      e && (r = new d((c) => {
        const m = c[0];
        s("resize", m);
      }), r.observe(e));
    }, i = () => {
      r && (r.disconnect(), r = null);
    };
    return a(o, (e) => {
      r && i(), e && f(e);
    }), p(() => {
      r && i();
    }), () => {
      var e;
      return t.value = (e = n.default) == null ? void 0 : e.call(n), t.value;
    };
  }
});
export {
  R as default
};
