import { toRefs as U, computed as s } from "vue";
import { padStart as f } from "@tu-view-plus/utils";
import { getColumnsFromFormat as D } from "../utils.mjs";
function j(L) {
  const {
    format: g,
    step: o,
    use12Hours: p,
    hideDisabledOptions: v,
    disabledHours: r,
    disabledMinutes: c,
    disabledSeconds: i,
    selectedHour: m,
    selectedMinute: h,
    selectedSecond: x,
    selectedAmpm: O,
    disabled: u
  } = U(L), A = s(() => {
    var n;
    const { hour: a = 1 } = (o == null ? void 0 : o.value) || {}, t = ((n = r == null ? void 0 : r.value) == null ? void 0 : n.call(r)) || [];
    let l = [];
    for (let e = 0; e < (p.value ? 12 : 24); e += a)
      l.push(e);
    return p.value && (l[0] = 12), v.value && t.length && (l = l.filter((e) => t.indexOf(e) < 0)), l.map((e) => ({
      label: f(e, 2, "0"),
      value: e,
      selected: m.value === e,
      disabled: (u == null ? void 0 : u.value) || t.includes(e)
    }));
  }), C = s(() => {
    var n;
    const { minute: a = 1 } = (o == null ? void 0 : o.value) || {}, t = ((n = c == null ? void 0 : c.value) == null ? void 0 : n.call(c, m.value)) || [];
    let l = [];
    for (let e = 0; e < 60; e += a)
      l.push(e);
    return v.value && t.length && (l = l.filter((e) => t.indexOf(e) < 0)), l.map((e) => ({
      label: f(e, 2, "0"),
      value: e,
      selected: h.value === e,
      disabled: (u == null ? void 0 : u.value) || t.includes(e)
    }));
  }), d = s(() => {
    var n;
    const { second: a = 1 } = (o == null ? void 0 : o.value) || {}, t = ((n = i == null ? void 0 : i.value) == null ? void 0 : n.call(i, m.value, h.value)) || [];
    let l = [];
    for (let e = 0; e < 60; e += a)
      l.push(e);
    return v.value && t.length && (l = l.filter((e) => t.indexOf(e) < 0)), l.map((e) => ({
      label: f(e, 2, "0"),
      value: e,
      selected: x.value === e,
      disabled: (u == null ? void 0 : u.value) || t.includes(e)
    }));
  }), F = ["am", "pm"], S = s(() => {
    const a = D(g.value).list.includes("A");
    return F.map((t) => ({
      label: a ? t.toUpperCase() : t,
      value: t,
      selected: O.value === t,
      disabled: u == null ? void 0 : u.value
    }));
  });
  return {
    hours: A,
    minutes: C,
    seconds: d,
    ampmList: S
  };
}
export {
  j as useTimeList
};
