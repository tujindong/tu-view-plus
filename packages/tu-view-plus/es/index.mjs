import * as o from "./src/index.mjs";
import { TuButton as p, TuButtonGroup as f } from "./src/button/index.mjs";
import { TuCollapseTransition as x } from "./src/collapse-transition/index.mjs";
import { TuCol as m } from "./src/col/index.mjs";
import { TuIcon as s } from "./src/icon/index.mjs";
import { TuRadio as d } from "./src/radio/index.mjs";
import { TuRow as B } from "./src/row/index.mjs";
import { TuTransition as R } from "./src/transition/index.mjs";
const e = {
  install: (r) => {
    for (let t in o)
      r.use(o[t]);
  }
};
export {
  p as TuButton,
  f as TuButtonGroup,
  m as TuCol,
  x as TuCollapseTransition,
  s as TuIcon,
  d as TuRadio,
  B as TuRow,
  R as TuTransition,
  e as default
};
