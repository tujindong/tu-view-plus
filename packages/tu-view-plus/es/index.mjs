import * as o from "./src/index.mjs";
import { TuButton as T, TuButtonGroup as f } from "./src/button/index.mjs";
import { TuCollapseTransition as n } from "./src/collapse-transition/index.mjs";
import { TuCol as i } from "./src/col/index.mjs";
import { TuForm as a } from "./src/form/index.mjs";
import { TuPopover as d } from "./src/popover/index.mjs";
import { TuIcon as c } from "./src/icon/index.mjs";
import { TuOnlyClient as v } from "./src/only-client/index.mjs";
import { TuRadio as G, TuRadioGroup as O } from "./src/radio/index.mjs";
import { TuResizeObserver as w } from "./src/resize-observer/index.mjs";
import { TuRow as z } from "./src/row/index.mjs";
import { TuTransition as I } from "./src/transition/index.mjs";
const t = {
  install: (r) => {
    for (let e in o)
      r.use(o[e]);
  }
};
export {
  T as TuButton,
  f as TuButtonGroup,
  i as TuCol,
  n as TuCollapseTransition,
  a as TuForm,
  c as TuIcon,
  v as TuOnlyClient,
  d as TuPopover,
  G as TuRadio,
  O as TuRadioGroup,
  w as TuResizeObserver,
  z as TuRow,
  I as TuTransition,
  t as default
};
