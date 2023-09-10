import { withInstallFunction as o } from "@tu-view-plus/utils";
import t from "./src/notify.mjs";
import { notificationEmits as m, notificationProps as c } from "./src/notification.mjs";
const f = o(t, "$notify");
export {
  f as TuNotification,
  f as default,
  m as notificationEmits,
  c as notificationProps
};
