import * as o from "./src/index.mjs";
import { TuAlert as T } from "./src/alert/index.mjs";
import { TuButton as m, TuButtonGroup as f } from "./src/button/index.mjs";
import { TuBadge as n } from "./src/badge/index.mjs";
import { TuCheckbox as l, TuCheckboxGroup as d } from "./src/checkbox/index.mjs";
import { TuConfigProvider as c } from "./src/config-provider/index.mjs";
import { TuCollapseTransition as g } from "./src/collapse-transition/index.mjs";
import { TuCol as C } from "./src/col/index.mjs";
import { TuCard as b } from "./src/card/index.mjs";
import { TuDivider as P } from "./src/divider/index.mjs";
import { TuDrawer as G, TuDrawerBox as I } from "./src/drawer/index.mjs";
import { TuDropdown as h, TuDropdownButton as M, TuDropdownGroup as O, TuDropdownItem as k, TuDropdownSubmenu as N } from "./src/dropdown/index.mjs";
import { TuForm as z } from "./src/form/index.mjs";
import { TuInput as F } from "./src/input/index.mjs";
import { TuInputNumber as V } from "./src/input-number/index.mjs";
import { TuIcon as j } from "./src/icon/index.mjs";
import { TuModal as E, TuModalBox as H } from "./src/modal/index.mjs";
import { TuMessage as K } from "./src/message/index.mjs";
import { TuNotification as U } from "./src/notification/index.mjs";
import { TuOnlyClient as X } from "./src/only-client/index.mjs";
import { TuPagination as Z } from "./src/pagination/index.mjs";
import { TuPopconfirm as oo } from "./src/popconfirm/index.mjs";
import { TuPopover as eo } from "./src/popover/index.mjs";
import { TuProgress as uo } from "./src/progress/index.mjs";
import { TuRadio as To, TuRadioGroup as xo } from "./src/radio/index.mjs";
import { TuResizeObserver as fo } from "./src/resize-observer/index.mjs";
import { TuRow as no } from "./src/row/index.mjs";
import { TuScrollbar as lo } from "./src/scrollbar/index.mjs";
import { TuSelect as co, TuSelectOption as wo } from "./src/select/index.mjs";
import { TuSlider as Do } from "./src/slider/index.mjs";
import { TuSpin as So } from "./src/spin/index.mjs";
import { TuSwitch as Bo } from "./src/switch/index.mjs";
import { TuTag as vo } from "./src/tag/index.mjs";
import { TuTextarea as Io } from "./src/textarea/index.mjs";
import { TuTooltip as ho } from "./src/tooltip/index.mjs";
import { TuTransition as Oo } from "./src/transition/index.mjs";
import { TuTrigger as No } from "./src/trigger/index.mjs";
import { TuVirtualList as zo } from "./src/virtual-list/index.mjs";
const t = {
  install: (r) => {
    for (let e in o)
      r.use(o[e]);
  }
};
export {
  T as TuAlert,
  n as TuBadge,
  m as TuButton,
  f as TuButtonGroup,
  b as TuCard,
  l as TuCheckbox,
  d as TuCheckboxGroup,
  C as TuCol,
  g as TuCollapseTransition,
  c as TuConfigProvider,
  P as TuDivider,
  G as TuDrawer,
  I as TuDrawerBox,
  h as TuDropdown,
  M as TuDropdownButton,
  O as TuDropdownGroup,
  k as TuDropdownItem,
  N as TuDropdownSubmenu,
  z as TuForm,
  j as TuIcon,
  F as TuInput,
  V as TuInputNumber,
  K as TuMessage,
  E as TuModal,
  H as TuModalBox,
  U as TuNotification,
  X as TuOnlyClient,
  Z as TuPagination,
  oo as TuPopconfirm,
  eo as TuPopover,
  uo as TuProgress,
  To as TuRadio,
  xo as TuRadioGroup,
  fo as TuResizeObserver,
  no as TuRow,
  lo as TuScrollbar,
  co as TuSelect,
  wo as TuSelectOption,
  Do as TuSlider,
  So as TuSpin,
  Bo as TuSwitch,
  vo as TuTag,
  Io as TuTextarea,
  ho as TuTooltip,
  Oo as TuTransition,
  No as TuTrigger,
  zo as TuVirtualList,
  t as default
};
