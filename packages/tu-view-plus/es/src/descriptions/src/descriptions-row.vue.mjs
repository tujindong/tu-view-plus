import { defineComponent as m, inject as y, unref as r, openBlock as e, createElementBlock as n, Fragment as o, createElementVNode as a, renderList as i, createBlock as p, createVNode as d } from "vue";
import { descriptionsInjectionKey as k } from "./constants.mjs";
import { descriptionsRowProps as f } from "./descriptions-row.mjs";
import c from "./descriptions-cell.mjs";
const _ = { key: 1 }, g = m({
  name: "TuDescriptionsRow"
}), C = /* @__PURE__ */ m({
  ...g,
  props: f,
  setup(h) {
    const s = y(k, {});
    return (u, w) => r(s).direction === "vertical" ? (e(), n(o, { key: 0 }, [
      a("tr", null, [
        (e(!0), n(o, null, i(u.row, (t, l) => (e(), p(r(c), {
          key: `tr1-${l}`,
          cell: t,
          tag: "th",
          type: "label"
        }, null, 8, ["cell"]))), 128))
      ]),
      a("tr", null, [
        (e(!0), n(o, null, i(u.row, (t, l) => (e(), p(r(c), {
          key: `tr2-${l}`,
          cell: t,
          tag: "td",
          type: "content"
        }, null, 8, ["cell"]))), 128))
      ])
    ], 64)) : (e(), n("tr", _, [
      (e(!0), n(o, null, i(u.row, (t, l) => (e(), n(o, {
        key: `tr3-${l}`
      }, [
        r(s).border ? (e(), n(o, { key: 0 }, [
          d(r(c), {
            cell: t,
            tag: "th",
            type: "label"
          }, null, 8, ["cell"]),
          d(r(c), {
            cell: t,
            tag: "td",
            type: "content"
          }, null, 8, ["cell"])
        ], 64)) : (e(), p(r(c), {
          key: 1,
          cell: t,
          tag: "td",
          type: "both"
        }, null, 8, ["cell"]))
      ], 64))), 128))
    ]));
  }
});
export {
  C as default
};
