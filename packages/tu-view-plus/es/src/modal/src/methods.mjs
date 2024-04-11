import { createVNode as b, render as m, nextTick as h } from "vue";
import "../../message/index.mjs";
import { getOverlay as v, omit as y, getSlotFunction as s, isFunction as a } from "@tu-view-plus/utils";
import O from "./modal.vue.mjs";
import { messageTypes as k } from "../../message/src/constants.mjs";
const i = (e, t) => {
  let o = v("modal");
  const l = () => {
    n.component && (n.component.props.visible = !1), a(e.onOk) && e.onOk();
  }, r = () => {
    n.component && (n.component.props.visible = !1), a(e.onCancel) && e.onCancel();
  }, p = async () => {
    await h(), o && (m(null, o), document.body.removeChild(o)), o = null, a(e.onClose) && e.onClose();
  }, d = () => {
    n.component && (n.component.props.visible = !1);
  }, c = (f) => {
    n.component && Object.entries(f).forEach(([u, C]) => {
      n.component.props[u] = C;
    });
  }, n = b(
    O,
    {
      ...{
        visible: !0,
        renderToBody: !1,
        unmountOnClose: !0,
        onOk: l,
        onCancel: r,
        onClose: p
      },
      ...y(e, [
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
  return t && (n.appContext = t), m(n, o), document.body.appendChild(o), {
    close: d,
    update: c
  };
}, B = {
  open: i,
  confirm: (e, t) => {
    const o = { simple: !0, ...e };
    return i(o, t);
  },
  ...k.reduce((e, t) => (e[t] = (o, l) => {
    const r = {
      simple: !0,
      hideCancel: !0,
      messageType: t,
      ...o
    };
    return i(r, l);
  }, e), {})
};
export {
  B as default
};
