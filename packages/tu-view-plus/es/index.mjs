import * as o from "./src/index.mjs";
import { alertProps as n } from "./src/alert/src/alert.mjs";
import { TuAlert as m } from "./src/alert/index.mjs";
import { buttonProps as u } from "./src/button/src/button.mjs";
import { TuButton as l } from "./src/button/index.mjs";
import { iconProps as c } from "./src/icon/src/icon.mjs";
import { TuIcon as P } from "./src/icon/index.mjs";
const e = {
  install: (r) => {
    for (let t in o)
      r.use(o[t]);
  }
};
export {
  m as TuAlert,
  l as TuButton,
  P as TuIcon,
  n as alertProps,
  u as buttonProps,
  e as default,
  c as iconProps
};
