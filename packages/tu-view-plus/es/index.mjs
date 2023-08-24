import * as o from "./src/index.mjs";
import { TuSpin as T } from "./src/spin/index.mjs";
import { TuButton as f, TuButtonGroup as m } from "./src/button/index.mjs";
import { TuBadge as n } from "./src/badge/index.mjs";
import { TuCheckbox as l, TuCheckboxGroup as s } from "./src/checkbox/index.mjs";
import { TuConfigProvider as d } from "./src/config-provider/index.mjs";
import { TuCollapseTransition as C } from "./src/collapse-transition/index.mjs";
import { TuCol as b } from "./src/col/index.mjs";
import { TuForm as h } from "./src/form/index.mjs";
import { TuInput as B } from "./src/input/index.mjs";
import { TuInputNumber as I } from "./src/input-number/index.mjs";
import { TuIcon as k } from "./src/icon/index.mjs";
import { TuMessage as P } from "./src/message/index.mjs";
import { TuOnlyClient as z } from "./src/only-client/index.mjs";
import { TuPopover as L } from "./src/popover/index.mjs";
import { TuRadio as N, TuRadioGroup as V } from "./src/radio/index.mjs";
import { TuResizeObserver as j } from "./src/resize-observer/index.mjs";
import { TuRow as A } from "./src/row/index.mjs";
import { TuScrollbar as E } from "./src/scrollbar/index.mjs";
import { TuSelect as J, TuSelectOption as K } from "./src/select/index.mjs";
import { TuSlider as U } from "./src/slider/index.mjs";
import { TuSwitch as X } from "./src/switch/index.mjs";
import { TuTag as Z } from "./src/tag/index.mjs";
import { TuTextarea as oo } from "./src/textarea/index.mjs";
import { TuTooltip as eo } from "./src/tooltip/index.mjs";
import { TuTransition as uo } from "./src/transition/index.mjs";
import { TuTrigger as To } from "./src/trigger/index.mjs";
import { TuVirtualList as fo } from "./src/virtual-list/index.mjs";
const t = {
  install: (r) => {
    for (let e in o)
      r.use(o[e]);
  }
};
export {
  n as TuBadge,
  f as TuButton,
  m as TuButtonGroup,
  l as TuCheckbox,
  s as TuCheckboxGroup,
  b as TuCol,
  C as TuCollapseTransition,
  d as TuConfigProvider,
  h as TuForm,
  k as TuIcon,
  B as TuInput,
  I as TuInputNumber,
  P as TuMessage,
  z as TuOnlyClient,
  L as TuPopover,
  N as TuRadio,
  V as TuRadioGroup,
  j as TuResizeObserver,
  A as TuRow,
  E as TuScrollbar,
  J as TuSelect,
  K as TuSelectOption,
  U as TuSlider,
  T as TuSpin,
  X as TuSwitch,
  Z as TuTag,
  oo as TuTextarea,
  eo as TuTooltip,
  uo as TuTransition,
  To as TuTrigger,
  fo as TuVirtualList,
  t as default
};
