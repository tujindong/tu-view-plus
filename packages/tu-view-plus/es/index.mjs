import * as o from "./src/index.mjs";
import { TuButton as p, TuButtonGroup as f } from "./src/button/index.mjs";
import { TuCollapseTransition as i } from "./src/collapse-transition/index.mjs";
import { TuCol as m } from "./src/col/index.mjs";
import { TuIcon as T } from "./src/icon/index.mjs";
import { TuRow as c } from "./src/row/index.mjs";
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
  i as TuCollapseTransition,
  T as TuIcon,
  c as TuRow,
  e as default
};
