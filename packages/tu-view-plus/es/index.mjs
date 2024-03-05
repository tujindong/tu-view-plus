import * as o from "./src/index.mjs";
import { TuAffix as p } from "./src/affix/index.mjs";
import { TuAlert as x } from "./src/alert/index.mjs";
import { TuAvatar as i, TuAvatarGroup as a } from "./src/avatar/index.mjs";
import { TuBackTop as l } from "./src/back-top/index.mjs";
import { TuBadge as s } from "./src/badge/index.mjs";
import { TuButton as d, TuButtonGroup as k } from "./src/button/index.mjs";
import { TuCheckbox as S, TuCheckboxGroup as g } from "./src/checkbox/index.mjs";
import { TuConfigProvider as v } from "./src/config-provider/index.mjs";
import { TuCollapse as D, TuCollapseItem as b } from "./src/collapse/index.mjs";
import { TuCollapseTransition as G } from "./src/collapse-transition/index.mjs";
import { TuCol as A } from "./src/col/index.mjs";
import { TuCard as L } from "./src/card/index.mjs";
import { TuCarousel as O, TuCarouselItem as y } from "./src/carousel/index.mjs";
import { TuDatePicker as N, TuMonthPicker as V, TuQuarterPicker as W, TuRangePicker as z, TuWeekPicker as E, TuYearPicker as Q } from "./src/date-picker/index.mjs";
import { TuDivider as $ } from "./src/divider/index.mjs";
import { TuDrawer as q, TuDrawerBox as H } from "./src/drawer/index.mjs";
import { TuDescriptions as K, TuDescriptionsItem as U } from "./src/descriptions/index.mjs";
import { TuDropdown as Z, TuDropdownButton as _, TuDropdownGroup as oo, TuDropdownItem as ro, TuDropdownSubmenu as eo } from "./src/dropdown/index.mjs";
import { TuEmpty as uo } from "./src/empty/index.mjs";
import { TuForm as po } from "./src/form/index.mjs";
import { TuImage as xo, TuImageFooter as fo, TuPreview as io, TuPreviewAction as ao, TuPreviewArrow as no, TuPreviewGroup as lo, TuPreviewToolbar as co } from "./src/image/index.mjs";
import { TuInput as Po } from "./src/input/index.mjs";
import { TuInputLabel as wo } from "./src/input-label/index.mjs";
import { TuInputNumber as go } from "./src/input-number/index.mjs";
import { TuInputTag as vo } from "./src/input-tag/index.mjs";
import { TuIcon as Do } from "./src/icon/index.mjs";
import { TuLink as Bo } from "./src/link/index.mjs";
import { TuModal as Ro, TuModalBox as Ao } from "./src/modal/index.mjs";
import { TuMessage as Lo } from "./src/message/index.mjs";
import { TuNotification as Oo } from "./src/notification/index.mjs";
import { TuOnlyClient as Fo } from "./src/only-client/index.mjs";
import { TuPagination as Vo } from "./src/pagination/index.mjs";
import { TuPopconfirm as zo } from "./src/popconfirm/index.mjs";
import { TuPopover as Qo } from "./src/popover/index.mjs";
import { TuProgress as $o } from "./src/progress/index.mjs";
import { TuRadio as qo, TuRadioGroup as Ho } from "./src/radio/index.mjs";
import { TuRate as Ko } from "./src/rate/index.mjs";
import { TuResizeObserver as Xo } from "./src/resize-observer/index.mjs";
import { TuResult as _o } from "./src/result/index.mjs";
import { TuRow as rr } from "./src/row/index.mjs";
import { TuScrollbar as tr } from "./src/scrollbar/index.mjs";
import { TuSelect as Tr, TuSelectGroup as pr, TuSelectOption as mr } from "./src/select/index.mjs";
import { TuSelectView as fr } from "./src/select-view/index.mjs";
import { TuSkeleton as ar, TuSkeletonLine as nr, TuSkeletonShape as lr } from "./src/skeleton/index.mjs";
import { TuSlider as sr } from "./src/slider/index.mjs";
import { TuSpace as dr } from "./src/space/index.mjs";
import { TuSpin as wr } from "./src/spin/index.mjs";
import { TuSwitch as gr } from "./src/switch/index.mjs";
import { TuTabPane as vr, TuTabs as Cr } from "./src/tabs/index.mjs";
import { TuTag as br } from "./src/tag/index.mjs";
import { TuTextarea as Gr } from "./src/textarea/index.mjs";
import { TuTimePicker as Ar } from "./src/time-picker/index.mjs";
import { TuTooltip as Lr } from "./src/tooltip/index.mjs";
import { TuTransition as Or } from "./src/transition/index.mjs";
import { TuTree as Fr } from "./src/tree/index.mjs";
import { TuTreeSelect as Vr } from "./src/tree-select/index.mjs";
import { TuTrigger as zr } from "./src/trigger/index.mjs";
import { TuVirtualList as Qr } from "./src/virtual-list/index.mjs";
import { TuTimeline as $r, TuTimelineItem as jr } from "./src/timeline/index.mjs";
import { TuWatermark as Hr } from "./src/watermark/index.mjs";
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
  a as TuAvatarGroup,
  l as TuBackTop,
  s as TuBadge,
  d as TuButton,
  k as TuButtonGroup,
  L as TuCard,
  O as TuCarousel,
  y as TuCarouselItem,
  S as TuCheckbox,
  g as TuCheckboxGroup,
  A as TuCol,
  D as TuCollapse,
  b as TuCollapseItem,
  G as TuCollapseTransition,
  v as TuConfigProvider,
  N as TuDatePicker,
  K as TuDescriptions,
  U as TuDescriptionsItem,
  $ as TuDivider,
  q as TuDrawer,
  H as TuDrawerBox,
  Z as TuDropdown,
  _ as TuDropdownButton,
  oo as TuDropdownGroup,
  ro as TuDropdownItem,
  eo as TuDropdownSubmenu,
  uo as TuEmpty,
  po as TuForm,
  Do as TuIcon,
  xo as TuImage,
  fo as TuImageFooter,
  Po as TuInput,
  wo as TuInputLabel,
  go as TuInputNumber,
  vo as TuInputTag,
  Bo as TuLink,
  Lo as TuMessage,
  Ro as TuModal,
  Ao as TuModalBox,
  V as TuMonthPicker,
  Oo as TuNotification,
  Fo as TuOnlyClient,
  Vo as TuPagination,
  zo as TuPopconfirm,
  Qo as TuPopover,
  io as TuPreview,
  ao as TuPreviewAction,
  no as TuPreviewArrow,
  lo as TuPreviewGroup,
  co as TuPreviewToolbar,
  $o as TuProgress,
  W as TuQuarterPicker,
  qo as TuRadio,
  Ho as TuRadioGroup,
  z as TuRangePicker,
  Ko as TuRate,
  Xo as TuResizeObserver,
  _o as TuResult,
  rr as TuRow,
  tr as TuScrollbar,
  Tr as TuSelect,
  pr as TuSelectGroup,
  mr as TuSelectOption,
  fr as TuSelectView,
  ar as TuSkeleton,
  nr as TuSkeletonLine,
  lr as TuSkeletonShape,
  sr as TuSlider,
  dr as TuSpace,
  wr as TuSpin,
  gr as TuSwitch,
  vr as TuTabPane,
  Cr as TuTabs,
  br as TuTag,
  Gr as TuTextarea,
  Ar as TuTimePicker,
  $r as TuTimeline,
  jr as TuTimelineItem,
  Lr as TuTooltip,
  Or as TuTransition,
  Fr as TuTree,
  Vr as TuTreeSelect,
  zr as TuTrigger,
  Qr as TuVirtualList,
  Hr as TuWatermark,
  E as TuWeekPicker,
  Q as TuYearPicker,
  t as default
};
