import * as o from "./src/index.mjs";
import { TuAffix as p } from "./src/affix/index.mjs";
import { TuAlert as x } from "./src/alert/index.mjs";
import { TuAvatar as a, TuAvatarGroup as i } from "./src/avatar/index.mjs";
import { TuBackTop as l } from "./src/back-top/index.mjs";
import { TuBadge as s } from "./src/badge/index.mjs";
import { TuBreadcrumb as I, TuBreadcrumbItem as g } from "./src/breadcrumb/index.mjs";
import { TuButton as k, TuButtonGroup as S } from "./src/button/index.mjs";
import { TuCard as b } from "./src/card/index.mjs";
import { TuCheckbox as v, TuCheckboxGroup as D } from "./src/checkbox/index.mjs";
import { TuConfigProvider as L } from "./src/config-provider/index.mjs";
import { TuCollapse as G, TuCollapseItem as M } from "./src/collapse/index.mjs";
import { TuCollapseTransition as A } from "./src/collapse-transition/index.mjs";
import { TuCol as z } from "./src/col/index.mjs";
import { TuColorPicker as O } from "./src/color-picker/index.mjs";
import { TuCarousel as V, TuCarouselItem as W } from "./src/carousel/index.mjs";
import { TuDatePicker as H, TuMonthPicker as Q, TuQuarterPicker as Y, TuRangePicker as $, TuWeekPicker as j, TuYearPicker as q } from "./src/date-picker/index.mjs";
import { TuDivider as K } from "./src/divider/index.mjs";
import { TuDrawer as X, TuDrawerBox as Z } from "./src/drawer/index.mjs";
import { TuDescriptions as oo, TuDescriptionsItem as ro } from "./src/descriptions/index.mjs";
import { TuDropdown as uo, TuDropdownButton as to, TuDropdownGroup as To, TuDropdownItem as po, TuDropdownSubmenu as mo } from "./src/dropdown/index.mjs";
import { TuEmpty as fo } from "./src/empty/index.mjs";
import { TuForm as io } from "./src/form/index.mjs";
import { TuImage as lo, TuImageFooter as co, TuImagePreview as so, TuImagePreviewAction as Io, TuImagePreviewArrow as go, TuImagePreviewGroup as Po, TuImagePreviewToolbar as ko } from "./src/image/index.mjs";
import { TuInput as wo } from "./src/input/index.mjs";
import { TuInputLabel as Co } from "./src/input-label/index.mjs";
import { TuInputNumber as Do } from "./src/input-number/index.mjs";
import { TuInputTag as Lo } from "./src/input-tag/index.mjs";
import { TuIcon as Go } from "./src/icon/index.mjs";
import { TuLayout as yo, TuLayoutContent as Ao, TuLayoutFooter as ho, TuLayoutHeader as zo, TuLayoutSider as Fo } from "./src/layout/index.mjs";
import { TuLink as No } from "./src/link/index.mjs";
import { TuMenu as Wo, TuMenuItem as Eo, TuMenuItemGroup as Ho, TuSubMenu as Qo } from "./src/menu/index.mjs";
import { TuMessage as $o } from "./src/message/index.mjs";
import { TuModal as qo, TuModalBox as Jo } from "./src/modal/index.mjs";
import { TuNotification as Uo } from "./src/notification/index.mjs";
import { TuOnlyClient as Zo } from "./src/only-client/index.mjs";
import { TuPagination as or } from "./src/pagination/index.mjs";
import { TuPopconfirm as er } from "./src/popconfirm/index.mjs";
import { TuPopover as tr } from "./src/popover/index.mjs";
import { TuProgress as pr } from "./src/progress/index.mjs";
import { TuRadio as xr, TuRadioGroup as fr } from "./src/radio/index.mjs";
import { TuRate as ir } from "./src/rate/index.mjs";
import { TuResizeBox as lr } from "./src/resize-box/index.mjs";
import { TuResizeObserver as sr } from "./src/resize-observer/index.mjs";
import { TuResizeTrigger as Ir } from "./src/resize-trigger/index.mjs";
import { TuResult as Pr } from "./src/result/index.mjs";
import { TuRow as Sr } from "./src/row/index.mjs";
import { TuScrollbar as br } from "./src/scrollbar/index.mjs";
import { TuSelect as vr, TuSelectGroup as Dr, TuSelectOption as Br } from "./src/select/index.mjs";
import { TuSelectView as Rr } from "./src/select-view/index.mjs";
import { TuSkeleton as Mr, TuSkeletonLine as yr, TuSkeletonShape as Ar } from "./src/skeleton/index.mjs";
import { TuSlider as zr } from "./src/slider/index.mjs";
import { TuSpace as Or } from "./src/space/index.mjs";
import { TuSpin as Vr } from "./src/spin/index.mjs";
import { TuSwitch as Er } from "./src/switch/index.mjs";
import { TuTabPane as Qr, TuTabs as Yr } from "./src/tabs/index.mjs";
import { TuTag as jr } from "./src/tag/index.mjs";
import { TuTextarea as Jr } from "./src/textarea/index.mjs";
import { TuTimePicker as Ur } from "./src/time-picker/index.mjs";
import { TuTooltip as Zr } from "./src/tooltip/index.mjs";
import { TuTransition as oe } from "./src/transition/index.mjs";
import { TuTree as ee } from "./src/tree/index.mjs";
import { TuTreeSelect as te } from "./src/tree-select/index.mjs";
import { TuTrigger as pe } from "./src/trigger/index.mjs";
import { TuVirtualList as xe } from "./src/virtual-list/index.mjs";
import { TuTimeline as ae, TuTimelineItem as ie } from "./src/timeline/index.mjs";
import { TuWatermark as le } from "./src/watermark/index.mjs";
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
  s as TuBadge,
  I as TuBreadcrumb,
  g as TuBreadcrumbItem,
  k as TuButton,
  S as TuButtonGroup,
  b as TuCard,
  V as TuCarousel,
  W as TuCarouselItem,
  v as TuCheckbox,
  D as TuCheckboxGroup,
  z as TuCol,
  G as TuCollapse,
  M as TuCollapseItem,
  A as TuCollapseTransition,
  O as TuColorPicker,
  L as TuConfigProvider,
  H as TuDatePicker,
  oo as TuDescriptions,
  ro as TuDescriptionsItem,
  K as TuDivider,
  X as TuDrawer,
  Z as TuDrawerBox,
  uo as TuDropdown,
  to as TuDropdownButton,
  To as TuDropdownGroup,
  po as TuDropdownItem,
  mo as TuDropdownSubmenu,
  fo as TuEmpty,
  io as TuForm,
  Go as TuIcon,
  lo as TuImage,
  co as TuImageFooter,
  so as TuImagePreview,
  Io as TuImagePreviewAction,
  go as TuImagePreviewArrow,
  Po as TuImagePreviewGroup,
  ko as TuImagePreviewToolbar,
  wo as TuInput,
  Co as TuInputLabel,
  Do as TuInputNumber,
  Lo as TuInputTag,
  yo as TuLayout,
  Ao as TuLayoutContent,
  ho as TuLayoutFooter,
  zo as TuLayoutHeader,
  Fo as TuLayoutSider,
  No as TuLink,
  Wo as TuMenu,
  Eo as TuMenuItem,
  Ho as TuMenuItemGroup,
  $o as TuMessage,
  qo as TuModal,
  Jo as TuModalBox,
  Q as TuMonthPicker,
  Uo as TuNotification,
  Zo as TuOnlyClient,
  or as TuPagination,
  er as TuPopconfirm,
  tr as TuPopover,
  pr as TuProgress,
  Y as TuQuarterPicker,
  xr as TuRadio,
  fr as TuRadioGroup,
  $ as TuRangePicker,
  ir as TuRate,
  lr as TuResizeBox,
  sr as TuResizeObserver,
  Ir as TuResizeTrigger,
  Pr as TuResult,
  Sr as TuRow,
  br as TuScrollbar,
  vr as TuSelect,
  Dr as TuSelectGroup,
  Br as TuSelectOption,
  Rr as TuSelectView,
  Mr as TuSkeleton,
  yr as TuSkeletonLine,
  Ar as TuSkeletonShape,
  zr as TuSlider,
  Or as TuSpace,
  Vr as TuSpin,
  Qo as TuSubMenu,
  Er as TuSwitch,
  Qr as TuTabPane,
  Yr as TuTabs,
  jr as TuTag,
  Jr as TuTextarea,
  Ur as TuTimePicker,
  ae as TuTimeline,
  ie as TuTimelineItem,
  Zr as TuTooltip,
  oe as TuTransition,
  ee as TuTree,
  te as TuTreeSelect,
  pe as TuTrigger,
  xe as TuVirtualList,
  le as TuWatermark,
  j as TuWeekPicker,
  q as TuYearPicker,
  u as default
};
