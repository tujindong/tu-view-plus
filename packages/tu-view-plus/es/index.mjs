import * as o from "./src/index.mjs";
import { TuAffix as T } from "./src/affix/index.mjs";
import { TuAlert as x } from "./src/alert/index.mjs";
import { TuAvatar as i, TuAvatarGroup as n } from "./src/avatar/index.mjs";
import { TuBackTop as l } from "./src/back-top/index.mjs";
import { TuBadge as d } from "./src/badge/index.mjs";
import { TuButton as S, TuButtonGroup as D } from "./src/button/index.mjs";
import { TuCheckbox as g, TuCheckboxGroup as w } from "./src/checkbox/index.mjs";
import { TuConfigProvider as I } from "./src/config-provider/index.mjs";
import { TuCollapse as k, TuCollapseItem as v } from "./src/collapse/index.mjs";
import { TuCollapseTransition as G } from "./src/collapse-transition/index.mjs";
import { TuCol as A } from "./src/col/index.mjs";
import { TuCard as L } from "./src/card/index.mjs";
import { TuDivider as O } from "./src/divider/index.mjs";
import { TuDrawer as N, TuDrawerBox as z } from "./src/drawer/index.mjs";
import { TuDescriptions as F, TuDescriptionsItem as V } from "./src/descriptions/index.mjs";
import { TuDropdown as j, TuDropdownButton as q, TuDropdownGroup as H, TuDropdownItem as J, TuDropdownSubmenu as K } from "./src/dropdown/index.mjs";
import { TuEmpty as U } from "./src/empty/index.mjs";
import { TuForm as X } from "./src/form/index.mjs";
import { TuInput as Z } from "./src/input/index.mjs";
import { TuInputLabel as oo } from "./src/input-label/index.mjs";
import { TuInputNumber as eo } from "./src/input-number/index.mjs";
import { TuInputTag as uo } from "./src/input-tag/index.mjs";
import { TuIcon as To } from "./src/icon/index.mjs";
import { TuModal as xo, TuModalBox as fo } from "./src/modal/index.mjs";
import { TuMessage as no } from "./src/message/index.mjs";
import { TuNotification as lo } from "./src/notification/index.mjs";
import { TuOnlyClient as co } from "./src/only-client/index.mjs";
import { TuPagination as Do } from "./src/pagination/index.mjs";
import { TuPopconfirm as go } from "./src/popconfirm/index.mjs";
import { TuPopover as Co } from "./src/popover/index.mjs";
import { TuProgress as Bo } from "./src/progress/index.mjs";
import { TuRadio as vo, TuRadioGroup as Po } from "./src/radio/index.mjs";
import { TuResizeObserver as ho } from "./src/resize-observer/index.mjs";
import { TuRow as Ro } from "./src/row/index.mjs";
import { TuScrollbar as Mo } from "./src/scrollbar/index.mjs";
import { TuSelect as yo, TuSelectOption as No } from "./src/select/index.mjs";
import { TuSkeleton as Eo, TuSkeletonLine as Fo, TuSkeletonShape as Vo } from "./src/skeleton/index.mjs";
import { TuSlider as jo } from "./src/slider/index.mjs";
import { TuSpace as Ho } from "./src/space/index.mjs";
import { TuSpin as Ko } from "./src/spin/index.mjs";
import { TuSwitch as Uo } from "./src/switch/index.mjs";
import { TuTabPane as Xo, TuTabs as Yo } from "./src/tabs/index.mjs";
import { TuTag as _o } from "./src/tag/index.mjs";
import { TuTextarea as rr } from "./src/textarea/index.mjs";
import { TuTooltip as tr } from "./src/tooltip/index.mjs";
import { TuTransition as pr } from "./src/transition/index.mjs";
import { TuTrigger as mr } from "./src/trigger/index.mjs";
import { TuVirtualList as fr } from "./src/virtual-list/index.mjs";
import { TuTimeline as nr, TuTimelineItem as ar } from "./src/timeline/index.mjs";
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
  n as TuAvatarGroup,
  l as TuBackTop,
  d as TuBadge,
  S as TuButton,
  D as TuButtonGroup,
  L as TuCard,
  g as TuCheckbox,
  w as TuCheckboxGroup,
  A as TuCol,
  k as TuCollapse,
  v as TuCollapseItem,
  G as TuCollapseTransition,
  I as TuConfigProvider,
  F as TuDescriptions,
  V as TuDescriptionsItem,
  O as TuDivider,
  N as TuDrawer,
  z as TuDrawerBox,
  j as TuDropdown,
  q as TuDropdownButton,
  H as TuDropdownGroup,
  J as TuDropdownItem,
  K as TuDropdownSubmenu,
  U as TuEmpty,
  X as TuForm,
  To as TuIcon,
  Z as TuInput,
  oo as TuInputLabel,
  eo as TuInputNumber,
  uo as TuInputTag,
  no as TuMessage,
  xo as TuModal,
  fo as TuModalBox,
  lo as TuNotification,
  co as TuOnlyClient,
  Do as TuPagination,
  go as TuPopconfirm,
  Co as TuPopover,
  Bo as TuProgress,
  vo as TuRadio,
  Po as TuRadioGroup,
  ho as TuResizeObserver,
  Ro as TuRow,
  Mo as TuScrollbar,
  yo as TuSelect,
  No as TuSelectOption,
  Eo as TuSkeleton,
  Fo as TuSkeletonLine,
  Vo as TuSkeletonShape,
  jo as TuSlider,
  Ho as TuSpace,
  Ko as TuSpin,
  Uo as TuSwitch,
  Xo as TuTabPane,
  Yo as TuTabs,
  _o as TuTag,
  rr as TuTextarea,
  nr as TuTimeline,
  ar as TuTimelineItem,
  tr as TuTooltip,
  pr as TuTransition,
  mr as TuTrigger,
  fr as TuVirtualList,
  t as default
};
