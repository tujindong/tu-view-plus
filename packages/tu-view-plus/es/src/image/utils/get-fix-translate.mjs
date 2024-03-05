function s(f, t, b, l, h) {
  let o = b, i = l;
  return b && (f.width > t.width ? o = 0 : (t.left > f.left && (o -= Math.abs(f.left - t.left) / h), t.right < f.right && (o += Math.abs(f.right - t.right) / h))), l && (f.height > t.height ? i = 0 : (t.top > f.top && (i -= Math.abs(f.top - t.top) / h), t.bottom < f.bottom && (i += Math.abs(f.bottom - t.bottom) / h))), [o, i];
}
export {
  s as default
};
