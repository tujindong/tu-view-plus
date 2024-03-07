import { defineComponent as A, toRefs as D, ref as y, computed as d, reactive as F, watch as C, createVNode as l, mergeProps as b } from "vue";
import { paginationProps as J, paginationEmits as R } from "./pagination.mjs";
import { useNamespace as V, useLocale as q } from "@tu-view-plus/hooks";
import { isNumber as B } from "@tu-view-plus/utils";
import "../../form/index.mjs";
import k from "./pagination-jumper.vue.mjs";
import G from "./pagination-item.vue.mjs";
import H from "./pagination-item-ellipsis.vue.mjs";
import x from "./pagination-item-step.vue.mjs";
import K from "./pagination-options.vue.mjs";
import "../style/pagination.css";
import { useFormSize as Q, useFormDisabled as U } from "../../form/src/hooks/use-form-props.mjs";
const se = /* @__PURE__ */ A({
  name: "TuPagination",
  props: J,
  emits: R,
  setup(a, {
    emit: m,
    slots: r
  }) {
    const {
      pageItemStyle: N,
      activePageItemStyle: j
    } = D(a), o = V("pagination"), {
      t: w
    } = q(), c = Q(), v = U(), g = y(a.defaultCurrent), P = y(a.defaultPageSize), M = d(() => ({
      [o.b()]: !0,
      [o.m(c.value)]: c.value,
      [o.m("button")]: a.button,
      [o.is("simple")]: a.simple,
      [o.is("disabled")]: v.value
    })), i = d(() => a.current ?? g.value), z = d(() => a.pageSize ?? P.value), u = d(() => Math.ceil(a.total / z.value)), S = (e) => {
      e !== i.value && B(e) && !a.disabled && (g.value = e, m("update:current", e), m("change", e));
    }, $ = (e) => {
      P.value = e, m("update:pageSize", e), m("pageSizeChange", e);
    }, p = F({
      current: i,
      pages: u,
      disabled: v,
      style: N,
      activeStyle: j,
      onClick: S
    });
    C(z, (e, t) => {
      if (a.autoAdjust && e !== t && i.value > 1) {
        const s = t * (i.value - 1) + 1, f = Math.ceil(s / e);
        f !== i.value && (g.value = f, m("update:current", f), m("change", f));
      }
    }), C(u, (e, t) => {
      a.autoAdjust && e !== t && i.value > 1 && i.value > e && (g.value = e, m("update:current", e), m("change", e));
    });
    const E = d(() => {
      const e = [];
      if (u.value < a.baseSize + a.bufferSize * 2)
        for (let t = 1; t <= u.value; t++)
          e.push(n("page", {
            key: t,
            pageNumber: t
          }));
      else {
        let t = 1, s = u.value, f = !1, _ = !1;
        i.value > 2 + a.bufferSize && (f = !0, t = Math.min(i.value - a.bufferSize, u.value - 2 * a.bufferSize)), i.value < u.value - (a.bufferSize + 1) && (_ = !0, s = Math.max(i.value + a.bufferSize, 2 * a.bufferSize + 1)), f && (e.push(n("page", {
          key: 1,
          pageNumber: 1
        })), e.push(n("more", {
          key: "left-ellipsis-pager",
          step: -(a.bufferSize * 2 + 1)
        })));
        for (let h = t; h <= s; h++)
          e.push(n("page", {
            key: h,
            pageNumber: h
          }));
        _ && (e.push(n("more", {
          key: "right-ellipsis-pager",
          step: a.bufferSize * 2 + 1
        })), e.push(n("page", {
          key: u.value,
          pageNumber: u.value
        })));
      }
      return e;
    }), n = (e, t = {}) => e === "more" ? l(H, b(t, p), {
      default: r["page-item-ellipsis"]
    }) : e === "previous" ? l(x, b({
      type: "previous"
    }, t, p), {
      default: r["page-item-step"]
    }) : e === "next" ? l(x, b({
      type: "next"
    }, t, p), {
      default: r["page-item-step"]
    }) : l(G, b(t, p), {
      default: r["page-item"]
    }), L = () => {
      var s;
      const {
        showTotal: e,
        total: t
      } = a;
      return e && l("span", {
        class: o.e("total")
      }, [((s = r.total) == null ? void 0 : s.call(r, {
        total: t
      })) ?? w("tu.pagination.total", {
        total: t
      })]);
    }, I = () => {
      const {
        simple: e,
        showMore: t,
        bufferSize: s
      } = a;
      return e ? l("span", {
        class: o.e("simple")
      }, [n("previous", {
        simple: !0
      }), l(k, {
        simple: !0,
        disabled: v.value,
        current: i.value,
        size: c.value,
        pages: u.value,
        onChange: S
      }, null), n("next", {
        simple: !0
      })]) : l("ul", {
        class: o.e("list")
      }, [n("previous", {
        simple: !0
      }), E.value, t && n("more", {
        key: "more",
        step: s * 2 + 1
      }), n("next", {
        simple: !0
      })]);
    }, O = () => {
      const {
        showPageSize: e
      } = a;
      return e && l(K, {
        disabled: v.value,
        sizeOptions: a.pageSizeOptions,
        pageSize: z.value,
        size: c.value,
        onChange: $,
        selectProps: a.pageSizeProps
      }, null);
    }, T = () => {
      const {
        simple: e,
        showJumper: t
      } = a;
      return !e && t && l(k, {
        disabled: a.disabled,
        current: i.value,
        pages: u.value,
        size: c.value,
        onChange: S
      }, {
        "jumper-prepend": r["jumper-prepend"],
        "jumper-append": r["jumper-append"]
      });
    };
    return () => l("div", {
      class: M.value
    }, [L(), I(), O(), T()]);
  }
});
export {
  se as default
};
