import { isArray as r } from "@tu-view-plus/utils";
import { isDisabledTime as n } from "../utils.mjs";
function b(e) {
  const i = (s) => n(s, {
    disabledHours: e.disabledHours,
    disabledMinutes: e.disabledMinutes,
    disabledSeconds: e.disabledSeconds
  });
  return (s) => r(s) ? s.some((d) => i(d)) : i(s);
}
export {
  b as useIsDisabledTime
};
