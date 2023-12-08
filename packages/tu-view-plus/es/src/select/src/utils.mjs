import { isObject as c, isNumber as l, isString as f, isBoolean as g, isFunction as b } from "@tu-view-plus/utils";
const p = (t) => c(t) && "isGroup" in t, a = (t) => c(t) && "isGroup" in t, h = (t, s = "value") => String(c(t) ? t[s] : t), u = (t, s = "value") => c(t) ? `__tu__select__option__object__${t[s]}` : t || l(t) || f(t) || g(t) ? `__tu__select__option__${typeof t}-${t}` : "", O = (t) => t.has("__tu__select__option__string-"), d = (t, {
  valueKey: s,
  fieldNames: e,
  origin: _,
  index: i = -1
}) => {
  if (c(t)) {
    const r = t[e.value];
    return {
      raw: t,
      index: i,
      key: u(r, s),
      origin: _,
      value: r,
      label: t[e.label] ?? h(r, s),
      render: t[e.render],
      disabled: !!t[e.disabled]
    };
  }
  const n = {
    value: t,
    label: String(t),
    disabled: !1
  };
  return {
    raw: n,
    index: i,
    key: u(t, s),
    origin: _,
    ...n
  };
}, y = (t, {
  valueKey: s,
  fieldNames: e,
  origin: _,
  optionInfoMap: i
}) => {
  const n = [];
  for (const r of t)
    if (p(r)) {
      const o = y(r.options ?? [], {
        valueKey: s,
        fieldNames: e,
        origin: _,
        optionInfoMap: i
      });
      o.length > 0 && n.push({
        ...r,
        key: `__tu__select__group__${r.label}`,
        options: o
      });
    } else {
      const o = d(r, {
        valueKey: s,
        fieldNames: e,
        origin: _
      });
      n.push(o), i.get(o.key) || i.set(o.key, o);
    }
  return n;
}, S = (t, {
  inputValue: s,
  filterOption: e
}) => {
  const _ = (i) => {
    const n = [];
    for (const r of i)
      if (a(r)) {
        const o = _(r.options ?? []);
        o.length > 0 && n.push({ ...r, options: o });
      } else
        k(r, { inputValue: s, filterOption: e }) && n.push(r);
    return n;
  };
  return _(t);
}, k = (t, {
  inputValue: s,
  filterOption: e
}) => b(e) ? !s || e(s, t.raw) : e ? t.label.toLowerCase().includes((s ?? "").toLowerCase()) : !0;
export {
  d as createOptionInfo,
  u as getKeyFromValue,
  y as getOptionInfos,
  S as getValidOptions,
  h as getValueString,
  O as hasEmptyStringKey,
  p as isGroupOption,
  a as isGroupOptionInfo,
  k as isValidOption
};
