import { createVNode as O, render as p, nextTick as h } from "vue";
import "../../message/index.mjs";
import { getOverlay as v, omit as k, getSlotFunction as c, isFunction as a } from "@tu-view-plus/utils";
import s from "./modal.vue.mjs";
import { messageTypes as _ } from "../../message/src/constants.mjs";
const m = (o, n) => {
  let e = v("modal");
  const l = () => {
    t.component && (t.component.props.visible = !1), a(o.onOk) && o.onOk();
  }, r = () => {
    t.component && (t.component.props.visible = !1), a(o.onCancel) && o.onCancel();
  }, i = async () => {
    await h(), e && (p(null, e), document.body.removeChild(e)), e = null, a(o.onClose) && o.onClose();
  }, f = () => {
    t.component && (t.component.props.visible = !1);
  }, u = (C) => {
    t.component && Object.entries(C).forEach(([b, y]) => {
      t.component.props[b] = y;
    });
  }, t = O(
    s,
    {
      ...{
        visible: !0,
        renderToBody: !1,
        unmountOnClose: !0,
        onOk: l,
        onCancel: r,
        onClose: i
      },
      ...k(o, [
        "content",
        "title",
        "footer",
        "visible",
        "unmountOnClose",
        "onOk",
        "onCancel",
        "onClose"
      ]),
      footer: typeof o.footer == "boolean" ? o.footer : void 0
    },
    {
      default: c(o.content),
      title: c(o.title),
      footer: typeof o.footer != "boolean" ? c(o.footer) : void 0
    }
  );
  return (n ?? s._context) && (t.appContext = n ?? s._context), p(t, e), document.body.appendChild(e), {
    close: f,
    update: u
  };
}, d = {
  open: m,
  confirm: (o, n) => {
    const e = { simple: !0, ...o };
    return m(e, n);
  },
  ..._.reduce((o, n) => (o[n] = (e, l) => {
    const r = {
      simple: !0,
      hideCancel: !0,
      messageType: n,
      ...e
    };
    return m(r, l);
  }, o), {})
}, E = Object.assign(s, {
  ...d,
  install: (o, n) => {
    o.component(s.name, s);
    const e = {};
    for (const l of Object.keys(d))
      e[l] = (r, i = o._context) => d[l](r, i);
    o.config.globalProperties.$modal = e;
  },
  _context: null
});
export {
  E as default
};
