import * as o from "./src/index.mjs";
import { TuAffix as p } from "./src/affix/index.mjs";
import { TuAlert as x } from "./src/alert/index.mjs";
import { TuAvatar as a, TuAvatarGroup as i } from "./src/avatar/index.mjs";
import { TuBackTop as l } from "./src/back-top/index.mjs";
import { TuBadge as s } from "./src/badge/index.mjs";
import { TuBreadcrumb as I, TuBreadcrumbItem as g } from "./src/breadcrumb/index.mjs";
import { TuButton as S, TuButtonGroup as k } from "./src/button/index.mjs";
import { TuCheckbox as b, TuCheckboxGroup as C } from "./src/checkbox/index.mjs";
import { TuConfigProvider as D } from "./src/config-provider/index.mjs";
import { TuCollapse as L, TuCollapseItem as R } from "./src/collapse/index.mjs";
import { TuCollapseTransition as M } from "./src/collapse-transition/index.mjs";
import { TuCol as A } from "./src/col/index.mjs";
import { TuCard as z } from "./src/card/index.mjs";
import { TuCarousel as O, TuCarouselItem as N } from "./src/carousel/index.mjs";
import { TuDatePicker as W, TuMonthPicker as E, TuQuarterPicker as H, TuRangePicker as Q, TuWeekPicker as Y, TuYearPicker as $ } from "./src/date-picker/index.mjs";
import { TuDivider as q } from "./src/divider/index.mjs";
import { TuDrawer as K, TuDrawerBox as U } from "./src/drawer/index.mjs";
import { TuDescriptions as Z, TuDescriptionsItem as _ } from "./src/descriptions/index.mjs";
import { TuDropdown as ro, TuDropdownButton as eo, TuDropdownGroup as uo, TuDropdownItem as to, TuDropdownSubmenu as To } from "./src/dropdown/index.mjs";
import { TuEmpty as mo } from "./src/empty/index.mjs";
import { TuForm as fo } from "./src/form/index.mjs";
import { TuImage as io, TuImageFooter as no, TuImagePreview as lo, TuImagePreviewAction as co, TuImagePreviewArrow as so, TuImagePreviewGroup as Io, TuImagePreviewToolbar as go } from "./src/image/index.mjs";
import { TuInput as So } from "./src/input/index.mjs";
import { TuInputLabel as wo } from "./src/input-label/index.mjs";
import { TuInputNumber as Co } from "./src/input-number/index.mjs";
import { TuInputTag as Do } from "./src/input-tag/index.mjs";
import { TuIcon as Lo } from "./src/icon/index.mjs";
import { TuLayout as Go, TuLayoutContent as Mo, TuLayoutFooter as yo, TuLayoutHeader as Ao, TuLayoutSider as ho } from "./src/layout/index.mjs";
import { TuLink as Fo } from "./src/link/index.mjs";
import { TuMenu as No, TuMenuItem as Vo, TuMenuItemGroup as Wo, TuSubMenu as Eo } from "./src/menu/index.mjs";
import { TuMessage as Qo } from "./src/message/index.mjs";
import { TuModal as $o, TuModalBox as jo } from "./src/modal/index.mjs";
import { TuNotification as Jo } from "./src/notification/index.mjs";
import { TuOnlyClient as Uo } from "./src/only-client/index.mjs";
import { TuPagination as Zo } from "./src/pagination/index.mjs";
import { TuPopconfirm as or } from "./src/popconfirm/index.mjs";
import { TuPopover as er } from "./src/popover/index.mjs";
import { TuProgress as tr } from "./src/progress/index.mjs";
import { TuRadio as pr, TuRadioGroup as mr } from "./src/radio/index.mjs";
import { TuRate as fr } from "./src/rate/index.mjs";
import { TuResizeBox as ir } from "./src/resize-box/index.mjs";
import { TuResizeObserver as lr } from "./src/resize-observer/index.mjs";
import { TuResizeTrigger as sr } from "./src/resize-trigger/index.mjs";
import { TuResult as Ir } from "./src/result/index.mjs";
import { TuRow as Pr } from "./src/row/index.mjs";
import { TuScrollbar as kr } from "./src/scrollbar/index.mjs";
import { TuSelect as br, TuSelectGroup as Cr, TuSelectOption as vr } from "./src/select/index.mjs";
import { TuSelectView as Br } from "./src/select-view/index.mjs";
import { TuSkeleton as Rr, TuSkeletonLine as Gr, TuSkeletonShape as Mr } from "./src/skeleton/index.mjs";
import { TuSlider as Ar } from "./src/slider/index.mjs";
import { TuSpace as zr } from "./src/space/index.mjs";
import { TuSpin as Or } from "./src/spin/index.mjs";
import { TuSwitch as Vr } from "./src/switch/index.mjs";
import { TuTabPane as Er, TuTabs as Hr } from "./src/tabs/index.mjs";
import { TuTag as Yr } from "./src/tag/index.mjs";
import { TuTextarea as jr } from "./src/textarea/index.mjs";
import { TuTimePicker as Jr } from "./src/time-picker/index.mjs";
import { TuTooltip as Ur } from "./src/tooltip/index.mjs";
import { TuTransition as Zr } from "./src/transition/index.mjs";
import { TuTree as oe } from "./src/tree/index.mjs";
import { TuTreeSelect as ee } from "./src/tree-select/index.mjs";
import { TuTrigger as te } from "./src/trigger/index.mjs";
import { TuVirtualList as pe } from "./src/virtual-list/index.mjs";
import { TuTimeline as xe, TuTimelineItem as fe } from "./src/timeline/index.mjs";
import { TuWatermark as ie } from "./src/watermark/index.mjs";
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
  S as TuButton,
  k as TuButtonGroup,
  z as TuCard,
  O as TuCarousel,
  N as TuCarouselItem,
  b as TuCheckbox,
  C as TuCheckboxGroup,
  A as TuCol,
  L as TuCollapse,
  R as TuCollapseItem,
  M as TuCollapseTransition,
  D as TuConfigProvider,
  W as TuDatePicker,
  Z as TuDescriptions,
  _ as TuDescriptionsItem,
  q as TuDivider,
  K as TuDrawer,
  U as TuDrawerBox,
  ro as TuDropdown,
  eo as TuDropdownButton,
  uo as TuDropdownGroup,
  to as TuDropdownItem,
  To as TuDropdownSubmenu,
  mo as TuEmpty,
  fo as TuForm,
  Lo as TuIcon,
  io as TuImage,
  no as TuImageFooter,
  lo as TuImagePreview,
  co as TuImagePreviewAction,
  so as TuImagePreviewArrow,
  Io as TuImagePreviewGroup,
  go as TuImagePreviewToolbar,
  So as TuInput,
  wo as TuInputLabel,
  Co as TuInputNumber,
  Do as TuInputTag,
  Go as TuLayout,
  Mo as TuLayoutContent,
  yo as TuLayoutFooter,
  Ao as TuLayoutHeader,
  ho as TuLayoutSider,
  Fo as TuLink,
  No as TuMenu,
  Vo as TuMenuItem,
  Wo as TuMenuItemGroup,
  Qo as TuMessage,
  $o as TuModal,
  jo as TuModalBox,
  E as TuMonthPicker,
  Jo as TuNotification,
  Uo as TuOnlyClient,
  Zo as TuPagination,
  or as TuPopconfirm,
  er as TuPopover,
  tr as TuProgress,
  H as TuQuarterPicker,
  pr as TuRadio,
  mr as TuRadioGroup,
  Q as TuRangePicker,
  fr as TuRate,
  ir as TuResizeBox,
  lr as TuResizeObserver,
  sr as TuResizeTrigger,
  Ir as TuResult,
  Pr as TuRow,
  kr as TuScrollbar,
  br as TuSelect,
  Cr as TuSelectGroup,
  vr as TuSelectOption,
  Br as TuSelectView,
  Rr as TuSkeleton,
  Gr as TuSkeletonLine,
  Mr as TuSkeletonShape,
  Ar as TuSlider,
  zr as TuSpace,
  Or as TuSpin,
  Eo as TuSubMenu,
  Vr as TuSwitch,
  Er as TuTabPane,
  Hr as TuTabs,
  Yr as TuTag,
  jr as TuTextarea,
  Jr as TuTimePicker,
  xe as TuTimeline,
  fe as TuTimelineItem,
  Ur as TuTooltip,
  Zr as TuTransition,
  oe as TuTree,
  ee as TuTreeSelect,
  te as TuTrigger,
  pe as TuVirtualList,
  ie as TuWatermark,
  Y as TuWeekPicker,
  $ as TuYearPicker,
  u as default
};
