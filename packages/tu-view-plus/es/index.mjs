import * as o from "./src/index.mjs";
import { TuAffix as p } from "./src/affix/index.mjs";
import { TuAlert as x } from "./src/alert/index.mjs";
import { TuAvatar as i, TuAvatarGroup as a } from "./src/avatar/index.mjs";
import { TuBackTop as l } from "./src/back-top/index.mjs";
import { TuBadge as c } from "./src/badge/index.mjs";
import { TuButton as k, TuButtonGroup as S } from "./src/button/index.mjs";
import { TuCheckbox as C, TuCheckboxGroup as D } from "./src/checkbox/index.mjs";
import { TuConfigProvider as I } from "./src/config-provider/index.mjs";
import { TuCollapse as g, TuCollapseItem as B } from "./src/collapse/index.mjs";
import { TuCollapseTransition as G } from "./src/collapse-transition/index.mjs";
import { TuCol as A } from "./src/col/index.mjs";
import { TuCard as M } from "./src/card/index.mjs";
import { TuCarousel as O, TuCarouselItem as y } from "./src/carousel/index.mjs";
import { TuDatePicker as V, TuMonthPicker as W, TuQuarterPicker as z, TuWeekPicker as E, TuYearPicker as F } from "./src/date-picker/index.mjs";
import { TuDivider as Y } from "./src/divider/index.mjs";
import { TuDrawer as j, TuDrawerBox as q } from "./src/drawer/index.mjs";
import { TuDescriptions as J, TuDescriptionsItem as K } from "./src/descriptions/index.mjs";
import { TuDropdown as X, TuDropdownButton as Z, TuDropdownGroup as _, TuDropdownItem as oo, TuDropdownSubmenu as ro } from "./src/dropdown/index.mjs";
import { TuEmpty as to } from "./src/empty/index.mjs";
import { TuForm as To } from "./src/form/index.mjs";
import { TuInput as mo } from "./src/input/index.mjs";
import { TuInputLabel as fo } from "./src/input-label/index.mjs";
import { TuInputNumber as ao } from "./src/input-number/index.mjs";
import { TuInputTag as lo } from "./src/input-tag/index.mjs";
import { TuIcon as co } from "./src/icon/index.mjs";
import { TuLink as So } from "./src/link/index.mjs";
import { TuModal as Co, TuModalBox as Do } from "./src/modal/index.mjs";
import { TuMessage as Io } from "./src/message/index.mjs";
import { TuNotification as go } from "./src/notification/index.mjs";
import { TuOnlyClient as vo } from "./src/only-client/index.mjs";
import { TuPagination as ho } from "./src/pagination/index.mjs";
import { TuPopconfirm as Lo } from "./src/popconfirm/index.mjs";
import { TuPopover as Ro } from "./src/popover/index.mjs";
import { TuProgress as yo } from "./src/progress/index.mjs";
import { TuRadio as Vo, TuRadioGroup as Wo } from "./src/radio/index.mjs";
import { TuResizeObserver as Eo } from "./src/resize-observer/index.mjs";
import { TuRow as Qo } from "./src/row/index.mjs";
import { TuScrollbar as $o } from "./src/scrollbar/index.mjs";
import { TuSelect as qo, TuSelectGroup as Ho, TuSelectOption as Jo } from "./src/select/index.mjs";
import { TuSelectView as Uo } from "./src/select-view/index.mjs";
import { TuSkeleton as Zo, TuSkeletonLine as _o, TuSkeletonShape as or } from "./src/skeleton/index.mjs";
import { TuSlider as er } from "./src/slider/index.mjs";
import { TuSpace as ur } from "./src/space/index.mjs";
import { TuSpin as pr } from "./src/spin/index.mjs";
import { TuSwitch as xr } from "./src/switch/index.mjs";
import { TuTabPane as ir, TuTabs as ar } from "./src/tabs/index.mjs";
import { TuTag as lr } from "./src/tag/index.mjs";
import { TuTextarea as cr } from "./src/textarea/index.mjs";
import { TuTimePicker as kr } from "./src/time-picker/index.mjs";
import { TuTooltip as Pr } from "./src/tooltip/index.mjs";
import { TuTransition as Dr } from "./src/transition/index.mjs";
import { TuTrigger as Ir } from "./src/trigger/index.mjs";
import { TuVirtualList as gr } from "./src/virtual-list/index.mjs";
import { TuTimeline as vr, TuTimelineItem as Gr } from "./src/timeline/index.mjs";
import { TuWatermark as Ar } from "./src/watermark/index.mjs";
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
  M as TuCard,
  O as TuCarousel,
  y as TuCarouselItem,
  C as TuCheckbox,
  D as TuCheckboxGroup,
  A as TuCol,
  g as TuCollapse,
  B as TuCollapseItem,
  G as TuCollapseTransition,
  I as TuConfigProvider,
  V as TuDatePicker,
  J as TuDescriptions,
  K as TuDescriptionsItem,
  Y as TuDivider,
  j as TuDrawer,
  q as TuDrawerBox,
  X as TuDropdown,
  Z as TuDropdownButton,
  _ as TuDropdownGroup,
  oo as TuDropdownItem,
  ro as TuDropdownSubmenu,
  to as TuEmpty,
  To as TuForm,
  co as TuIcon,
  mo as TuInput,
  fo as TuInputLabel,
  ao as TuInputNumber,
  lo as TuInputTag,
  So as TuLink,
  Io as TuMessage,
  Co as TuModal,
  Do as TuModalBox,
  W as TuMonthPicker,
  go as TuNotification,
  vo as TuOnlyClient,
  ho as TuPagination,
  Lo as TuPopconfirm,
  Ro as TuPopover,
  yo as TuProgress,
  z as TuQuarterPicker,
  Vo as TuRadio,
  Wo as TuRadioGroup,
  Eo as TuResizeObserver,
  Qo as TuRow,
  $o as TuScrollbar,
  qo as TuSelect,
  Ho as TuSelectGroup,
  Jo as TuSelectOption,
  Uo as TuSelectView,
  Zo as TuSkeleton,
  _o as TuSkeletonLine,
  or as TuSkeletonShape,
  er as TuSlider,
  ur as TuSpace,
  pr as TuSpin,
  xr as TuSwitch,
  ir as TuTabPane,
  ar as TuTabs,
  lr as TuTag,
  cr as TuTextarea,
  kr as TuTimePicker,
  vr as TuTimeline,
  Gr as TuTimelineItem,
  Pr as TuTooltip,
  Dr as TuTransition,
  Ir as TuTrigger,
  gr as TuVirtualList,
  Ar as TuWatermark,
  E as TuWeekPicker,
  F as TuYearPicker,
  t as default
};
