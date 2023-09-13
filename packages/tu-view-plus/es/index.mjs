import * as o from "./src/index.mjs";
import { TuSpin as T } from "./src/spin/index.mjs";
import { TuButton as m, TuButtonGroup as f } from "./src/button/index.mjs";
import { TuBadge as i } from "./src/badge/index.mjs";
import { TuCheckbox as l, TuCheckboxGroup as d } from "./src/checkbox/index.mjs";
import { TuConfigProvider as c } from "./src/config-provider/index.mjs";
import { TuCollapseTransition as C } from "./src/collapse-transition/index.mjs";
import { TuCol as S } from "./src/col/index.mjs";
import { TuCard as g } from "./src/card/index.mjs";
import { TuDrawer as G, TuDrawerBox as I } from "./src/drawer/index.mjs";
import { TuDropdown as h, TuDropdownButton as v, TuDropdownGroup as M, TuDropdownItem as O, TuDropdownSubmenu as P } from "./src/dropdown/index.mjs";
import { TuForm as N } from "./src/form/index.mjs";
import { TuInput as z } from "./src/input/index.mjs";
import { TuInputNumber as L } from "./src/input-number/index.mjs";
import { TuIcon as $ } from "./src/icon/index.mjs";
import { TuModal as q, TuModalBox as A } from "./src/modal/index.mjs";
import { TuMessage as H } from "./src/message/index.mjs";
import { TuNotification as K } from "./src/notification/index.mjs";
import { TuOnlyClient as U } from "./src/only-client/index.mjs";
import { TuPopconfirm as X } from "./src/popconfirm/index.mjs";
import { TuPopover as Z } from "./src/popover/index.mjs";
import { TuRadio as oo, TuRadioGroup as ro } from "./src/radio/index.mjs";
import { TuResizeObserver as to } from "./src/resize-observer/index.mjs";
import { TuRow as po } from "./src/row/index.mjs";
import { TuScrollbar as xo } from "./src/scrollbar/index.mjs";
import { TuSelect as fo, TuSelectOption as no } from "./src/select/index.mjs";
import { TuSlider as ao } from "./src/slider/index.mjs";
import { TuSwitch as so } from "./src/switch/index.mjs";
import { TuTag as wo } from "./src/tag/index.mjs";
import { TuTextarea as Do } from "./src/textarea/index.mjs";
import { TuTooltip as bo } from "./src/tooltip/index.mjs";
import { TuTransition as Bo } from "./src/transition/index.mjs";
import { TuTrigger as Io } from "./src/trigger/index.mjs";
import { TuVirtualList as ho } from "./src/virtual-list/index.mjs";
const t = {
  install: (r) => {
    for (let e in o)
      r.use(o[e]);
  }
};
export {
  i as TuBadge,
  m as TuButton,
  f as TuButtonGroup,
  g as TuCard,
  l as TuCheckbox,
  d as TuCheckboxGroup,
  S as TuCol,
  C as TuCollapseTransition,
  c as TuConfigProvider,
  G as TuDrawer,
  I as TuDrawerBox,
  h as TuDropdown,
  v as TuDropdownButton,
  M as TuDropdownGroup,
  O as TuDropdownItem,
  P as TuDropdownSubmenu,
  N as TuForm,
  $ as TuIcon,
  z as TuInput,
  L as TuInputNumber,
  H as TuMessage,
  q as TuModal,
  A as TuModalBox,
  K as TuNotification,
  U as TuOnlyClient,
  X as TuPopconfirm,
  Z as TuPopover,
  oo as TuRadio,
  ro as TuRadioGroup,
  to as TuResizeObserver,
  po as TuRow,
  xo as TuScrollbar,
  fo as TuSelect,
  no as TuSelectOption,
  ao as TuSlider,
  T as TuSpin,
  so as TuSwitch,
  wo as TuTag,
  Do as TuTextarea,
  bo as TuTooltip,
  Bo as TuTransition,
  Io as TuTrigger,
  ho as TuVirtualList,
  t as default
};
