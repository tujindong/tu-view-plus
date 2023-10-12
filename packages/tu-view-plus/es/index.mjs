import * as o from "./src/index.mjs";
import { TuAffix as T } from "./src/affix/index.mjs";
import { TuAlert as f } from "./src/alert/index.mjs";
import { TuBackTop as i } from "./src/back-top/index.mjs";
import { TuBadge as a } from "./src/badge/index.mjs";
import { TuButton as d, TuButtonGroup as s } from "./src/button/index.mjs";
import { TuCheckbox as w, TuCheckboxGroup as b } from "./src/checkbox/index.mjs";
import { TuConfigProvider as D } from "./src/config-provider/index.mjs";
import { TuCollapseTransition as C } from "./src/collapse-transition/index.mjs";
import { TuCol as P } from "./src/col/index.mjs";
import { TuCard as G } from "./src/card/index.mjs";
import { TuDivider as R } from "./src/divider/index.mjs";
import { TuDrawer as k, TuDrawerBox as M } from "./src/drawer/index.mjs";
import { TuDropdown as y, TuDropdownButton as A, TuDropdownGroup as N, TuDropdownItem as z, TuDropdownSubmenu as E } from "./src/dropdown/index.mjs";
import { TuEmpty as L } from "./src/empty/index.mjs";
import { TuForm as $ } from "./src/form/index.mjs";
import { TuInput as q } from "./src/input/index.mjs";
import { TuInputNumber as J } from "./src/input-number/index.mjs";
import { TuIcon as Q } from "./src/icon/index.mjs";
import { TuModal as W, TuModalBox as X } from "./src/modal/index.mjs";
import { TuMessage as Z } from "./src/message/index.mjs";
import { TuNotification as oo } from "./src/notification/index.mjs";
import { TuOnlyClient as eo } from "./src/only-client/index.mjs";
import { TuPagination as uo } from "./src/pagination/index.mjs";
import { TuPopconfirm as To } from "./src/popconfirm/index.mjs";
import { TuPopover as fo } from "./src/popover/index.mjs";
import { TuProgress as io } from "./src/progress/index.mjs";
import { TuRadio as ao, TuRadioGroup as lo } from "./src/radio/index.mjs";
import { TuResizeObserver as co } from "./src/resize-observer/index.mjs";
import { TuRow as bo } from "./src/row/index.mjs";
import { TuScrollbar as Do } from "./src/scrollbar/index.mjs";
import { TuSelect as Co, TuSelectOption as So } from "./src/select/index.mjs";
import { TuSlider as vo } from "./src/slider/index.mjs";
import { TuSpin as Io } from "./src/spin/index.mjs";
import { TuSwitch as ho } from "./src/switch/index.mjs";
import { TuTabPane as Mo, TuTabs as Oo } from "./src/tabs/index.mjs";
import { TuTag as Ao } from "./src/tag/index.mjs";
import { TuTextarea as zo } from "./src/textarea/index.mjs";
import { TuTooltip as Fo } from "./src/tooltip/index.mjs";
import { TuTransition as Vo } from "./src/transition/index.mjs";
import { TuTrigger as jo } from "./src/trigger/index.mjs";
import { TuVirtualList as Ho } from "./src/virtual-list/index.mjs";
const t = {
  install: (r) => {
    for (let e in o)
      r.use(o[e]);
  }
};
export {
  T as TuAffix,
  f as TuAlert,
  i as TuBackTop,
  a as TuBadge,
  d as TuButton,
  s as TuButtonGroup,
  G as TuCard,
  w as TuCheckbox,
  b as TuCheckboxGroup,
  P as TuCol,
  C as TuCollapseTransition,
  D as TuConfigProvider,
  R as TuDivider,
  k as TuDrawer,
  M as TuDrawerBox,
  y as TuDropdown,
  A as TuDropdownButton,
  N as TuDropdownGroup,
  z as TuDropdownItem,
  E as TuDropdownSubmenu,
  L as TuEmpty,
  $ as TuForm,
  Q as TuIcon,
  q as TuInput,
  J as TuInputNumber,
  Z as TuMessage,
  W as TuModal,
  X as TuModalBox,
  oo as TuNotification,
  eo as TuOnlyClient,
  uo as TuPagination,
  To as TuPopconfirm,
  fo as TuPopover,
  io as TuProgress,
  ao as TuRadio,
  lo as TuRadioGroup,
  co as TuResizeObserver,
  bo as TuRow,
  Do as TuScrollbar,
  Co as TuSelect,
  So as TuSelectOption,
  vo as TuSlider,
  Io as TuSpin,
  ho as TuSwitch,
  Mo as TuTabPane,
  Oo as TuTabs,
  Ao as TuTag,
  zo as TuTextarea,
  Fo as TuTooltip,
  Vo as TuTransition,
  jo as TuTrigger,
  Ho as TuVirtualList,
  t as default
};
