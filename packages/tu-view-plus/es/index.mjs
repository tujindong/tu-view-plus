import * as o from "./src/index.mjs";
import { TuAlert as T } from "./src/alert/index.mjs";
import { TuButton as m, TuButtonGroup as f } from "./src/button/index.mjs";
import { TuBadge as i } from "./src/badge/index.mjs";
import { TuCheckbox as l, TuCheckboxGroup as d } from "./src/checkbox/index.mjs";
import { TuConfigProvider as c } from "./src/config-provider/index.mjs";
import { TuCollapseTransition as g } from "./src/collapse-transition/index.mjs";
import { TuCol as D } from "./src/col/index.mjs";
import { TuCard as b } from "./src/card/index.mjs";
import { TuDrawer as P, TuDrawerBox as G } from "./src/drawer/index.mjs";
import { TuDropdown as R, TuDropdownButton as h, TuDropdownGroup as v, TuDropdownItem as M, TuDropdownSubmenu as O } from "./src/dropdown/index.mjs";
import { TuForm as N } from "./src/form/index.mjs";
import { TuInput as z } from "./src/input/index.mjs";
import { TuInputNumber as F } from "./src/input-number/index.mjs";
import { TuIcon as V } from "./src/icon/index.mjs";
import { TuModal as j, TuModalBox as q } from "./src/modal/index.mjs";
import { TuMessage as H } from "./src/message/index.mjs";
import { TuNotification as K } from "./src/notification/index.mjs";
import { TuOnlyClient as U } from "./src/only-client/index.mjs";
import { TuPagination as X } from "./src/pagination/index.mjs";
import { TuPopconfirm as Z } from "./src/popconfirm/index.mjs";
import { TuPopover as oo } from "./src/popover/index.mjs";
import { TuProgress as eo } from "./src/progress/index.mjs";
import { TuRadio as uo, TuRadioGroup as po } from "./src/radio/index.mjs";
import { TuResizeObserver as xo } from "./src/resize-observer/index.mjs";
import { TuRow as fo } from "./src/row/index.mjs";
import { TuScrollbar as io } from "./src/scrollbar/index.mjs";
import { TuSelect as lo, TuSelectOption as so } from "./src/select/index.mjs";
import { TuSlider as wo } from "./src/slider/index.mjs";
import { TuSpin as Co } from "./src/spin/index.mjs";
import { TuSwitch as So } from "./src/switch/index.mjs";
import { TuTag as Bo } from "./src/tag/index.mjs";
import { TuTextarea as Go } from "./src/textarea/index.mjs";
import { TuTooltip as Ro } from "./src/tooltip/index.mjs";
import { TuTransition as vo } from "./src/transition/index.mjs";
import { TuTrigger as Oo } from "./src/trigger/index.mjs";
import { TuVirtualList as No } from "./src/virtual-list/index.mjs";
const t = {
  install: (r) => {
    for (let e in o)
      r.use(o[e]);
  }
};
export {
  T as TuAlert,
  i as TuBadge,
  m as TuButton,
  f as TuButtonGroup,
  b as TuCard,
  l as TuCheckbox,
  d as TuCheckboxGroup,
  D as TuCol,
  g as TuCollapseTransition,
  c as TuConfigProvider,
  P as TuDrawer,
  G as TuDrawerBox,
  R as TuDropdown,
  h as TuDropdownButton,
  v as TuDropdownGroup,
  M as TuDropdownItem,
  O as TuDropdownSubmenu,
  N as TuForm,
  V as TuIcon,
  z as TuInput,
  F as TuInputNumber,
  H as TuMessage,
  j as TuModal,
  q as TuModalBox,
  K as TuNotification,
  U as TuOnlyClient,
  X as TuPagination,
  Z as TuPopconfirm,
  oo as TuPopover,
  eo as TuProgress,
  uo as TuRadio,
  po as TuRadioGroup,
  xo as TuResizeObserver,
  fo as TuRow,
  io as TuScrollbar,
  lo as TuSelect,
  so as TuSelectOption,
  wo as TuSlider,
  Co as TuSpin,
  So as TuSwitch,
  Bo as TuTag,
  Go as TuTextarea,
  Ro as TuTooltip,
  vo as TuTransition,
  Oo as TuTrigger,
  No as TuVirtualList,
  t as default
};
