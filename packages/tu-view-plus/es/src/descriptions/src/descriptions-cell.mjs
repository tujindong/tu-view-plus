import { defineComponent as C, inject as v, h as s } from "vue";
import { isNil as j } from "lodash-unified";
import { getNormalizedProps as w, addUnit as y } from "@tu-view-plus/utils";
import { useNamespace as A } from "@tu-view-plus/hooks";
import { descriptionsInjectionKey as D } from "./constants.mjs";
const I = C({
  name: "TuDescriptionsCell",
  props: {
    cell: {
      type: Object
    },
    tag: {
      type: String
    },
    type: {
      type: String
    }
  },
  setup() {
    return {
      descriptions: v(
        D,
        {}
      )
    };
  },
  render() {
    var h, i, g, u, c, f;
    const e = A("descriptions"), t = w(
      this.cell
    ), { border: p, direction: N } = this.descriptions, l = N === "vertical", a = ((g = (i = (h = this.cell) == null ? void 0 : h.children) == null ? void 0 : i.label) == null ? void 0 : g.call(i)) || t.label, d = (f = (c = (u = this.cell) == null ? void 0 : u.children) == null ? void 0 : c.default) == null ? void 0 : f.call(c), n = t.span, o = t.align ? `is-${t.align}` : "", S = t.labelAlign ? `is-${t.labelAlign}` : o, m = t.className, b = t.labelClassName, r = {
      width: y(t.width),
      minWidth: y(t.minWidth)
    };
    switch (this.type) {
      case "label":
        return s(
          String(this.tag),
          {
            style: r,
            class: [
              e.e("cell"),
              e.e("label"),
              e.is("bordered-label", p),
              e.is("vertical-label", l),
              S,
              b
            ],
            colSpan: l ? n : 1
          },
          a
        );
      case "content":
        return s(
          String(this.tag),
          {
            style: r,
            class: [
              e.e("cell"),
              e.e("content"),
              e.is("bordered-content", p),
              e.is("vertical-content", l),
              o,
              m
            ],
            colSpan: l ? n : n * 2 - 1
          },
          d
        );
      default:
        return s(
          "td",
          {
            style: r,
            class: [e.e("cell"), o],
            colSpan: n
          },
          [
            j(a) ? void 0 : s(
              "span",
              {
                class: [e.e("label"), b]
              },
              a
            ),
            s(
              "span",
              {
                class: [e.e("content"), m]
              },
              d
            )
          ]
        );
    }
  }
});
export {
  I as default
};
