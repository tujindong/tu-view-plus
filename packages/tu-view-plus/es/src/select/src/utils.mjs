import { isObject as i, isNumber as g, isString as l, isBoolean as f, isFunction as p } from "@tu-view-plus/utils";
const b = (t) => i(t) && "isGroup" in t, a = (t) => i(t) && "isGroup" in t, h = (t, s = "value") => String(i(t) ? t[s] : t), u = (t, s = "value") => i(t) ? `__tu__select__option__object__${t[s]}` : t || g(t) || l(t) || f(t) ? `__tu__select__option__${typeof t}-${t}` : "", O = (t) => t.has("__tu__select__option__string-"), y = (t, {
  valueKey: s,
  fieldNames: e,
  origin: _,
  index: c = -1
}) => {
  if (i(t)) {
    const r = t[e.value];
    return {
      raw: t,
      index: c,
      key: u(r, s),
      origin: _,
      value: r,
      label: t[e.label] ?? h(r, s),
      render: t[e.render],
      disabled: !!t[e.disabled],
      tagProps: t[e.tagProps]
    };
  }
  const n = {
    value: t,
    label: String(t),
    disabled: !1
  };
  return {
    raw: n,
    index: c,
    key: u(t, s),
    origin: _,
    ...n
  };
}, d = (t, {
  valueKey: s,
  fieldNames: e,
  origin: _,
  optionInfoMap: c
}) => {
  const n = [];
  for (const r of t)
    if (b(r)) {
      const o = d(r.options ?? [], {
        valueKey: s,
        fieldNames: e,
        origin: _,
        optionInfoMap: c
      });
      o.length > 0 && n.push({
        ...r,
        key: `__tu__select__group__${r.label}`,
        options: o
      });
    } else {
      const o = y(r, {
        valueKey: s,
        fieldNames: e,
        origin: _
      });
      n.push(o), c.get(o.key) || c.set(o.key, o);
    }
  return n;
}, S = (t, {
  inputValue: s,
  filterOption: e
}) => {
  const _ = (c) => {
    const n = [];
    for (const r of c)
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
}) => p(e) ? !s || e(s, t.raw) : e ? t.label.toLowerCase().includes((s ?? "").toLowerCase()) : !0;
export {
  y as createOptionInfo,
  u as getKeyFromValue,
  d as getOptionInfos,
  S as getValidOptions,
  h as getValueString,
  O as hasEmptyStringKey,
  b as isGroupOption,
  a as isGroupOptionInfo,
  k as isValidOption
};
