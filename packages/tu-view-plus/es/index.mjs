import * as o from "./src/index.mjs";
import { TuAffix as p } from "./src/affix/index.mjs";
import { TuAlert as x } from "./src/alert/index.mjs";
import { TuAvatar as i, TuAvatarGroup as n } from "./src/avatar/index.mjs";
import { TuBackTop as l } from "./src/back-top/index.mjs";
import { TuBadge as d } from "./src/badge/index.mjs";
import { TuButton as S, TuButtonGroup as w } from "./src/button/index.mjs";
import { TuCheckbox as b, TuCheckboxGroup as g } from "./src/checkbox/index.mjs";
import { TuConfigProvider as B } from "./src/config-provider/index.mjs";
import { TuCollapse as v, TuCollapseItem as I } from "./src/collapse/index.mjs";
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
import { TuIcon as _ } from "./src/icon/index.mjs";
import { TuModal as ro, TuModalBox as eo } from "./src/modal/index.mjs";
import { TuMessage as uo } from "./src/message/index.mjs";
import { TuNotification as po } from "./src/notification/index.mjs";
import { TuOnlyClient as xo } from "./src/only-client/index.mjs";
import { TuPagination as io } from "./src/pagination/index.mjs";
import { TuPopconfirm as ao } from "./src/popconfirm/index.mjs";
import { TuPopover as so } from "./src/popover/index.mjs";
import { TuProgress as So } from "./src/progress/index.mjs";
import { TuRadio as Co, TuRadioGroup as bo } from "./src/radio/index.mjs";
import { TuResizeObserver as Do } from "./src/resize-observer/index.mjs";
import { TuRow as ko } from "./src/row/index.mjs";
import { TuScrollbar as Io } from "./src/scrollbar/index.mjs";
import { TuSelect as Go, TuSelectOption as ho } from "./src/select/index.mjs";
import { TuSkeleton as Ro, TuSkeletonLine as Mo, TuSkeletonShape as Oo } from "./src/skeleton/index.mjs";
import { TuSlider as Lo } from "./src/slider/index.mjs";
import { TuSpace as zo } from "./src/space/index.mjs";
import { TuSpin as Fo } from "./src/spin/index.mjs";
import { TuSwitch as $o } from "./src/switch/index.mjs";
import { TuTabPane as qo, TuTabs as Ho } from "./src/tabs/index.mjs";
import { TuTag as Ko } from "./src/tag/index.mjs";
import { TuTextarea as Uo } from "./src/textarea/index.mjs";
import { TuTooltip as Xo } from "./src/tooltip/index.mjs";
import { TuTransition as Zo } from "./src/transition/index.mjs";
import { TuTrigger as or } from "./src/trigger/index.mjs";
import { TuVirtualList as er } from "./src/virtual-list/index.mjs";
import { TuTimeline as ur, TuTimelineItem as Tr } from "./src/timeline/index.mjs";
const t = {
  install: (r) => {
    for (let e in o)
      r.use(o[e]);
  }
};
export {
  p as TuAffix,
  x as TuAlert,
  i as TuAvatar,
  n as TuAvatarGroup,
  l as TuBackTop,
  d as TuBadge,
  S as TuButton,
  w as TuButtonGroup,
  M as TuCard,
  b as TuCheckbox,
  g as TuCheckboxGroup,
  A as TuCol,
  v as TuCollapse,
  I as TuCollapseItem,
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
  _ as TuIcon,
  W as TuInput,
  Y as TuInputNumber,
  uo as TuMessage,
  ro as TuModal,
  eo as TuModalBox,
  po as TuNotification,
  xo as TuOnlyClient,
  io as TuPagination,
  ao as TuPopconfirm,
  so as TuPopover,
  So as TuProgress,
  Co as TuRadio,
  bo as TuRadioGroup,
  Do as TuResizeObserver,
  ko as TuRow,
  Io as TuScrollbar,
  Go as TuSelect,
  ho as TuSelectOption,
  Ro as TuSkeleton,
  Mo as TuSkeletonLine,
  Oo as TuSkeletonShape,
  Lo as TuSlider,
  zo as TuSpace,
  Fo as TuSpin,
  $o as TuSwitch,
  qo as TuTabPane,
  Ho as TuTabs,
  Ko as TuTag,
  Uo as TuTextarea,
  ur as TuTimeline,
  Tr as TuTimelineItem,
  Xo as TuTooltip,
  Zo as TuTransition,
  or as TuTrigger,
  er as TuVirtualList,
  t as default
};
