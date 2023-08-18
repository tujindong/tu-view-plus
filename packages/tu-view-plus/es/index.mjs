import * as o from "./src/index.mjs";
import { TuButton as T, TuButtonGroup as x } from "./src/button/index.mjs";
import { TuBadge as m } from "./src/badge/index.mjs";
import { TuCheckbox as n, TuCheckboxGroup as a } from "./src/checkbox/index.mjs";
import { TuConfigProvider as s } from "./src/config-provider/index.mjs";
import { TuCollapseTransition as c } from "./src/collapse-transition/index.mjs";
import { TuCol as C } from "./src/col/index.mjs";
import { TuForm as R } from "./src/form/index.mjs";
import { TuInput as v } from "./src/input/index.mjs";
import { TuInputNumber as G } from "./src/input-number/index.mjs";
import { TuIcon as S } from "./src/icon/index.mjs";
import { TuMessage as w } from "./src/message/index.mjs";
import { TuOnlyClient as P } from "./src/only-client/index.mjs";
import { TuPopover as z } from "./src/popover/index.mjs";
import { TuRadio as M, TuRadioGroup as N } from "./src/radio/index.mjs";
import { TuResizeObserver as j } from "./src/resize-observer/index.mjs";
import { TuRow as A } from "./src/row/index.mjs";
import { TuSlider as E } from "./src/slider/index.mjs";
import { TuScrollbar as J } from "./src/scrollbar/index.mjs";
import { TuSwitch as L } from "./src/switch/index.mjs";
import { TuTag as U } from "./src/tag/index.mjs";
import { TuTextarea as W } from "./src/textarea/index.mjs";
import { TuTooltip as Y } from "./src/tooltip/index.mjs";
import { TuTransition as _ } from "./src/transition/index.mjs";
import { TuTrigger as ro } from "./src/trigger/index.mjs";
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
  C as TuCol,
  c as TuCollapseTransition,
  s as TuConfigProvider,
  R as TuForm,
  S as TuIcon,
  v as TuInput,
  G as TuInputNumber,
  w as TuMessage,
  P as TuOnlyClient,
  z as TuPopover,
  M as TuRadio,
  N as TuRadioGroup,
  j as TuResizeObserver,
  A as TuRow,
  J as TuScrollbar,
  E as TuSlider,
  L as TuSwitch,
  U as TuTag,
  W as TuTextarea,
  Y as TuTooltip,
  _ as TuTransition,
  ro as TuTrigger,
  t as default
};
