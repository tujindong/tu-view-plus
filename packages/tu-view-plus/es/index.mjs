import * as o from "./src/index.mjs";
import { TuAffix as T } from "./src/affix/index.mjs";
import { TuAlert as x } from "./src/alert/index.mjs";
import { TuAvatar as i, TuAvatarGroup as n } from "./src/avatar/index.mjs";
import { TuBackTop as l } from "./src/back-top/index.mjs";
import { TuBadge as d } from "./src/badge/index.mjs";
import { TuButton as S, TuButtonGroup as D } from "./src/button/index.mjs";
import { TuCheckbox as w, TuCheckboxGroup as C } from "./src/checkbox/index.mjs";
import { TuConfigProvider as I } from "./src/config-provider/index.mjs";
import { TuCollapse as k, TuCollapseItem as v } from "./src/collapse/index.mjs";
import { TuCollapseTransition as G } from "./src/collapse-transition/index.mjs";
import { TuCol as A } from "./src/col/index.mjs";
import { TuCard as M } from "./src/card/index.mjs";
import { TuDivider as y } from "./src/divider/index.mjs";
import { TuDrawer as N, TuDrawerBox as z } from "./src/drawer/index.mjs";
import { TuDescriptions as F, TuDescriptionsItem as V } from "./src/descriptions/index.mjs";
import { TuDropdown as j, TuDropdownButton as q, TuDropdownGroup as H, TuDropdownItem as J, TuDropdownSubmenu as K } from "./src/dropdown/index.mjs";
import { TuEmpty as U } from "./src/empty/index.mjs";
import { TuForm as X } from "./src/form/index.mjs";
import { TuInput as Z } from "./src/input/index.mjs";
import { TuInputNumber as oo } from "./src/input-number/index.mjs";
import { TuInputTag as eo } from "./src/input-tag/index.mjs";
import { TuIcon as uo } from "./src/icon/index.mjs";
import { TuModal as To, TuModalBox as mo } from "./src/modal/index.mjs";
import { TuMessage as fo } from "./src/message/index.mjs";
import { TuNotification as no } from "./src/notification/index.mjs";
import { TuOnlyClient as lo } from "./src/only-client/index.mjs";
import { TuPagination as co } from "./src/pagination/index.mjs";
import { TuPopconfirm as Do } from "./src/popconfirm/index.mjs";
import { TuPopover as wo } from "./src/popover/index.mjs";
import { TuProgress as bo } from "./src/progress/index.mjs";
import { TuRadio as Bo, TuRadioGroup as ko } from "./src/radio/index.mjs";
import { TuResizeObserver as Po } from "./src/resize-observer/index.mjs";
import { TuRow as ho } from "./src/row/index.mjs";
import { TuScrollbar as Ro } from "./src/scrollbar/index.mjs";
import { TuSelect as Oo, TuSelectOption as yo } from "./src/select/index.mjs";
import { TuSkeleton as No, TuSkeletonLine as zo, TuSkeletonShape as Eo } from "./src/skeleton/index.mjs";
import { TuSlider as Vo } from "./src/slider/index.mjs";
import { TuSpace as jo } from "./src/space/index.mjs";
import { TuSpin as Ho } from "./src/spin/index.mjs";
import { TuSwitch as Ko } from "./src/switch/index.mjs";
import { TuTabPane as Uo, TuTabs as Wo } from "./src/tabs/index.mjs";
import { TuTag as Yo } from "./src/tag/index.mjs";
import { TuTextarea as _o } from "./src/textarea/index.mjs";
import { TuTooltip as rr } from "./src/tooltip/index.mjs";
import { TuTransition as tr } from "./src/transition/index.mjs";
import { TuTrigger as pr } from "./src/trigger/index.mjs";
import { TuVirtualList as mr } from "./src/virtual-list/index.mjs";
import { TuTimeline as fr, TuTimelineItem as ir } from "./src/timeline/index.mjs";
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
  M as TuCard,
  w as TuCheckbox,
  C as TuCheckboxGroup,
  A as TuCol,
  k as TuCollapse,
  v as TuCollapseItem,
  G as TuCollapseTransition,
  I as TuConfigProvider,
  F as TuDescriptions,
  V as TuDescriptionsItem,
  y as TuDivider,
  N as TuDrawer,
  z as TuDrawerBox,
  j as TuDropdown,
  q as TuDropdownButton,
  H as TuDropdownGroup,
  J as TuDropdownItem,
  K as TuDropdownSubmenu,
  U as TuEmpty,
  X as TuForm,
  uo as TuIcon,
  Z as TuInput,
  oo as TuInputNumber,
  eo as TuInputTag,
  fo as TuMessage,
  To as TuModal,
  mo as TuModalBox,
  no as TuNotification,
  lo as TuOnlyClient,
  co as TuPagination,
  Do as TuPopconfirm,
  wo as TuPopover,
  bo as TuProgress,
  Bo as TuRadio,
  ko as TuRadioGroup,
  Po as TuResizeObserver,
  ho as TuRow,
  Ro as TuScrollbar,
  Oo as TuSelect,
  yo as TuSelectOption,
  No as TuSkeleton,
  zo as TuSkeletonLine,
  Eo as TuSkeletonShape,
  Vo as TuSlider,
  jo as TuSpace,
  Ho as TuSpin,
  Ko as TuSwitch,
  Uo as TuTabPane,
  Wo as TuTabs,
  Yo as TuTag,
  _o as TuTextarea,
  fr as TuTimeline,
  ir as TuTimelineItem,
  rr as TuTooltip,
  tr as TuTransition,
  pr as TuTrigger,
  mr as TuVirtualList,
  t as default
};
