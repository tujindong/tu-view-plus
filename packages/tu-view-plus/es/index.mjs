import * as o from "./src/index.mjs";
import { TuButton as T, TuButtonGroup as x } from "./src/button/index.mjs";
import { TuBadge as m } from "./src/badge/index.mjs";
import { TuCheckbox as n, TuCheckboxGroup as a } from "./src/checkbox/index.mjs";
import { TuConfigProvider as l } from "./src/config-provider/index.mjs";
import { TuCollapseTransition as c } from "./src/collapse-transition/index.mjs";
import { TuCol as g } from "./src/col/index.mjs";
import { TuForm as R } from "./src/form/index.mjs";
import { TuInput as v } from "./src/input/index.mjs";
import { TuInputNumber as G } from "./src/input-number/index.mjs";
import { TuIcon as k } from "./src/icon/index.mjs";
import { TuMessage as O } from "./src/message/index.mjs";
import { TuOnlyClient as y } from "./src/only-client/index.mjs";
import { TuPopover as F } from "./src/popover/index.mjs";
import { TuRadio as N, TuRadioGroup as S } from "./src/radio/index.mjs";
import { TuResizeObserver as j } from "./src/resize-observer/index.mjs";
import { TuRow as A } from "./src/row/index.mjs";
import { TuSwitch as E } from "./src/switch/index.mjs";
import { TuTextarea as J } from "./src/textarea/index.mjs";
import { TuTooltip as L } from "./src/tooltip/index.mjs";
import { TuTransition as U } from "./src/transition/index.mjs";
import { TuTrigger as W } from "./src/trigger/index.mjs";
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
  R as TuForm,
  k as TuIcon,
  v as TuInput,
  G as TuInputNumber,
  O as TuMessage,
  y as TuOnlyClient,
  F as TuPopover,
  N as TuRadio,
  S as TuRadioGroup,
  j as TuResizeObserver,
  A as TuRow,
  E as TuSwitch,
  J as TuTextarea,
  L as TuTooltip,
  U as TuTransition,
  W as TuTrigger,
  t as default
};
