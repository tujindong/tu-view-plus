const n = (r, { min: t, max: e }) => r < t ? t : r > e ? e : r;
export {
  n as getLegalPage
};
