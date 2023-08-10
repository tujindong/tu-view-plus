import n from "number-precision";
const s = (t, [e, r]) => {
  const o = Math.max((t - e) / (r - e), 0);
  return `${n.round(o * 100, 2)}%`;
}, a = (t, e) => e === "vertical" ? { bottom: t } : { left: t };
export {
  s as getOffsetPercent,
  a as getPositionStyle
};
