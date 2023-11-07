import * as o from "./src/index.mjs";
import { TuAffix as p } from "./src/affix/index.mjs";
import { TuAlert as x } from "./src/alert/index.mjs";
import { TuAvatar as i } from "./src/avatar/index.mjs";
import { TuBackTop as a } from "./src/back-top/index.mjs";
import { TuBadge as s } from "./src/badge/index.mjs";
import { TuButton as c, TuButtonGroup as S } from "./src/button/index.mjs";
import { TuCheckbox as C, TuCheckboxGroup as b } from "./src/checkbox/index.mjs";
import { TuConfigProvider as D } from "./src/config-provider/index.mjs";
import { TuCollapse as k, TuCollapseItem as I } from "./src/collapse/index.mjs";
import { TuCollapseTransition as v } from "./src/collapse-transition/index.mjs";
import { TuCol as G } from "./src/col/index.mjs";
import { TuCard as A } from "./src/card/index.mjs";
import { TuDivider as O } from "./src/divider/index.mjs";
import { TuDrawer as L, TuDrawerBox as N } from "./src/drawer/index.mjs";
import { TuDropdown as E, TuDropdownButton as F, TuDropdownGroup as V, TuDropdownItem as $, TuDropdownSubmenu as j } from "./src/dropdown/index.mjs";
import { TuEmpty as H } from "./src/empty/index.mjs";
import { TuForm as K } from "./src/form/index.mjs";
import { TuInput as U } from "./src/input/index.mjs";
import { TuInputNumber as X } from "./src/input-number/index.mjs";
import { TuIcon as Z } from "./src/icon/index.mjs";
import { TuModal as oo, TuModalBox as ro } from "./src/modal/index.mjs";
import { TuMessage as to } from "./src/message/index.mjs";
import { TuNotification as To } from "./src/notification/index.mjs";
import { TuOnlyClient as mo } from "./src/only-client/index.mjs";
import { TuPagination as fo } from "./src/pagination/index.mjs";
import { TuPopconfirm as no } from "./src/popconfirm/index.mjs";
import { TuPopover as lo } from "./src/popover/index.mjs";
import { TuProgress as co } from "./src/progress/index.mjs";
import { TuRadio as wo, TuRadioGroup as Co } from "./src/radio/index.mjs";
import { TuResizeObserver as go } from "./src/resize-observer/index.mjs";
import { TuRow as Bo } from "./src/row/index.mjs";
import { TuScrollbar as Io } from "./src/scrollbar/index.mjs";
import { TuSelect as vo, TuSelectOption as ho } from "./src/select/index.mjs";
import { TuSkeleton as Ro, TuSkeletonLine as Ao, TuSkeletonShape as Mo } from "./src/skeleton/index.mjs";
import { TuSlider as yo } from "./src/slider/index.mjs";
import { TuSpace as No } from "./src/space/index.mjs";
import { TuSpin as Eo } from "./src/spin/index.mjs";
import { TuSwitch as Vo } from "./src/switch/index.mjs";
import { TuTabPane as jo, TuTabs as qo } from "./src/tabs/index.mjs";
import { TuTag as Jo } from "./src/tag/index.mjs";
import { TuTextarea as Qo } from "./src/textarea/index.mjs";
import { TuTooltip as Wo } from "./src/tooltip/index.mjs";
import { TuTransition as Yo } from "./src/transition/index.mjs";
import { TuTrigger as _o } from "./src/trigger/index.mjs";
import { TuVirtualList as rr } from "./src/virtual-list/index.mjs";
import { TuTimeline as tr, TuTimelineItem as ur } from "./src/timeline/index.mjs";
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
  a as TuBackTop,
  s as TuBadge,
  c as TuButton,
  S as TuButtonGroup,
  A as TuCard,
  C as TuCheckbox,
  b as TuCheckboxGroup,
  G as TuCol,
  k as TuCollapse,
  I as TuCollapseItem,
  v as TuCollapseTransition,
  D as TuConfigProvider,
  O as TuDivider,
  L as TuDrawer,
  N as TuDrawerBox,
  E as TuDropdown,
  F as TuDropdownButton,
  V as TuDropdownGroup,
  $ as TuDropdownItem,
  j as TuDropdownSubmenu,
  H as TuEmpty,
  K as TuForm,
  Z as TuIcon,
  U as TuInput,
  X as TuInputNumber,
  to as TuMessage,
  oo as TuModal,
  ro as TuModalBox,
  To as TuNotification,
  mo as TuOnlyClient,
  fo as TuPagination,
  no as TuPopconfirm,
  lo as TuPopover,
  co as TuProgress,
  wo as TuRadio,
  Co as TuRadioGroup,
  go as TuResizeObserver,
  Bo as TuRow,
  Io as TuScrollbar,
  vo as TuSelect,
  ho as TuSelectOption,
  Ro as TuSkeleton,
  Ao as TuSkeletonLine,
  Mo as TuSkeletonShape,
  yo as TuSlider,
  No as TuSpace,
  Eo as TuSpin,
  Vo as TuSwitch,
  jo as TuTabPane,
  qo as TuTabs,
  Jo as TuTag,
  Qo as TuTextarea,
  tr as TuTimeline,
  ur as TuTimelineItem,
  Wo as TuTooltip,
  Yo as TuTransition,
  _o as TuTrigger,
  rr as TuVirtualList,
  t as default
};
