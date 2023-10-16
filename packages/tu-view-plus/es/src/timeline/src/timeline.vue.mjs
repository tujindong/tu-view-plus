import { defineComponent as C, computed as a, toRefs as P, reactive as R, provide as b, createVNode as n } from "vue";
import { timelineProps as s } from "./timeline.mjs";
import { useNamespace as _, useChildrenComponents as h } from "@tu-view-plus/hooks";
import I from "./timeline-item.vue.mjs";
import { Loading as x } from "@tu-view-plus/icons-vue";
import { timelineInjectionKey as y } from "./constants.mjs";
import { TuIcon as N } from "../../icon/index.mjs";
import "../style/timeline.css";
const w = /* @__PURE__ */ C({
  name: "TuTimeline",
  props: s,
  setup(i, {
    slots: e
  }) {
    const t = _("timeline"), c = a(() => i.pending || e.pending), {
      children: m,
      components: l
    } = h("TuTimelineItem"), {
      reverse: u,
      direction: f,
      labelPosition: v,
      mode: p
    } = P(i), g = R({
      items: l,
      direction: f,
      reverse: u,
      labelPosition: v,
      mode: p
    }), T = a(() => ({
      [t.b()]: !0,
      [t.em("direction", i.direction)]: i.direction,
      [t.m(i.mode)]: i.mode,
      [t.m("reverse")]: i.reverse
    }));
    return b(y, g), () => {
      var r, o;
      return c.value ? m.value = (r = e.default) == null ? void 0 : r.call(e).concat(n(I, {
        lineType: "dashed"
      }, {
        default: () => [i.pending !== !0 && n("div", null, [i.pending])],
        dot: () => {
          var d;
          return ((d = e.dot) == null ? void 0 : d.call(e)) ?? n(N, {
            size: "18",
            class: "is-loading"
          }, {
            default: () => [n(x, null, null)]
          });
        }
      })) : m.value = (o = e.default) == null ? void 0 : o.call(e), n("div", {
        role: "list",
        class: T.value
      }, [m.value]);
    };
  }
});
export {
  w as default
};
