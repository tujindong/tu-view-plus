import { defineComponent as E, toRefs as M, ref as N, computed as a, reactive as g, provide as O, createVNode as d, nextTick as R } from "vue";
import { tabsProps as S, tabsEmits as $ } from "./tabs.mjs";
import { useNamespace as j, useChildrenComponents as k } from "@tu-view-plus/hooks";
import { isUndefined as H } from "@tu-view-plus/utils";
import U from "./tabs-nav.vue.mjs";
import { tabsInjectionKey as V } from "./constants.mjs";
import "../style/tabs.css";
const p = /* @__PURE__ */ E({
  name: "TuTabs",
  props: S,
  emits: $,
  setup(t, {
    emit: c,
    slots: l
  }) {
    const n = j("tabs"), {
      lazyLoad: x,
      destroyOnHide: I,
      trigger: T
    } = M(t), m = N(t.defaultActiveKey), o = a(() => t.direction === "vertical" ? "left" : t.position), v = a(() => ["left", "right"].includes(o.value) ? "vertical" : "horizontal"), {
      children: f,
      components: z
    } = k("TuTabPane"), r = g(/* @__PURE__ */ new Map()), b = a(() => {
      const e = [];
      return z.value.forEach((i) => {
        const K = r.get(i);
        K && e.push(K);
      }), e;
    }), s = a(() => b.value.map((e) => e.key)), u = a(() => {
      const e = t.activeKey ?? m.value;
      return H(e) ? s.value[0] : e;
    }), h = a(() => {
      const e = s.value.indexOf(u.value);
      return e === -1 ? 0 : e;
    }), A = a(() => ({
      [n.b()]: !0,
      [n.m(v.value)]: v.value,
      [n.m(o.value)]: o.value,
      [n.m(t.type)]: t.type,
      [n.m(t.size)]: t.size
    })), w = a(() => ({
      [n.e("content")]: !0,
      [n.is("hide")]: t.hideContent
    })), L = a(() => ({
      [n.e("content-list")]: !0,
      [n.is("animation")]: t.animation
    })), P = a(() => ({
      marginLeft: `-${h.value * 100}%`
    })), _ = (e, i) => {
      y(e), c("tabClick", e, i);
    }, D = (e) => {
      c("add", e), t.autoSwitch && R(() => {
        const i = s.value[s.value.length - 1];
        y(i);
      });
    }, B = (e, i) => {
      c("delete", e, i);
    }, y = (e) => {
      e !== u.value && (m.value = e, c("update:activeKey", e), c("change", e));
    };
    O(V, g({
      lazyLoad: x,
      destroyOnHide: I,
      activeKey: u,
      addItem: (e, i) => {
        r.set(e, i);
      },
      removeItem: (e) => {
        r.delete(e);
      },
      trigger: T
    }));
    const C = () => d("div", {
      class: w.value
    }, [d("div", {
      class: L.value,
      style: P.value
    }, [f.value])]);
    return () => {
      var e;
      return f.value = (e = l.default) == null ? void 0 : e.call(l), d("div", {
        class: A.value
      }, [o.value === "bottom" ? C() : null, d(U, {
        tabs: b.value,
        activeKey: u.value,
        activeIndex: h.value,
        direction: v.value,
        position: o.value,
        editable: t.editable,
        animation: t.animation,
        showAddButton: t.showAddButton,
        headerPadding: t.headerPadding,
        size: t.size,
        type: t.type,
        onClick: _,
        onAdd: D,
        onDelete: B
      }, {
        extra: l.extra
      }), o.value !== "bottom" ? C() : null]);
    };
  }
});
export {
  p as default
};
