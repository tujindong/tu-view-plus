import * as o from "./src/index.mjs";
import { alertProps as u } from "./src/alert/src/alert.mjs";
import { TuAlert as f } from "./src/alert/index.mjs";
import { buttonEmits as x, buttonNativeTypes as i, buttonProps as a, buttonTypes as l } from "./src/button/src/button.mjs";
import { buttonGroupInjectionKey as b } from "./src/button/src/constants.mjs";
import { TuButton as d, TuButtonGroup as y } from "./src/button/index.mjs";
import { iconProps as B } from "./src/icon/src/icon.mjs";
import { TuIcon as I } from "./src/icon/index.mjs";
const e = {
  install: (t) => {
    for (let r in o)
      t.use(o[r]);
  }
};
export {
  f as TuAlert,
  d as TuButton,
  y as TuButtonGroup,
  I as TuIcon,
  u as alertProps,
  x as buttonEmits,
  b as buttonGroupInjectionKey,
  i as buttonNativeTypes,
  a as buttonProps,
  l as buttonTypes,
  e as default,
  B as iconProps
};
