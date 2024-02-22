import { toRefs as d, ref as n } from "vue";
import { throttleByRaf as h } from "@tu-view-plus/utils";
import { useTreeContext as b } from "./use-tree-context.mjs";
function O(i) {
  const { key: t, refTitle: v } = d(i), e = b(), o = n(!1), s = n(!1), c = n(!1), r = n(0), l = h((u) => {
    if (!v.value)
      return;
    const a = v.value.getBoundingClientRect(), D = window.pageYOffset + a.top, { pageY: p } = u, g = a.height / 4, f = p - D;
    r.value = f < g ? -1 : f < a.height - g ? 0 : 1, c.value = e.allowDrop ? e.allowDrop(t.value, r.value) : !0;
  });
  return {
    isDragOver: o,
    isDragging: s,
    isAllowDrop: c,
    dropPosition: r,
    setDragStatus(u, a) {
      switch (u) {
        case "dragStart":
          s.value = !0, r.value = 0, e.onDragStart && e.onDragStart(t.value, a);
          break;
        case "dragEnd":
          s.value = !1, o.value = !1, r.value = 0, l.cancel(), e.onDragEnd && e.onDragEnd(t.value, a);
          break;
        case "dragOver":
          o.value = !0, l(a), e.onDragOver && e.onDragOver(t.value, a);
          break;
        case "dragLeave":
          o.value = !1, r.value = 0, l.cancel(), e.onDragLeave && e.onDragLeave(t.value, a);
          break;
        case "drop":
          e.onDrop && e.onDrop(t.value, r.value, a), o.value = !1, r.value = 0, l.cancel();
          break;
      }
    }
  };
}
export {
  O as useDraggable
};
