import * as o from "./src/index.mjs";
import { TuButton as T, TuButtonGroup as f } from "./src/button/index.mjs";
import { TuBadge as m } from "./src/badge/index.mjs";
import { TuConfigProvider as n } from "./src/config-provider/index.mjs";
import { TuCollapseTransition as s } from "./src/collapse-transition/index.mjs";
import { TuCol as d } from "./src/col/index.mjs";
import { TuForm as c } from "./src/form/index.mjs";
import { TuInput as R } from "./src/input/index.mjs";
import { TuIcon as B } from "./src/icon/index.mjs";
import { TuMessage as G } from "./src/message/index.mjs";
import { TuOnlyClient as O } from "./src/only-client/index.mjs";
import { TuPopover as b } from "./src/popover/index.mjs";
import { TuRadio as y, TuRadioGroup as z } from "./src/radio/index.mjs";
import { TuResizeObserver as M } from "./src/resize-observer/index.mjs";
import { TuRow as $ } from "./src/row/index.mjs";
import { TuSwitch as k } from "./src/switch/index.mjs";
import { TuTextarea as A } from "./src/textarea/index.mjs";
import { TuTooltip as E } from "./src/tooltip/index.mjs";
import { TuTransition as J } from "./src/transition/index.mjs";
import { TuTrigger as L } from "./src/trigger/index.mjs";
const t = {
  install: (r) => {
    for (let e in o)
      r.use(o[e]);
  }
};
export {
  m as TuBadge,
  T as TuButton,
  f as TuButtonGroup,
  d as TuCol,
  s as TuCollapseTransition,
  n as TuConfigProvider,
  c as TuForm,
  B as TuIcon,
  R as TuInput,
  G as TuMessage,
  O as TuOnlyClient,
  b as TuPopover,
  y as TuRadio,
  z as TuRadioGroup,
  M as TuResizeObserver,
  $ as TuRow,
  k as TuSwitch,
  A as TuTextarea,
  E as TuTooltip,
  J as TuTransition,
  L as TuTrigger,
  t as default
};
