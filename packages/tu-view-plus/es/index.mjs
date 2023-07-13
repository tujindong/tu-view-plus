import * as o from "./src/index.mjs";
import { TuButton as T, TuButtonGroup as x } from "./src/button/index.mjs";
import { TuBadge as m } from "./src/badge/index.mjs";
import { TuCollapseTransition as n } from "./src/collapse-transition/index.mjs";
import { TuCol as l } from "./src/col/index.mjs";
import { TuForm as d } from "./src/form/index.mjs";
import { TuInput as R } from "./src/input/index.mjs";
import { TuPopover as B } from "./src/popover/index.mjs";
import { TuIcon as v } from "./src/icon/index.mjs";
import { TuOnlyClient as G } from "./src/only-client/index.mjs";
import { TuRadio as O, TuRadioGroup as b } from "./src/radio/index.mjs";
import { TuResizeObserver as y } from "./src/resize-observer/index.mjs";
import { TuRow as F } from "./src/row/index.mjs";
import { TuSwitch as S } from "./src/switch/index.mjs";
import { TuTextarea as j } from "./src/textarea/index.mjs";
import { TuTooltip as q } from "./src/tooltip/index.mjs";
import { TuTransition as D } from "./src/transition/index.mjs";
import { TuTrigger as H } from "./src/trigger/index.mjs";
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
  R as TuInput,
  G as TuOnlyClient,
  B as TuPopover,
  O as TuRadio,
  b as TuRadioGroup,
  y as TuResizeObserver,
  F as TuRow,
  S as TuSwitch,
  j as TuTextarea,
  q as TuTooltip,
  D as TuTransition,
  H as TuTrigger,
  t as default
};
