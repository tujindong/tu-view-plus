import * as o from "./src/index.mjs";
import { TuButton as T, TuButtonGroup as x } from "./src/button/index.mjs";
import { TuBadge as m } from "./src/badge/index.mjs";
import { TuCollapseTransition as n } from "./src/collapse-transition/index.mjs";
import { TuCol as l } from "./src/col/index.mjs";
import { TuForm as d } from "./src/form/index.mjs";
import { TuInput as c } from "./src/input/index.mjs";
import { TuPopover as B } from "./src/popover/index.mjs";
import { TuIcon as v } from "./src/icon/index.mjs";
import { TuOnlyClient as I } from "./src/only-client/index.mjs";
import { TuRadio as b, TuRadioGroup as w } from "./src/radio/index.mjs";
import { TuResizeObserver as z } from "./src/resize-observer/index.mjs";
import { TuRow as P } from "./src/row/index.mjs";
import { TuTextarea as h } from "./src/textarea/index.mjs";
import { TuTooltip as k } from "./src/tooltip/index.mjs";
import { TuTransition as A } from "./src/transition/index.mjs";
import { TuTrigger as E } from "./src/trigger/index.mjs";
const t = {
  install: (r) => {
    for (let e in o)
      r.use(o[e]);
  }
};
export {
  m as TuBadge,
  T as TuButton,
  x as TuButtonGroup,
  l as TuCol,
  n as TuCollapseTransition,
  d as TuForm,
  v as TuIcon,
  c as TuInput,
  I as TuOnlyClient,
  B as TuPopover,
  b as TuRadio,
  w as TuRadioGroup,
  z as TuResizeObserver,
  P as TuRow,
  h as TuTextarea,
  k as TuTooltip,
  A as TuTransition,
  E as TuTrigger,
  t as default
};
