import { isObject as s, isNumber as a } from "@tu-view-plus/utils";
const c = (r, o) => {
  const l = [];
  for (const t of r)
    if (s(t))
      l.push({
        raw: t,
        value: t[o.value],
        label: t[o.label],
        closable: t[o.closable],
        tagProps: t[o.tagProps]
      });
    else if (r || a(r)) {
      const e = {
        value: t,
        label: String(t),
        closable: !0
      };
      l.push({
        raw: e,
        ...e
      });
    }
  return l;
};
export {
  c as getValueData
};
