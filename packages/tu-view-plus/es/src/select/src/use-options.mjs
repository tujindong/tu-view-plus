import { computed as d, reactive as g, watch as z, ref as f } from "vue";
import { getOptionInfos as S, getValidOptions as b, isValidOption as F } from "./utils.mjs";
import { isNumber as k } from "@tu-view-plus/utils";
const N = {
  value: "value",
  label: "label",
  disabled: "disabled",
  render: "render"
}, q = ({
  options: c,
  extraOptions: v,
  inputValue: n,
  filterOption: a,
  showExtraOptions: s,
  valueKey: r,
  fieldNames: l
}) => {
  const p = d(() => ({
    ...N,
    ...l == null ? void 0 : l.value
  })), I = g(/* @__PURE__ */ new Map()), m = d(
    () => Array.from(I.values()).sort((o, t) => k(o.index) && k(t.index) ? o.index - t.index : 0)
  ), M = d(() => {
    const o = /* @__PURE__ */ new Map();
    return {
      optionInfos: S((c == null ? void 0 : c.value) ?? [], {
        valueKey: (r == null ? void 0 : r.value) ?? "value",
        fieldNames: p.value,
        origin: "options",
        optionInfoMap: o
      }),
      optionInfoMap: o
    };
  }), u = d(() => {
    const o = /* @__PURE__ */ new Map();
    return {
      optionInfos: S((v == null ? void 0 : v.value) ?? [], {
        valueKey: (r == null ? void 0 : r.value) ?? "value",
        fieldNames: p.value,
        origin: "extraOptions",
        optionInfoMap: o
      }),
      optionInfoMap: o
    };
  }), e = g(/* @__PURE__ */ new Map());
  z(
    [
      m,
      c ?? f([]),
      v ?? f([]),
      r ?? f("value")
    ],
    () => {
      e.clear(), m.value.forEach((o, t) => {
        e.set(o.key, { ...o, index: t });
      }), M.value.optionInfoMap.forEach((o) => {
        e.has(o.key) || (o.index = e.size, e.set(o.key, o));
      }), u.value.optionInfoMap.forEach((o) => {
        e.has(o.key) || (o.index = e.size, e.set(o.key, o));
      });
    },
    { immediate: !0, deep: !0 }
  );
  const A = d(() => {
    const o = b(M.value.optionInfos, {
      inputValue: n == null ? void 0 : n.value,
      filterOption: a == null ? void 0 : a.value
    });
    return ((s == null ? void 0 : s.value) ?? !0) && o.push(
      ...b(u.value.optionInfos, {
        inputValue: n == null ? void 0 : n.value,
        filterOption: a == null ? void 0 : a.value
      })
    ), o;
  }), i = d(
    () => Array.from(e.values()).filter((o) => o.origin === "extraOptions" && (s == null ? void 0 : s.value) === !1 ? !1 : F(o, {
      inputValue: n == null ? void 0 : n.value,
      filterOption: a == null ? void 0 : a.value
    }))
  ), D = d(
    () => i.value.filter((o) => !o.disabled).map((o) => o.key)
  );
  return {
    validOptions: A,
    optionInfoMap: e,
    validOptionInfos: i,
    enabledOptionKeys: D,
    getNextSlotOptionIndex: () => I.size,
    addSlotOptionInfo: (o, t) => {
      I.set(o, t);
    },
    removeSlotOptionInfo: (o) => {
      I.delete(o);
    }
  };
};
export {
  q as useOptions
};
