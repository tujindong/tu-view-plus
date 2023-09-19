import * as o from "./src/index.mjs";
import { TuAlert as T } from "./src/alert/index.mjs";
import { TuBackTop as m } from "./src/back-top/index.mjs";
import { TuBadge as i } from "./src/badge/index.mjs";
import { TuButton as a, TuButtonGroup as l } from "./src/button/index.mjs";
import { TuCheckbox as s, TuCheckboxGroup as c } from "./src/checkbox/index.mjs";
import { TuConfigProvider as g } from "./src/config-provider/index.mjs";
import { TuCollapseTransition as B } from "./src/collapse-transition/index.mjs";
import { TuCol as S } from "./src/col/index.mjs";
import { TuCard as P } from "./src/card/index.mjs";
import { TuDivider as G } from "./src/divider/index.mjs";
import { TuDrawer as R, TuDrawerBox as h } from "./src/drawer/index.mjs";
import { TuDropdown as M, TuDropdownButton as O, TuDropdownGroup as N, TuDropdownItem as y, TuDropdownSubmenu as z } from "./src/dropdown/index.mjs";
import { TuForm as F } from "./src/form/index.mjs";
import { TuInput as V } from "./src/input/index.mjs";
import { TuInputNumber as j } from "./src/input-number/index.mjs";
import { TuIcon as E } from "./src/icon/index.mjs";
import { TuModal as J, TuModalBox as K } from "./src/modal/index.mjs";
import { TuMessage as U } from "./src/message/index.mjs";
import { TuNotification as X } from "./src/notification/index.mjs";
import { TuOnlyClient as Z } from "./src/only-client/index.mjs";
import { TuPagination as oo } from "./src/pagination/index.mjs";
import { TuPopconfirm as eo } from "./src/popconfirm/index.mjs";
import { TuPopover as uo } from "./src/popover/index.mjs";
import { TuProgress as To } from "./src/progress/index.mjs";
import { TuRadio as mo, TuRadioGroup as fo } from "./src/radio/index.mjs";
import { TuResizeObserver as no } from "./src/resize-observer/index.mjs";
import { TuRow as lo } from "./src/row/index.mjs";
import { TuScrollbar as co } from "./src/scrollbar/index.mjs";
import { TuSelect as go, TuSelectOption as Do } from "./src/select/index.mjs";
import { TuSlider as Co } from "./src/slider/index.mjs";
import { TuSpin as bo } from "./src/spin/index.mjs";
import { TuSwitch as vo } from "./src/switch/index.mjs";
import { TuTag as Io } from "./src/tag/index.mjs";
import { TuTextarea as ho } from "./src/textarea/index.mjs";
import { TuTooltip as Mo } from "./src/tooltip/index.mjs";
import { TuTransition as No } from "./src/transition/index.mjs";
import { TuTrigger as zo } from "./src/trigger/index.mjs";
import { TuVirtualList as Fo } from "./src/virtual-list/index.mjs";
const t = {
  install: (r) => {
    for (let e in o)
      r.use(o[e]);
  }
};
export {
  T as TuAlert,
  m as TuBackTop,
  i as TuBadge,
  a as TuButton,
  l as TuButtonGroup,
  P as TuCard,
  s as TuCheckbox,
  c as TuCheckboxGroup,
  S as TuCol,
  B as TuCollapseTransition,
  g as TuConfigProvider,
  G as TuDivider,
  R as TuDrawer,
  h as TuDrawerBox,
  M as TuDropdown,
  O as TuDropdownButton,
  N as TuDropdownGroup,
  y as TuDropdownItem,
  z as TuDropdownSubmenu,
  F as TuForm,
  E as TuIcon,
  V as TuInput,
  j as TuInputNumber,
  U as TuMessage,
  J as TuModal,
  K as TuModalBox,
  X as TuNotification,
  Z as TuOnlyClient,
  oo as TuPagination,
  eo as TuPopconfirm,
  uo as TuPopover,
  To as TuProgress,
  mo as TuRadio,
  fo as TuRadioGroup,
  no as TuResizeObserver,
  lo as TuRow,
  co as TuScrollbar,
  go as TuSelect,
  Do as TuSelectOption,
  Co as TuSlider,
  bo as TuSpin,
  vo as TuSwitch,
  Io as TuTag,
  ho as TuTextarea,
  Mo as TuTooltip,
  No as TuTransition,
  zo as TuTrigger,
  Fo as TuVirtualList,
  t as default
};
