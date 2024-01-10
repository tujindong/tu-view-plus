import * as o from "./src/index.mjs";
import { TuAffix as p } from "./src/affix/index.mjs";
import { TuAlert as x } from "./src/alert/index.mjs";
import { TuAvatar as i, TuAvatarGroup as a } from "./src/avatar/index.mjs";
import { TuBackTop as l } from "./src/back-top/index.mjs";
import { TuBadge as s } from "./src/badge/index.mjs";
import { TuButton as k, TuButtonGroup as S } from "./src/button/index.mjs";
import { TuCheckbox as C, TuCheckboxGroup as D } from "./src/checkbox/index.mjs";
import { TuConfigProvider as w } from "./src/config-provider/index.mjs";
import { TuCollapse as b, TuCollapseItem as B } from "./src/collapse/index.mjs";
import { TuCollapseTransition as G } from "./src/collapse-transition/index.mjs";
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
import { TuInputTag as co } from "./src/input-tag/index.mjs";
import { TuIcon as ko } from "./src/icon/index.mjs";
import { TuLink as Po } from "./src/link/index.mjs";
import { TuModal as Do, TuModalBox as go } from "./src/modal/index.mjs";
import { TuMessage as Io } from "./src/message/index.mjs";
import { TuNotification as Bo } from "./src/notification/index.mjs";
import { TuOnlyClient as Go } from "./src/only-client/index.mjs";
import { TuPagination as ho } from "./src/pagination/index.mjs";
import { TuPopconfirm as Lo } from "./src/popconfirm/index.mjs";
import { TuPopover as Oo } from "./src/popover/index.mjs";
import { TuProgress as No } from "./src/progress/index.mjs";
import { TuRadio as Wo, TuRadioGroup as zo } from "./src/radio/index.mjs";
import { TuRate as Fo } from "./src/rate/index.mjs";
import { TuResizeObserver as Yo } from "./src/resize-observer/index.mjs";
import { TuRow as jo } from "./src/row/index.mjs";
import { TuScrollbar as Ho } from "./src/scrollbar/index.mjs";
import { TuSelect as Ko, TuSelectGroup as Uo, TuSelectOption as Xo } from "./src/select/index.mjs";
import { TuSelectView as _o } from "./src/select-view/index.mjs";
import { TuSkeleton as rr, TuSkeletonLine as er, TuSkeletonShape as tr } from "./src/skeleton/index.mjs";
import { TuSlider as Tr } from "./src/slider/index.mjs";
import { TuSpace as mr } from "./src/space/index.mjs";
import { TuSpin as fr } from "./src/spin/index.mjs";
import { TuSwitch as ar } from "./src/switch/index.mjs";
import { TuTabPane as lr, TuTabs as cr } from "./src/tabs/index.mjs";
import { TuTag as dr } from "./src/tag/index.mjs";
import { TuTextarea as Sr } from "./src/textarea/index.mjs";
import { TuTimePicker as Cr } from "./src/time-picker/index.mjs";
import { TuTooltip as gr } from "./src/tooltip/index.mjs";
import { TuTransition as Ir } from "./src/transition/index.mjs";
import { TuTrigger as Br } from "./src/trigger/index.mjs";
import { TuVirtualList as Gr } from "./src/virtual-list/index.mjs";
import { TuTimeline as hr, TuTimelineItem as Ar } from "./src/timeline/index.mjs";
import { TuWatermark as Mr } from "./src/watermark/index.mjs";
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
  G as TuCollapseTransition,
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
  co as TuInputTag,
  Po as TuLink,
  Io as TuMessage,
  Do as TuModal,
  go as TuModalBox,
  W as TuMonthPicker,
  Bo as TuNotification,
  Go as TuOnlyClient,
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
  jo as TuRow,
  Ho as TuScrollbar,
  Ko as TuSelect,
  Uo as TuSelectGroup,
  Xo as TuSelectOption,
  _o as TuSelectView,
  rr as TuSkeleton,
  er as TuSkeletonLine,
  tr as TuSkeletonShape,
  Tr as TuSlider,
  mr as TuSpace,
  fr as TuSpin,
  ar as TuSwitch,
  lr as TuTabPane,
  cr as TuTabs,
  dr as TuTag,
  Sr as TuTextarea,
  Cr as TuTimePicker,
  hr as TuTimeline,
  Ar as TuTimelineItem,
  gr as TuTooltip,
  Ir as TuTransition,
  Br as TuTrigger,
  Gr as TuVirtualList,
  Mr as TuWatermark,
  F as TuWeekPicker,
  Q as TuYearPicker,
  t as default
};
