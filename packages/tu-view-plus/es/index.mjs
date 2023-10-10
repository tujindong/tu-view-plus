import * as o from "./src/index.mjs";
import { TuAlert as T } from "./src/alert/index.mjs";
import { TuBackTop as x } from "./src/back-top/index.mjs";
import { TuBadge as i } from "./src/badge/index.mjs";
import { TuButton as a, TuButtonGroup as l } from "./src/button/index.mjs";
import { TuCheckbox as s, TuCheckboxGroup as c } from "./src/checkbox/index.mjs";
import { TuConfigProvider as b } from "./src/config-provider/index.mjs";
import { TuCollapseTransition as D } from "./src/collapse-transition/index.mjs";
import { TuCol as C } from "./src/col/index.mjs";
import { TuCard as P } from "./src/card/index.mjs";
import { TuDivider as G } from "./src/divider/index.mjs";
import { TuDrawer as R, TuDrawerBox as h } from "./src/drawer/index.mjs";
import { TuDropdown as M, TuDropdownButton as O, TuDropdownGroup as y, TuDropdownItem as N, TuDropdownSubmenu as z } from "./src/dropdown/index.mjs";
import { TuEmpty as E } from "./src/empty/index.mjs";
import { TuForm as L } from "./src/form/index.mjs";
import { TuInput as $ } from "./src/input/index.mjs";
import { TuInputNumber as q } from "./src/input-number/index.mjs";
import { TuIcon as J } from "./src/icon/index.mjs";
import { TuModal as Q, TuModalBox as U } from "./src/modal/index.mjs";
import { TuMessage as X } from "./src/message/index.mjs";
import { TuNotification as Z } from "./src/notification/index.mjs";
import { TuOnlyClient as oo } from "./src/only-client/index.mjs";
import { TuPagination as eo } from "./src/pagination/index.mjs";
import { TuPopconfirm as uo } from "./src/popconfirm/index.mjs";
import { TuPopover as To } from "./src/popover/index.mjs";
import { TuProgress as xo } from "./src/progress/index.mjs";
import { TuRadio as io, TuRadioGroup as no } from "./src/radio/index.mjs";
import { TuResizeObserver as lo } from "./src/resize-observer/index.mjs";
import { TuRow as co } from "./src/row/index.mjs";
import { TuScrollbar as bo } from "./src/scrollbar/index.mjs";
import { TuSelect as Do, TuSelectOption as Bo } from "./src/select/index.mjs";
import { TuSlider as So } from "./src/slider/index.mjs";
import { TuSpin as vo } from "./src/spin/index.mjs";
import { TuSwitch as Io } from "./src/switch/index.mjs";
import { TuTabPane as ho, TuTabs as ko } from "./src/tabs/index.mjs";
import { TuTag as Oo } from "./src/tag/index.mjs";
import { TuTextarea as No } from "./src/textarea/index.mjs";
import { TuTooltip as Ao } from "./src/tooltip/index.mjs";
import { TuTransition as Fo } from "./src/transition/index.mjs";
import { TuTrigger as Vo } from "./src/trigger/index.mjs";
import { TuVirtualList as jo } from "./src/virtual-list/index.mjs";
const t = {
  install: (r) => {
    for (let e in o)
      r.use(o[e]);
  }
};
export {
  T as TuAlert,
  x as TuBackTop,
  i as TuBadge,
  a as TuButton,
  l as TuButtonGroup,
  P as TuCard,
  s as TuCheckbox,
  c as TuCheckboxGroup,
  C as TuCol,
  D as TuCollapseTransition,
  b as TuConfigProvider,
  G as TuDivider,
  R as TuDrawer,
  h as TuDrawerBox,
  M as TuDropdown,
  O as TuDropdownButton,
  y as TuDropdownGroup,
  N as TuDropdownItem,
  z as TuDropdownSubmenu,
  E as TuEmpty,
  L as TuForm,
  J as TuIcon,
  $ as TuInput,
  q as TuInputNumber,
  X as TuMessage,
  Q as TuModal,
  U as TuModalBox,
  Z as TuNotification,
  oo as TuOnlyClient,
  eo as TuPagination,
  uo as TuPopconfirm,
  To as TuPopover,
  xo as TuProgress,
  io as TuRadio,
  no as TuRadioGroup,
  lo as TuResizeObserver,
  co as TuRow,
  bo as TuScrollbar,
  Do as TuSelect,
  Bo as TuSelectOption,
  So as TuSlider,
  vo as TuSpin,
  Io as TuSwitch,
  ho as TuTabPane,
  ko as TuTabs,
  Oo as TuTag,
  No as TuTextarea,
  Ao as TuTooltip,
  Fo as TuTransition,
  Vo as TuTrigger,
  jo as TuVirtualList,
  t as default
};
