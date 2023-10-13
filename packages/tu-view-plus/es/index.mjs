import * as o from "./src/index.mjs";
import { TuAffix as T } from "./src/affix/index.mjs";
import { TuAlert as x } from "./src/alert/index.mjs";
import { TuBackTop as i } from "./src/back-top/index.mjs";
import { TuBadge as a } from "./src/badge/index.mjs";
import { TuButton as s, TuButtonGroup as d } from "./src/button/index.mjs";
import { TuCheckbox as w, TuCheckboxGroup as C } from "./src/checkbox/index.mjs";
import { TuConfigProvider as g } from "./src/config-provider/index.mjs";
import { TuCollapse as B, TuCollapseItem as S } from "./src/collapse/index.mjs";
import { TuCollapseTransition as I } from "./src/collapse-transition/index.mjs";
import { TuCol as G } from "./src/col/index.mjs";
import { TuCard as h } from "./src/card/index.mjs";
import { TuDivider as M } from "./src/divider/index.mjs";
import { TuDrawer as y, TuDrawerBox as A } from "./src/drawer/index.mjs";
import { TuDropdown as z, TuDropdownButton as E, TuDropdownGroup as F, TuDropdownItem as L, TuDropdownSubmenu as V } from "./src/dropdown/index.mjs";
import { TuEmpty as j } from "./src/empty/index.mjs";
import { TuForm as H } from "./src/form/index.mjs";
import { TuInput as K } from "./src/input/index.mjs";
import { TuInputNumber as U } from "./src/input-number/index.mjs";
import { TuIcon as X } from "./src/icon/index.mjs";
import { TuModal as Z, TuModalBox as _ } from "./src/modal/index.mjs";
import { TuMessage as ro } from "./src/message/index.mjs";
import { TuNotification as to } from "./src/notification/index.mjs";
import { TuOnlyClient as po } from "./src/only-client/index.mjs";
import { TuPagination as mo } from "./src/pagination/index.mjs";
import { TuPopconfirm as fo } from "./src/popconfirm/index.mjs";
import { TuPopover as no } from "./src/popover/index.mjs";
import { TuProgress as lo } from "./src/progress/index.mjs";
import { TuRadio as co, TuRadioGroup as wo } from "./src/radio/index.mjs";
import { TuResizeObserver as bo } from "./src/resize-observer/index.mjs";
import { TuRow as Do } from "./src/row/index.mjs";
import { TuScrollbar as So } from "./src/scrollbar/index.mjs";
import { TuSelect as Io, TuSelectOption as vo } from "./src/select/index.mjs";
import { TuSlider as Ro } from "./src/slider/index.mjs";
import { TuSpin as ko } from "./src/spin/index.mjs";
import { TuSwitch as Oo } from "./src/switch/index.mjs";
import { TuTabPane as Ao, TuTabs as No } from "./src/tabs/index.mjs";
import { TuTag as Eo } from "./src/tag/index.mjs";
import { TuTextarea as Lo } from "./src/textarea/index.mjs";
import { TuTooltip as $o } from "./src/tooltip/index.mjs";
import { TuTransition as qo } from "./src/transition/index.mjs";
import { TuTrigger as Jo } from "./src/trigger/index.mjs";
import { TuVirtualList as Qo } from "./src/virtual-list/index.mjs";
const t = {
  install: (r) => {
    for (let e in o)
      r.use(o[e]);
  }
};
export {
  T as TuAffix,
  x as TuAlert,
  i as TuBackTop,
  a as TuBadge,
  s as TuButton,
  d as TuButtonGroup,
  h as TuCard,
  w as TuCheckbox,
  C as TuCheckboxGroup,
  G as TuCol,
  B as TuCollapse,
  S as TuCollapseItem,
  I as TuCollapseTransition,
  g as TuConfigProvider,
  M as TuDivider,
  y as TuDrawer,
  A as TuDrawerBox,
  z as TuDropdown,
  E as TuDropdownButton,
  F as TuDropdownGroup,
  L as TuDropdownItem,
  V as TuDropdownSubmenu,
  j as TuEmpty,
  H as TuForm,
  X as TuIcon,
  K as TuInput,
  U as TuInputNumber,
  ro as TuMessage,
  Z as TuModal,
  _ as TuModalBox,
  to as TuNotification,
  po as TuOnlyClient,
  mo as TuPagination,
  fo as TuPopconfirm,
  no as TuPopover,
  lo as TuProgress,
  co as TuRadio,
  wo as TuRadioGroup,
  bo as TuResizeObserver,
  Do as TuRow,
  So as TuScrollbar,
  Io as TuSelect,
  vo as TuSelectOption,
  Ro as TuSlider,
  ko as TuSpin,
  Oo as TuSwitch,
  Ao as TuTabPane,
  No as TuTabs,
  Eo as TuTag,
  Lo as TuTextarea,
  $o as TuTooltip,
  qo as TuTransition,
  Jo as TuTrigger,
  Qo as TuVirtualList,
  t as default
};
