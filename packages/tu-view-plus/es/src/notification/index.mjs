import { withInstallFunction as o } from "@tu-view-plus/utils";
import t from "./src/notify.mjs";
import { notificationEmits as c, notificationProps as m } from "./src/notification.mjs";
const f = o(
  t,
  "$notification"
);
export {
  f as TuNotification,
  f as default,
  c as notificationEmits,
  m as notificationProps
};
