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
import { TuModal as M } from "./src/modal/index.mjs";
import { TuMessage as y } from "./src/message/index.mjs";
import { TuOnlyClient as F } from "./src/only-client/index.mjs";
import { TuPopover as N } from "./src/popover/index.mjs";
import { TuRadio as $, TuRadioGroup as j } from "./src/radio/index.mjs";
import { TuResizeObserver as A } from "./src/resize-observer/index.mjs";
import { TuRow as E } from "./src/row/index.mjs";
import { TuScrollbar as J } from "./src/scrollbar/index.mjs";
import { TuSelect as Q, TuSelectOption as U } from "./src/select/index.mjs";
import { TuSlider as X } from "./src/slider/index.mjs";
import { TuSwitch as Z } from "./src/switch/index.mjs";
import { TuTag as oo } from "./src/tag/index.mjs";
import { TuTextarea as eo } from "./src/textarea/index.mjs";
import { TuTooltip as uo } from "./src/tooltip/index.mjs";
import { TuTransition as To } from "./src/transition/index.mjs";
import { TuTrigger as fo } from "./src/trigger/index.mjs";
import { TuVirtualList as io } from "./src/virtual-list/index.mjs";
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
  y as TuMessage,
  M as TuModal,
  F as TuOnlyClient,
  N as TuPopover,
  $ as TuRadio,
  j as TuRadioGroup,
  A as TuResizeObserver,
  E as TuRow,
  J as TuScrollbar,
  Q as TuSelect,
  U as TuSelectOption,
  X as TuSlider,
  T as TuSpin,
  Z as TuSwitch,
  oo as TuTag,
  eo as TuTextarea,
  uo as TuTooltip,
  To as TuTransition,
  fo as TuTrigger,
  io as TuVirtualList,
  t as default
};
