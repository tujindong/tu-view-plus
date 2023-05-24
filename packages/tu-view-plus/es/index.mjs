import * as o from "./src/index.mjs";
import { alertProps as n } from "./src/alert/src/alert.mjs";
import { TuAlert as x } from "./src/alert/index.mjs";
import { buttonProps as m } from "./src/button/src/button.mjs";
import { TuButton as a } from "./src/button/index.mjs";
const e = {
  install: (r) => {
    for (let t in o)
      r.use(o[t]);
  }
};
export {
  x as TuAlert,
  a as TuButton,
  n as alertProps,
  m as buttonProps,
  e as default
};
