import * as o from "./src/index.mjs";
import { TuButton as T, TuButtonGroup as f } from "./src/button/index.mjs";
import { TuCollapseTransition as m } from "./src/collapse-transition/index.mjs";
import { TuCol as x } from "./src/col/index.mjs";
import { TuForm as s } from "./src/form/index.mjs";
import { TuIcon as d } from "./src/icon/index.mjs";
import { TuRadio as R, TuRadioGroup as g } from "./src/radio/index.mjs";
import { TuRow as C } from "./src/row/index.mjs";
import { TuTransition as w } from "./src/transition/index.mjs";
import { TuTrigger as I } from "./src/trigger/index.mjs";
const e = {
  install: (r) => {
    for (let t in o)
      r.use(o[t]);
  }
};
export {
  T as TuButton,
  f as TuButtonGroup,
  x as TuCol,
  m as TuCollapseTransition,
  s as TuForm,
  d as TuIcon,
  R as TuRadio,
  g as TuRadioGroup,
  C as TuRow,
  w as TuTransition,
  I as TuTrigger,
  e as default
};
