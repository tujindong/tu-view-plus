import { createVNode as h, render as s, nextTick as b } from "vue";
import { getOverlay as v, omit as y, getSlotFunction as n, isFunction as l } from "@tu-view-plus/utils";
import r from "./drawer.vue.mjs";
const O = (e, a) => {
  let t = v("drawer");
  const d = () => {
    o.component && (o.component.props.visible = !1), l(e.onOk) && e.onOk();
  }, p = () => {
    o.component && (o.component.props.visible = !1), l(e.onCancel) && e.onCancel();
  }, i = async () => {
    await b(), t && (s(null, t), document.body.removeChild(t)), t = null, l(e.onClose) && e.onClose();
  }, c = () => {
    o.component && (o.component.props.visible = !1);
  }, m = (f) => {
    o.component && Object.entries(f).forEach(([u, C]) => {
      o.component.props[u] = C;
    });
  }, o = h(
    r,
    {
      ...{
        visible: !0,
        renderToBody: !1,
        unmountOnClose: !0,
        onOk: d,
        onCancel: p,
        onClose: i
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
      header: typeof e.header == "boolean" ? e.header : void 0,
      footer: typeof e.footer == "boolean" ? e.footer : void 0
    },
    {
      default: n(e.content),
      header: typeof e.header != "boolean" ? n(e.header) : void 0,
      title: n(e.title),
      footer: typeof e.footer != "boolean" ? n(e.footer) : void 0
    }
  );
  return (a ?? r._context) && (o.appContext = a ?? r._context), s(o, t), document.body.appendChild(t), {
    close: c,
    update: m
  };
}, F = { open: O };
export {
  F as default
};
