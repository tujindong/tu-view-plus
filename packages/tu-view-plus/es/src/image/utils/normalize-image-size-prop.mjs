import { isUndefined as o, isNumber as t } from "@tu-view-plus/utils";
function i(r) {
  if (o(r))
    return;
  if (!t(r) && /^\d+(%)$/.test(r))
    return r;
  const n = parseInt(r, 10);
  return t(n) ? `${n}px` : void 0;
}
export {
  i as normalizeImageSizeProp
};
