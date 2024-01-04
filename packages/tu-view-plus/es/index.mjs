import * as o from "./src/index.mjs";
import { TuAffix as p } from "./src/affix/index.mjs";
import { TuAlert as x } from "./src/alert/index.mjs";
import { TuAvatar as i, TuAvatarGroup as a } from "./src/avatar/index.mjs";
import { TuBackTop as l } from "./src/back-top/index.mjs";
import { TuBadge as c } from "./src/badge/index.mjs";
import { TuButton as S, TuButtonGroup as k } from "./src/button/index.mjs";
import { TuCheckbox as C, TuCheckboxGroup as D } from "./src/checkbox/index.mjs";
import { TuConfigProvider as I } from "./src/config-provider/index.mjs";
import { TuCollapse as g, TuCollapseItem as B } from "./src/collapse/index.mjs";
import { TuCollapseTransition as G } from "./src/collapse-transition/index.mjs";
import { TuCol as A } from "./src/col/index.mjs";
import { TuCard as R } from "./src/card/index.mjs";
import { TuCarousel as O, TuCarouselItem as y } from "./src/carousel/index.mjs";
import { TuDatePicker as V, TuMonthPicker as z, TuQuarterPicker as E, TuWeekPicker as F, TuYearPicker as Q } from "./src/date-picker/index.mjs";
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
import { TuModal as ko, TuModalBox as Po } from "./src/modal/index.mjs";
import { TuMessage as Do } from "./src/message/index.mjs";
import { TuNotification as Io } from "./src/notification/index.mjs";
import { TuOnlyClient as go } from "./src/only-client/index.mjs";
import { TuPagination as vo } from "./src/pagination/index.mjs";
import { TuPopconfirm as ho } from "./src/popconfirm/index.mjs";
import { TuPopover as Mo } from "./src/popover/index.mjs";
import { TuProgress as Lo } from "./src/progress/index.mjs";
import { TuRadio as yo, TuRadioGroup as No } from "./src/radio/index.mjs";
import { TuResizeObserver as zo } from "./src/resize-observer/index.mjs";
import { TuRow as Fo } from "./src/row/index.mjs";
import { TuScrollbar as Wo } from "./src/scrollbar/index.mjs";
import { TuSelect as $o, TuSelectGroup as jo, TuSelectOption as qo } from "./src/select/index.mjs";
import { TuSelectView as Jo } from "./src/select-view/index.mjs";
import { TuSkeleton as Uo, TuSkeletonLine as Xo, TuSkeletonShape as Zo } from "./src/skeleton/index.mjs";
import { TuSlider as or } from "./src/slider/index.mjs";
import { TuSpace as er } from "./src/space/index.mjs";
import { TuSpin as ur } from "./src/spin/index.mjs";
import { TuSwitch as pr } from "./src/switch/index.mjs";
import { TuTabPane as xr, TuTabs as fr } from "./src/tabs/index.mjs";
import { TuTag as ar } from "./src/tag/index.mjs";
import { TuTextarea as lr } from "./src/textarea/index.mjs";
import { TuTimePicker as cr } from "./src/time-picker/index.mjs";
import { TuTooltip as Sr } from "./src/tooltip/index.mjs";
import { TuTransition as Pr } from "./src/transition/index.mjs";
import { TuTrigger as Dr } from "./src/trigger/index.mjs";
import { TuVirtualList as Ir } from "./src/virtual-list/index.mjs";
import { TuTimeline as gr, TuTimelineItem as Br } from "./src/timeline/index.mjs";
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
  S as TuButton,
  k as TuButtonGroup,
  R as TuCard,
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
  Do as TuMessage,
  ko as TuModal,
  Po as TuModalBox,
  z as TuMonthPicker,
  Io as TuNotification,
  go as TuOnlyClient,
  vo as TuPagination,
  ho as TuPopconfirm,
  Mo as TuPopover,
  Lo as TuProgress,
  E as TuQuarterPicker,
  yo as TuRadio,
  No as TuRadioGroup,
  zo as TuResizeObserver,
  Fo as TuRow,
  Wo as TuScrollbar,
  $o as TuSelect,
  jo as TuSelectGroup,
  qo as TuSelectOption,
  Jo as TuSelectView,
  Uo as TuSkeleton,
  Xo as TuSkeletonLine,
  Zo as TuSkeletonShape,
  or as TuSlider,
  er as TuSpace,
  ur as TuSpin,
  pr as TuSwitch,
  xr as TuTabPane,
  fr as TuTabs,
  ar as TuTag,
  lr as TuTextarea,
  cr as TuTimePicker,
  gr as TuTimeline,
  Br as TuTimelineItem,
  Sr as TuTooltip,
  Pr as TuTransition,
  Dr as TuTrigger,
  Ir as TuVirtualList,
  F as TuWeekPicker,
  Q as TuYearPicker,
  t as default
};
