import { createVNode as h, render as p, nextTick as v } from "vue";
import "../../message/index.mjs";
import { getOverlay as y, omit as O, getSlotFunction as s, isFunction as a } from "@tu-view-plus/utils";
import i from "./modal.vue.mjs";
import { messageTypes as k } from "../../message/src/constants.mjs";
const m = (e, t) => {
  let o = y("modal");
  const l = () => {
    n.component && (n.component.props.visible = !1), a(e.onOk) && e.onOk();
  }, r = () => {
    n.component && (n.component.props.visible = !1), a(e.onCancel) && e.onCancel();
  }, c = async () => {
    await v(), o && (p(null, o), document.body.removeChild(o)), o = null, a(e.onClose) && e.onClose();
  }, d = () => {
    n.component && (n.component.props.visible = !1);
  }, f = (u) => {
    n.component && Object.entries(u).forEach(([C, b]) => {
      n.component.props[C] = b;
    });
  }, n = h(
    i,
    {
      ...{
        visible: !0,
        renderToBody: !1,
        unmountOnClose: !0,
        onOk: l,
        onCancel: r,
        onClose: c
      },
      ...O(e, [
        "content",
        "title",
        "footer",
        "visible",
        "unmountOnClose",
        "onOk",
        "onCancel",
        "onClose"
      ]),
      footer: typeof e.footer == "boolean" ? e.footer : void 0
    },
    {
      default: s(e.content),
      title: s(e.title),
      footer: typeof e.footer != "boolean" ? s(e.footer) : void 0
    }
  );
  return (t ?? i._context) && (n.appContext = t ?? i._context), p(n, o), document.body.appendChild(o), {
    close: d,
    update: f
  };
}, B = {
  open: m,
  confirm: (e, t) => {
    const o = { simple: !0, ...e };
    return m(o, t);
  },
  ...k.reduce((e, t) => (e[t] = (o, l) => {
    const r = {
      simple: !0,
      hideCancel: !0,
      messageType: t,
      ...o
    };
    return m(r, l);
  }, e), {})
};
export {
  B as default
};
