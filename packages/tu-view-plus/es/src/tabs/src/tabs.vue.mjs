import { defineComponent as M, toRefs as N, ref as O, computed as a, reactive as g, provide as V, watch as z, createVNode as d, nextTick as B } from "vue";
import { tabsProps as R, tabsEmits as S } from "./tabs.mjs";
import { useNamespace as U, useChildrenComponents as $ } from "@tu-view-plus/hooks";
import { isUndefined as j } from "@tu-view-plus/utils";
import { UPDATE_MODEL_EVENT as H } from "@tu-view-plus/constants";
import k from "./tabs-nav.vue.mjs";
import { tabsInjectionKey as q } from "./constants.mjs";
import "../style/tabs.css";
const ae = /* @__PURE__ */ M({
  name: "TuTabs",
  props: R,
  emits: S,
  setup(t, {
    emit: i,
    slots: l
  }) {
    const o = U("tabs"), {
      lazyLoad: T,
      destroyOnHide: x,
      trigger: A
    } = N(t), f = O(t.defaultActiveKey), c = a(() => t.direction === "vertical" ? "left" : t.position), r = a(() => ["left", "right"].includes(c.value) ? "vertical" : "horizontal"), {
      children: h,
      components: I
    } = $("TuTabPane"), v = g(/* @__PURE__ */ new Map()), b = a(() => {
      const e = [];
      return I.value.forEach((n) => {
        const K = v.get(n);
        K && e.push(K);
      }), e;
    }), s = a(() => b.value.map((e) => e.key)), u = a(() => {
      const e = t.activeKey ?? f.value;
      return j(e) ? s.value[0] : e;
    }), y = a(() => {
      const e = s.value.indexOf(u.value);
      return e === -1 ? 0 : e;
    }), E = a(() => ({
      [o.b()]: !0,
      [o.m(r.value)]: r.value,
      [o.m(c.value)]: c.value,
      [o.m(t.type)]: t.type
    })), _ = a(() => ({
      [o.e("content")]: !0,
      [o.is("hide")]: t.hideContent
    })), w = a(() => ({
      [o.e("content-list")]: !0,
      [o.is("animation")]: t.animation
    })), D = a(() => ({
      marginLeft: `-${y.value * 100}%`
    })), L = (e, n) => {
      m(e), i("tabClick", e, n);
    }, P = (e) => {
      i("add", e), t.autoSwitch && B(() => {
        const n = s.value[s.value.length - 1];
        m(n);
      });
    }, p = (e, n) => {
      i("delete", e, n);
    }, m = (e) => {
      e !== u.value && (f.value = e, i("update:activeKey", e), i("change", e), i(H, e));
    };
    V(q, g({
      lazyLoad: T,
      destroyOnHide: x,
      activeKey: u,
      addItem: (e, n) => {
        v.set(e, n);
      },
      removeItem: (e) => {
        v.delete(e);
      },
      trigger: A
    })), z(() => t.modelValue, (e) => m(e));
    const C = () => d("div", {
      class: _.value
    }, [d("div", {
      class: w.value,
      style: D.value
    }, [h.value])]);
    return () => {
      var e;
      return h.value = (e = l.default) == null ? void 0 : e.call(l), d("div", {
        class: E.value
      }, [c.value === "bottom" ? C() : null, d(k, {
        tabs: b.value,
        activeKey: u.value,
        activeIndex: y.value,
        direction: r.value,
        position: c.value,
        editable: t.editable,
        animation: t.animation,
        showAddButton: t.showAddButton,
        headerPadding: t.headerPadding,
        type: t.type,
        onClick: L,
        onAdd: P,
        onDelete: p
      }, {
        extra: l.extra
      }), c.value !== "bottom" ? C() : null]);
    };
  }
});
export {
  ae as default
};
