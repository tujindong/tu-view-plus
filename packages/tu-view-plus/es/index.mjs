import * as o from "./src/index.mjs";
import { TuButton as T, TuButtonGroup as f } from "./src/button/index.mjs";
import { TuCollapseTransition as x } from "./src/collapse-transition/index.mjs";
import { TuCol as n } from "./src/col/index.mjs";
import { TuForm as a } from "./src/form/index.mjs";
import { TuPopover as d } from "./src/popover/index.mjs";
import { TuIcon as c } from "./src/icon/index.mjs";
import { TuOnlyClient as g } from "./src/only-client/index.mjs";
import { TuRadio as B, TuRadioGroup as G } from "./src/radio/index.mjs";
import { TuResizeObserver as b } from "./src/resize-observer/index.mjs";
import { TuRow as y } from "./src/row/index.mjs";
import { TuTransition as F } from "./src/transition/index.mjs";
import { TuTrigger as P } from "./src/trigger/index.mjs";
const t = {
  install: (r) => {
    for (let e in o)
      r.use(o[e]);
  }
};
export {
  T as TuButton,
  f as TuButtonGroup,
  n as TuCol,
  x as TuCollapseTransition,
  a as TuForm,
  c as TuIcon,
  g as TuOnlyClient,
  d as TuPopover,
  B as TuRadio,
  G as TuRadioGroup,
  b as TuResizeObserver,
  y as TuRow,
  F as TuTransition,
  P as TuTrigger,
  t as default
};
