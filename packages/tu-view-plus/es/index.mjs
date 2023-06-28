import * as o from "./src/index.mjs";
import { TuButton as T, TuButtonGroup as f } from "./src/button/index.mjs";
import { TuCollapseTransition as x } from "./src/collapse-transition/index.mjs";
import { TuCol as n } from "./src/col/index.mjs";
import { TuForm as s } from "./src/form/index.mjs";
import { TuPopover as d } from "./src/popover/index.mjs";
import { TuIcon as c } from "./src/icon/index.mjs";
import { TuOnlyClient as g } from "./src/only-client/index.mjs";
import { TuRadio as B, TuRadioGroup as G } from "./src/radio/index.mjs";
import { TuResizeObserver as b } from "./src/resize-observer/index.mjs";
import { TuRow as y } from "./src/row/index.mjs";
import { TuTooltip as F } from "./src/tooltip/index.mjs";
import { TuTransition as P } from "./src/transition/index.mjs";
import { TuTrigger as h } from "./src/trigger/index.mjs";
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
  s as TuForm,
  c as TuIcon,
  g as TuOnlyClient,
  d as TuPopover,
  B as TuRadio,
  G as TuRadioGroup,
  b as TuResizeObserver,
  y as TuRow,
  F as TuTooltip,
  P as TuTransition,
  h as TuTrigger,
  t as default
};
