import * as o from "./src/index.mjs";
import { TuButton as n, TuButtonGroup as T } from "./src/button/index.mjs";
import { TuCollapseTransition as i } from "./src/collapse-transition/index.mjs";
import { TuCol as x } from "./src/col/index.mjs";
import { TuForm as s } from "./src/form/index.mjs";
import { TuIcon as d } from "./src/icon/index.mjs";
import { TuRadio as R, TuRadioGroup as B } from "./src/radio/index.mjs";
import { TuRow as G } from "./src/row/index.mjs";
import { TuTransition as F } from "./src/transition/index.mjs";
const u = {
  install: (r) => {
    for (let t in o)
      r.use(o[t]);
  }
};
export {
  n as TuButton,
  T as TuButtonGroup,
  x as TuCol,
  i as TuCollapseTransition,
  s as TuForm,
  d as TuIcon,
  R as TuRadio,
  B as TuRadioGroup,
  G as TuRow,
  F as TuTransition,
  u as default
};
