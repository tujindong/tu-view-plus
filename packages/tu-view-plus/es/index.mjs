import * as o from "./src/index.mjs";
import { TuSpin as T } from "./src/spin/index.mjs";
import { TuButton as f, TuButtonGroup as m } from "./src/button/index.mjs";
import { TuBadge as a } from "./src/badge/index.mjs";
import { TuCheckbox as l, TuCheckboxGroup as s } from "./src/checkbox/index.mjs";
import { TuConfigProvider as c } from "./src/config-provider/index.mjs";
import { TuCollapseTransition as g } from "./src/collapse-transition/index.mjs";
import { TuCol as b } from "./src/col/index.mjs";
import { TuCard as w } from "./src/card/index.mjs";
import { TuDrawer as h, TuDrawerBox as v } from "./src/drawer/index.mjs";
import { TuForm as I } from "./src/form/index.mjs";
import { TuInput as O } from "./src/input/index.mjs";
import { TuInputNumber as D } from "./src/input-number/index.mjs";
import { TuIcon as y } from "./src/icon/index.mjs";
import { TuModal as F, TuModalBox as L } from "./src/modal/index.mjs";
import { TuMessage as V } from "./src/message/index.mjs";
import { TuOnlyClient as j } from "./src/only-client/index.mjs";
import { TuPopover as A } from "./src/popover/index.mjs";
import { TuRadio as H, TuRadioGroup as J } from "./src/radio/index.mjs";
import { TuResizeObserver as Q } from "./src/resize-observer/index.mjs";
import { TuRow as W } from "./src/row/index.mjs";
import { TuScrollbar as Y } from "./src/scrollbar/index.mjs";
import { TuSelect as _, TuSelectOption as oo } from "./src/select/index.mjs";
import { TuSlider as eo } from "./src/slider/index.mjs";
import { TuSwitch as uo } from "./src/switch/index.mjs";
import { TuTag as To } from "./src/tag/index.mjs";
import { TuTextarea as fo } from "./src/textarea/index.mjs";
import { TuTooltip as io } from "./src/tooltip/index.mjs";
import { TuTransition as no } from "./src/transition/index.mjs";
import { TuTrigger as so } from "./src/trigger/index.mjs";
import { TuVirtualList as Co } from "./src/virtual-list/index.mjs";
const t = {
  install: (r) => {
    for (let e in o)
      r.use(o[e]);
  }
};
export {
  a as TuBadge,
  f as TuButton,
  m as TuButtonGroup,
  w as TuCard,
  l as TuCheckbox,
  s as TuCheckboxGroup,
  b as TuCol,
  g as TuCollapseTransition,
  c as TuConfigProvider,
  h as TuDrawer,
  v as TuDrawerBox,
  I as TuForm,
  y as TuIcon,
  O as TuInput,
  D as TuInputNumber,
  V as TuMessage,
  F as TuModal,
  L as TuModalBox,
  j as TuOnlyClient,
  A as TuPopover,
  H as TuRadio,
  J as TuRadioGroup,
  Q as TuResizeObserver,
  W as TuRow,
  Y as TuScrollbar,
  _ as TuSelect,
  oo as TuSelectOption,
  eo as TuSlider,
  T as TuSpin,
  uo as TuSwitch,
  To as TuTag,
  fo as TuTextarea,
  io as TuTooltip,
  no as TuTransition,
  so as TuTrigger,
  Co as TuVirtualList,
  t as default
};
