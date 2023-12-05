import * as o from "./src/index.mjs";
import { TuAffix as T } from "./src/affix/index.mjs";
import { TuAlert as x } from "./src/alert/index.mjs";
import { TuAvatar as i, TuAvatarGroup as n } from "./src/avatar/index.mjs";
import { TuBackTop as l } from "./src/back-top/index.mjs";
import { TuBadge as d } from "./src/badge/index.mjs";
import { TuButton as S, TuButtonGroup as w } from "./src/button/index.mjs";
import { TuCheckbox as b, TuCheckboxGroup as g } from "./src/checkbox/index.mjs";
import { TuConfigProvider as I } from "./src/config-provider/index.mjs";
import { TuCollapse as k, TuCollapseItem as v } from "./src/collapse/index.mjs";
import { TuCollapseTransition as G } from "./src/collapse-transition/index.mjs";
import { TuCol as A } from "./src/col/index.mjs";
import { TuCard as L } from "./src/card/index.mjs";
import { TuDivider as O } from "./src/divider/index.mjs";
import { TuDrawer as N, TuDrawerBox as V } from "./src/drawer/index.mjs";
import { TuDescriptions as E, TuDescriptionsItem as F } from "./src/descriptions/index.mjs";
import { TuDropdown as j, TuDropdownButton as q, TuDropdownGroup as H, TuDropdownItem as J, TuDropdownSubmenu as K } from "./src/dropdown/index.mjs";
import { TuEmpty as U } from "./src/empty/index.mjs";
import { TuForm as X } from "./src/form/index.mjs";
import { TuInput as Z } from "./src/input/index.mjs";
import { TuInputLabel as oo } from "./src/input-label/index.mjs";
import { TuInputNumber as eo } from "./src/input-number/index.mjs";
import { TuInputTag as uo } from "./src/input-tag/index.mjs";
import { TuIcon as To } from "./src/icon/index.mjs";
import { TuModal as xo, TuModalBox as fo } from "./src/modal/index.mjs";
import { TuMessage as no } from "./src/message/index.mjs";
import { TuNotification as lo } from "./src/notification/index.mjs";
import { TuOnlyClient as co } from "./src/only-client/index.mjs";
import { TuPagination as wo } from "./src/pagination/index.mjs";
import { TuPopconfirm as bo } from "./src/popconfirm/index.mjs";
import { TuPopover as Co } from "./src/popover/index.mjs";
import { TuProgress as Bo } from "./src/progress/index.mjs";
import { TuRadio as vo, TuRadioGroup as Po } from "./src/radio/index.mjs";
import { TuResizeObserver as ho } from "./src/resize-observer/index.mjs";
import { TuRow as Ro } from "./src/row/index.mjs";
import { TuScrollbar as Mo } from "./src/scrollbar/index.mjs";
import { TuSelect as yo, TuSelectOption as No } from "./src/select/index.mjs";
import { TuSelectView as zo } from "./src/select-view/index.mjs";
import { TuSkeleton as Fo, TuSkeletonLine as $o, TuSkeletonShape as jo } from "./src/skeleton/index.mjs";
import { TuSlider as Ho } from "./src/slider/index.mjs";
import { TuSpace as Ko } from "./src/space/index.mjs";
import { TuSpin as Uo } from "./src/spin/index.mjs";
import { TuSwitch as Xo } from "./src/switch/index.mjs";
import { TuTabPane as Zo, TuTabs as _o } from "./src/tabs/index.mjs";
import { TuTag as rr } from "./src/tag/index.mjs";
import { TuTextarea as tr } from "./src/textarea/index.mjs";
import { TuTooltip as pr } from "./src/tooltip/index.mjs";
import { TuTransition as mr } from "./src/transition/index.mjs";
import { TuTrigger as fr } from "./src/trigger/index.mjs";
import { TuVirtualList as nr } from "./src/virtual-list/index.mjs";
import { TuTimeline as lr, TuTimelineItem as sr } from "./src/timeline/index.mjs";
const t = {
  install: (r) => {
    for (let e in o)
      r.use(o[e]);
  }
};
export {
  T as TuAffix,
  x as TuAlert,
  i as TuAvatar,
  n as TuAvatarGroup,
  l as TuBackTop,
  d as TuBadge,
  S as TuButton,
  w as TuButtonGroup,
  L as TuCard,
  b as TuCheckbox,
  g as TuCheckboxGroup,
  A as TuCol,
  k as TuCollapse,
  v as TuCollapseItem,
  G as TuCollapseTransition,
  I as TuConfigProvider,
  E as TuDescriptions,
  F as TuDescriptionsItem,
  O as TuDivider,
  N as TuDrawer,
  V as TuDrawerBox,
  j as TuDropdown,
  q as TuDropdownButton,
  H as TuDropdownGroup,
  J as TuDropdownItem,
  K as TuDropdownSubmenu,
  U as TuEmpty,
  X as TuForm,
  To as TuIcon,
  Z as TuInput,
  oo as TuInputLabel,
  eo as TuInputNumber,
  uo as TuInputTag,
  no as TuMessage,
  xo as TuModal,
  fo as TuModalBox,
  lo as TuNotification,
  co as TuOnlyClient,
  wo as TuPagination,
  bo as TuPopconfirm,
  Co as TuPopover,
  Bo as TuProgress,
  vo as TuRadio,
  Po as TuRadioGroup,
  ho as TuResizeObserver,
  Ro as TuRow,
  Mo as TuScrollbar,
  yo as TuSelect,
  No as TuSelectOption,
  zo as TuSelectView,
  Fo as TuSkeleton,
  $o as TuSkeletonLine,
  jo as TuSkeletonShape,
  Ho as TuSlider,
  Ko as TuSpace,
  Uo as TuSpin,
  Xo as TuSwitch,
  Zo as TuTabPane,
  _o as TuTabs,
  rr as TuTag,
  tr as TuTextarea,
  lr as TuTimeline,
  sr as TuTimelineItem,
  pr as TuTooltip,
  mr as TuTransition,
  fr as TuTrigger,
  nr as TuVirtualList,
  t as default
};
