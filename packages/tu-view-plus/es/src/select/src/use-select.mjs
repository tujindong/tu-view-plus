import { ref as G, watch as H, nextTick as J, provide as P, reactive as Q } from "vue";
import { useOptions as X } from "./use-options.mjs";
import { getKeyDownHandler as Z, KEYBOARD_KEY as f, getRelativeRect as $ } from "@tu-view-plus/utils";
import { selectInjectionKey as k } from "./context.mjs";
const V = ({
  selectSize: W,
  multiple: y,
  options: M,
  extraOptions: Y,
  inputValue: p,
  filterOption: E,
  showExtraOptions: j,
  component: A,
  valueKey: O,
  fieldNames: B,
  loading: s,
  popupVisible: v,
  valueKeys: i,
  dropdownRef: m,
  optionRefs: x,
  virtualListRef: a,
  onSelect: T,
  onPopupVisibleChange: g,
  enterToOpen: C = !0,
  defaultActiveFirstOption: D
}) => {
  const {
    validOptions: U,
    optionInfoMap: h,
    validOptionInfos: d,
    enabledOptionKeys: o,
    getNextSlotOptionIndex: q,
    addSlotOptionInfo: w,
    removeSlotOptionInfo: K
  } = X({
    options: M,
    extraOptions: Y,
    inputValue: p,
    filterOption: E,
    showExtraOptions: j,
    valueKey: O,
    fieldNames: B
  }), l = G();
  H(o, (e) => {
    (!l.value || !e.includes(l.value)) && (l.value = e[0]);
  });
  const S = (e) => {
    l.value = e;
  }, I = (e) => {
    const t = o.value.length;
    if (t === 0)
      return;
    if (!l.value)
      return e === "down" ? o.value[0] : o.value[t - 1];
    const n = o.value.indexOf(l.value), u = (t + n + (e === "up" ? -1 : 1)) % t;
    return o.value[u];
  }, r = (e) => {
    var N;
    a != null && a.value && a.value.scrollTo({ key: e });
    const t = h.get(e), n = (N = m == null ? void 0 : m.value) == null ? void 0 : N.wrapperRef, u = (x == null ? void 0 : x.value[e]) ?? (t == null ? void 0 : t.ref);
    if (!n || !u || n.scrollHeight === n.offsetHeight)
      return;
    const c = $(u, n), _ = n.scrollTop;
    c.top < 0 ? n.scrollTo(0, _ + c.top) : c.bottom < 0 && n.scrollTo(0, _ - c.bottom);
  };
  H(v, (e) => {
    if (e) {
      const t = i.value[i.value.length - 1];
      let n = (D == null ? void 0 : D.value) ?? !0 ? o.value[0] : void 0;
      o.value.includes(t) && (n = t), n !== l.value && (l.value = n), J(() => {
        l.value && r(l.value);
      });
    }
  });
  const z = Z(
    /* @__PURE__ */ new Map([
      [
        f.ENTER,
        (e) => {
          !(s != null && s.value) && !e.isComposing && (v.value ? l.value && (T(l.value, e), e.preventDefault()) : C && (g(!0), e.preventDefault()));
        }
      ],
      [
        f.ESC,
        (e) => {
          v.value && (g(!1), e.preventDefault());
        }
      ],
      [
        f.ARROW_DOWN,
        (e) => {
          if (v.value) {
            const t = I("down");
            t && (l.value = t, r(t)), e.preventDefault();
          }
        }
      ],
      [
        f.ARROW_UP,
        (e) => {
          if (v.value) {
            const t = I("up");
            t && (l.value = t, r(t)), e.preventDefault();
          }
        }
      ]
    ])
  );
  return P(
    k,
    Q({
      selectSize: W,
      multiple: y,
      valueKey: O,
      inputValue: p,
      filterOption: E,
      component: A,
      valueKeys: i,
      activeKey: l,
      setActiveKey: S,
      onSelect: T,
      getNextSlotOptionIndex: q,
      addSlotOptionInfo: w,
      removeSlotOptionInfo: K
    })
  ), {
    validOptions: U,
    optionInfoMap: h,
    validOptionInfos: d,
    enabledOptionKeys: o,
    activeKey: l,
    setActiveKey: S,
    addSlotOptionInfo: w,
    removeSlotOptionInfo: K,
    getNextActiveKey: I,
    scrollIntoView: r,
    handleKeyDown: z
  };
};
export {
  V as useSelect
};
