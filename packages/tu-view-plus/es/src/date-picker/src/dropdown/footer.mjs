import { buildProps as o } from "@tu-view-plus/utils";
import { useSizeProp as t } from "@tu-view-plus/hooks";
const r = o({
  showTodayBtn: {
    type: Boolean
  },
  showConfirmBtn: {
    type: Boolean
  },
  confirmBtnDisabled: {
    type: Boolean
  },
  size: t
}), i = ["today-btn-click", "confirm-btn-click"];
export {
  i as footerEmits,
  r as footerProps
};
