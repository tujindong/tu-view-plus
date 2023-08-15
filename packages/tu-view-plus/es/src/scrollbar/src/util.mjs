const i = 4, o = {
  vertical: {
    offset: "offsetHeight",
    scroll: "scrollTop",
    scrollSize: "scrollHeight",
    size: "height",
    key: "vertical",
    axis: "Y",
    client: "clientY",
    direction: "top"
  },
  horizontal: {
    offset: "offsetWidth",
    scroll: "scrollLeft",
    scrollSize: "scrollWidth",
    size: "width",
    key: "horizontal",
    axis: "X",
    client: "clientX",
    direction: "left"
  }
}, s = ({
  move: e,
  size: l,
  bar: t
}) => ({
  [t.size]: l,
  transform: `translate${t.axis}(${e}%)`
});
export {
  o as BAR_MAP,
  i as GAP,
  s as renderThumbStyle
};
