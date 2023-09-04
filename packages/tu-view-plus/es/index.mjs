import * as o from "./src/index.mjs";
import { TuSpin as T } from "./src/spin/index.mjs";
import { TuButton as f, TuButtonGroup as m } from "./src/button/index.mjs";
import { TuBadge as a } from "./src/badge/index.mjs";
import { TuCheckbox as l, TuCheckboxGroup as s } from "./src/checkbox/index.mjs";
import { TuConfigProvider as c } from "./src/config-provider/index.mjs";
import { TuCollapseTransition as g } from "./src/collapse-transition/index.mjs";
import { TuCol as b } from "./src/col/index.mjs";
import { TuCard as R } from "./src/card/index.mjs";
import { TuDrawer as v } from "./src/drawer/index.mjs";
import { TuForm as G } from "./src/form/index.mjs";
import { TuInput as M } from "./src/input/index.mjs";
import { TuInputNumber as k } from "./src/input-number/index.mjs";
import { TuIcon as y } from "./src/icon/index.mjs";
import { TuModal as D, TuModalBox as F } from "./src/modal/index.mjs";
import { TuMessage as N } from "./src/message/index.mjs";
import { TuOnlyClient as $ } from "./src/only-client/index.mjs";
import { TuPopover as q } from "./src/popover/index.mjs";
import { TuRadio as E, TuRadioGroup as H } from "./src/radio/index.mjs";
import { TuResizeObserver as K } from "./src/resize-observer/index.mjs";
import { TuRow as U } from "./src/row/index.mjs";
import { TuScrollbar as X } from "./src/scrollbar/index.mjs";
import { TuSelect as Z, TuSelectOption as _ } from "./src/select/index.mjs";
import { TuSlider as ro } from "./src/slider/index.mjs";
import { TuSwitch as to } from "./src/switch/index.mjs";
import { TuTag as po } from "./src/tag/index.mjs";
import { TuTextarea as xo } from "./src/textarea/index.mjs";
import { TuTooltip as mo } from "./src/tooltip/index.mjs";
import { TuTransition as ao } from "./src/transition/index.mjs";
import { TuTrigger as lo } from "./src/trigger/index.mjs";
import { TuVirtualList as co } from "./src/virtual-list/index.mjs";
const t = {
  install: (r) => {
    for (let e in o)
      r.use(o[e]);
  }
};
export {
  a as TuBadge,
  f as TuButton,
  m as TuButtonGroup,
  R as TuCard,
  l as TuCheckbox,
  s as TuCheckboxGroup,
  b as TuCol,
  g as TuCollapseTransition,
  c as TuConfigProvider,
  v as TuDrawer,
  G as TuForm,
  y as TuIcon,
  M as TuInput,
  k as TuInputNumber,
  N as TuMessage,
  D as TuModal,
  F as TuModalBox,
  $ as TuOnlyClient,
  q as TuPopover,
  E as TuRadio,
  H as TuRadioGroup,
  K as TuResizeObserver,
  U as TuRow,
  X as TuScrollbar,
  Z as TuSelect,
  _ as TuSelectOption,
  ro as TuSlider,
  T as TuSpin,
  to as TuSwitch,
  po as TuTag,
  xo as TuTextarea,
  mo as TuTooltip,
  ao as TuTransition,
  lo as TuTrigger,
  co as TuVirtualList,
  t as default
};
