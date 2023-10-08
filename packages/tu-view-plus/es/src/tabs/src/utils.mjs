const e = 8, n = ({
  direction: r,
  type: a,
  offset: t
}) => r === "vertical" ? { transform: `translateY(${-t - 8}px)` } : { transform: `translateX(${-t - 8}px)` };
export {
  e as gap,
  n as getTabListStyle
};
