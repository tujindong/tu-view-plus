import * as o from "./src/index.mjs";
import { TuButton as T, TuButtonGroup as f } from "./src/button/index.mjs";
import { TuBadge as x } from "./src/badge/index.mjs";
import { TuCollapseTransition as n } from "./src/collapse-transition/index.mjs";
import { TuCol as l } from "./src/col/index.mjs";
import { TuForm as d } from "./src/form/index.mjs";
import { TuPopover as c } from "./src/popover/index.mjs";
import { TuIcon as B } from "./src/icon/index.mjs";
import { TuOnlyClient as v } from "./src/only-client/index.mjs";
import { TuRadio as O, TuRadioGroup as b } from "./src/radio/index.mjs";
import { TuResizeObserver as y } from "./src/resize-observer/index.mjs";
import { TuRow as F } from "./src/row/index.mjs";
import { TuTooltip as P } from "./src/tooltip/index.mjs";
import { TuTransition as h } from "./src/transition/index.mjs";
import { TuTrigger as k } from "./src/trigger/index.mjs";
const t = {
  install: (r) => {
    for (let e in o)
      r.use(o[e]);
  }
};
export {
  x as TuBadge,
  T as TuButton,
  f as TuButtonGroup,
  l as TuCol,
  n as TuCollapseTransition,
  d as TuForm,
  B as TuIcon,
  v as TuOnlyClient,
  c as TuPopover,
  O as TuRadio,
  b as TuRadioGroup,
  y as TuResizeObserver,
  F as TuRow,
  P as TuTooltip,
  h as TuTransition,
  k as TuTrigger,
  t as default
};
