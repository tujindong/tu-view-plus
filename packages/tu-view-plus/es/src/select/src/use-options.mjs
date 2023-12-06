import { computed as s, reactive as g, watch as z, ref as f } from "vue";
import { getOptionInfos as S, getValidOptions as b, isValidOption as F } from "./utils.mjs";
import { isNumber as k } from "@tu-view-plus/utils";
const N = {
  value: "value",
  label: "label",
  disabled: "disabled",
  tagProps: "tagProps",
  render: "render"
}, j = ({
  options: c,
  extraOptions: v,
  inputValue: n,
  filterOption: a,
  showExtraOptions: d,
  valueKey: r,
  fieldNames: l
}) => {
  const p = s(() => ({
    ...N,
    ...l == null ? void 0 : l.value
  })), I = g(/* @__PURE__ */ new Map()), m = s(
    () => Array.from(I.values()).sort((o, t) => k(o.index) && k(t.index) ? o.index - t.index : 0)
  ), M = s(() => {
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
  }), u = s(() => {
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
  const A = s(() => {
    const o = b(M.value.optionInfos, {
      inputValue: n == null ? void 0 : n.value,
      filterOption: a == null ? void 0 : a.value
    });
    return ((d == null ? void 0 : d.value) ?? !0) && o.push(
      ...b(u.value.optionInfos, {
        inputValue: n == null ? void 0 : n.value,
        filterOption: a == null ? void 0 : a.value
      })
    ), o;
  }), i = s(
    () => Array.from(e.values()).filter((o) => o.origin === "extraOptions" && (d == null ? void 0 : d.value) === !1 ? !1 : F(o, {
      inputValue: n == null ? void 0 : n.value,
      filterOption: a == null ? void 0 : a.value
    }))
  ), D = s(
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
  j as useOptions
};
