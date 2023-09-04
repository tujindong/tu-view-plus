import * as o from "./src/index.mjs";
import { TuSpin as T } from "./src/spin/index.mjs";
import { TuButton as f, TuButtonGroup as m } from "./src/button/index.mjs";
import { TuBadge as a } from "./src/badge/index.mjs";
import { TuCheckbox as l, TuCheckboxGroup as s } from "./src/checkbox/index.mjs";
import { TuConfigProvider as c } from "./src/config-provider/index.mjs";
import { TuCollapseTransition as g } from "./src/collapse-transition/index.mjs";
import { TuCol as b } from "./src/col/index.mjs";
import { TuCard as R } from "./src/card/index.mjs";
import { TuForm as v } from "./src/form/index.mjs";
import { TuInput as I } from "./src/input/index.mjs";
import { TuInputNumber as O } from "./src/input-number/index.mjs";
import { TuIcon as w } from "./src/icon/index.mjs";
import { TuModal as y, TuModalBox as z } from "./src/modal/index.mjs";
import { TuMessage as L } from "./src/message/index.mjs";
import { TuOnlyClient as V } from "./src/only-client/index.mjs";
import { TuPopover as j } from "./src/popover/index.mjs";
import { TuRadio as A, TuRadioGroup as D } from "./src/radio/index.mjs";
import { TuResizeObserver as H } from "./src/resize-observer/index.mjs";
import { TuRow as K } from "./src/row/index.mjs";
import { TuScrollbar as U } from "./src/scrollbar/index.mjs";
import { TuSelect as X, TuSelectOption as Y } from "./src/select/index.mjs";
import { TuSlider as _ } from "./src/slider/index.mjs";
import { TuSwitch as ro } from "./src/switch/index.mjs";
import { TuTag as to } from "./src/tag/index.mjs";
import { TuTextarea as po } from "./src/textarea/index.mjs";
import { TuTooltip as xo } from "./src/tooltip/index.mjs";
import { TuTransition as mo } from "./src/transition/index.mjs";
import { TuTrigger as ao } from "./src/trigger/index.mjs";
import { TuVirtualList as lo } from "./src/virtual-list/index.mjs";
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
  v as TuForm,
  w as TuIcon,
  I as TuInput,
  O as TuInputNumber,
  L as TuMessage,
  y as TuModal,
  z as TuModalBox,
  V as TuOnlyClient,
  j as TuPopover,
  A as TuRadio,
  D as TuRadioGroup,
  H as TuResizeObserver,
  K as TuRow,
  U as TuScrollbar,
  X as TuSelect,
  Y as TuSelectOption,
  _ as TuSlider,
  T as TuSpin,
  ro as TuSwitch,
  to as TuTag,
  po as TuTextarea,
  xo as TuTooltip,
  mo as TuTransition,
  ao as TuTrigger,
  lo as TuVirtualList,
  t as default
};
