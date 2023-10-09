import { defineComponent as M, toRefs as N, ref as O, computed as a, reactive as g, provide as V, watch as B, createVNode as d, nextTick as R } from "vue";
import { tabsProps as S, tabsEmits as U } from "./tabs.mjs";
import { useNamespace as $, useChildrenComponents as j } from "@tu-view-plus/hooks";
import { isUndefined as H } from "@tu-view-plus/utils";
import { UPDATE_MODEL_EVENT as k } from "@tu-view-plus/constants";
import q from "./tabs-nav.vue.mjs";
import { tabsInjectionKey as F } from "./constants.mjs";
import "../style/tabs.css";
const ae = /* @__PURE__ */ M({
  name: "TuTabs",
  props: S,
  emits: U,
  setup(t, {
    emit: o,
    slots: l
  }) {
    const n = $("tabs"), {
      lazyLoad: T,
      destroyOnHide: x,
      trigger: A
    } = N(t), f = O(t.defaultActiveKey), c = a(() => t.direction === "vertical" ? "left" : t.position), v = a(() => ["left", "right"].includes(c.value) ? "vertical" : "horizontal"), {
      children: h,
      components: I
    } = j("TuTabPane"), r = g(/* @__PURE__ */ new Map()), b = a(() => {
      const e = [];
      return I.value.forEach((i) => {
        const K = r.get(i);
        K && e.push(K);
      }), e;
    }), s = a(() => b.value.map((e) => e.key)), u = a(() => {
      const e = t.activeKey ?? f.value;
      return H(e) ? s.value[0] : e;
    }), y = a(() => {
      const e = s.value.indexOf(u.value);
      return e === -1 ? 0 : e;
    }), z = a(() => ({
      [n.b()]: !0,
      [n.m(v.value)]: v.value,
      [n.m(c.value)]: c.value,
      [n.m(t.type)]: t.type,
      [n.m(t.size)]: t.size
    })), E = a(() => ({
      [n.e("content")]: !0,
      [n.is("hide")]: t.hideContent
    })), _ = a(() => ({
      [n.e("content-list")]: !0,
      [n.is("animation")]: t.animation
    })), w = a(() => ({
      marginLeft: `-${y.value * 100}%`
    })), D = (e, i) => {
      m(e), o("tabClick", e, i);
    }, L = (e) => {
      o("add", e), t.autoSwitch && R(() => {
        const i = s.value[s.value.length - 1];
        m(i);
      });
    }, P = (e, i) => {
      o("delete", e, i);
    }, m = (e) => {
      e !== u.value && (f.value = e, o("update:activeKey", e), o("change", e), o(k, e));
    };
    V(F, g({
      lazyLoad: T,
      destroyOnHide: x,
      activeKey: u,
      addItem: (e, i) => {
        r.set(e, i);
      },
      removeItem: (e) => {
        r.delete(e);
      },
      trigger: A
    })), B(() => t.modelValue, (e) => m(e));
    const C = () => d("div", {
      class: E.value
    }, [d("div", {
      class: _.value,
      style: w.value
    }, [h.value])]);
    return () => {
      var e;
      return h.value = (e = l.default) == null ? void 0 : e.call(l), d("div", {
        class: z.value
      }, [c.value === "bottom" ? C() : null, d(q, {
        tabs: b.value,
        activeKey: u.value,
        activeIndex: y.value,
        direction: v.value,
        position: c.value,
        editable: t.editable,
        animation: t.animation,
        showAddButton: t.showAddButton,
        headerPadding: t.headerPadding,
        size: t.size,
        type: t.type,
        onClick: D,
        onAdd: L,
        onDelete: P
      }, {
        extra: l.extra
      }), c.value !== "bottom" ? C() : null]);
    };
  }
});
export {
  ae as default
};
