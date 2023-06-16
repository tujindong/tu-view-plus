import * as o from "./src/index.mjs";
import { TuButton as T, TuButtonGroup as f } from "./src/button/index.mjs";
import { TuCollapseTransition as x } from "./src/collapse-transition/index.mjs";
import { TuCol as n } from "./src/col/index.mjs";
import { TuForm as l } from "./src/form/index.mjs";
import { TuIcon as d } from "./src/icon/index.mjs";
import { TuPopover as R } from "./src/popover/index.mjs";
import { TuPopper as C } from "./src/popper/index.mjs";
import { TuRadio as P, TuRadioGroup as v } from "./src/radio/index.mjs";
import { TuRow as F } from "./src/row/index.mjs";
import { TuTooltip as $ } from "./src/tooltip/index.mjs";
import { TuTransition as g } from "./src/transition/index.mjs";
const e = {
  install: (r) => {
    for (let t in o)
      r.use(o[t]);
  }
};
export {
  T as TuButton,
  f as TuButtonGroup,
  n as TuCol,
  x as TuCollapseTransition,
  l as TuForm,
  d as TuIcon,
  R as TuPopover,
  C as TuPopper,
  P as TuRadio,
  v as TuRadioGroup,
  F as TuRow,
  $ as TuTooltip,
  g as TuTransition,
  e as default
};
