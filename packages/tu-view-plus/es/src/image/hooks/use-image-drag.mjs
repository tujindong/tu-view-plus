import { toRefs as E, ref as D, watchEffect as R, watch as X, nextTick as Y } from "vue";
import { on as s, off as v } from "@tu-view-plus/utils";
import h from "../utils/get-fix-translate.mjs";
function C(T) {
  const { wrapperEl: f, imageEl: a, scale: n } = E(T), t = D([0, 0]), l = D(!1);
  let c = 0, i = 0, u = [0, 0];
  const p = () => {
    if (!f.value || !a.value)
      return;
    const e = f.value.getBoundingClientRect(), r = a.value.getBoundingClientRect(), [o, x] = h(
      e,
      r,
      t.value[0],
      t.value[1],
      n.value
    );
    (o !== t.value[0] || x !== t.value[1]) && (t.value = [o, x]);
  }, g = (e) => {
    e.preventDefault && e.preventDefault();
    const r = u[0] + (e.pageX - c) / n.value, o = u[1] + (e.pageY - i) / n.value;
    t.value = [r, o];
  }, m = (e) => {
    e.preventDefault && e.preventDefault(), l.value = !1, p(), d();
  }, w = (e) => {
    e.target === e.currentTarget && (e.preventDefault && e.preventDefault(), l.value = !0, c = e.pageX, i = e.pageY, u = [...t.value], s(window, "mousemove", g, !1), s(window, "mouseup", m, !1));
  };
  function d() {
    v(window, "mousemove", g, !1), v(window, "mouseup", m, !1);
  }
  return R((e) => {
    a.value && s(a.value, "mousedown", w), e(() => {
      a.value && v(a.value, "mousedown", w), d();
    });
  }), X([n], () => {
    Y(() => p());
  }), {
    translate: t,
    moving: l,
    resetTranslate() {
      t.value = [0, 0];
    }
  };
}
export {
  C as default
};
