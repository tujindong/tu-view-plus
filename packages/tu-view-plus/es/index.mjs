import * as o from "./src/index.mjs";
import { TuAffix as p } from "./src/affix/index.mjs";
import { TuAlert as x } from "./src/alert/index.mjs";
import { TuAvatar as a, TuAvatarGroup as i } from "./src/avatar/index.mjs";
import { TuBackTop as l } from "./src/back-top/index.mjs";
import { TuBadge as c } from "./src/badge/index.mjs";
import { TuButton as g, TuButtonGroup as I } from "./src/button/index.mjs";
import { TuCheckbox as S, TuCheckboxGroup as k } from "./src/checkbox/index.mjs";
import { TuConfigProvider as C } from "./src/config-provider/index.mjs";
import { TuCollapse as v, TuCollapseItem as D } from "./src/collapse/index.mjs";
import { TuCollapseTransition as R } from "./src/collapse-transition/index.mjs";
import { TuCol as G } from "./src/col/index.mjs";
import { TuCard as y } from "./src/card/index.mjs";
import { TuCarousel as h, TuCarouselItem as z } from "./src/carousel/index.mjs";
import { TuDatePicker as O, TuMonthPicker as N, TuQuarterPicker as V, TuRangePicker as W, TuWeekPicker as E, TuYearPicker as H } from "./src/date-picker/index.mjs";
import { TuDivider as Y } from "./src/divider/index.mjs";
import { TuDrawer as j, TuDrawerBox as q } from "./src/drawer/index.mjs";
import { TuDescriptions as K, TuDescriptionsItem as U } from "./src/descriptions/index.mjs";
import { TuDropdown as Z, TuDropdownButton as _, TuDropdownGroup as oo, TuDropdownItem as ro, TuDropdownSubmenu as eo } from "./src/dropdown/index.mjs";
import { TuEmpty as to } from "./src/empty/index.mjs";
import { TuForm as po } from "./src/form/index.mjs";
import { TuImage as xo, TuImageFooter as fo, TuImagePreview as ao, TuImagePreviewAction as io, TuImagePreviewArrow as no, TuImagePreviewGroup as lo, TuImagePreviewToolbar as so } from "./src/image/index.mjs";
import { TuInput as go } from "./src/input/index.mjs";
import { TuInputLabel as Po } from "./src/input-label/index.mjs";
import { TuInputNumber as ko } from "./src/input-number/index.mjs";
import { TuInputTag as Co } from "./src/input-tag/index.mjs";
import { TuIcon as vo } from "./src/icon/index.mjs";
import { TuLayout as Lo, TuLayoutContent as Ro, TuLayoutFooter as Bo, TuLayoutHeader as Go, TuLayoutSider as Mo } from "./src/layout/index.mjs";
import { TuLink as Ao } from "./src/link/index.mjs";
import { TuMenu as zo, TuMenuItem as Fo, TuMenuItemGroup as Oo, TuSubMenu as No } from "./src/menu/index.mjs";
import { TuMessage as Wo } from "./src/message/index.mjs";
import { TuModal as Ho, TuModalBox as Qo } from "./src/modal/index.mjs";
import { TuNotification as $o } from "./src/notification/index.mjs";
import { TuOnlyClient as qo } from "./src/only-client/index.mjs";
import { TuPagination as Ko } from "./src/pagination/index.mjs";
import { TuPopconfirm as Xo } from "./src/popconfirm/index.mjs";
import { TuPopover as _o } from "./src/popover/index.mjs";
import { TuProgress as rr } from "./src/progress/index.mjs";
import { TuRadio as ur, TuRadioGroup as tr } from "./src/radio/index.mjs";
import { TuRate as pr } from "./src/rate/index.mjs";
import { TuResizeBox as xr } from "./src/resize-box/index.mjs";
import { TuResizeObserver as ar } from "./src/resize-observer/index.mjs";
import { TuResizeTrigger as nr } from "./src/resize-trigger/index.mjs";
import { TuResult as sr } from "./src/result/index.mjs";
import { TuRow as dr } from "./src/row/index.mjs";
import { TuScrollbar as Ir } from "./src/scrollbar/index.mjs";
import { TuSelect as Sr, TuSelectGroup as kr, TuSelectOption as wr } from "./src/select/index.mjs";
import { TuSelectView as br } from "./src/select-view/index.mjs";
import { TuSkeleton as Dr, TuSkeletonLine as Lr, TuSkeletonShape as Rr } from "./src/skeleton/index.mjs";
import { TuSlider as Gr } from "./src/slider/index.mjs";
import { TuSpace as yr } from "./src/space/index.mjs";
import { TuSpin as hr } from "./src/spin/index.mjs";
import { TuSwitch as Fr } from "./src/switch/index.mjs";
import { TuTabPane as Nr, TuTabs as Vr } from "./src/tabs/index.mjs";
import { TuTag as Er } from "./src/tag/index.mjs";
import { TuTextarea as Qr } from "./src/textarea/index.mjs";
import { TuTimePicker as $r } from "./src/time-picker/index.mjs";
import { TuTooltip as qr } from "./src/tooltip/index.mjs";
import { TuTransition as Kr } from "./src/transition/index.mjs";
import { TuTree as Xr } from "./src/tree/index.mjs";
import { TuTreeSelect as _r } from "./src/tree-select/index.mjs";
import { TuTrigger as re } from "./src/trigger/index.mjs";
import { TuVirtualList as ue } from "./src/virtual-list/index.mjs";
import { TuTimeline as Te, TuTimelineItem as pe } from "./src/timeline/index.mjs";
import { TuWatermark as xe } from "./src/watermark/index.mjs";
const u = {
  install: (r) => {
    for (let e in o)
      r.use(o[e]);
  }
};
export {
  p as TuAffix,
  x as TuAlert,
  a as TuAvatar,
  i as TuAvatarGroup,
  l as TuBackTop,
  c as TuBadge,
  g as TuButton,
  I as TuButtonGroup,
  y as TuCard,
  h as TuCarousel,
  z as TuCarouselItem,
  S as TuCheckbox,
  k as TuCheckboxGroup,
  G as TuCol,
  v as TuCollapse,
  D as TuCollapseItem,
  R as TuCollapseTransition,
  C as TuConfigProvider,
  O as TuDatePicker,
  K as TuDescriptions,
  U as TuDescriptionsItem,
  Y as TuDivider,
  j as TuDrawer,
  q as TuDrawerBox,
  Z as TuDropdown,
  _ as TuDropdownButton,
  oo as TuDropdownGroup,
  ro as TuDropdownItem,
  eo as TuDropdownSubmenu,
  to as TuEmpty,
  po as TuForm,
  vo as TuIcon,
  xo as TuImage,
  fo as TuImageFooter,
  ao as TuImagePreview,
  io as TuImagePreviewAction,
  no as TuImagePreviewArrow,
  lo as TuImagePreviewGroup,
  so as TuImagePreviewToolbar,
  go as TuInput,
  Po as TuInputLabel,
  ko as TuInputNumber,
  Co as TuInputTag,
  Lo as TuLayout,
  Ro as TuLayoutContent,
  Bo as TuLayoutFooter,
  Go as TuLayoutHeader,
  Mo as TuLayoutSider,
  Ao as TuLink,
  zo as TuMenu,
  Fo as TuMenuItem,
  Oo as TuMenuItemGroup,
  Wo as TuMessage,
  Ho as TuModal,
  Qo as TuModalBox,
  N as TuMonthPicker,
  $o as TuNotification,
  qo as TuOnlyClient,
  Ko as TuPagination,
  Xo as TuPopconfirm,
  _o as TuPopover,
  rr as TuProgress,
  V as TuQuarterPicker,
  ur as TuRadio,
  tr as TuRadioGroup,
  W as TuRangePicker,
  pr as TuRate,
  xr as TuResizeBox,
  ar as TuResizeObserver,
  nr as TuResizeTrigger,
  sr as TuResult,
  dr as TuRow,
  Ir as TuScrollbar,
  Sr as TuSelect,
  kr as TuSelectGroup,
  wr as TuSelectOption,
  br as TuSelectView,
  Dr as TuSkeleton,
  Lr as TuSkeletonLine,
  Rr as TuSkeletonShape,
  Gr as TuSlider,
  yr as TuSpace,
  hr as TuSpin,
  No as TuSubMenu,
  Fr as TuSwitch,
  Nr as TuTabPane,
  Vr as TuTabs,
  Er as TuTag,
  Qr as TuTextarea,
  $r as TuTimePicker,
  Te as TuTimeline,
  pe as TuTimelineItem,
  qr as TuTooltip,
  Kr as TuTransition,
  Xr as TuTree,
  _r as TuTreeSelect,
  re as TuTrigger,
  ue as TuVirtualList,
  xe as TuWatermark,
  E as TuWeekPicker,
  H as TuYearPicker,
  u as default
};
