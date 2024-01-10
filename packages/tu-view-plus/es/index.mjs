import * as o from "./src/index.mjs";
import { TuAffix as p } from "./src/affix/index.mjs";
import { TuAlert as x } from "./src/alert/index.mjs";
import { TuAvatar as i, TuAvatarGroup as a } from "./src/avatar/index.mjs";
import { TuBackTop as l } from "./src/back-top/index.mjs";
import { TuBadge as c } from "./src/badge/index.mjs";
import { TuButton as k, TuButtonGroup as S } from "./src/button/index.mjs";
import { TuCheckbox as C, TuCheckboxGroup as D } from "./src/checkbox/index.mjs";
import { TuConfigProvider as w } from "./src/config-provider/index.mjs";
import { TuCollapse as b, TuCollapseItem as B } from "./src/collapse/index.mjs";
import { TuCollapseTransition as v } from "./src/collapse-transition/index.mjs";
import { TuCol as h } from "./src/col/index.mjs";
import { TuCard as L } from "./src/card/index.mjs";
import { TuCarousel as O, TuCarouselItem as y } from "./src/carousel/index.mjs";
import { TuDatePicker as V, TuMonthPicker as W, TuQuarterPicker as z, TuRangePicker as E, TuWeekPicker as F, TuYearPicker as Q } from "./src/date-picker/index.mjs";
import { TuDivider as $ } from "./src/divider/index.mjs";
import { TuDrawer as q, TuDrawerBox as H } from "./src/drawer/index.mjs";
import { TuDescriptions as K, TuDescriptionsItem as U } from "./src/descriptions/index.mjs";
import { TuDropdown as Z, TuDropdownButton as _, TuDropdownGroup as oo, TuDropdownItem as ro, TuDropdownSubmenu as eo } from "./src/dropdown/index.mjs";
import { TuEmpty as uo } from "./src/empty/index.mjs";
import { TuForm as po } from "./src/form/index.mjs";
import { TuInput as xo } from "./src/input/index.mjs";
import { TuInputLabel as io } from "./src/input-label/index.mjs";
import { TuInputNumber as no } from "./src/input-number/index.mjs";
import { TuInputTag as so } from "./src/input-tag/index.mjs";
import { TuIcon as ko } from "./src/icon/index.mjs";
import { TuLink as Po } from "./src/link/index.mjs";
import { TuModal as Do, TuModalBox as go } from "./src/modal/index.mjs";
import { TuMessage as Io } from "./src/message/index.mjs";
import { TuNotification as Bo } from "./src/notification/index.mjs";
import { TuOnlyClient as vo } from "./src/only-client/index.mjs";
import { TuPagination as ho } from "./src/pagination/index.mjs";
import { TuPopconfirm as Lo } from "./src/popconfirm/index.mjs";
import { TuPopover as Oo } from "./src/popover/index.mjs";
import { TuProgress as No } from "./src/progress/index.mjs";
import { TuRadio as Wo, TuRadioGroup as zo } from "./src/radio/index.mjs";
import { TuRate as Fo } from "./src/rate/index.mjs";
import { TuResizeObserver as Yo } from "./src/resize-observer/index.mjs";
import { TuResult as jo } from "./src/result/index.mjs";
import { TuRow as Ho } from "./src/row/index.mjs";
import { TuScrollbar as Ko } from "./src/scrollbar/index.mjs";
import { TuSelect as Xo, TuSelectGroup as Zo, TuSelectOption as _o } from "./src/select/index.mjs";
import { TuSelectView as rr } from "./src/select-view/index.mjs";
import { TuSkeleton as tr, TuSkeletonLine as ur, TuSkeletonShape as Tr } from "./src/skeleton/index.mjs";
import { TuSlider as mr } from "./src/slider/index.mjs";
import { TuSpace as fr } from "./src/space/index.mjs";
import { TuSpin as ar } from "./src/spin/index.mjs";
import { TuSwitch as lr } from "./src/switch/index.mjs";
import { TuTabPane as cr, TuTabs as dr } from "./src/tabs/index.mjs";
import { TuTag as Sr } from "./src/tag/index.mjs";
import { TuTextarea as Cr } from "./src/textarea/index.mjs";
import { TuTimePicker as gr } from "./src/time-picker/index.mjs";
import { TuTooltip as Ir } from "./src/tooltip/index.mjs";
import { TuTransition as Br } from "./src/transition/index.mjs";
import { TuTrigger as vr } from "./src/trigger/index.mjs";
import { TuVirtualList as hr } from "./src/virtual-list/index.mjs";
import { TuTimeline as Lr, TuTimelineItem as Mr } from "./src/timeline/index.mjs";
import { TuWatermark as yr } from "./src/watermark/index.mjs";
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
  c as TuBadge,
  k as TuButton,
  S as TuButtonGroup,
  L as TuCard,
  O as TuCarousel,
  y as TuCarouselItem,
  C as TuCheckbox,
  D as TuCheckboxGroup,
  h as TuCol,
  b as TuCollapse,
  B as TuCollapseItem,
  v as TuCollapseTransition,
  w as TuConfigProvider,
  V as TuDatePicker,
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
  ko as TuIcon,
  xo as TuInput,
  io as TuInputLabel,
  no as TuInputNumber,
  so as TuInputTag,
  Po as TuLink,
  Io as TuMessage,
  Do as TuModal,
  go as TuModalBox,
  W as TuMonthPicker,
  Bo as TuNotification,
  vo as TuOnlyClient,
  ho as TuPagination,
  Lo as TuPopconfirm,
  Oo as TuPopover,
  No as TuProgress,
  z as TuQuarterPicker,
  Wo as TuRadio,
  zo as TuRadioGroup,
  E as TuRangePicker,
  Fo as TuRate,
  Yo as TuResizeObserver,
  jo as TuResult,
  Ho as TuRow,
  Ko as TuScrollbar,
  Xo as TuSelect,
  Zo as TuSelectGroup,
  _o as TuSelectOption,
  rr as TuSelectView,
  tr as TuSkeleton,
  ur as TuSkeletonLine,
  Tr as TuSkeletonShape,
  mr as TuSlider,
  fr as TuSpace,
  ar as TuSpin,
  lr as TuSwitch,
  cr as TuTabPane,
  dr as TuTabs,
  Sr as TuTag,
  Cr as TuTextarea,
  gr as TuTimePicker,
  Lr as TuTimeline,
  Mr as TuTimelineItem,
  Ir as TuTooltip,
  Br as TuTransition,
  vr as TuTrigger,
  hr as TuVirtualList,
  yr as TuWatermark,
  F as TuWeekPicker,
  Q as TuYearPicker,
  t as default
};
