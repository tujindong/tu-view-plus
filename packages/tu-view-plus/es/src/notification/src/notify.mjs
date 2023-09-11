import { createVNode as T, render as g } from "vue";
import { isClient as y, isVNode as u, isHTMLElement as b, isString as x, debugWarn as E } from "@tu-view-plus/utils";
import N from "./notification.vue.mjs";
import { notificationTypes as _ } from "./constants.mjs";
const p = {
  tl: [],
  tr: [],
  bl: [],
  br: []
}, v = 16;
let H = 1;
const d = function(e = {}, t = null) {
  if (!y)
    return { close: () => {
    } };
  (typeof e == "string" || u(e)) && (e = { message: e });
  const i = e.position || "tr";
  let n = e.offset || 0;
  p[i].forEach(({ vm: r }) => {
    var m;
    n += (((m = r.el) == null ? void 0 : m.offsetHeight) || 0) + v;
  }), n += v;
  const c = `notification_${H++}`, f = e.onClose, a = {
    ...e,
    offset: n,
    id: c,
    onClose: () => {
      A(c, i, f);
    }
  };
  let s = document.body;
  b(e.appendTo) ? s = e.appendTo : x(e.appendTo) && (s = document.querySelector(e.appendTo)), b(s) || (E(
    "TuNotification",
    "the appendTo option is not an HTMLElement. Falling back to document.body."
  ), s = document.body);
  const l = document.createElement("div"), o = T(
    N,
    a,
    u(a.message) ? {
      default: () => a.message
    } : null
  );
  return o.appContext = t ?? d._context, o.props.onDestroy = () => {
    g(null, l);
  }, g(o, l), p[i].push({ vm: o }), s.appendChild(l.firstElementChild), {
    close: () => {
      o.component.exposed.visible.value = !1;
    }
  };
};
_.forEach((e) => {
  d[e] = (t = {}) => ((typeof t == "string" || u(t)) && (t = {
    message: t
  }), d({
    ...t,
    type: e
  }));
});
function A(e, t, i) {
  const n = p[t], c = n.findIndex(
    ({ vm: o }) => {
      var r;
      return ((r = o.component) == null ? void 0 : r.props.id) === e;
    }
  );
  if (c === -1)
    return;
  const { vm: f } = n[c];
  if (!f)
    return;
  i == null || i(f);
  const a = f.el.offsetHeight, s = t.startsWith("t") ? "top" : "bottom";
  n.splice(c, 1);
  const l = n.length;
  if (!(l < 1))
    for (let o = c; o < l; o++) {
      const { el: r, component: m } = n[o].vm, h = Number.parseInt(r.style[s], 10) - a - v;
      m.props.offset = h;
    }
}
function C() {
  for (const e of Object.values(p))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
d.closeAll = C;
d._context = null;
export {
  A as close,
  C as closeAll,
  d as default
};
