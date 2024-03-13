import * as r from "./src/index.mjs";
import { TuAffix as p } from "./src/affix/index.mjs";
import { TuAlert as x } from "./src/alert/index.mjs";
import { TuAvatar as i, TuAvatarGroup as a } from "./src/avatar/index.mjs";
import { TuBackTop as l } from "./src/back-top/index.mjs";
import { TuBadge as c } from "./src/badge/index.mjs";
import { TuButton as d, TuButtonGroup as k } from "./src/button/index.mjs";
import { TuCheckbox as S, TuCheckboxGroup as g } from "./src/checkbox/index.mjs";
import { TuConfigProvider as b } from "./src/config-provider/index.mjs";
import { TuCollapse as C, TuCollapseItem as D } from "./src/collapse/index.mjs";
import { TuCollapseTransition as B } from "./src/collapse-transition/index.mjs";
import { TuCol as M } from "./src/col/index.mjs";
import { TuCard as h } from "./src/card/index.mjs";
import { TuCarousel as z, TuCarouselItem as O } from "./src/carousel/index.mjs";
import { TuDatePicker as F, TuMonthPicker as N, TuQuarterPicker as V, TuRangePicker as W, TuWeekPicker as E, TuYearPicker as Q } from "./src/date-picker/index.mjs";
import { TuDivider as $ } from "./src/divider/index.mjs";
import { TuDrawer as q, TuDrawerBox as H } from "./src/drawer/index.mjs";
import { TuDescriptions as K, TuDescriptionsItem as U } from "./src/descriptions/index.mjs";
import { TuDropdown as Z, TuDropdownButton as _, TuDropdownGroup as rr, TuDropdownItem as or, TuDropdownSubmenu as er } from "./src/dropdown/index.mjs";
import { TuEmpty as tr } from "./src/empty/index.mjs";
import { TuForm as pr } from "./src/form/index.mjs";
import { TuImage as xr, TuImageFooter as fr, TuPreview as ir, TuPreviewAction as ar, TuPreviewArrow as nr, TuPreviewGroup as lr, TuPreviewToolbar as sr } from "./src/image/index.mjs";
import { TuInput as Pr } from "./src/input/index.mjs";
import { TuInputLabel as kr } from "./src/input-label/index.mjs";
import { TuInputNumber as Sr } from "./src/input-number/index.mjs";
import { TuInputTag as Ir } from "./src/input-tag/index.mjs";
import { TuIcon as vr } from "./src/icon/index.mjs";
import { TuLink as Dr } from "./src/link/index.mjs";
import { TuMenu as Br, TuMenuItem as Gr, TuMenuItemGroup as Mr, TuSubMenu as Ar } from "./src/menu/index.mjs";
import { TuMessage as Lr } from "./src/message/index.mjs";
import { TuModal as Or, TuModalBox as yr } from "./src/modal/index.mjs";
import { TuNotification as Nr } from "./src/notification/index.mjs";
import { TuOnlyClient as Wr } from "./src/only-client/index.mjs";
import { TuPagination as Qr } from "./src/pagination/index.mjs";
import { TuPopconfirm as $r } from "./src/popconfirm/index.mjs";
import { TuPopover as qr } from "./src/popover/index.mjs";
import { TuProgress as Jr } from "./src/progress/index.mjs";
import { TuRadio as Ur, TuRadioGroup as Xr } from "./src/radio/index.mjs";
import { TuRate as _r } from "./src/rate/index.mjs";
import { TuResizeBox as oo } from "./src/resize-box/index.mjs";
import { TuResizeObserver as uo } from "./src/resize-observer/index.mjs";
import { TuResizeTrigger as To } from "./src/resize-trigger/index.mjs";
import { TuResult as mo } from "./src/result/index.mjs";
import { TuRow as fo } from "./src/row/index.mjs";
import { TuScrollbar as ao } from "./src/scrollbar/index.mjs";
import { TuSelect as lo, TuSelectGroup as so, TuSelectOption as co } from "./src/select/index.mjs";
import { TuSelectView as ko } from "./src/select-view/index.mjs";
import { TuSkeleton as So, TuSkeletonLine as go, TuSkeletonShape as Io } from "./src/skeleton/index.mjs";
import { TuSlider as vo } from "./src/slider/index.mjs";
import { TuSpace as Do } from "./src/space/index.mjs";
import { TuSpin as Bo } from "./src/spin/index.mjs";
import { TuSwitch as Mo } from "./src/switch/index.mjs";
import { TuTabPane as ho, TuTabs as Lo } from "./src/tabs/index.mjs";
import { TuTag as Oo } from "./src/tag/index.mjs";
import { TuTextarea as Fo } from "./src/textarea/index.mjs";
import { TuTimePicker as Vo } from "./src/time-picker/index.mjs";
import { TuTooltip as Eo } from "./src/tooltip/index.mjs";
import { TuTransition as Yo } from "./src/transition/index.mjs";
import { TuTree as jo } from "./src/tree/index.mjs";
import { TuTreeSelect as Ho } from "./src/tree-select/index.mjs";
import { TuTrigger as Ko } from "./src/trigger/index.mjs";
import { TuVirtualList as Xo } from "./src/virtual-list/index.mjs";
import { TuTimeline as _o, TuTimelineItem as re } from "./src/timeline/index.mjs";
import { TuWatermark as ee } from "./src/watermark/index.mjs";
const u = {
  install: (o) => {
    for (let e in r)
      o.use(r[e]);
  }
};
export {
  p as TuAffix,
  x as TuAlert,
  i as TuAvatar,
  a as TuAvatarGroup,
  l as TuBackTop,
  c as TuBadge,
  d as TuButton,
  k as TuButtonGroup,
  h as TuCard,
  z as TuCarousel,
  O as TuCarouselItem,
  S as TuCheckbox,
  g as TuCheckboxGroup,
  M as TuCol,
  C as TuCollapse,
  D as TuCollapseItem,
  B as TuCollapseTransition,
  b as TuConfigProvider,
  F as TuDatePicker,
  K as TuDescriptions,
  U as TuDescriptionsItem,
  $ as TuDivider,
  q as TuDrawer,
  H as TuDrawerBox,
  Z as TuDropdown,
  _ as TuDropdownButton,
  rr as TuDropdownGroup,
  or as TuDropdownItem,
  er as TuDropdownSubmenu,
  tr as TuEmpty,
  pr as TuForm,
  vr as TuIcon,
  xr as TuImage,
  fr as TuImageFooter,
  Pr as TuInput,
  kr as TuInputLabel,
  Sr as TuInputNumber,
  Ir as TuInputTag,
  Dr as TuLink,
  Br as TuMenu,
  Gr as TuMenuItem,
  Mr as TuMenuItemGroup,
  Lr as TuMessage,
  Or as TuModal,
  yr as TuModalBox,
  N as TuMonthPicker,
  Nr as TuNotification,
  Wr as TuOnlyClient,
  Qr as TuPagination,
  $r as TuPopconfirm,
  qr as TuPopover,
  ir as TuPreview,
  ar as TuPreviewAction,
  nr as TuPreviewArrow,
  lr as TuPreviewGroup,
  sr as TuPreviewToolbar,
  Jr as TuProgress,
  V as TuQuarterPicker,
  Ur as TuRadio,
  Xr as TuRadioGroup,
  W as TuRangePicker,
  _r as TuRate,
  oo as TuResizeBox,
  uo as TuResizeObserver,
  To as TuResizeTrigger,
  mo as TuResult,
  fo as TuRow,
  ao as TuScrollbar,
  lo as TuSelect,
  so as TuSelectGroup,
  co as TuSelectOption,
  ko as TuSelectView,
  So as TuSkeleton,
  go as TuSkeletonLine,
  Io as TuSkeletonShape,
  vo as TuSlider,
  Do as TuSpace,
  Bo as TuSpin,
  Ar as TuSubMenu,
  Mo as TuSwitch,
  ho as TuTabPane,
  Lo as TuTabs,
  Oo as TuTag,
  Fo as TuTextarea,
  Vo as TuTimePicker,
  _o as TuTimeline,
  re as TuTimelineItem,
  Eo as TuTooltip,
  Yo as TuTransition,
  jo as TuTree,
  Ho as TuTreeSelect,
  Ko as TuTrigger,
  Xo as TuVirtualList,
  ee as TuWatermark,
  E as TuWeekPicker,
  Q as TuYearPicker,
  u as default
};
