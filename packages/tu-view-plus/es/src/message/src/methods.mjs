import { render as f, createVNode as x } from "vue";
import { isClient as v, isNumber as b, isString as u, isVNode as h, isFunction as p, isHTMLElement as y, debugWarn as C } from "@tu-view-plus/utils";
import "../../config-provider/index.mjs";
import E from "./message.vue.mjs";
import { messageDefaults as M } from "./message.mjs";
import { messageTypes as _ } from "./constants.mjs";
import { instances as i } from "./instance.mjs";
import { messageConfig as g } from "../../config-provider/src/config-provider.mjs";
let z = 1;
const T = (e) => {
  const n = !e || u(e) || h(e) || p(e) ? { message: e } : e, o = {
    ...M,
    ...n
  };
  if (!o.appendTo)
    o.appendTo = document.body;
  else if (u(o.appendTo)) {
    let s = document.querySelector(o.appendTo);
    y(s) || (C(
      "TuMessage",
      "the appendTo option is not an HTMLElement. Falling back to document.body."
    ), s = document.body), o.appendTo = s;
  }
  return o;
}, N = (e) => {
  const n = i.indexOf(e);
  if (n === -1)
    return;
  i.splice(n, 1);
  const { handler: o } = e;
  o.close();
}, A = ({ appendTo: e, ...n }, o) => {
  const s = `message_${z++}`, r = n.onClose, c = document.createElement("div"), t = {
    ...n,
    id: s,
    onClose: () => {
      r == null || r(), N(m);
    },
    onDestroy: () => {
      f(null, c);
    }
  }, l = x(
    E,
    t,
    p(t.message) || h(t.message) ? {
      default: p(t.message) ? t.message : () => t.message
    } : null
  );
  l.appContext = o || a._context, f(l, c), e.appendChild(c.firstElementChild);
  const d = l.component, m = {
    id: s,
    vnode: l,
    vm: d,
    handler: {
      close: () => {
        d.exposed.visible.value = !1;
      }
    },
    props: l.component.props
  };
  return m;
}, a = (e = {}, n) => {
  if (!v)
    return { close: () => {
    } };
  if (b(g.max) && i.length >= g.max)
    return { close: () => {
    } };
  const o = T(e);
  if (o.grouping && i.length) {
    const r = i.find(
      ({ vnode: c }) => {
        var t;
        return ((t = c.props) == null ? void 0 : t.message) === o.message;
      }
    );
    if (r)
      return r.props.repeatNum += 1, r.props.type = o.type, r.handler;
  }
  const s = A(o, n);
  return i.push(s), s.handler;
};
_.forEach((e) => {
  a[e] = (n = {}, o) => {
    const s = T(n);
    return a({ ...s, type: e }, o);
  };
});
function D(e) {
  for (const n of i)
    (!e || e === n.props.type) && n.handler.close();
}
a.closeAll = D;
a._context = null;
export {
  D as closeAll,
  a as default
};
