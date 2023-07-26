import * as o from "./src/index.mjs";
import { TuButton as T, TuButtonGroup as x } from "./src/button/index.mjs";
import { TuBadge as m } from "./src/badge/index.mjs";
import { TuCheckbox as n, TuCheckboxGroup as a } from "./src/checkbox/index.mjs";
import { TuConfigProvider as l } from "./src/config-provider/index.mjs";
import { TuCollapseTransition as c } from "./src/collapse-transition/index.mjs";
import { TuCol as g } from "./src/col/index.mjs";
import { TuForm as b } from "./src/form/index.mjs";
import { TuInput as v } from "./src/input/index.mjs";
import { TuIcon as G } from "./src/icon/index.mjs";
import { TuMessage as w } from "./src/message/index.mjs";
import { TuOnlyClient as O } from "./src/only-client/index.mjs";
import { TuPopover as y } from "./src/popover/index.mjs";
import { TuRadio as F, TuRadioGroup as M } from "./src/radio/index.mjs";
import { TuResizeObserver as $ } from "./src/resize-observer/index.mjs";
import { TuRow as q } from "./src/row/index.mjs";
import { TuSwitch as D } from "./src/switch/index.mjs";
import { TuTextarea as H } from "./src/textarea/index.mjs";
import { TuTooltip as K } from "./src/tooltip/index.mjs";
import { TuTransition as N } from "./src/transition/index.mjs";
import { TuTrigger as U } from "./src/trigger/index.mjs";
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
  n as TuCheckbox,
  a as TuCheckboxGroup,
  g as TuCol,
  c as TuCollapseTransition,
  l as TuConfigProvider,
  b as TuForm,
  G as TuIcon,
  v as TuInput,
  w as TuMessage,
  O as TuOnlyClient,
  y as TuPopover,
  F as TuRadio,
  M as TuRadioGroup,
  $ as TuResizeObserver,
  q as TuRow,
  D as TuSwitch,
  H as TuTextarea,
  K as TuTooltip,
  N as TuTransition,
  U as TuTrigger,
  t as default
};
