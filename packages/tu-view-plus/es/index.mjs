import * as o from "./src/index.mjs";
import { TuAffix as T } from "./src/affix/index.mjs";
import { TuAlert as x } from "./src/alert/index.mjs";
import { TuAvatar as i } from "./src/avatar/index.mjs";
import { TuBackTop as n } from "./src/back-top/index.mjs";
import { TuBadge as s } from "./src/badge/index.mjs";
import { TuButton as c, TuButtonGroup as w } from "./src/button/index.mjs";
import { TuCheckbox as b, TuCheckboxGroup as g } from "./src/checkbox/index.mjs";
import { TuConfigProvider as S } from "./src/config-provider/index.mjs";
import { TuCollapse as I, TuCollapseItem as P } from "./src/collapse/index.mjs";
import { TuCollapseTransition as G } from "./src/collapse-transition/index.mjs";
import { TuCol as h } from "./src/col/index.mjs";
import { TuCard as A } from "./src/card/index.mjs";
import { TuDivider as O } from "./src/divider/index.mjs";
import { TuDrawer as N, TuDrawerBox as z } from "./src/drawer/index.mjs";
import { TuDropdown as F, TuDropdownButton as L, TuDropdownGroup as V, TuDropdownItem as $, TuDropdownSubmenu as j } from "./src/dropdown/index.mjs";
import { TuEmpty as H } from "./src/empty/index.mjs";
import { TuForm as K } from "./src/form/index.mjs";
import { TuInput as U } from "./src/input/index.mjs";
import { TuInputNumber as X } from "./src/input-number/index.mjs";
import { TuIcon as Z } from "./src/icon/index.mjs";
import { TuModal as oo, TuModalBox as ro } from "./src/modal/index.mjs";
import { TuMessage as to } from "./src/message/index.mjs";
import { TuNotification as po } from "./src/notification/index.mjs";
import { TuOnlyClient as mo } from "./src/only-client/index.mjs";
import { TuPagination as fo } from "./src/pagination/index.mjs";
import { TuPopconfirm as ao } from "./src/popconfirm/index.mjs";
import { TuPopover as lo } from "./src/popover/index.mjs";
import { TuProgress as co } from "./src/progress/index.mjs";
import { TuRadio as Co, TuRadioGroup as bo } from "./src/radio/index.mjs";
import { TuResizeObserver as Do } from "./src/resize-observer/index.mjs";
import { TuRow as Bo } from "./src/row/index.mjs";
import { TuScrollbar as Po } from "./src/scrollbar/index.mjs";
import { TuSelect as Go, TuSelectOption as Ro } from "./src/select/index.mjs";
import { TuSlider as ko } from "./src/slider/index.mjs";
import { TuSpace as Mo } from "./src/space/index.mjs";
import { TuSpin as yo } from "./src/spin/index.mjs";
import { TuSwitch as zo } from "./src/switch/index.mjs";
import { TuTabPane as Fo, TuTabs as Lo } from "./src/tabs/index.mjs";
import { TuTag as $o } from "./src/tag/index.mjs";
import { TuTextarea as qo } from "./src/textarea/index.mjs";
import { TuTooltip as Jo } from "./src/tooltip/index.mjs";
import { TuTransition as Qo } from "./src/transition/index.mjs";
import { TuTrigger as Wo } from "./src/trigger/index.mjs";
import { TuVirtualList as Yo } from "./src/virtual-list/index.mjs";
import { TuTimeline as _o, TuTimelineItem as or } from "./src/timeline/index.mjs";
const t = {
  install: (r) => {
    for (let e in o)
      r.use(o[e]);
  }
};
export {
  T as TuAffix,
  x as TuAlert,
  i as TuAvatar,
  n as TuBackTop,
  s as TuBadge,
  c as TuButton,
  w as TuButtonGroup,
  A as TuCard,
  b as TuCheckbox,
  g as TuCheckboxGroup,
  h as TuCol,
  I as TuCollapse,
  P as TuCollapseItem,
  G as TuCollapseTransition,
  S as TuConfigProvider,
  O as TuDivider,
  N as TuDrawer,
  z as TuDrawerBox,
  F as TuDropdown,
  L as TuDropdownButton,
  V as TuDropdownGroup,
  $ as TuDropdownItem,
  j as TuDropdownSubmenu,
  H as TuEmpty,
  K as TuForm,
  Z as TuIcon,
  U as TuInput,
  X as TuInputNumber,
  to as TuMessage,
  oo as TuModal,
  ro as TuModalBox,
  po as TuNotification,
  mo as TuOnlyClient,
  fo as TuPagination,
  ao as TuPopconfirm,
  lo as TuPopover,
  co as TuProgress,
  Co as TuRadio,
  bo as TuRadioGroup,
  Do as TuResizeObserver,
  Bo as TuRow,
  Po as TuScrollbar,
  Go as TuSelect,
  Ro as TuSelectOption,
  ko as TuSlider,
  Mo as TuSpace,
  yo as TuSpin,
  zo as TuSwitch,
  Fo as TuTabPane,
  Lo as TuTabs,
  $o as TuTag,
  qo as TuTextarea,
  _o as TuTimeline,
  or as TuTimelineItem,
  Jo as TuTooltip,
  Qo as TuTransition,
  Wo as TuTrigger,
  Yo as TuVirtualList,
  t as default
};
