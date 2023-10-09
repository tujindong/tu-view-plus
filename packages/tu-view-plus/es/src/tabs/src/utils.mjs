const n = 8, s = ({
  direction: a,
  type: e,
  offset: t,
  gap: r
}) => a === "vertical" ? { transform: `translateY(${-t - r}px)` } : { transform: `translateX(${-t - r}px)` };
export {
  n as gap,
  s as getTabListStyle
};
