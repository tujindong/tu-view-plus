import * as o from "./src/index.mjs";
import { TuSpin as T } from "./src/spin/index.mjs";
import { TuButton as f, TuButtonGroup as m } from "./src/button/index.mjs";
import { TuBadge as a } from "./src/badge/index.mjs";
import { TuCheckbox as l, TuCheckboxGroup as s } from "./src/checkbox/index.mjs";
import { TuConfigProvider as d } from "./src/config-provider/index.mjs";
import { TuCollapseTransition as g } from "./src/collapse-transition/index.mjs";
import { TuCol as b } from "./src/col/index.mjs";
import { TuCard as w } from "./src/card/index.mjs";
import { TuDrawer as h, TuDrawerBox as v } from "./src/drawer/index.mjs";
import { TuForm as I } from "./src/form/index.mjs";
import { TuInput as O } from "./src/input/index.mjs";
import { TuInputNumber as k } from "./src/input-number/index.mjs";
import { TuIcon as N } from "./src/icon/index.mjs";
import { TuModal as z, TuModalBox as F } from "./src/modal/index.mjs";
import { TuMessage as V } from "./src/message/index.mjs";
import { TuNotification as j } from "./src/notification/index.mjs";
import { TuOnlyClient as A } from "./src/only-client/index.mjs";
import { TuPopconfirm as H } from "./src/popconfirm/index.mjs";
import { TuPopover as K } from "./src/popover/index.mjs";
import { TuRadio as U, TuRadioGroup as W } from "./src/radio/index.mjs";
import { TuResizeObserver as Y } from "./src/resize-observer/index.mjs";
import { TuRow as _ } from "./src/row/index.mjs";
import { TuScrollbar as ro } from "./src/scrollbar/index.mjs";
import { TuSelect as to, TuSelectOption as uo } from "./src/select/index.mjs";
import { TuSlider as To } from "./src/slider/index.mjs";
import { TuSwitch as fo } from "./src/switch/index.mjs";
import { TuTag as io } from "./src/tag/index.mjs";
import { TuTextarea as no } from "./src/textarea/index.mjs";
import { TuTooltip as so } from "./src/tooltip/index.mjs";
import { TuTransition as Co } from "./src/transition/index.mjs";
import { TuTrigger as So } from "./src/trigger/index.mjs";
import { TuVirtualList as Bo } from "./src/virtual-list/index.mjs";
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
  d as TuConfigProvider,
  h as TuDrawer,
  v as TuDrawerBox,
  I as TuForm,
  N as TuIcon,
  O as TuInput,
  k as TuInputNumber,
  V as TuMessage,
  z as TuModal,
  F as TuModalBox,
  j as TuNotification,
  A as TuOnlyClient,
  H as TuPopconfirm,
  K as TuPopover,
  U as TuRadio,
  W as TuRadioGroup,
  Y as TuResizeObserver,
  _ as TuRow,
  ro as TuScrollbar,
  to as TuSelect,
  uo as TuSelectOption,
  To as TuSlider,
  T as TuSpin,
  fo as TuSwitch,
  io as TuTag,
  no as TuTextarea,
  so as TuTooltip,
  Co as TuTransition,
  So as TuTrigger,
  Bo as TuVirtualList,
  t as default
};
