import * as o from "./src/index.mjs";
import { TuAffix as p } from "./src/affix/index.mjs";
import { TuAlert as x } from "./src/alert/index.mjs";
import { TuAvatar as n, TuAvatarGroup as a } from "./src/avatar/index.mjs";
import { TuBackTop as l } from "./src/back-top/index.mjs";
import { TuBadge as d } from "./src/badge/index.mjs";
import { TuButton as S, TuButtonGroup as g } from "./src/button/index.mjs";
import { TuCheckbox as C, TuCheckboxGroup as b } from "./src/checkbox/index.mjs";
import { TuConfigProvider as B } from "./src/config-provider/index.mjs";
import { TuCollapse as k, TuCollapseItem as v } from "./src/collapse/index.mjs";
import { TuCollapseTransition as G } from "./src/collapse-transition/index.mjs";
import { TuCol as A } from "./src/col/index.mjs";
import { TuCard as M } from "./src/card/index.mjs";
import { TuDivider as y } from "./src/divider/index.mjs";
import { TuDrawer as N, TuDrawerBox as z } from "./src/drawer/index.mjs";
import { TuDropdown as F, TuDropdownButton as V, TuDropdownGroup as $, TuDropdownItem as j, TuDropdownSubmenu as q } from "./src/dropdown/index.mjs";
import { TuEmpty as J } from "./src/empty/index.mjs";
import { TuForm as Q } from "./src/form/index.mjs";
import { TuInput as W } from "./src/input/index.mjs";
import { TuInputNumber as Y } from "./src/input-number/index.mjs";
import { TuInputTag as _ } from "./src/input-tag/index.mjs";
import { TuIcon as ro } from "./src/icon/index.mjs";
import { TuModal as to, TuModalBox as uo } from "./src/modal/index.mjs";
import { TuMessage as po } from "./src/message/index.mjs";
import { TuNotification as xo } from "./src/notification/index.mjs";
import { TuOnlyClient as no } from "./src/only-client/index.mjs";
import { TuPagination as io } from "./src/pagination/index.mjs";
import { TuPopconfirm as so } from "./src/popconfirm/index.mjs";
import { TuPopover as So } from "./src/popover/index.mjs";
import { TuProgress as wo } from "./src/progress/index.mjs";
import { TuRadio as bo, TuRadioGroup as Do } from "./src/radio/index.mjs";
import { TuResizeObserver as Io } from "./src/resize-observer/index.mjs";
import { TuRow as vo } from "./src/row/index.mjs";
import { TuScrollbar as Go } from "./src/scrollbar/index.mjs";
import { TuSelect as Ao, TuSelectOption as Ro } from "./src/select/index.mjs";
import { TuSkeleton as Oo, TuSkeletonLine as yo, TuSkeletonShape as Lo } from "./src/skeleton/index.mjs";
import { TuSlider as zo } from "./src/slider/index.mjs";
import { TuSpace as Fo } from "./src/space/index.mjs";
import { TuSpin as $o } from "./src/spin/index.mjs";
import { TuSwitch as qo } from "./src/switch/index.mjs";
import { TuTabPane as Jo, TuTabs as Ko } from "./src/tabs/index.mjs";
import { TuTag as Uo } from "./src/tag/index.mjs";
import { TuTextarea as Xo } from "./src/textarea/index.mjs";
import { TuTooltip as Zo } from "./src/tooltip/index.mjs";
import { TuTransition as or } from "./src/transition/index.mjs";
import { TuTrigger as er } from "./src/trigger/index.mjs";
import { TuVirtualList as ur } from "./src/virtual-list/index.mjs";
import { TuTimeline as pr, TuTimelineItem as mr } from "./src/timeline/index.mjs";
const t = {
  install: (r) => {
    for (let e in o)
      r.use(o[e]);
  }
};
export {
  p as TuAffix,
  x as TuAlert,
  n as TuAvatar,
  a as TuAvatarGroup,
  l as TuBackTop,
  d as TuBadge,
  S as TuButton,
  g as TuButtonGroup,
  M as TuCard,
  C as TuCheckbox,
  b as TuCheckboxGroup,
  A as TuCol,
  k as TuCollapse,
  v as TuCollapseItem,
  G as TuCollapseTransition,
  B as TuConfigProvider,
  y as TuDivider,
  N as TuDrawer,
  z as TuDrawerBox,
  F as TuDropdown,
  V as TuDropdownButton,
  $ as TuDropdownGroup,
  j as TuDropdownItem,
  q as TuDropdownSubmenu,
  J as TuEmpty,
  Q as TuForm,
  ro as TuIcon,
  W as TuInput,
  Y as TuInputNumber,
  _ as TuInputTag,
  po as TuMessage,
  to as TuModal,
  uo as TuModalBox,
  xo as TuNotification,
  no as TuOnlyClient,
  io as TuPagination,
  so as TuPopconfirm,
  So as TuPopover,
  wo as TuProgress,
  bo as TuRadio,
  Do as TuRadioGroup,
  Io as TuResizeObserver,
  vo as TuRow,
  Go as TuScrollbar,
  Ao as TuSelect,
  Ro as TuSelectOption,
  Oo as TuSkeleton,
  yo as TuSkeletonLine,
  Lo as TuSkeletonShape,
  zo as TuSlider,
  Fo as TuSpace,
  $o as TuSpin,
  qo as TuSwitch,
  Jo as TuTabPane,
  Ko as TuTabs,
  Uo as TuTag,
  Xo as TuTextarea,
  pr as TuTimeline,
  mr as TuTimelineItem,
  Zo as TuTooltip,
  or as TuTransition,
  er as TuTrigger,
  ur as TuVirtualList,
  t as default
};
