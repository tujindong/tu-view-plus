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
import { TuInputNumber as k } from "./src/input-number/index.mjs";
import { TuIcon as y } from "./src/icon/index.mjs";
import { TuModal as F, TuModalBox as L } from "./src/modal/index.mjs";
import { TuMessage as V } from "./src/message/index.mjs";
import { TuOnlyClient as j } from "./src/only-client/index.mjs";
import { TuPopconfirm as A } from "./src/popconfirm/index.mjs";
import { TuPopover as H } from "./src/popover/index.mjs";
import { TuRadio as K, TuRadioGroup as Q } from "./src/radio/index.mjs";
import { TuResizeObserver as W } from "./src/resize-observer/index.mjs";
import { TuRow as Y } from "./src/row/index.mjs";
import { TuScrollbar as _ } from "./src/scrollbar/index.mjs";
import { TuSelect as ro, TuSelectOption as eo } from "./src/select/index.mjs";
import { TuSlider as uo } from "./src/slider/index.mjs";
import { TuSwitch as To } from "./src/switch/index.mjs";
import { TuTag as fo } from "./src/tag/index.mjs";
import { TuTextarea as io } from "./src/textarea/index.mjs";
import { TuTooltip as no } from "./src/tooltip/index.mjs";
import { TuTransition as so } from "./src/transition/index.mjs";
import { TuTrigger as Co } from "./src/trigger/index.mjs";
import { TuVirtualList as So } from "./src/virtual-list/index.mjs";
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
  k as TuInputNumber,
  V as TuMessage,
  F as TuModal,
  L as TuModalBox,
  j as TuOnlyClient,
  A as TuPopconfirm,
  H as TuPopover,
  K as TuRadio,
  Q as TuRadioGroup,
  W as TuResizeObserver,
  Y as TuRow,
  _ as TuScrollbar,
  ro as TuSelect,
  eo as TuSelectOption,
  uo as TuSlider,
  T as TuSpin,
  To as TuSwitch,
  fo as TuTag,
  io as TuTextarea,
  no as TuTooltip,
  so as TuTransition,
  Co as TuTrigger,
  So as TuVirtualList,
  t as default
};
